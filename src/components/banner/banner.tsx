import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div>
          <h1>
            Your dream transformation <br />
            starts here!
          </h1>
          <p>
            Let&apos;s Get Started Today! Call us now or request a free
            consultation to begin your renovation journey. Your dream space is
            just a call away!
          </p>
        </div>
        {/* <button
          className={styles.buttonStyledBlue}
          onClick={() => scrollToSection(section5Ref, 140)}
        >
          Request a Quote &nbsp; <FaArrowRight />
        </button> */}
      </div>
    </div>
  );
}
