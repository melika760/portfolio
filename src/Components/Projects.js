import React,{Fragment,useState} from "react";
import styles from "./Projects.module.css";
import Weather from "../weather-app night mood mobile.png"
export default function Projects(){
    const[hover,sethover]=useState(false)
    function hovering(){
        sethover(true)
    }
    function onHover(){
        sethover(false)
    }
    return(
       <Fragment>
        <h2>Projects</h2>
            <div className={styles.col}>
<div className={styles.weather}>
    <img src={Weather} alt="Weather"/>
</div>
<div className={styles.weather} onMouseEnter={hovering} onMouseLeave={onHover}>
    <img src={Weather} alt="Weather"/>
   {hover && <div className={styles.content}>
        <h3>WeatherApp</h3>
        <p>Developing by React and Weather Api to help you track the weather and 10 days Forecast</p>
        <button>Check it!</button>
    </div>}
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