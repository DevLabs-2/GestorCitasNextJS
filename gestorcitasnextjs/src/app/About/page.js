'use client'
import { useState } from 'react';
import styles from '../Styles/page.module.css'
import Link from 'next/link.js';
import ImagenConTexto from '@/components/perfil';

export default function Contacto() {
return (
    <>
    <div className={styles.app} style={{justifyContent:'space-around'}}> 
    <ImagenConTexto
                src={'julian.jpg'}
                borderRadius="50%"
                texto="Yo soy Julián Furland Otero y me dedico a la logica del programa"
            />
            <ImagenConTexto
                src={'maxi.jpeg'} 
                borderRadius="50%" 
                texto="Mi nombre es Maximiliano Sher y me especializo en el diseño de la página."
            />
    </div>
</>
);
}