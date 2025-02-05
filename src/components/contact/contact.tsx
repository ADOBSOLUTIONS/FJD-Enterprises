import styles from "./contact.module.css";
import Link from "next/link";
import { LuMapPin } from "react-icons/lu";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhoneInTalk, MdOutlineMail } from "react-icons/md";

export default function Contact() {
  const PhoneNumber = "(647) 573-7518";
  const WhatsappNumber = "(437) 427-4917";
  const AddressInfo = "855 Ellesmere Rd, Scarborough - ON";
  const EmailInfo = "dpsdasilva@hotmail.com";
  const InstagramLink =
    "https://www.instagram.com/fjdenterprises?igsh=MXg4dHM4Mm91ODcwMQ%3D%3D&utm_source=qr";
  const FacebookLink = "";

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contact}>
        <div className={styles.main}>
          <h2>Contact Us</h2>
          <h3>Let&apos;s discuss how we can help you achieve your goals!</h3>

          <div className={styles.infoContainer}>
            <div className={styles.info}>
              <MdOutlinePhoneInTalk
                color="var(--orange-dark)"
                className={styles.icon}
              />
              <div>
                <h4>Call Us</h4>
                <p>{PhoneNumber}</p>
                <span className={styles.time}> 8am to 5pm</span>
              </div>
            </div>

            <div className={styles.info}>
              <FaWhatsapp color="var(--orange-dark)" className={styles.icon} />
              <div>
                <h4>Whatsapp</h4>
                <p>{WhatsappNumber}</p>
                <span className={styles.time}> 8am to 5pm</span>
              </div>
            </div>

            <div className={styles.info}>
              <MdOutlineMail
                color="var(--orange-dark)"
                className={styles.icon}
              />
              <div>
                <h4>Email Us</h4>
                <p>{EmailInfo}</p>
              </div>
            </div>

            <div className={styles.info}>
              <LuMapPin color="var(--orange-dark)" className={styles.icon} />
              <div>
                <h4>Our Location</h4>
                <p>{AddressInfo}</p>
              </div>
            </div>
          </div>
        </div>
        {/*---------------FOLLOW US ON---------------*/}
        <div className={styles.contactSocial}>
          <h5>Follow Us On:</h5>
          <ul className={styles.socialICons}>
            <li>
              <Link href={FacebookLink} target="_blank">
                <FaFacebookF className={styles.icon} />
              </Link>
            </li>
            <li>
              <Link href={InstagramLink} target="_blank">
                <FaInstagram className={styles.icon} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
