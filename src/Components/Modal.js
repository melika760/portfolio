import styles from"./Modal.module.css"
export default function Modal(props){
    return(
    <div className={`${props.className} ${styles.overley}`}>
        {props.children}
   
    </div>
    )
}