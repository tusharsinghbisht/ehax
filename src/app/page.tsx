import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.header}>Welcome to EHAX.</h1>
        <p className={styles.desc}>the offcial ethical hacking and cybersecurity society of DTU</p>
      </div>
    </div>
  );
}
