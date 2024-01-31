import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss"

function Header() {
    return (
        <>
            <header className={classes.header}>
                <div className={classes.dark_logo}>
                    <NavLink
                        to={`/`}
                    >
                        <span>React</span>
                    </NavLink>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to={`/blog`}
                                className={({ isActive }) => {
                                    isActive ? classes.active : undefined
                                }}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={`/newsletter`}
                                className={({ isActive }) => {
                                    isActive ? classes.active : undefined
                                }}
                            >
                                News Letter
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={`/components`}
                                className={({ isActive }) => {
                                    isActive ? classes.active : undefined
                                }}
                            >
                                Components
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header