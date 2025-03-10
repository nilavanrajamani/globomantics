import { useContext } from "react";
import styles from "./banner.module.css";
import { navigationContext } from "./app";
import navValues from "@/helpers/navValues";

const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral"
};

const Banner = ({children}) => {
    const {navigate} = useContext(navigationContext);
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src="./GloboLogo.png" className={styles.logo} onClick={() => navigate(navValues.home)} alt="logo"/>
            </div>
            <div className="col-7 mt-5" style={subtitleStyle} >
                {children}
            </div>
        </header>
    );    
};

export default Banner;