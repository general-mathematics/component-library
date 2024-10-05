import styles from '../ProjectMetadata/ProjectMetadata.module.css';

interface ProjectMetadataProps{
  type:string;
  year:string;
  medium: string;
  details: string;
  

}

const ProjectMetadata:React.FC<ProjectMetadataProps> = ({type, year, medium, details} ) => {
  return (
    <section className={styles.projectMetadataWrapper}>
      <div className={styles.projectMetadataContainer}>
        <p>
          Year:         <span className={styles.data}> {year}    </span>  <br />
          Project Type: <span className={styles.data}> {type} </span>  <br />
          Medium:       <span className={styles.data}> {medium}  </span>  <br />
          Details:      <span className={styles.data}> {details} </span>  
        </p>
      </div>
    </section>

  );
}
 
export default ProjectMetadata;
