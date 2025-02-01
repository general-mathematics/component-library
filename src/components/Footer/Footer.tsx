// components/Footer.js
import styles from '../Footer/Footer.module.css';

interface FooterProps {
  siteName: string;
  year: number;
  href1: string;
  href2: string;
  href3: string;
  href4: string;
  linkname1: string;
  linkname2?: string;
  linkname3?: string;
  linkname4?: string;
}

const Footer: React.FC<FooterProps> = ({
  siteName,
  year,
  href1,
  href2,
  href3,
  href4,
  linkname1,
  linkname2,
  linkname3,
  linkname4,
}) => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={styles.footerContainer}>
        {/* Left side links */}
        <ul className={styles.navLinks}>
          <li>
            <a href={href1}>{linkname1}</a>
          </li>
          {linkname2 && (
            <li>
              <a href={href2}>{linkname2}</a>
            </li>
          )}
          {linkname3 && (
            <li>
              <a href={href3}>{linkname3}</a>
            </li>
          )}
          {linkname4 && (
            <li>
              <a href={href4}>{linkname4}</a>
            </li>
          )}
        </ul>

        {/* Right side: Copyright and Privacy */}
        <div className={styles.copyrightPrivacy}>
          <div className={styles.copyright}>
            © {year} {siteName}
          </div>
          <div className={styles.privacy}>Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
