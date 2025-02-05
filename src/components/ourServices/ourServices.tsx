import styles from "./ourServices.module.css";

export default function OurServices() {
  return (
    <div className={styles.ourServices}>
      <div className={styles.cardsGrid}>
        <div className={styles.cardServiceText}>
          <h2>Our Services</h2>
          <p>
            From concept to completion, we offer expert services to transform
            your living or working space. Whether modernizing, restoring charm,
            or bringing creative ideas to life, we deliver exceptional results.
            Our team ensures precision, quality, and attention to every detail.
          </p>
        </div>
        <div className={styles.cardService1}>
          <div className={styles.text}>
            <h3>Design</h3>
            <p className={styles.description}>
              Tailored concepts that reflect your style and functional needs.
            </p>
          </div>
        </div>
        <div className={styles.cardService2}>
          <div className={styles.text}>
            <h3>Renovations</h3>
            <p className={styles.description}>
              Seamlessly updating interiors and exteriors with attention to
              detail.
            </p>
          </div>
        </div>
        <div className={styles.cardService3}>
          <div className={styles.text}>
            <h3>Drywall</h3>
            <p className={styles.description}>
              Installation and Repairs. Ensuring smooth, durable walls and
              ceilings.
            </p>
          </div>
        </div>
        <div className={styles.cardService4}>
          <div className={styles.text}>
            <h3>Tile Work</h3>
            <p className={styles.description}>
              Stunning flooring, backsplashes, and custom patterns that add
              character.
            </p>
          </div>
        </div>
        <div className={styles.cardService5}>
          <div className={styles.text}>
            <h3>Masonry</h3>
            <p className={styles.description}>
              Quality stone and brickwork for timeless strength and beauty.
            </p>
          </div>
        </div>
        <div className={styles.cardService6}>
          <div className={styles.text}>
            <h3>Cleaning Services</h3>
            <p className={styles.description}>
              A spotless finish to maintain the integrity of your new or
              revamped space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
