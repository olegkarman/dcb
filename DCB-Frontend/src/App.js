import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { Navbar } from "./components/Navbar/Navbar";

export const App = () => (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/*<Route path="main" element={<Main />} />*/}
                {/*<Route path="login" element={<Login />} />*/}
                {/*<Route path="register" element={<Register />} />*/}
            </Routes>
        </BrowserRouter>
    </>
)
