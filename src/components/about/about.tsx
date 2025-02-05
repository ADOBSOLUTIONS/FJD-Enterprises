import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.aboutUs}>
      <img
        src="/images/about/triangle.png"
        alt="efect triangle"
        className={styles.triangle}
      />
      <img
        src="/images/logos/logo-orange-2.jpeg"
        alt="FJD logo"
        className={styles.aboutUsLogo}
      />
      <div className={styles.aboutUsText}>
        <h2>About Us</h2>
        <p>
          It all began in 2022 when we decided to migrate abroad. Upon arriving
          in Canada, we were amazed by the wealth of opportunities to start a
          business. The lack of excessive bureaucracy and the ease of setting up
          operations made the process seamless. With the country experiencing
          significant growth in civil construction—and leveraging my extensive
          knowledge in this field—our project took shape. This is how FJD
          Enterprise was born. Now, four years later, we continue to grow,
          focusing on continuous improvement and delivering high-quality
          services to our clients.
        </p>
      </div>
    </div>
  );
}
