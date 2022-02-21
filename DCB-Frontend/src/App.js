import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { Register } from "./pages/Register/Register";
import { Navbar } from "./components/Navigation/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./pages/Login/Login";
import styles from "./App.module.css";

export const App = () => (
    <div className={styles.appWrapper}>
        <BrowserRouter>
            <Navbar />
            <div className={styles.contentWrapper}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/*<Route path="main" element={<Main />} />*/}
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    </div>
)
