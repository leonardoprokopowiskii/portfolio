export function triggerConfetti(originEl?: HTMLElement | null) {
  if (typeof window === 'undefined') return;

  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.inset = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    canvas.remove();
    return;
  }

  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  ctx.scale(dpr, dpr);

  let startX = window.innerWidth / 2;
  let startY = window.innerHeight * 0.7;

  if (originEl) {
    const rect = originEl.getBoundingClientRect();
    startX = rect.left + rect.width / 2;
    startY = rect.top + rect.height / 2;
  }

  const colors = [
    '#22D3EE',
    '#38BDF8',
    '#2563EB',
    '#1D4ED8',
    '#10B981',
    '#F59E0B',
    '#FF3366',
    '#FFD43B',
    '#FFFFFF',
  ];
  const particleCount = 95;
  const particles: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    rotation: number;
    vRot: number;
    opacity: number;
    isCircle: boolean;
  }> = [];

  for (let i = 0; i < particleCount; i++) {
    // Fan outward and upward from -165deg to -15deg
    const angle = (Math.PI * (Math.random() * 0.85 + 0.075)) + Math.PI;
    const speed = Math.random() * 14 + 7;
    particles.push({
      x: startX + (Math.random() - 0.5) * 24,
      y: startY + (Math.random() - 0.5) * 12,
      vx: Math.cos(angle) * speed * 1.15 + (Math.random() - 0.5) * 3,
      vy: Math.sin(angle) * speed - (Math.random() * 5 + 4),
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 16,
      opacity: 1,
      isCircle: Math.random() > 0.65,
    });
  }

  const startTime = Date.now();

  function update() {
    const elapsed = Date.now() - startTime;
    if (elapsed > 2800 || !ctx) {
      canvas.remove();
      return;
    }

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.36; // gravity
      p.vx *= 0.982; // air friction
      p.rotation += p.vRot;
      if (elapsed > 1800) {
        p.opacity = Math.max(0, 1 - (elapsed - 1800) / 1000);
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;

      if (p.isCircle) {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      }

      ctx.restore();
    }

    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}
