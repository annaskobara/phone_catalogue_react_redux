import './App.scss';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './component/Footer/Footer';
import { Headers } from './component/Header/Header';
import { useEffect } from 'react';

export const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
      document
        .querySelector('.container')
        ?.scrollTo({ top: 0, behavior: 'smooth' });
      document.querySelector('.main')?.scrollTo({ top: 0, behavior: 'smooth' });

      const topElement =
        document.querySelector('header') ||
        document.querySelector('.container') ||
        document.body;

      topElement?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="container">
      <Headers />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
