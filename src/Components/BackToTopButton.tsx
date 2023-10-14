// Components/BackToTopButton.tsx
import React, { useEffect, useState } from 'react';
import styles from './BackToTopButton.module.css';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={styles.container}>
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className={styles.button}
          aria-label="Back to Top"
        >
          ☝🏾
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
