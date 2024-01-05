// InfiniteTextAnimation.jsx
import React, { useState, useEffect } from 'react';

const InfiniteTextAnimation = ({ words, speed }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    let index = 0;

    const typingEffect = () => {
      if (index < words.length) {
        const currentWord = words[index];
        setText(currentWord.substring(0, text.length + 1));
      } else {
        setText('');
        index = 0;
      }
    };

    const typingInterval = setInterval(typingEffect, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, words, speed]);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default InfiniteTextAnimation;
