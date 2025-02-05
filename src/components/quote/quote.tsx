import styles from "./quote.module.css";
import { FaArrowRight } from "react-icons/fa";

export default function Quote() {
  return (
    <div className={styles.requestQuote}>
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
  );
}
