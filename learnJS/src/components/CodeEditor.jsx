import { useRef, useState } from 'react'
import Output from './Output.jsx'
import LanguageSelector from './LanguageSelector.jsx'
import { Editor } from '@monaco-editor/react'
import CodeTester from './CodeTester.jsx'
import { challenges } from '../challenges.js'

const CodeEditor = () => {
    const editorRef = useRef()
    const [value, setValue] = useState('')
    const [challengeSelected, setChallengeSelected] = useState(null)
    const [language, setLanguage] = useState('javascript')

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    }

    const onSelect = (language) => {
        setLanguage(language)
    }
    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <LanguageSelector language={language} onSelect={onSelect} />
                    <Editor
                        height="75vh"
                        theme='vs-dark'
                        language={language}
                        defaultValue="// escriba su código aquí"
                        onMount={onMount}
                        value={value}
                        onChange={(value) => setValue(value)} />
                </div>
                {challengeSelected ?
                    <div>
                        <button
                            onClick={
                                () => setChallengeSelected(null)
                            }
                            className="absolute right-0 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Retos
                            </span>
                        </button>
                        <Output editorRef={editorRef} language={language} task={challengeSelected.description} />

                    </div>
                    :

                    <div>

                        <div>Seleccione un reto...</div>

                        {
                            challenges.map((challenge, index) => {
                                return (
                                    <button className="p-2 relative inline-flex items-center justify-center  mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" 
                                    key={index} 
                                    onClick={() => setChallengeSelected(challenge)}>
                                        <span>
                                            <h2>Reto {challenge.id} | {challenge.difficulty}</h2>
                                        </span>
                                    </button>
                                )
                            })
                        }

                    </div>}
                {/* <Output editorRef={editorRef} language={language} /> */}
            </div>
            <CodeTester />
        </div>
    )
}
export default CodeEditor