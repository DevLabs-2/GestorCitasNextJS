import React from 'react';
const ImagenConTexto = (props) => {
    const estilosImagen = {
        borderRadius: props.borderRadius,
        width: '200px', // Puedes ajustar el tamaño según lo necesites
        height: '200px',
        objectFit: 'cover',
    };

    return (
        <div style={{ textAlign: 'center', marginLeft: props.marginLeft }}>
            <img src={`/${props.src}`} alt={props.alt} style={estilosImagen} />
            <p>{props.texto}</p>
        </div>
    );
};


export default ImagenConTexto;
