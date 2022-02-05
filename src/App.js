import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { HomePage } from "./containers/HomePage/HomePage";
import { Main } from "./containers/Main";

export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="main" element={<Main />} />
        </Routes>
    </BrowserRouter>
)
