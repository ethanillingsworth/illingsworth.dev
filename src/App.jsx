import Header from "./Components/Header";
import "./css/tailwind.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import BlogPage from "./pages/BlogPage";
import Blog from "./pages/Blog";
import MyLifeInCode from "./pages/MyLifeInCode";

function App() {
	return (
		<>
			<Router>
				<Header></Header>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/post/:id" element={<BlogPage />} />
					<Route path="/my-life-in-code" element={<MyLifeInCode />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
