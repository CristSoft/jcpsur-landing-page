'use client';

import { useEffect, useRef } from 'react';

export function MotionEffects() {
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('motion-ready');

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    );
    revealItems.forEach((item) => revealObserver.observe(item));

    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.site-header nav a'));
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.hash))
      .filter((section): section is HTMLElement => Boolean(section));
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const current = entries.find((entry) => entry.isIntersecting);
        if (!current) return;
        navLinks.forEach((link) => {
          const active = link.hash === `#${current.target.id}`;
          link.toggleAttribute('data-active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      },
      { rootMargin: '-25% 0px -64% 0px' },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    const hero = document.querySelector<HTMLElement>('.hero');
    const onHeroPointerMove = (event: PointerEvent) => {
      if (!hero || event.pointerType === 'touch') return;
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      hero.style.setProperty('--pointer-x', x.toFixed(3));
      hero.style.setProperty('--pointer-y', y.toFixed(3));
    };
    const resetHeroPointer = () => {
      hero?.style.setProperty('--pointer-x', '0');
      hero?.style.setProperty('--pointer-y', '0');
    };
    hero?.addEventListener('pointermove', onHeroPointerMove);
    hero?.addEventListener('pointerleave', resetHeroPointer);

    const interactiveCards = Array.from(
      document.querySelectorAll<HTMLElement>('[data-pointer-card]'),
    );
    const cardListeners = interactiveCards.map((card) => {
      const move = (event: PointerEvent) => {
        if (event.pointerType === 'touch') return;
        const bounds = card.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        card.style.setProperty('--spot-x', `${x}px`);
        card.style.setProperty('--spot-y', `${y}px`);
        card.style.setProperty('--tilt-x', `${((0.5 - y / bounds.height) * 3).toFixed(2)}deg`);
        card.style.setProperty('--tilt-y', `${((x / bounds.width - 0.5) * 3).toFixed(2)}deg`);
      };
      const leave = () => {
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      };
      card.addEventListener('pointermove', move);
      card.addEventListener('pointerleave', leave);
      return { card, move, leave };
    });

    let frame = 0;
    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      progressRef.current?.style.setProperty('--scroll-progress', String(progress));
      root.style.setProperty('--page-scroll', String(window.scrollY));
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };
    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      root.classList.remove('motion-ready');
      revealObserver.disconnect();
      sectionObserver.disconnect();
      hero?.removeEventListener('pointermove', onHeroPointerMove);
      hero?.removeEventListener('pointerleave', resetHeroPointer);
      cardListeners.forEach(({ card, move, leave }) => {
        card.removeEventListener('pointermove', move);
        card.removeEventListener('pointerleave', leave);
      });
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span ref={progressRef} />
    </div>
  );
}
