import './index.css'
import React from 'react'
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import SubjectPage from "./subject/SubjectPage.jsx";
import Footer from "./components/Footer.jsx";
import Error from "./Error.jsx";

const Redirect = () => { window.location.href = '/error'; return null; }
function App() {
    document.title = "Winter Preparation";
    return (
        <div className="min-h-screen text-xl">
            <Header/>
            <Routes>
                <Route index={true} element={<SubjectPage/>}/>
                <Route path="/error/*" element={<Error/>}/>
                {<Route path="/*" element={<SubjectPage/>}/>}
            </Routes>
            <Footer/>
        </div>
    )
}
export default App