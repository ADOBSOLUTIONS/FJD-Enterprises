import styles from "./testimonials.module.css";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonialsIntro}>
        <h2>Testimonials</h2>
        <h3>Built on Trust</h3>
        <p>
          Discover what our clients are saying about our commitment to quality,
          trust, and exceptional craftsmanship.
        </p>
      </div>
      <div className={styles.testimonialsCard}>
        <div className={styles.testimonialsStars}>
          <FaStar size={18} color="var(--orange-dark)" />
          <FaStar size={18} color="var(--orange-dark)" />
          <FaStar size={18} color="var(--orange-dark)" />
          <FaStar size={18} color="var(--orange-dark)" />
          <FaStar size={18} color="var(--orange-dark)" />
        </div>
        <p>
          We couldn&apos;t be happier with the work done by FJD. From start to
          finish, their team was professional, attentive, and detail-oriented.
          They delivering a beautiful and sturdy structure on time and within
          budget. Highly recommend!
        </p>
        <div className={styles.testimonialsAvatar}>
          <img src="/images/testimonials/samara.jpeg" alt="testimonial 1" />
          <p>Samara J. Collet</p>
        </div>
        <img
          src="/images/testimonials/aspas_blue.png"
          alt="aspas"
          className={styles.aspas}
        />
      </div>

      <div className={styles.testimonialsCard}>
        <div className={styles.testimonialsStars}>
          <FaStar size={18} color="var(--orange-dark)" />
          <FaStar size={18} color="var(--orange-dark)" />
          <FaStar size={18} color="var(--orange-dark)" />
          <FaStar size={18} color="var(--orange-dark)" />
          <FaStar size={18} color="var(--orange-dark)" />
        </div>
        <p>
          The team at FJD exceeded our expectations! Their dedication to quality
          made the entire process stress-free. The finished project is not only
          stunning but also built to last.
        </p>
        <div className={styles.testimonialsAvatar}>
          <img src="/images/testimonials/arthur.jpeg" alt="testimonial 1" />
          <p>Arthur Oliveira Batista</p>
        </div>
        <img
          src="/images/testimonials/aspas_blue.png"
          alt="aspas"
          className={styles.aspas}
        />
      </div>
    </div>
  );
}
