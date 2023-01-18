import Menu from "./Menu";
import Search from "./Search";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <h1>수, 화</h1>
            <Search></Search>
            <Menu title = "v 계정"></Menu>
            <Menu title = "v 순위"></Menu>
            <Menu title = "v 수어"></Menu>
            <Menu title = "v 더보기"></Menu>
        </div>
    );
}

export default Header;