import React,{Fragment} from "react";
import styles from "./Projects.module.css";
import Weather from "./images/pngimg.com - iphone_PNG5735-fotor-20230706192623.jpg"
export default function Projects(){
    return(
       <Fragment>
            <div className={styles.col}>
<div className={styles.weather}>
    <img src={Weather} alt="Weather"/>
</div>
<div className={styles.weather}>
    <img src={Weather} alt="Weather"/>
</div>
</div>
<div className={styles.col}>
<div className={styles.weather}>
    <img src={Weather} alt="Weather"/>
</div>
<div className={styles.weather}>
    <img src={Weather} alt="Weather"/>
</div>
</div>
        </Fragment>
        
    )
}