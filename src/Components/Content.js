import logo from "../Icon.jpg"
import classes from "./Content.module.css"
export default function Content(){
    return(

<div className={classes.content}>
    <div className={classes.pr}>
    <h1 className={classes.header}>Hello!I am Melika👋</h1>
    <p>Cutting-Edge Front End Wizard specializing in transforming ideas into visually stunning and interactive digital experiences. With a knack for blending artistry and functionality, I breathe life into designs through meticulous coding, leveraging the latest web technologies. A master of HTML, CSS, and JavaScript, I navigate the ever-evolving front end landscape with ease, while my passion for user-centric design ensures seamless usability across devices. Harnessing the power of responsive frameworks, I craft pixel-perfect websites that leave a lasting impression and elevate brands to new heights.</p>
    </div>
    <div>
        <img src={logo} alt="girl"/>

    </div>
</div>

    )
}