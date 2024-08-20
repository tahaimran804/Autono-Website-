import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollWithOffset = (offset) => {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.hash.replace('#', '');
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [location, offset]);
};

export default useScrollWithOffset;
