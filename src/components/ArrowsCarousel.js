function arrow(props){
    return (
        <button className="Arrow-button" onClick={props.click}>
            {props.icon}
        </button>
    )
}

export default arrow