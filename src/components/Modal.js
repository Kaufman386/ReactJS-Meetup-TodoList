// Modal.js is another name for an "overlay" or a "pop-up screen"

function Modal(props) {

    function cancelHandler() {
        console.log("Clicked Cancel !!")
        props.onCancel();
    }

    function confirmHandler() {
        props.onConfirm();
    }

    return(
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={confirmHandler}>Confirm</button>
        </div>
    );
}

export default Modal;