// importing Navigation Bar to go to other "pages"
import MainNavigation from "./MainNavigation";

import classes from './Layout.module.css';

function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
        </div>
    );
}

export default Layout;