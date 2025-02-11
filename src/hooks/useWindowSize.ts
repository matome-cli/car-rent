import { useEffect, useState } from "react";

export const useWindowHook = () => {
  type Size = {
    width: number;
    height: number;
  };

  const [size, setSize] = useState<Size>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function handleResize(): void {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  //   takes a function with delay and returns debounced function
  function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timerID: ReturnType<typeof setTimeout> | undefined;

    return (...args: Parameters<T>) => {
      if (timerID) {
        clearTimeout(timerID);
      }

      timerID = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  const debouncedHandleResize = debounce(handleResize, 100);

  useEffect(() => {
    window.addEventListener("resize", debouncedHandleResize);

    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, []);

  return size;
};
