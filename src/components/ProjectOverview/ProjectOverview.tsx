import styles from './ProjectOverview.module.css';

interface ProjectOverviewProps {
  children: React.ReactNode; // To accept any content

}

const ProjectOverview = ({children}) => {
  return ( 
    <section className={styles.projectOverviewWrapper}>
      <div className={styles.projectOverviewContainer}>
        {children}
      </div>
    </section>

   );
}
 
export default ProjectOverview;