
import Card from "../UI/Card";
import classes from './NewMeetupForm.module.css';

// Use to extract what the user just entered into the form
import { useRef } from 'react';

function NewMeetupForm(props) {
    /*
    //// Below points are about Labels and forms in ReactJS
    /  - This is how you create a form for user input,
    /  - the <form> tag allows us to create labels "FOR" inputs and textareas
    /  - htmlFor must match with the "id" part of a label or textarea
    /  - the "required" tag of input lets us know that it must be filled out when completing the form
    /
    /
    //// Below points are about the button tag in the form
    /  - The "button" for Add New Meetup is for completing and sending the form when its done
    /
    /
    //// Below points are about how to capture a form submission and run logic through it's props
    /  - The "onSubmit" is an event handler for the 'form' tag in html. It wraps the form submission
    /    and allows us to run it with logic and such
    /
    /  - We want to run the function "submitHandler" with it; therefore, "onSubmit" will get passed as an
    /    event handler and we can access it's properties with "event.'whatever_properties'" style approach
    /  
    /  - "event.preventDefaults()" tells the user agent that if the vent does not get explicitly handled,
    /    it's default action should not be taken as it normally would be (in our case, it will prevent a browser search deafault, which would cause a reload in our ReactJS page [bad])
    /
    //// Below points are about the "useRef" import
    /  - the constant "titleInputRef" is used to capture/read what the user just put into a field for a label
    /  - we can access it by using a constant, "enteredTitle" and read it's current Value
    /  - Do the same for all entries on the form and ADD THE "ref" tag to the respective "input/textarea" tags
    /
    */

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDeafult();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        // New Entry Meetup we can pass to the Meetups page
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        // send meetupDate to a server
        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Image url</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" required id="address" ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea id="description" required rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;