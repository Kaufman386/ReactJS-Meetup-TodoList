// Import css module
import classes from './MeetupList.module.css';

// Import MeetupItem.js component so we can reuse the use of Meetup Items
import MeetupItem from './MeetupItem';


/* "props.meetups.map()" can be inferred as such...
/  - An JSX array gets passed to MeetupList so that each element is 
/    to be turned into a "Meetup" Item...
/
/  - Then, we loop through each meetup in array, and say...
/    for each "meetup," which we cast at "<MeetupItem>,"...assign
/    the casted Meetup Item with the current array element's key, image, title, id, etc...
*/
function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map((meetup) => (
                <MeetupItem
                key={meetup.id}
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
                description={meetup.description}
                />
            ))}
        </ul>
    );
}

export default MeetupList;