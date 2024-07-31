import React from 'react';
import PropTypes from 'prop-types';
const ImagenConTexto = (props) => {
    const estilosImagen = {
        borderRadius: props.borderRadius,
        width: '200px', // Puedes ajustar el tamaño según lo necesites
        height: '200px',
        objectFit: 'cover',
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <img src={`../../../public/${props.src}`} alt={props.alt} style={estilosImagen} />
            <p>{props.texto}</p>
        </div>
    );
};


export default ImagenConTexto;
