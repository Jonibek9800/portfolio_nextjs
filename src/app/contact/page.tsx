import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <div className={styles.contact_header}>
        <h1 className={styles.contact_header_title}>CONTACT ME</h1>
        <span className={styles.contact_header_content}>SAY HELLO TO ME</span>
      </div>
      <form className={styles.contact_form}>
        <h3 className={styles.contact_form_title}>Contact me</h3>
        <div className={styles.contact_form_name_wrap}>
          <input
            className={`${styles.custom_input} ${styles.contact_form_name_input}`}
            placeholder="Name"
            name="name"
            type="text"
          />
          <input
            className={`${styles.custom_input} ${styles.contact_form_email_input}`}
            placeholder="Email"
            name="email"
            type="email"
          />
        </div>
        <input
          className={`${styles.custom_input} ${styles.contact_form_desc_input}`}
          placeholder="Message"
          name="description"
          type="text"
        />
        <button className={styles.contact_form_btn}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
