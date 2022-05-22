// File allows us to add a new MeetUp later

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    function addMeetupHandler(meetupData) {
        
        // How to request the options from Firebase
        const requestOptions = {
            // change it to "POST" because we want to tell Firebase that we want to store data (requires POST requests)
            method: 'POST',
            // this is the data we want to store (meetupData) in .json format
            body: JSON.stringify(meetupData),
            // Some API require this, but it just tells the database that our data request is specifically json data
            headers: {'Content-Type': 'application/json'}
        };

        // allows us to fetch http requests (our database for example [must add .json to firebase links])
        fetch('https://console.firebase.google.com/project/react-meetup-todolist-project/database/react-meetup-todolist-project-default-rtdb/data/~2F.json', requestOptions);
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;