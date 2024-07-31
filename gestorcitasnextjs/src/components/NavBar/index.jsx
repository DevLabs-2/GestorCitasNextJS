import Link from 'next/link';
import styles from '../../app/Styles/Navbar.module.css';


const Navbar = () => {
return (
<div className={styles.sidebar}>
    <h2>Navigation</h2>
    <ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="./About">About</Link></li>
    <li><Link href="/Reservas">Reservas</Link></li>
    <li><Link href="/Contacto">Contact</Link></li>
    </ul>
</div>
);
};

export default Navbar;
