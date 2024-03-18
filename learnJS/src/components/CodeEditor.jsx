import { useRef, useState } from 'react'
import Output from './Output.jsx'
import LanguageSelector from './LanguageSelector.jsx'
import { Editor } from '@monaco-editor/react'
const CodeEditor = () => {
    const editorRef = useRef()
    const [value, setValue] = useState('')
    const [language, setLanguage] = useState('javascript')

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    }

    const onSelect = (language) => {
        setLanguage(language)
    }
    return (

        <div className="grid grid-cols-2 gap-4">
            <div>
                <LanguageSelector language={language} onSelect={onSelect} />
                <Editor
                    height="75vh"
                    theme='vs-dark'
                    language={language}
                    defaultValue="// some comment"
                    onMount={onMount}
                    value={value}
                    onChange={(value) => setValue(value)} />
            </div>
            <div>

                <Output editorRef={editorRef} language={language}  />
            </div>
        </div>
    )
}
export default CodeEditor