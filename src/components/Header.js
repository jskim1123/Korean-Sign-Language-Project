import Menu from "./Menu";
import Search from "./Search";
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./Header.css";

function Header() {

    const [loginText, setLoginText] = useState("로그인");
    const [loginID, setLoginID] = useState("");

    useEffect (() => {
        if (window.localStorage.getItem("current") === "") {
            setLoginText("로그인");
            setLoginID("");
        } else {
            setLoginText("로그아웃");
            setLoginID(window.localStorage.getItem("current"));
        }
    });

    function handler (e) {
        if (e.target.name === "로그인" && loginText === "로그아웃") {
            e.preventDefault();
            setLoginText("로그인");
            window.localStorage.setItem("current", "");
        } else if (e.target.name === "내 페이지" && loginText === "로그인") {
            e.preventDefault();
        }
    }

    return (
        <div className="header-container">
            <div className="header-id">
                <h5 id="id">{loginID}</h5>
            </div>
            <div className="header">
                <h1>수, 화 🗓️</h1>
                <Search></Search>
                <h1><Link name="로그인" onClick={handler} style={{ textDecoration: 'none', color : 'white'}} to="/login">{loginText}</Link></h1>
                <h1><Link name="내 페이지" onClick={handler} style={{ textDecoration: 'none', color : 'white'}} to="/my-page">내 페이지</Link></h1>
                <h1>{'수어'}</h1>
                <h1 onClick={() => {window.open('https://sldict.korean.go.kr/front/main/main.do#', '_blank')}}>더보기</h1>
            </div>
        </div>
    );
}

export default Header;