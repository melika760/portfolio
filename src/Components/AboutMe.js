import styles from "./AboutMe.module.css"
import ME from "../Me.jpg"
export default function AboutMe(){
    return(
        <div className={styles.col}>
            
<div className={styles.Me}>
<img src={ME} alt="Melika Tafazoli"/>
</div>
        </div>
    )
}