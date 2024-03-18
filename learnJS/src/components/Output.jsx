
import { useState } from "react";
import { executeCode, getLanguageVersions } from "../api";


const Output = ({ editorRef, language }) => {
    const [output, setOutput] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const runCode = async () => {

        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;
        try {
            setIsLoading(true)
            const { run: result } = await executeCode(language, sourceCode)
            setOutput(result.output);
        } catch (error) {

        }
        finally {
            setIsLoading(false)
        }
    }
    return (
        <div>
            <p className="text-lg">Output:</p>
            <div className="flex items-center space-x-4">
                <div>
                    <button
                        onClick={runCode}
                        disabled={isLoading}
                        className={`min-w-36 text-gray-800 px-4 py-2 rounded-md ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-blue-600'} focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-50`}
                    >
                        {isLoading ? 'Ejecutando...' : 'Enviar código'}
                    </button>
                </div>
            </div>
            <div className="border-[1px] border-gray-400 rounded-md min-h-[75vh]">
                <p className="m-2 text-gray-400">
                    {output ? output : 'Envie su código para probarlo'}
                </p>
            </div>
            {/* <button onClick={getLanguageVersions}>Get Language Versions</button> */}
        </div>
    );


}
export default Output;