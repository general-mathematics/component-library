import styles from './ProjectMetadata.module.css';

interface ProjectMetadataProps{
  type:string;
  year:string;
  status: string;
  isText?: boolean;
  

}

const ProjectMetadata:React.FC<ProjectMetadataProps> = ({type, year, status, isText} ) => {
  return (
    <section className={isText ? styles.projectMetadataWrapperText:styles.projectMetadataWrapper}>
      <div className={styles.projectMetadataContainer}>
        <p className="bold no-margin">Field Notes Details </p>
        <p>Year(s):       <span className={styles.data}> {year}    </span>  <br />
           Type:          <span className={styles.data}> {type} </span>  <br />
           Status:        <span className={styles.data}> {status} </span>  
        </p>
      </div>
    </section>

  );
}
 
export default ProjectMetadata;
