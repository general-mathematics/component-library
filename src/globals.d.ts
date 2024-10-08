// src/globals.d.ts

// Declare CSS Modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Extend the global Window interface to include dataLayer
export {};

declare global {
  interface Window {
    dataLayer: any[];
  }
}
