import { useState, useRef } from "react";
import {Link} from "react-router-dom";
import "./Login.css";

function Login () {

    const [loginText, setLoginText] = useState("아이디와 비밀번호를 입력하세요.");
    const [joinText, setJoinText] = useState("빈칸에 정보를 입력해 가입하세요.")
    const [joinInfo, setJoinInfo] = useState(["", ""]);
    const [loginInfo, setLoginInfo] = useState(["", ""]);
    const [confirmPW, setConfirmPW] = useState(false);

    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const lastRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    };



    //로그인 시 아이디가 로컬 스토리지에 존재하는지 확인
    function checkLoginID (e) {
        if (window.localStorage.getItem(e.target.value)) { //존재하는 회원 
            loginInfo[0] = e.target.value;        
        } else {
            loginInfo[0] = "";
        }

        setLoginInfo([...loginInfo]);
    }

    //로그인 시 비밀번호가 올바른지 확인
    function checkLoginPW (e) {
        if (e.target.value === window.localStorage.getItem(loginInfo[0])) {
            loginInfo[1] = e.target.value;
        } else {
            loginInfo[1] = "";
        }

        setLoginInfo([...loginInfo]);
    }

    //로그인 버튼 클릭 시 로그인 성공 여부 확인 
    function checkLogin(e) {
        if (loginInfo[0] !== "" && loginInfo[1] === "") {
            setLoginText("비밀번호가 틀립니다.");
            e.preventDefault();
        } else if (loginInfo[0] === "") {
            setLoginText("가입한 회원이 아닙니다.");
            e.preventDefault();
        } else {
            setLoginText("로그인이 완료되었습니다.");
            window.localStorage.setItem("current", loginInfo[0]);
        }

    }

    //회원가입 시 아이디가 로컬 스토리지에 존재하거나 정규식을 만족하는지 확인
    function checkJoinID (e) {
        const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/g;
        if (window.localStorage.getItem(e.target.value)) {
            joinInfo[0] = null;
        } else if (!(reg.test(e.target.value))) {
            joinInfo[0] = "";
        } else {
            joinInfo[0] = e.target.value;
        }
        setJoinInfo([...joinInfo]);
    }

    //회원가입 시 비밀번호가 정규식을 만족하는지 확인
    function checkJoinPW1 (e) {
        const reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/g;

        if (reg.test(e.target.value)) { //정규식 만족
            joinInfo[1] = e.target.value;
        } else {
            joinInfo[1] = "";
        }
        setJoinInfo([...joinInfo]);
    }

    //회원가입 시 비밀번호와 재확인 비밀번호가 서로 일치하는지 확인
    function checkJoinPW2 (e) {
        if (joinInfo[1] === e.target.value) {
            setConfirmPW(true);
        } else {
            setConfirmPW(false);
        }
    }

    //회원가입 버튼 클릭 시 회원가입 성공 여부 확인
    function checkJoin () {
        if (joinInfo[0] === null) { //존재하는 회원 
            setJoinText("이미 존재하는 회원입니다.");
        } else if (joinInfo !== ["", ""] && confirmPW === true) { //회원가입 성공
            setJoinText("회원가입이 완료되었습니다.");
            window.localStorage.setItem(joinInfo[0], joinInfo[1]);
        } else {
            setJoinText("모든 칸을 정확히 입력하세요.");
        }
    }




    return (
        <div className="login-join-page">
            <div className="login-join-tab">
                <form className="login-join-tab-form" onSubmit={handleSubmit}>
                    <div className="login-join-item">
                        <h2>로그인</h2>
                        {loginText}
                    </div>
                    <div className="login-join-item">
                        <h6>아이디</h6>
                        <input onChange={checkLoginID} ref={firstRef} type="text"></input>
                    </div>
                    <div className="login-join-item">
                        <h6>비밀번호</h6>
                        <input onChange={checkLoginPW} ref={lastRef} type="text"></input>
                    </div>
                    <Link to="/" onClick={checkLogin}>
                        <button type="submit" className="login-join-button"  onClick={() => console.log("눌림")}>로그인</button>
                    </Link>
                </form>
            </div>

            <div className="login-join-tab">
                <form className="login-join-tab-form" onSubmit={handleSubmit}>
                    <div>
                        <h2>회원가입</h2>
                        {joinText}
                    </div>
                    <div className="login-join-item">
                        <h6>아이디</h6>
                        <input ref={firstRef} onChange={checkJoinID}type="text" placeholder="소문자, 숫자 포함 4글자 이상"></input>
                    </div>
                    <div className="login-join-item">
                        <h6>비밀번호</h6>
                        <input ref={secondRef} onChange={checkJoinPW1} type="text" placeholder="소문자, 숫자, 특수문자 포함 6글자 이상"></input>
                    </div>
                    <div className="login-join-item">
                        <h6>비밀번호 재확인</h6>
                        <input ref={lastRef} onChange={checkJoinPW2} type="text"></input>
                    </div>
                    <button type="submit" className="login-join-button" onClick={checkJoin}>회원가입</button>
                </form>

            </div>

        </div>
    );
};

export default Login;