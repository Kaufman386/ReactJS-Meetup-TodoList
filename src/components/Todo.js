import { useState } from 'react';

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) { // functions in reactJS are a.k.a "components"
    
    // How to instantiate multiple state variables using JS array to false
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    // How to add an event Handler to a click in HTML
    // document.querySelector('button').addEventListener('click');

    // How to add even handler to a click in ReactJS
    function deleteHandler() {
        console.log("Clicked", props.title, "!!");
        // Set ModalIsOpen to true, because "delete" was clicked on
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return(
        <div className="card">
            <h2>{props.title}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> : null}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
        </div>
    );
}
// Components in ReactJS must start with a capital character

// line 29: having the "()" next to function will execute function too early (when it gets evaluated)
// line 31 & 32: two different ways to create conditional statement in return block.
// line 31: you can pass functions as arguements as such with "closeModalHandler"

export default Todo; // Need this to use it in other files