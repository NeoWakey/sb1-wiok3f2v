import { useEffect, useState } from 'react';

const codeLines = [
  'function initAI() {',
  '  const model = loadModel();',
  '  const config = {',
  '    accuracy: 0.95'
];

export default function DevelopmentAnimation() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      // Animation complete, restart after delay
      const timeout = setTimeout(() => {
        setVisibleLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (currentChar >= codeLines[currentLine].length) {
      // Line complete, move to next line
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 500);
      return () => clearTimeout(timeout);
    }

    // Type next character
    const timeout = setTimeout(() => {
      setVisibleLines(prev => {
        const newLines = [...prev];
        if (currentChar === 0) {
          newLines.push('');
        }
        newLines[currentLine] = codeLines[currentLine].slice(0, currentChar + 1);
        return newLines;
      });
      setCurrentChar(prev => prev + 1);
    }, 50);

    return () => clearTimeout(timeout);
  }, [currentLine, currentChar]);

  return (
    <div className="rounded-lg p-4 font-mono text-sm overflow-hidden border border-gray-800">
      {visibleLines.map((line, index) => (
        <div key={index} className="text-gray-300">
          {line}
          {index === currentLine && <span className="animate-pulse">|</span>}
        </div>
      ))}
    </div>
  );
}