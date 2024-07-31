import React from 'react';
import PropTypes from 'prop-types';

const ImagenConTexto = ({ src, alt, borderRadius, texto }) => {
    const estilosImagen = {
        borderRadius: borderRadius,
        width: '200px', // Puedes ajustar el tamaño según lo necesites
        height: '200px',
        objectFit: 'cover',
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <img src={src} alt={alt} style={estilosImagen} />
            <p>{texto}</p>
        </div>
    );
};

ImagenConTexto.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    borderRadius: PropTypes.string,
    texto: PropTypes.string.isRequired,
};

ImagenConTexto.defaultProps = {
    borderRadius: '50%', // Valor por defecto para hacerla redonda
};

export default ImagenConTexto;
