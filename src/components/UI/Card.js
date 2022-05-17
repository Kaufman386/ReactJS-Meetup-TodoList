import classes from './Card.module.css';


/* 
/ -This component/function is going to be used to "WRAP" around other components
/  so we can resuse styles without having redundant css modules. 

/ -This will also introduce something called "children."
/ -Children are the tags that are being WRAPPED...
/  For example, <Card> [any HTML tags or contents in here are childre] <Card />
*/ 
function Card(props) {
    return <div className={classes.card}>{props.children}</div>
}

export default Card;