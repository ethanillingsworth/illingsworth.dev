import Header from "./Components/Header"
import "./css/tailwind.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

function App() {

    return (
        <>
            <Router>
                <Header></Header>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/projects" element={<Projects />} />

                </Routes>
            </Router>
        </>
    )
}

export default App
