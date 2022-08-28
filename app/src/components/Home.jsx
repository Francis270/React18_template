import "../styles/Style.scss";
import "../styles/Home.scss";
import "../styles/Header.scss";

import { useState, useEffect, createRef } from "react";
import toast, {Toaster} from "react-hot-toast";
import Cookies from "universal-cookie";
import { useSelector, useDispatch } from "react-redux";

import { Header, Loading } from "./";

const Home = () => {

    const [loadingIcon, setLoadingIcon] = useState(false);
    const [cookies, setCookies] = useState(new Cookies());
    const [init, setInit] = useState(false);
    
    const reducer1 = useSelector((state) => state.reducer1);
    const dispatch = useDispatch();

    useEffect(() => {
        const initFunc = async () => {
            setLoadingIcon(true);
            // fetch data before loading the page
            if (cookies.get("hi")) {
                toast.success("Welcome back!");
                console.log("Welcome back!");
            } else {
                toast.success("Welcome!");
                cookies.set("hi", "hi", { path: "/", maxAge: 5 * 60 });// 5 min
            }
            await mySleep(1000);
            setLoadingIcon(false);
            setInit(true);
        }
        if (!init) {
            initFunc();
        }
        return () => {
        };
    }, []);

    const mySleep = async (ms) => {
        await new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <div id="Home">
            <Loading show={loadingIcon} />
            <Toaster />
            <Header />
            <div id="home">
                <button onClick={() => {dispatch({type: "SET_STATE", payload: "hi"})}}>Set reducer1 data to "hi"</button>
                <h2>Reducer1 data: "{reducer1}"</h2>
            </div>
        </div>
    );
}

export default Home;