import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { Navbar } from "./components/Navigation/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import styles from "./App.module.css";

export const App = () => (
    <div className={styles.appWrapper}>
        <BrowserRouter>
            <Navbar />
            <div className={styles.contentWrapper}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/*<Route path="main" element={<Main />} />*/}
                    {/*<Route path="login" element={<Login />} />*/}
                    {/*<Route path="register" element={<Register />} />*/}
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    </div>
)
