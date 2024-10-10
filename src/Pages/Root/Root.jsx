import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Navbar/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-116px)] my-auto">
                <Outlet />
            </div>
            
            <Footer />
        </div>
    );
};

export default Root;