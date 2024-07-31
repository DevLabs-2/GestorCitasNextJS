const Boton = (props) => {
    return (
        <button
            className= {props.className} 
            onClick={props.onclick} style={{
            marginTop: props.marginTop,
            backgroundColor: props.backgroundColor,
            backgroundImage: props.backgroundImage, 
            color:props.color, 
            borderRadius: props.borderRadius, 
            width: props.width, 
            height: props.height, 
            fontSize: props.fontSize, 
            fontWeight: props.fontWeight, 
            fontFamily:props.fontFamily,
            border: props.border,
            
        }}
            >{props.text}</button>
    )
}

export default Boton;