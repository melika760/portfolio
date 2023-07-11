import styles from "./Button.module.css"
export default function Button(props){
return(<button className={`${props.className} || "button"`} onClick={props.onClick} type={`${props.type} || "button`}>{props.children}</button>)
}