import "../styles/Loading.scss";

const Loading = (props) => {
    return (
        <div className={`loading-progress-screen ${props.show ? "show" : "hide"}`}>
            <span className="loading-icon"></span>
            Please wait...
        </div>
    );
}

export default Loading;