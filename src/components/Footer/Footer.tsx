import styles from './Footer.module.css';

interface FooterProps {
  year: number;
  companyName: string;
  email: string;
}

const Footer: React.FC<FooterProps> = ({ year, companyName, email }) => {
  return (
    <>
    <footer className={`full-bleed ${styles.footer}`}>
      <div className={styles.email}>
        {email}
      </div>
      <div className={styles.copyright}>
      &copy; {companyName} {year}
      </div>
    </footer>
    </>

  );
};

export default Footer;
