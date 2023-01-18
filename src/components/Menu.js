import "./Menu.css";

function Menu(props) {
    return (
        <div className="menu">
            <h1>{props.title}</h1>
        </div>
    );
}

export default Menu;