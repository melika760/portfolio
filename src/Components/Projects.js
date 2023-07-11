import React,{Fragment,useState} from "react";
import styles from "./Projects.module.css";
import Weather from "./images/pngimg.com - iphone_PNG5735-fotor-20230706192623.jpg";
import ToDo from "./images/TodoList-20230711172625.jpg";
import Modal from "./Modal";
import Button from "./UI/Button";
export default function Projects(){
    const[Weatherhover,setweatherhover]=useState(false);
    const[Todohover,setTodohover]=useState(false);

    return(
       <Fragment>
        <h2>Projects</h2>
            <div className={styles.col}>
<div className={styles.ToDo} onMouseEnter={()=>setTodohover(true)} onMouseLeave={()=>setTodohover(false)} >
{Todohover &&  <Modal> <h3>To Do App</h3>
    <p>Helps you to orgonize your works, developed by power of React</p>
    <Button>CheckOut</Button>
    <Button>GitHub</Button>
    </Modal>}
    <img src={ToDo} alt="ToDoList"/>
</div>
<div className={styles.weather} onMouseEnter={()=>setweatherhover(true)} onMouseLeave={()=> setweatherhover(false)}>
    {Weatherhover &&  <Modal> <h3>WeatherApp</h3>
    <p>Responsive weather app helps you to track weather and 10 days Forecast</p>
    <Button>CheckOut</Button>
    <Button>GitHub</Button>
    </Modal>}
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