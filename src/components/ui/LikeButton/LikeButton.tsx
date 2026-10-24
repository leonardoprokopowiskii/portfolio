import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import styles from './LikeButton.module.css';

interface FloatingHeart {
  id: number;
  x: number;
  rotation: number;
}

const STORAGE_KEY_HAS_LIKED = 'portfolio_has_liked';
const STORAGE_KEY_CACHED_LIKES = 'portfolio_cached_likes';
const STORAGE_KEY_INVITE_DISMISSED = 'portfolio_like_invite_dismissed';
const API_BASE = 'https://abacus.jasoncameron.dev';
const API_NAMESPACE = 'prokopowiski-dev';
const API_KEY = 'likes';

export function LikeButton() {
  const { lang } = useLanguage();
  const [likes, setLikes] = useState<number>(() => {
    try {
      const cached = localStorage.getItem(STORAGE_KEY_CACHED_LIKES);
      if (cached !== null) return parseInt(cached, 10) || 0;
    } catch {
      // ignore
    }
    return 0;
  });

  const [hasLiked, setHasLiked] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_HAS_LIKED) === 'true';
    } catch {
      return false;
    }
  });

  const [bouncing, setBouncing] = useState(false);
  const [showInvite, setShowInvite] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeart[]>([]);
  const nextId = useRef(0);

  // Load real global like count & trigger invite bubble
  useEffect(() => {
    let timer: number | undefined;
    let autoHideTimer: number | undefined;

    // Friendly invitation speech bubble after 3s if user hasn't liked yet
    if (!hasLiked) {
      let isDismissed = false;
      try {
        isDismissed = sessionStorage.getItem(STORAGE_KEY_INVITE_DISMISSED) === 'true';
      } catch {
        // ignore
      }

      if (!isDismissed) {
        timer = window.setTimeout(() => {
          setShowInvite(true);
        }, 3000);

        // Auto-fade bubble after 6s of display (3s + 6s = 9s total)
        autoHideTimer = window.setTimeout(() => {
          setShowInvite(false);
        }, 9000);
      }
    }

    // ALWAYS fetch real global likes from cloud API for EVERY visitor
    let isMounted = true;
    fetch(`${API_BASE}/get/${API_NAMESPACE}/${API_KEY}`)
      .then((res) => {
        if (res.status === 404) {
          return { value: 0 };
        }
        if (res.ok) {
          return res.json();
        }
        throw new Error('Failed to fetch likes');
      })
      .then((data) => {
        if (isMounted && typeof data.value === 'number') {
          setLikes(data.value);
          try {
            localStorage.setItem(STORAGE_KEY_CACHED_LIKES, String(data.value));
          } catch {
            // ignore
          }
        }
      })
      .catch(() => {
        // Retain cached count gracefully
      });

    return () => {
      isMounted = false;
      if (timer) window.clearTimeout(timer);
      if (autoHideTimer) window.clearTimeout(autoHideTimer);
    };
  }, [hasLiked]);

  const dismissInvite = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setShowInvite(false);
    try {
      sessionStorage.setItem(STORAGE_KEY_INVITE_DISMISSED, 'true');
    } catch {
      // ignore
    }
  };

  const handleLike = async () => {
    dismissInvite();

    if (hasLiked) {
      // 1 like per person: already liked, trigger gentle feedback wobble
      setBouncing(true);
      window.setTimeout(() => setBouncing(false), 300);
      return;
    }

    // 1 like per person: lock immediately
    setHasLiked(true);
    const optimisticNext = likes + 1;
    setLikes(optimisticNext);
    setBouncing(true);

    try {
      localStorage.setItem(STORAGE_KEY_HAS_LIKED, 'true');
      localStorage.setItem(STORAGE_KEY_CACHED_LIKES, String(optimisticNext));
    } catch {
      // ignore
    }

    // Mobile haptic feedback
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(15);
      } catch {
        // ignore
      }
    }

    // Spawn floating heart particles
    const heartId = nextId.current++;
    const randomOffset = (Math.random() - 0.5) * 36;
    const randomRot = (Math.random() - 0.5) * 30;

    setFloatingHearts((prev) => [
      ...prev.slice(-6),
      { id: heartId, x: randomOffset, rotation: randomRot },
    ]);

    window.setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== heartId));
    }, 1100);

    window.setTimeout(() => {
      setBouncing(false);
    }, 300);

    // Call real cloud API to register unique like globally for everyone
    try {
      const res = await fetch(`${API_BASE}/hit/${API_NAMESPACE}/${API_KEY}`);
      if (res.ok) {
        const data = await res.json();
        if (typeof data.value === 'number') {
          setLikes(data.value);
          try {
            localStorage.setItem(STORAGE_KEY_CACHED_LIKES, String(data.value));
          } catch {
            // ignore
          }
        }
      }
    } catch {
      // Retain optimistic count
    }
  };

  const tooltipText =
    lang === 'pt'
      ? hasLiked
        ? 'Você já curtiu! Obrigado pelo carinho ❤️'
        : 'Gostou do portfólio? Deixe sua curtida!'
      : hasLiked
      ? 'You already liked! Thanks for your support ❤️'
      : 'Enjoyed the portfolio? Leave a like!';

  return (
    <div className={styles.likeWidget}>
      {/* Friendly Speech Bubble invitation */}
      {showInvite && !hasLiked && (
        <div className={styles.speechBubble} role="tooltip">
          <span className={styles.bubbleText} onClick={handleLike}>
            {lang === 'pt' ? 'Gostou do portfólio? Deixe seu like!' : 'Enjoying the portfolio? Leave a like!'} ❤️
          </span>
          <button
            type="button"
            className={styles.closeBubbleBtn}
            onClick={dismissInvite}
            aria-label={lang === 'pt' ? 'Fechar dica' : 'Dismiss tip'}
          >
            ✕
          </button>
        </div>
      )}

      {/* Floating particles container */}
      <div className={styles.particlesWrap} aria-hidden="true">
        {floatingHearts.map((heart) => (
          <span
            key={heart.id}
            className={styles.floatingHeart}
            style={{
              transform: `translateX(${heart.x}px) rotate(${heart.rotation}deg)`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <button
        type="button"
        className={`${styles.likeBtn} ${hasLiked ? styles.liked : ''} ${
          bouncing ? styles.bounce : ''
        }`}
        onClick={handleLike}
        aria-label={
          lang === 'pt'
            ? `Curtir portfólio (${likes} pessoas curtiram)`
            : `Like portfolio (${likes} people liked)`
        }
        title={tooltipText}
      >
        <span className={styles.heartIcon} aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill={hasLiked ? 'url(#heartGradFilled)' : 'none'}
            stroke={hasLiked ? 'none' : 'currentColor'}
            strokeWidth="2"
          >
            <defs>
              <linearGradient id="heartGradFilled" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF3366" />
                <stop offset="100%" stopColor="#FF5E62" />
              </linearGradient>
            </defs>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </span>
        <span className={styles.label}>
          {hasLiked
            ? lang === 'pt'
              ? 'Curtiu!'
              : 'Liked!'
            : lang === 'pt'
            ? 'Curtir'
            : 'Like'}
        </span>
        <span className={styles.sep} aria-hidden="true">·</span>
        <span className={styles.count}>{likes}</span>
      </button>
    </div>
  );
}
