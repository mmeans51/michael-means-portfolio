import "./MyworkList.css"
import Mywork from "../Mywork/Mywork"
import { Work } from "../../data"

const MyworkList = () => {
    return (
        <div className="mw">
            <div className="mw-text">
                <h1 className="mw-title">My Work</h1>
                <p className="mw-description">
                    describe my work here
                </p>
            </div>
            <div className="mw-list">
                {Work.map((item) => (
                    <Mywork key={item.id} img={item.img} link={item.link} />
                ))}
              
            </div>
            
        </div>
    );
};

export default MyworkList