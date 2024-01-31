import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

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