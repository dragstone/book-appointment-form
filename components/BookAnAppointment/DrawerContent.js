import React, { useState } from "react";
import styles from "../../styles/BookAnAppointment/DrawerContent.module.css";
import BookAppointment from "./BookAnAppointmentForm";
import CloseIcon from "@mui/icons-material/Close";
import Confirmation from "./Confirmation";

function DrawerContent({ formSubmit, setFormSubmit, setOpen }) {
  // const handleSubmit = (e, values) => {
  //   e.preventDefault();
  //   if (
  //     values.name !== "" &&
  //     values.email !== "" &&
  //     values.phone !== "" &&
  //     values.date !== "" &&
  //     values.time !== ""
  //   ) {
  //     console.log("hello", values);
  //     setFormSubmit(true);
  //   }
  //   return;
  // };

  return (
    <div className={styles.drawer_container}>
      <div className={styles.drawer_header}>
        <CloseIcon sx={{ fontSize: 36 }} onClick={() => setOpen(false)} />
        <div className={styles.drawer_title_section}>
          <p className={styles.drawer_title}>Book An Appointment</p>
        </div>
      </div>
      {!formSubmit ? (
        <BookAppointment setFormSubmit={setFormSubmit} />
      ) : (
        <Confirmation />
      )}
    </div>
  );
}

export default DrawerContent;
