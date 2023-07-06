import React,{useState} from "react"
import "./Navigation.css"
export default function Navigation(){
    const[NavOpen,setNavOpen]=useState(false)
    function toggle(){
        setNavOpen(true)
    }
    return(
        <div className='nav'>
            <div className="nav-container">
                <div className="navbar">
                    <div className="logo">web Developer</div>
                    <div className='MenueToggle' onClick={toggle}>
                        <div className={NavOpen ? "Box BoxOpen" :"Box"}>
                            <span className={NavOpen ? "lineTop spin" : "lineTop"}></span>
                            <span className="lineCenter"></span>
                            <span className={NavOpen ? "linebottom spin" : "linebottom"}></span>
                        </div>
                    </div>
                </div>
                <div className='Navoverley' 
                style={
                    {
                        top: NavOpen? "0" : "-100%",
                        transitionDelay:NavOpen? "0s":"0s"
                    }}></div>
            </div>
        </div>
    )
}