import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInfoCircle,
    faThumbsUp,
    faThumbsDown,
    faTriangleExclamation,
    faDesktop,
    faBookOpen,
    faCode
} from '@fortawesome/free-solid-svg-icons';

function HelpMessage({children}) {
    return (
        <div className="my-4">
            <div className="-mb-2">
            <span className="bg-cyan-700 px-2 py-1 rounded-xl text-white font-semibold text-xl">
                <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
                Helping Hand
            </span>
            </div>
            <div className="bg-stone-300 rounded-lg p-4">
                {children}
            </div>
        </div>
    );
}

function AllowedMessage({children}) {
    return (
        <div className="my-4">
            <div className="-mb-2">
            <span className="bg-green-900 px-2 py-1 rounded-xl text-white font-semibold text-xl">
                <FontAwesomeIcon icon={faThumbsUp} className="mr-1" />
                Allowed usages
            </span>
            </div>
            <div className="bg-stone-300 rounded-lg p-4">
                {children}
            </div>
        </div>
    );
}

function WarningMessage({children}) {
    return (
        <div className="my-4">
            <div className="-mb-2">
            <span className="bg-amber-600 px-2 py-1 rounded-xl text-white font-semibold text-xl">
                <FontAwesomeIcon icon={faTriangleExclamation} className="mr-1" />
                Warning
            </span>
            </div>
            <div className="bg-stone-300 rounded-lg p-4">
                {children}
            </div>
        </div>
    );
}

function ForbiddenMessage({children}) {
    return (
        <div className="my-4">
            <div className="-mb-2">
            <span className="bg-red-700 px-2 py-1 rounded-xl text-white font-semibold text-xl">
                <FontAwesomeIcon icon={faThumbsDown} className="mr-1" />
                Forbidden usages
            </span>
            </div>
            <div className="bg-stone-300 rounded-lg p-4">
                {children}
            </div>
        </div>
    );
}

function TestMessage({children}) {
    return (
        <div className="my-4">
            <div className="-mb-2">
            <span className="bg-violet-900 px-2 py-1 rounded-xl text-white font-semibold text-xl">
                <FontAwesomeIcon icon={faDesktop} className="mr-1" />
                Test
            </span>
            </div>
            <div className="bg-stone-300 rounded-lg p-4">
                {children}
            </div>
        </div>
    );
}

function HistoryMessage({children}) {
    return (
        <div className="my-4">
            <div className="-mb-2">
            <span className="bg-yellow-950 px-2 py-1 rounded-xl text-white font-semibold text-xl">
                <FontAwesomeIcon icon={faBookOpen} className="mr-1" />
                History
            </span>
            </div>
            <div className="bg-stone-300 rounded-lg p-4">
                {children}
            </div>
        </div>
    );
}

function PrototypeMessage({children}) {
    return (
        <div className="my-4">
            <div className="-mb-2">
            <span className="bg-red-950 px-2 py-1 rounded-xl text-white font-semibold text-xl">
                <FontAwesomeIcon icon={faCode} className="mr-1" />
                Prototype
            </span>
            </div>
            <div className="bg-stone-300 rounded-lg p-4">
                {children}
            </div>
        </div>
    );
}


export { HelpMessage, AllowedMessage, ForbiddenMessage, WarningMessage, TestMessage, HistoryMessage, PrototypeMessage};
