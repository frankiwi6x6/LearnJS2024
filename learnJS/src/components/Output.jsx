import { useState } from "react";
import { executeCode, getLanguageVersions } from "../api";

const Output = ({ editorRef, language, challenge }) => {
    console.log(challenge)

    console.log(challenge.tests)
    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const runTests = async (sourceCode, challenge) => {
        const userFunction = new Function('return ' + sourceCode)();
        const results = [];

        for (let i = 0; i < challenge.tests.length; i++) {
            const test = challenge.tests[i];
            try {
                const result = userFunction(...test.args);
                const testResult = { index: i + 1, passed: result === test.expected };
                results.push(testResult);
            } catch (error) {
                console.error(`Error ejecutando la prueba ${i + 1}:`, error);
                const testResult = { index: i + 1, passed: false };
                results.push(testResult);
            }
        }

        return results;
    };

    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;

        try {
            setIsLoading(true);
            const testResults = await runTests(sourceCode, challenge);

            const passedTests = testResults
                .filter(result => result.passed)
                .map(result => `Prueba ${result.index} ☑️`);

            const failedTests = testResults
                .filter(result => !result.passed)
                .map(result => `Prueba ${result.index} ❎`);

            const outputMessage = [
                ...passedTests,
                ...failedTests,
            ].join('\n');

            if (failedTests.length === 0) {
                setOutput('Todas las pruebas pasaron:\n' + outputMessage);
            } else {
                setOutput('Al menos una prueba falló:\n' + outputMessage);
            }
        } catch (error) {
            console.error('Error ejecutando las pruebas:', error);
            setOutput('Ocurrió un error al ejecutar las pruebas');
        } finally {
            setIsLoading(false);
        }
    };


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
                            <p>{challenge.description}</p>
                            <p>
                                Envie su codigo para ver el resultado
                            </p>
                        </div>}
                </p>
                <button
                    onClick={() => setOutput(null)}
                    className="absolute bottom-0 right-0 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                    Reiniciar
                </button>
            </div>
        </div>
    );
};

export default Output;
