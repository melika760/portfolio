import React,{Fragment} from "react";
import styles from "./Projects.module.css";
import Weather from "./images/pngimg.com - iphone_PNG5735-fotor-20230706192623.jpg"
export default function Projects(){
    return(
       <Fragment>
        <h2>Projects</h2>
            <div className={styles.col}>
<div className={styles.weather}>
    <img src={Weather} alt="Weather"/>
</div>
<div className={styles.weather}>
    <img src={Weather} alt="Weather"/>
    <div className={styles.content}>
        <h3>WeatherApp</h3>
        <p>Developing by React and Weather Api to help you track the weather and 10 days Forecast</p>
        <button>Check it!</button>
    </div>
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