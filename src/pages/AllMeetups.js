// File is responsible for loading and displaying all different pages we will have

// This folder (pages) is a foler for all different components that will "take" the user
// to another "page"

// import the function/component MeetupList
import MeetupList from "../components/meetups/MeetupList";

// An array of JavaScript Objects (DUMMY DATA)
const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cc/Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg',
      address: 'Meetup Country: United Arab Emirates, 12345 City of Dubai',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://www.worldtravelguide.net/wp-content/uploads/2017/07/shu-USA-California-Los-Angeles-Downtown-27584473-Andrew-Zarivny-HERO.jpg',
      address: 'Meetup Country: United States of America, 12345 Los Angeles City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm3',
      title: 'This is a third meetup',
      image:
        'https://blog.goadventure.com/wp-content/uploads/2021/06/Space-Needle-Tower.jpeg',
      address: 'Meetup Country: United States of America, 12345 City Of Seattle',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm4',
      title: 'This is a fourth meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetup Country: Germany, 12345 Munich City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

/*
/ - "DUMMY_DATA.map()" is how we loop through JSX lists.
/ - It can be inferred as...for every "meetup" in DUMMY_DATA...
/ return a list with the keyID={}.
/
/ - It gets passed as a prop item, "meetups" to the MeetupList.js file
/ so it can be looped through and be turned into MeetupItems
*/
function AllMeetupsPage() {
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList  meetups={DUMMY_DATA}/>
        </section>
    );
}


export default AllMeetupsPage;