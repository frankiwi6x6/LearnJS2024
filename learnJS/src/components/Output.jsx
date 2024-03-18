
import { useState } from "react";
import { executeCode, getLanguageVersions } from "../api";


const Output = ({ editorRef, language, task }) => {
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
            <div className="  flex items-center space-x-4">
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
            <div className="relative border-[1px] border-gray-400 rounded-md min-h-[75vh]">
                <p className="m-2 text-gray-400">
                    {output ?
                        output :
                        <div>
                            <p>Su tarea es:</p>
                            <p>{task}</p>
                            <p>
                                Envie su codigo para ver el resultado
                            </p>


                        </div>}

                </p>
                <button
                    onClick={
                        () => setOutput(null)
                    }
                    className="absolute bottom-0 right-0 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Reiniciar
                </button>
            </div>
            {/* <button onClick={getLanguageVersions}>Get Language Versions</button> */}
        </div >
    );


}
export default Output;