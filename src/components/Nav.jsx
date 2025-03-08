import {Link} from "react-router-dom";
import React from "react";

function Nav({ page }) {
    return (
        <nav className="border-gray-200 py-3 bg-gray-800 flex justify-center items-center sticky top-0 z-10">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <div className="justify-between items-center flex w-auto order-1"
                     id="mobile-menu-2">
                    <ul className="flex font-medium flex-row space-x-8 mt-0">
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;