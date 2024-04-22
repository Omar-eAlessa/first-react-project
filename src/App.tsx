import React from 'react';
import './App.css';
import './output.css';

function App() {
  return (
    <>
      <h1 className='text-center text-5xl font-mono font-bold py-5'>FAQ\Questions</h1>
      <div className='w-64 h-64 bg-indigo-600 rounded-md text-center my-6 mx-auto'>
        <h2 className="text-white text-xl pt-24">Frequently Asked Questions</h2>
        <div className=' rounded-lg text-white space-y-8 text-center mx-2 ml-20'>

          <div>
            new line
          </div>

          <div>
            New line 3
          </div>
           
           <div>
              New testing
           </div>

           <div>
            new new
           </div>

           <div>
            new 1212
           </div>

           <div>
            new branch
           </div>

           <div>git lenses</div>
          {/* <div className='bg-black w-24 h-7 rounded text-white items-center justify-center'>ss</div> */}
          {/* <div className='bg-black w-24 h-7 rounded text-white items-center justify-center'>ss</div> */}
        </div>
      </div>
    </> 
  );
} 

const questions = [
  {
    id: 1 , 
    title: 'Is this a good product?',
    info: 'Lorem ipsum dolor'
  },
  {
    id: 2 , 
    title: 'How much is it?',
    info: 'Lorem ipsum dolor'
  },
  {
    id: 3 , 
    title: 'Where is it?',
    info: 'Lorem ipsum dolor'
  },
]

export default App;
