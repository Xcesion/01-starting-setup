import './Comp.css';

function Comp(props) {
    const classes = 'div-style ' + props.className; 
    return <div className={classes}> {props.children} </div>;
}

export default Comp;