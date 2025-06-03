import { isPlatformBrowser } from '@angular/common';
import { inject, InjectionToken, PLATFORM_ID } from '@angular/core';

export const STORAGE_TOKEN = new InjectionToken<Storage>('StorageToken');

export function storageFactory(platform = inject(PLATFORM_ID)): Storage {
  const isBrowser = isPlatformBrowser(platform);
  if (isBrowser) {
    return localStorage;
  }
  return {
    length: 0,
    getItem: () => null,
    key: () => null,
    setItem: () => null,
    removeItem: () => null,
    clear: () => null,
  };
}
