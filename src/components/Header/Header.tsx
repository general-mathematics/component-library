import styles from "./Header.module.css"

interface HeaderProps {
    className?: string;
    href?: string;
    siteTitle: string;

    linkName?: string;

}

const Header:React.FC<HeaderProps> = ({linkName,siteTitle, href}) => {

    return ( 
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <div><a href="/">{siteTitle}</a></div>
            <a className={styles.rightLink} href={href} target="_blank">{linkName}</a>
          </div>

        </header>
     );
}
 
export default Header;