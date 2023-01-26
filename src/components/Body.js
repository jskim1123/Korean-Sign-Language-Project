import "./Body.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";

function Body () {
    return (
        <div className="body">
            <div>
                <img src={img2} alt="bodyImg" className="body-img"></img>
            </div>
            <div className="body-text">
                <h2>수화로 연결된 세상</h2>
                <h3>수, 화는 비장애인을 대상으로 수화 및 수어에 대한 정보를 제공합니다.</h3>
                <h3>영어, 일본어를 배우는 것처럼 "수어"라는 언어를 익힐 수 있습니다.</h3>
            </div>
            <div>
                <img src={img3} alt="bodyImg" className="body-img"></img>
            </div>
            <div className="body-text" id="body-text-2">
                <h2>수어가 들리는 세상</h2>
                <h3>수, 화는 비장애인을 대상으로 수화 및 수어에 대한 정보를 제공합니다.</h3>
                <h3>영어, 일본어를 배우는 것처럼 "수어"라는 언어를 익힐 수 있습니다.</h3>
            </div>

        </div>
    );
}

export default Body;