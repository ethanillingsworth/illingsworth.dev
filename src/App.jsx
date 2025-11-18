import Header from "./Components/Header"
import "./css/tailwind.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

function App() {

    return (
        <>
            <Router>
                <Header></Header>
                <Routes>
                    <Route index element={<Home />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
