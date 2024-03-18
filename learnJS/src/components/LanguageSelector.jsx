import { LANGUAGE_VERSIONS } from '../constants';
import React from 'react';

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
    const otherLanguage = languages.find(([lang]) => lang !== language);

    return (
        <div>
            <p className="text-lg">Lenguaje:</p>
            <div className="flex items-center space-x-4">
                <button
                    className={`flex items-center px-4 py-2 rounded-md ${language === 'javascript' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-50`}
                    onClick={() => onSelect("javascript")}
                >
                    javascript
                </button>
                <button
                    className={`flex items-center px-4 py-2 rounded-md ${language === 'typescript' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-50`}
                    onClick={() => onSelect("typescript")}
                > typescript
                </button>
            </div>
        </div>
    );
};

export default LanguageSelector;

