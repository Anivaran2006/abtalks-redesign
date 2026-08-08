import { useCallback } from 'react';

export function useConfetti() {
  const triggerConfetti = useCallback(() => {
    import("canvas-confetti").then((module) => {
      const confetti = module.default;
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#6366f1', '#a855f7', '#ec4899']
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#6366f1', '#a855f7', '#ec4899']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    });
  }, []);

  return { triggerConfetti };
}