'use client'
import { useState } from 'react';
import styles from '../Styles/page.module.css'
import Link from 'next/link.js';
import Paragraph from '@/components/Paragraph';
import Boton from '@/components/Boton';

export default function Contacto() {
return (
    <>
    <div className={styles.app} style={{flexDirection:"column"}}> 
    <h1>Contacto</h1> 
        <form style={{padding:'1rem', width:'70%', backgroundColor:'#00000020', borderRadius:'0.5rem', display:'flex', flexDirection:'column', marginTop:'3em'}}>
            <Paragraph text='Nombre' textAlign='left'/>
            <input type='text' style={{border:'1px #00000040 solid', borderRadius:'0.3rem', fontSize:'18px', fontFamily:'Segoe UI'}}></input>
            <Paragraph text='Email' textAlign='left'/>
            <input type='text' style={{border:'1px #00000040 solid', borderRadius:'0.3rem', fontSize:'18px', fontFamily:'Segoe UI'}}></input>
            <Paragraph text='Mensaje' textAlign='left'/>
            <textarea style={{resize:'none', border:'1px #00000040 solid', borderRadius:'0.3rem', paddingBottom:'3rem', fontSize:'20px', fontFamily:'Segoe UI'}}></textarea>

        </form>
        <Boton text={"Enviar"} onclick={() => {alert("Gracias por Contactarnos!")}} width={"6rem"} height={"3rem"} borderRadius={"0.5rem"} marginTop={"3rem"} backgroundColor={"#00ddff"}/>
    </div>
</>
);
}