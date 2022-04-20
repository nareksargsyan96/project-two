import { FooterLink } from './Component/FooterList/FooterList';
import { FooterText } from './Component/FooterText/FooterText';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <FooterLink />
        <FooterText />
      </div>
    </footer>
  );
};
