export const isBrowser = () => typeof document !== 'undefined' && document.body && typeof window !== 'undefined';

export const isMobile = () => isBrowser() && window.innerWidth < 960;
