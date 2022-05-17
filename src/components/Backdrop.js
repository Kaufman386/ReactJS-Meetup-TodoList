// Backdrop.js is another name for the component that handles when the user
// clicks out of the area of a "pop-up screen"

// Scenario: you click Delete, and a screen shows up with two buttons...
// Delete or Confirm...and you click on the outside of the pop up....
// It will cancel the click and return to original screen before pop-up

function Backdrop(props) {
    return <div className="backdrop" onClick={props.onCancel} />;
}

export default Backdrop;