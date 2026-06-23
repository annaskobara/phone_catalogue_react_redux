import style from './Footer.module.scss';
import arrowUp from '../../assets/icons/Chevron (Arrow Right).png';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  const scrollToTop = () => {
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
  };

  const links = [
    { title: 'GITHUB', path: 'https://github.com/annaskobara' },
    { title: 'CONTACTS', path: 'https://github.com/annaskobara' },
    { title: 'RIGHTS', path: 'https://github.com/annaskobara' },
  ];

  return (
    <footer className={style.footer}>
      <NavLink to="/" className={style.header__logoLink}>
        <img
          src="img/Logo/Logo.png"
          alt="Logo"
          className={style.footer__logo}
        />
      </NavLink>

      <ul className={style.footer__list}>
        {links.map(link => (
          <li key={link.title} className={style.footer__item}>
            <a
              className={style.footer__link}
              href={link.path}
              target="_blank"
              rel="noreferrer"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      <div
        className={style.footer__container}
        onClick={scrollToTop}
        style={{ cursor: 'pointer' }}
      >
        <p className={style.footer__text}>Back to top</p>
        <img
          src={arrowUp}
          alt="Scroll to top"
          className={style.footer__arrow}
        />
      </div>
    </footer>
  );
};
