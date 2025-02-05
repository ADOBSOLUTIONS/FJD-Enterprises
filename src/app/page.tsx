"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { MdOutlinePhoneInTalk, MdOutlineMail } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { LuSquareMenu } from "react-icons/lu";
import Values from "@/components/values/values";
import Testimonials from "@/components/testimonials/testimonials";
import About from "@/components/about/about";
import OurServices from "@/components/ourServices/ourServices";
import Banner from "@/components/banner/banner";
import Partners from "@/components/partners/partners";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Careers from "@/components/careers/careers";
import Gallery from "@/components/gallery/gallery";
import Quote from "@/components/quote/quote";

export default function Home() {
  // -------------------- Contact Info ---------------------------
  const PhoneNumber = "(647) 573-7518";
  const WhatsappNumber = "(437) 427-4917";
  const AddressInfo = "855 Ellesmere Rd, Scarborough - ON";
  const EmailInfo = "dpsdasilva@hotmail.com";
  const InstagramLink =
    "https://www.instagram.com/fjdenterprises?igsh=MXg4dHM4Mm91ODcwMQ%3D%3D&utm_source=qr";
  const FacebookLink = "";
  // -------------------------------------------------------------

  const [displayMenuMobile, setDisplayMenuMobile] = useState(false);

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement | null>,
    headerH = 110
  ) => {
    if (ref.current) {
      const headerHeight = headerH;
      const sectionTop = ref.current.offsetTop - headerHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        {/*----------------------------HEADER BLUE------------------------------------*/}
        <div className={styles.headerBlue}>
          <img
            className={styles.logo}
            src="/images/logos/logo-orange.jpeg"
            alt="JFD logo"
          />
          <div className={styles.headerContact}>
            <div className={styles.container}>
              <MdOutlinePhoneInTalk
                className={styles.icon}
                color="var(--white)"
              />
              <div>
                <p>Call Now</p>
                <p>{PhoneNumber}</p>
              </div>
            </div>

            <div className={styles.container}>
              <MdOutlineMail className={styles.icon} color="var(--white)" />
              <div>
                <p>Email Us</p>
                <p>{EmailInfo}</p>
              </div>
            </div>
          </div>
          <div
            className={styles.menuMobile}
            onClick={() => setDisplayMenuMobile(!displayMenuMobile)}
          >
            <LuSquareMenu size={40} color="var(--gray-light-2)" />
            <div>
              {displayMenuMobile && (
                <ul className={styles.menu}>
                  <li onClick={() => scrollToSection(section1Ref)}>home</li>
                  <li onClick={() => scrollToSection(section2Ref)}>services</li>
                  <li onClick={() => scrollToSection(section3Ref, 150)}>
                    about
                  </li>
                  <li onClick={() => scrollToSection(section4Ref)}>gallery</li>
                  <li onClick={() => scrollToSection(section6Ref)}>contact</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/*--------------------------------HEADER ORANGE-------------------------------*/}
        <div className={styles.headerOrange}>
          <ul className={styles.menu}>
            <li onClick={() => scrollToSection(section1Ref)}>home</li>
            <li onClick={() => scrollToSection(section2Ref)}>services</li>
            <li onClick={() => scrollToSection(section3Ref, 150)}>about</li>
            <li onClick={() => scrollToSection(section4Ref)}>gallery</li>
            <li onClick={() => scrollToSection(section6Ref)}>contact</li>
          </ul>

          <ul className={styles.socialICons}>
            <li>
              <Link href={FacebookLink} target="_blank">
                <FaFacebookF size={20} className={styles.icon} />
              </Link>
            </li>
            <li>
              <Link href={InstagramLink} target="_blank">
                <FaInstagram size={23} className={styles.icon} />
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <div ref={section1Ref}>
        <Banner />
      </div>

      <div ref={section2Ref}>
        <OurServices />
      </div>

      <div ref={section3Ref}>
        <About />
      </div>

      <Values />

      <div ref={section4Ref}>
        <Gallery />
      </div>

      <Testimonials />
      <Partners />

      {/* <div ref={section5Ref}>
        <Quote />
      </div> */}

      <div ref={section6Ref}>
        <Contact />
      </div>

      <Careers />
      <Footer />
    </main>
  );
}
