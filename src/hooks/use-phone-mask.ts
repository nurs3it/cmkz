"use client";

import { useCallback } from "react";

export function usePhoneMask() {
  const formatPhoneNumber = useCallback((value: string) => {
    const numbers = value.replace(/\D/g, "");
    const length = numbers.length;

    if (length === 0) return "";
    if (length <= 3) return `+7 (${numbers}`;
    if (length <= 6) return `+7 (${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    if (length <= 8)
      return `+7 (${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
    return `+7 (${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 8)}-${numbers.slice(8, 10)}`;
  }, []);

  const unformatPhoneNumber = useCallback((value: string) => {
    return value.replace(/\D/g, "");
  }, []);

  return {
    formatPhoneNumber,
    unformatPhoneNumber,
  };
}
