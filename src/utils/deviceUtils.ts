/**
 * Device detection utilities
 */

// User agent patterns for mobile devices
const MOBILE_USER_AGENTS = [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i,
  /Mobile/i,
  /Tablet/i
];

// Screen size breakpoints
const MOBILE_BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200
};

/**
 * Check if the current device is mobile based on user agent
 * @returns Whether the device is mobile
 */
export const isMobileByUserAgent = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  return MOBILE_USER_AGENTS.some(pattern => pattern.test(userAgent));
};

/**
 * Check if the current device is mobile based on screen width
 * @returns Whether the device is mobile
 */
export const isMobileByScreenSize = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return window.innerWidth <= MOBILE_BREAKPOINTS.mobile;
};

/**
 * Check if the current device is mobile (combines user agent and screen size)
 * @returns Whether the device is mobile
 */
export const isMobile = (): boolean => {
  return isMobileByUserAgent() || isMobileByScreenSize();
};