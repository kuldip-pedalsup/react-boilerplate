import { Outlet } from "react-router-dom";
import Header from "../components/global/header/Header";
import Footer from "../components/global/footer/Footer";

function RootLayout({ children }) {

    return (
        <>
            <Header />
            <main>
                <Outlet context={children} />
            </main>
            <Footer />
        </>
    );
}
export default RootLayout;