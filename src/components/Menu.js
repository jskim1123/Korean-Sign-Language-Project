import "./Menu.css";

function Menu(props) {
    return (
        <div className="menu">
            <h1 onClick={() => console.log(props.title)}>{props.title}</h1>
        </div>
    );
}

export default Menu;