"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { MdOutlinePhoneInTalk, MdOutlineMail } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import {
  FaFacebookF,
  FaInstagram,
  FaArrowRight,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";
import { LuSquareMenu } from "react-icons/lu";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/carousel/carousel";

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

  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 20;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

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
              <MdOutlinePhoneInTalk size={30} color="var(--white)" />
              <div>
                <p>Call Now</p>
                <p>{PhoneNumber}</p>
              </div>
            </div>

            <div className={styles.container}>
              <MdOutlineMail size={30} color="var(--white)" />
              <div>
                <p>Mail Us</p>
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

      {/*-------------------------------------BANNER-------------------------------------*/}
      <div className={styles.banner} ref={section1Ref}>
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
          <button
            className={styles.buttonStyledBlue}
            onClick={() => scrollToSection(section5Ref, 140)}
          >
            Request a Quote &nbsp; <FaArrowRight />
          </button>
        </div>
      </div>

      {/*-------------------------------------OUR SERVICES--------------------------------*/}
      <div className={styles.ourServices} ref={section2Ref}>
        <div className={styles.cardsGrid}>
          <div className={styles.cardServiceText}>
            <h2>Our Services</h2>
            <p>
              From concept to completion, we offer expert services to transform
              your living or working space. Whether modernizing, restoring
              charm, or bringing creative ideas to life, we deliver exceptional
              results. Our team ensures precision, quality, and attention to
              every detail.
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

      {/*----------------------------------------ABOUT US--------------------------------*/}
      <div className={styles.aboutUs} ref={section3Ref}>
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
            It all began in 2022 when we decided to migrate abroad. Upon
            arriving in Canada, we were amazed by the wealth of opportunities to
            start a business. The lack of excessive bureaucracy and the ease of
            setting up operations made the process seamless. With the country
            experiencing significant growth in civil construction—and leveraging
            my extensive knowledge in this field—our project took shape. This is
            how FJD Enterprise was born. Now, four years later, we continue to
            grow, focusing on continuous improvement and delivering high-quality
            services to our clients.
          </p>
        </div>
      </div>

      {/*----------------------------------------VALUES--------------------------------*/}
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
              <img
                src="/images/values/architect.png"
                alt="image of a project"
              />
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
              <img
                src="/images/values/brickwall.png"
                alt="image of a project"
              />
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

      {/*----------------------------------------GALLERY--------------------------------*/}
      <div className={styles.gallery} ref={section4Ref}>
        <h2>Welcome to our latest projects...</h2>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>

      {/*-----------------------------------TESTIMONIALS--------------------------------*/}
      <div className={styles.testimonials}>
        <div className={styles.testimonialsIntro}>
          <h2>Testimonials</h2>
          <h3>Built on Trust</h3>
          <p>
            Discover what our clients are saying about our commitment to
            quality, trust, and exceptional craftsmanship.
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
            The team at FJD exceeded our expectations! Their dedication to
            quality made the entire process stress-free. The finished project is
            not only stunning but also built to last.
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
      {/*-----------------------------------PARTNERS-------------------------------*/}

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

      {/*-----------------------------------REQUEST A QUOTE------------------------------------*/}
      <div className={styles.requestQuote} ref={section5Ref}>
        <img src="images/request_quote/working.jpg" alt="" />

        <div className={styles.formContainer}>
          <h2>Request a Quote</h2>
          <p>
            Fill out the form below, and we&apos;ll reach out to you as soon as
            possible. Let&apos;s work together to bring your projects to life!
          </p>

          {/* <form onSubmit={handleSubmit}> */}
          <form className={styles.form}>
            <div className={styles.name}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                // value={formData.nome}
                // onChange={handleChange}
              />
              {/* {errors.nome && <p style={{ color: 'red' }}>{errors.nome}</p>} */}
            </div>

            <div className={styles.email}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
              />
              {/* {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>} */}
            </div>

            <div className={styles.phone}>
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                id="phone"
                name="phone"
                // value={formData.phone}
                // onChange={handleChange}
              />
              {/* {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>} */}
            </div>

            <div className={styles.address}>
              <label htmlFor="phone">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                // value={formData.address}
                // onChange={handleChange}
              />
              {/* {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>} */}
            </div>

            <div className={styles.description}>
              <label htmlFor="mensagem">Description</label>
              <textarea
                id="description"
                name="description"
                // value={formData.mensagem}
                // onChange={handleChange}
              />
              {/* {errors.mensagem && <p style={{ color: 'red' }}>{errors.mensagem}</p>} */}
            </div>
          </form>
          <div className={styles.quoteFooter}>
            <button type="submit" className={styles.buttonStyledOrange}>
              Submit Request &nbsp; <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/*-------------------------------------CONTACT-------------------------------------*/}
      <div className={styles.contactContainer} ref={section6Ref}>
        <div className={styles.contact}>
          <div className={styles.main}>
            <h2>Contact Us</h2>
            <h3>Let’s discuss how we can help you achieve your goals!</h3>

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
                <FaWhatsapp
                  color="var(--orange-dark)"
                  className={styles.icon}
                />
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
                  <h4>Mail Us</h4>
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
                  <FaFacebookF size={25} className={styles.icon} />
                </Link>
              </li>
              <li>
                <Link href={InstagramLink} target="_blank">
                  <FaInstagram size={25} className={styles.icon} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*----------------------------------------CAREERS-----------------------------------*/}
      <div className={styles.careers}>
        Do you want to be part of <b>FJD</b>&apos;s team? Send us your resume to
        the e-mail <b>{EmailInfo}</b> and we will contact you!
      </div>

      {/*-----------------------------------------FOOTER------------------------------------*/}
      <footer>© Copyright FJD Enterprises | All Rights Reserved 2025</footer>
    </main>
  );
}
