import "./MyworkList.css"
import Mywork from "../Mywork/Mywork"

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
                <Mywork/>
                <Mywork/>
                <Mywork/>
                <Mywork/>
            </div>
            <a href="http"></a>
        </div>
    )
}

export default MyworkList