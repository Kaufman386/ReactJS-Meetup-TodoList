
// Link component replaces the '<a/>' tag in HTML because we don't
// want to request a link to the server, when we're already there...
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {

    /* - <Link/> tag takes the "to" parameter that is used to go to the
    /  corresponding link that we've established in App.js
    */
    return(
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/meet-ups'>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>My Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;