import styles from "./gallery.module.css";
import EmblaCarousel from "@/components/carousel/carousel";
import { EmblaOptionsType } from "embla-carousel";

export default function Gallery() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 20;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className={styles.gallery}>
      <h2>Welcome to our latest projects...</h2>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
