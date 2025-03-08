import React from "react";

function Header() {
    return (
        <header className="grid-cols-2 bg-gray-800 min-h-[70vh] px-28 flex flex-col justify-center">
            <img src="/rust-logo.png" alt="rust-logo" className="w-72 my-4"/>
            <h1 className="text-4xl font-bold text-white">Soutien Rust B2B</h1>
            <p className="text-2xl text-gray-400 font-semibold">Slice, String, Vectors</p>
        </header>
    );
}

export default Header;