import { useState } from "react";
import "../styles/Header.scss";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        if (!menuOpen) {
            setMenuOpen(true);
            document.body.classList.add("is-nav-open");
        } else {
            setMenuOpen(false);
            document.body.classList.remove("is-nav-open");
        }
    }

    return (
        <div id="header">
        </div>
    );
}

export default Header;