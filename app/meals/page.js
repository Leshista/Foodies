import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';

const MealsPage = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created{' '}
                    <span className={classes.highlight}>by you</span>
                    <p>
                        Choose your favourite recipe and cook it yourself. It is
                        easy and fun!
                    </p>
                    <p className={classes.cta}>
                        <Link href="/meals/share">Share</Link>
                    </p>
                </h1>
            </header>
            <main className={classes.main}>
                <MealsGrid meals={[]} />
            </main>
        </>
    );
};

export default MealsPage;
