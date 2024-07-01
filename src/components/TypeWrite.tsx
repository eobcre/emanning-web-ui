import { useState, useEffect } from 'react';

type TypeWritingProps = {
  text: string[];
  delay: number;
};

const TypeWrite: React.FC<TypeWritingProps> = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < text.length) {
      if (currentIndex < text[lineIndex].length) {
        const typingTimeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + text[lineIndex][currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);

        return () => clearTimeout(typingTimeout);
      } else if (lineIndex < text.length - 1) {
        const lineTimeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + '\n');
          setCurrentIndex(0);
          setLineIndex((prevLineIndex) => prevLineIndex + 1);
        }, delay);

        return () => clearTimeout(lineTimeout);
      }
    }
  }, [currentIndex, lineIndex, delay, text]);

  return (
    <span className='custom-text text-6xl font-bold sm:text-[15vw] whitespace-pre-wrap'>
      {currentText}
      <span className={`cursor`}>|</span>
    </span>
  );
};

export default TypeWrite;
