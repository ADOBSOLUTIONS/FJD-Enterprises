import React from "react";
import styles from "./banner.module.css";
import { FaArrowRight } from "react-icons/fa";

interface BannerProps {
  scrollToSection: () => void;
}

export default function Banner({ scrollToSection }: BannerProps) {
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
        <button className={styles.buttonStyledBlue} onClick={scrollToSection}>
          Request a Quote &nbsp; <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
