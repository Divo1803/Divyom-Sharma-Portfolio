
import gsap from 'gsap';

export const animateInFromBottom = (element: HTMLElement, delay: number = 0) => {
  gsap.fromTo(
    element,
    { 
      y: 50, 
      opacity: 0 
    },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8,
      delay,
      ease: "power3.out",
    }
  );
};

export const animateInFromLeft = (element: HTMLElement, delay: number = 0) => {
  gsap.fromTo(
    element,
    { 
      x: -50, 
      opacity: 0 
    },
    { 
      x: 0, 
      opacity: 1, 
      duration: 0.8,
      delay,
      ease: "power3.out",
    }
  );
};

export const animateInFromRight = (element: HTMLElement, delay: number = 0) => {
  gsap.fromTo(
    element,
    { 
      x: 50, 
      opacity: 0 
    },
    { 
      x: 0, 
      opacity: 1, 
      duration: 0.8,
      delay,
      ease: "power3.out",
    }
  );
};

export const animateFadeIn = (element: HTMLElement, delay: number = 0) => {
  gsap.fromTo(
    element,
    { 
      opacity: 0 
    },
    { 
      opacity: 1, 
      duration: 0.8,
      delay,
      ease: "power2.out",
    }
  );
};

export const parallaxEffect = (element: HTMLElement, scrollAmount: number) => {
  gsap.to(element, {
    y: scrollAmount,
    ease: "none",
  });
};
