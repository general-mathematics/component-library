import styles from './ProjectOverview.module.css';

interface ProjectOverviewProps {
  children: React.ReactNode; // To accept any content
  isText: boolean;

}

const ProjectOverview:React.FC<ProjectOverviewProps> = ({children, isText}) => {
  return ( 
    <section className={isText? styles.projectOverviewWrapperText:styles.projectOverviewWrapper}>
      <div className={styles.projectOverviewContainer}>
        {children}
      </div>
    </section>

   );
}
 
export default ProjectOverview;