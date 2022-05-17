import Todo from "./components/Todo";

/* - import below imports the route, which is a component and used like a component
/  - Used to define different paths in the URL that we want to listen to and which component
/  we want to use for the different paths.
*/
import { Route, Routes } from 'react-router-dom';

// Below are the three ROUTES (import above) we want our BROWSER_ROUTER (import that is in index.js) to wrap with.
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

// import our desired layout for our MainNavigation component
import Layout from './components/layout/Layout';

function App() {
  /* 
  / - path in the Route tag would be the url..
  / - For now it's the domain + path:  localhost:3000/'path'
  / - But for a webpage, it would be like my-page.com
  / - But the path can be whatever you want it to be
  */
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' exact element={<AllMeetupsPage />} />
          <Route exact path='/favorites' element={<FavoritesPage />} />
          <Route exact path='/meet-ups' element={<NewMeetupPage />} />
          <Route element={<AllMeetupsPage />}/>
        </Routes>
      </Layout>
      <div>
        <h1>My Todos</h1>
        <Todo title="Learn ReactJS"/> 
        <Todo title="Edit Website"/>
        <Todo title="Push to GitHub"/>
      </div>
    </div>
  );
}

export default App;
