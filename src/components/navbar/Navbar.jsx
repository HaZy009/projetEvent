'use client';
import Links from "./links/Links";
import Styles from "./navbar.module.css";

const Navbar =() => {

    return(
        <div className={Styles.container}>
            <div className={Styles.logo}>
                <img className={Styles.image} src="/festall-logo.PNG" alt="Festall Logo"/>
            </div>   
            <Links />
        </div>
    )
}
export default Navbar;