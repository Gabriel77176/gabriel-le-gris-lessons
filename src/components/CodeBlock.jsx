import {useEffect, useState} from "react";
import Prism from "prismjs";
import 'prismjs/themes/prism-tomorrow.css';
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-java";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-rust";

function CodeBlock({language, children}) {
    const [copied, setCopied] = useState(false);

    useEffect(() => Prism.highlightAll(), []);

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => {
                setCopied(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [copied]);

    const handleCopy = () => {
        navigator.clipboard.writeText(children);
        setCopied(true);
    }

    return (
        <div className="relative text-lg">
            <pre className="bg-stone-800 text-white p-4 rounded overflow-auto text-xl max-h-[70vh] custom-scrollbar">
                <code className={language}>
                    {children}
                </code>
            </pre>
            <div
                className={`text-lg absolute top-0 right-0 cursor-pointer p-2 pr-3 ${copied ? 'text-white bg-green-500' : 'text-gray-300 hover:text-gray-800 hover:bg-gray-400'}`}
                onClick={handleCopy}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 inline-block align-text-top mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {copied ? 'Copied' : 'Copy'}
            </div>
        </div>
    );
}

export default CodeBlock;
