// Next.js instrumentation file — runs once on server startup.
// Polyfills localStorage for server-side rendering contexts where
// the Electron environment may have injected a broken localStorage.
export async function register() {
  if (typeof localStorage === 'undefined' || typeof localStorage.getItem !== 'function') {
    // Provide a no-op localStorage so SSR doesn't throw
    const noopStorage = {
      getItem: (_key: string) => null,
      setItem: (_key: string, _value: string) => {},
      removeItem: (_key: string) => {},
      clear: () => {},
      length: 0,
      key: (_index: number) => null,
    }
    Object.defineProperty(globalThis, 'localStorage', {
      value: noopStorage,
      writable: true,
      configurable: true,
    })
  }
}
