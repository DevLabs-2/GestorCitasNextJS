'use client'
import { useState } from 'react';
import styles from '../Styles/page.module.css'
import Link from 'next/link.js';
import ImagenConTexto from '@/components/perfil';
import miImagen from '../public/bg.jpg';
export default function Contacto() {
return (
    <>
    <div className={styles.app}> 
    <ImagenConTexto
                src={miImagen} // Usa la imagen importada
                alt="Ejemplo"
                borderRadius="50%" // Cambia este valor para personalizar el border radius
                texto="Este es un texto debajo de la imagen."
            />
            <ImagenConTexto
                src={miImagen} // Usa la misma imagen o cambia a otra
                alt="Ejemplo 2"
                borderRadius="10px" // Cambia este valor para personalizar el border radius
                texto="Este es otro ejemplo con un borde cuadrado."
            />
    </div>
</>
);
}