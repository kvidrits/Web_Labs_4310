import { BrowserRouter, Routes, Route } from "react-router-dom";
import Department from "./pages/Department";
import Faq from './pages/Faq' 
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="faq" element={<Faq />} />
                    <Route path="departments" element={<Department />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;