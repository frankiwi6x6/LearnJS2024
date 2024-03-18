import { useState } from 'react'
import CodeEditor from './components/CodeEditor.jsx'
import 'tailwindcss/tailwind.css';
import Output from './components/Output.jsx';

function App() {

  return (

    <div className='bg-[#181818] text-[#cccccc]'>

      <div>
        <CodeEditor></CodeEditor>
      </div>

    </div>

  )
}

export default App
