import styles from "./careers.module.css";

export default function Careers() {
  const EmailInfo = "dpsdasilva@hotmail.com";

  return (
    <div className={styles.careers}>
      Do you want to be part of <b>FJD</b>&apos;s team? Send us your resume to
      the email <b>{EmailInfo}</b> and we will contact you!
    </div>
  );
}
