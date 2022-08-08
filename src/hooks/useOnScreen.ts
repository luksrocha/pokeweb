import { useState, useEffect, useMemo } from 'react';

// THE USEONSCREEN HOOK CHECK IF THE REFERENCED ELEMENT IS ON SCREEN AND RUN RETURN TRUE IF IT IS
const useOnScreen = (element: any) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting)), []);

  useEffect(() => {
    observer.observe(element.current);

    return () => {
      observer.disconnect();
    };
  }, [element, observer]);

  return isIntersecting;
};

export { useOnScreen };
