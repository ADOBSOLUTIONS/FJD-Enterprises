import styles from "./partners.module.css";

export default function Partners() {
  return (
    <div className={styles.partners}>
      <img
        src="/images/partners/blair.jpeg"
        alt="blair logo"
        className={styles.blair}
      />
      <img
        src="/images/partners/blok.jpeg"
        alt="blok-lok logo"
        className={styles.blok}
      />
      <img
        src="/images/partners/brampton.jpeg"
        alt="brampton brick logo"
        className={styles.brampton}
      />
      <img
        src="/images/partners/richvale.jpeg"
        alt="richvale york block inc logo"
        className={styles.richvale}
      />
      <img
        src="/images/partners/spec.jpeg"
        alt="spec logo"
        className={styles.spec}
      />
    </div>
  );
}
