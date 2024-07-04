import styles from '../../app/page.module.css'
const Modal = (props) => {
    return(
        <>
            <div className={styles.modal} style={{display:"flex", flexDirection:"column", justifyContent:'space-around'}}>
                <h1 style={{fontSize:'20px'}}>{props.h1}</h1>
                <div>
                    <button className={styles.btnModal} onClick={() => {props.setter(false)}}>Cancelar</button>
                    <button className={styles.btnModal}  onClick={() => {props.setter(true)}} style={{marginLeft:'2rem'}}>Ok</button>
                </div>
                
            </div>
        </>
    )
}
export default Modal;