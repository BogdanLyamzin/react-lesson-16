import Logo from "../../../../shared/components/Logo";

import styles from "./Navbar.module.scss";
import NavbarNav from "../NavbarNav";
import NavbarCart from "../NavbarCart";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className="container">
                <div className={styles.content}>
                    <Logo />
                    <NavbarNav />
                    <NavbarCart />
                </div>
            </div>
        </div>
    );
};

export default Navbar;