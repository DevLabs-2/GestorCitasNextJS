'use client'
import Listado from '../components/Listado/index.jsx'
import Formulario from '../components/Formulario/Index.jsx';
import { useState, useEffect } from 'react';
import Modal from '../components/Modal/index.jsx';
import styles from './Styles/page.module.css'
import Link from 'next/link.js';
export default function Home() {
return (
  <>
  <div className={styles.app}> 
    <h1>Bienvenidos</h1>
  </div>
</>
);
}
