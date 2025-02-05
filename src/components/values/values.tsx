import styles from "./values.module.css";

export default function Values() {
  return (
    <div className={styles.values}>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.valueImage}>
            <img src="/images/values/engineer.png" alt="image of a project" />
          </div>
          <h3>Mission</h3>
          <p>
            To deliver services that exceed expectations, driven by expertise,
            innovation, and excellence, while supporting community growth and
            development.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.valueImage}>
            <img src="/images/values/architect.png" alt="image of a project" />
          </div>
          <h3>Vision</h3>
          <p>
            To be a trusted leader in civil construction, known for quality,
            innovation, and growth, while inspiring others through our
            entrepreneurial success.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.valueImage}>
            <img src="/images/values/brickwall.png" alt="image of a project" />
          </div>
          <h3>Values</h3>
          <p>
            We value excellence, innovation, and integrity, ensuring superior
            results and accountability. Committed to growth and community, we
            foster trust and lasting partnerships.
          </p>
        </div>
      </div>
    </div>
  );
}
