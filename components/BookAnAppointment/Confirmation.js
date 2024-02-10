import React from "react";
import styles from "../../styles/BookAnAppointment/Confirmation.module.css";
function Confirmation() {
  return (
    <div className={styles.thankyou_section}>
      <header className={styles.header}>Thank You!</header>
      <p className={styles.sub_text_1}>Your Appointment is confirmed</p>
      <p className={styles.sub_text_1}>
        Please check your email address for appointment details
      </p>
      <p className={styles.sub_text_2}>
        Please note if there is change in date of appointment. We will contact
        you and share the details.
      </p>
    </div>
  );
}

export default Confirmation;
