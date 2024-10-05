import styles from "./Header.module.css"

interface HeaderProps {
    className?: string;
    href: string;
    siteTitle: string;

    linkName: string;

}

const Header:React.FC<HeaderProps> = ({linkName,siteTitle, href}) => {

    return ( 
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <div>{siteTitle}</div>
            <a href={href} target="_blank" className={styles.headerLink}>{linkName}</a>
          </div>

        </header>
     );
}
 
export default Header;