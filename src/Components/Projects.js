import React,{Fragment, useState} from "react";
import weather from "./images/pngimg.com - iphone_PNG5735-fotor-20230706192623.jpg";
import styles from "./Projects.module.css"
export default function Projects(){
    const[hover,sethover]=useState(false)
    const[text,setText]=useState()
    function hoverhandler(){
sethover(true)
setText(<div>
    <h3>WeatherApp</h3>
    <h3>React</h3>
    </div>)
    }
    function EndHover(){
        sethover(false)
    }

    return(
<Fragment>
    <h2>Projects</h2>
    <div className={styles.col}>
        <div className={styles.weather} onMouseOver={hoverhandler} onMouseOut={EndHover}>
           {hover && text } <img src={weather} alt="WeatherApp"/>
            </div>
        <div className={styles.Dicationary}><img src={weather} alt="Dictionary"/></div>
   
    </div>
    <div className={styles.col}>
        <div className={styles.weather}><img src={weather} alt="ToDO"/></div>
        <div className={styles.Dicationary}><img src={weather} alt="FoodApp"/></div>
   
    </div>
   
</Fragment>
    )
}