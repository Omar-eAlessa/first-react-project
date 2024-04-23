import React, { useEffect, useState } from 'react';
import figlet from 'figlet';
import './App.css';
import './output.css';




function App() {
  const [asciiArt, setAsciiArt] = useState<string>('');

  useEffect(() => {
    figlet.text(
      '100', 
      {
        font: 'Ghost', 
        horizontalLayout: 'default', 
        verticalLayout: 'default', 
        width: 80, 
        whitespaceBreak: true, 
      },
      (err: Error | null, data: string) => {
        if (err) {
          console.error('Figlet error:', err); 
          return;
        }

        setAsciiArt(data); 
      }
    );
  }, []); 


  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center"> 
      <h2 className="text-xl font-bold mb-4">ASCII Art: "A"</h2> 
      <pre className="whitespace-pre-wrap font-mono text-xs leading-snug bg-white p-4 border rounded-lg shadow"> 
        { asciiArt }  
      </pre>
    </div>
  );
}

export default App;