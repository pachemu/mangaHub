import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header.jsx";

const BaseLayout = () => {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/> {/* Здесь будут отображаться дочерние маршруты */}
            </main>
            <footer>Footer Component</footer>
        </div>
    );
};

export default BaseLayout;