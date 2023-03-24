import React, { useLayoutEffect, useCallback } from "react";

const useResize = (callback: () => void) => {
  const memoizedCallback = useCallback(() => callback(), [callback]);

  useLayoutEffect(() => {
    window.addEventListener("resize", memoizedCallback);
    callback();
    return () => window.removeEventListener("resize", memoizedCallback);
  }, [memoizedCallback]);
};

export default useResize;
