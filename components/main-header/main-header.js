import Link from 'next/link';
import LogoImage from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';

const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={LogoImage} priority />
                    Next Level Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">Browse the meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default MainHeader;
