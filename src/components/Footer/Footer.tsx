import styles from './Footer.module.css';

interface FooterProps {
  year: number;
  companyName: string;
  email: string;
  pageContainer:boolean;
}

const Footer: React.FC<FooterProps> = ({ year, companyName, email, pageContainer=true }) => {
  return (
    <>
    <footer className={`${styles.footer} ${pageContainer ? "": "addContainerMargins"}`}>
      <div className={styles.email}>
        {email}
      </div>

    <div className={styles.copyrightPrivacy}>
      <div className={styles.copyright}>
        &copy; {companyName} {year}  
      </div>
      <div>
        <a className={styles.privacy} href="/privacy">Privacy</a>
      </div>
    </div>

    </footer>
    </>

  );
};

export default Footer;
