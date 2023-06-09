import { useEffect, useState } from 'react';

interface SizeProps {
  width: number;
  height: number;
}

export const useWindowSize = (): SizeProps => {
  const [windowSize, setWindowSize] = useState<SizeProps>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.screen.width || window.innerWidth,
        height: window.screen.height || window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};