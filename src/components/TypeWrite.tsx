import { useState, useEffect } from 'react';

type TypeWritingProps = {
  text: string;
  delay: number;
};

const TypeWrite: React.FC<TypeWritingProps> = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCursorVisible((prev) => !prev);
    }, delay * 2);

    return () => clearTimeout(timeout);
  }, [isCursorVisible, delay]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  // words includes developer, gallery, contact are true
  const isFrontendDisplayed =
    currentText.includes('Developer.') ||
    currentText.includes('About.') ||
    currentText.includes('Gallery.') ||
    currentText.includes('Contact.');

  // isFrontendDisplayed false
  const showCursor = !isFrontendDisplayed;

  return (
    <span className='custom-text text-6xl font-bold sm:text-[15vw]'>
      {currentText}
      <span className={showCursor ? 'cursor' : ''}>
        {isCursorVisible ? '|' : ''}
      </span>
    </span>
  );
};

export default TypeWrite;
