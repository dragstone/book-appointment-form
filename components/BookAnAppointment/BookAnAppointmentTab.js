import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Drawer from "@mui/material/Drawer";
import DrawerContent from "./DrawerContent";
import styles from "../../styles/BookAnAppointment/BookAnAppointmentTab.module.css";

function BookAnAppointmentTab() {
  const [open, setOpen] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  return (
    <>
      <div className={styles.book_appointments}>
        <p className={styles.title}>Book Your Appointments Using + below </p>
        <div className={styles.add_icon_container}>
          <p className={styles.book_appointment_text}>Book An Appointment</p>
          <span className={styles.icon_section}>
            <AddCircleIcon
              onClick={() => {
                setOpen(true);
                setFormSubmit(false);
              }}
              sx={{ fontSize: 72, color: "#357A75" }}
            />
          </span>
        </div>
      </div>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <DrawerContent
          formSubmit={formSubmit}
          setFormSubmit={setFormSubmit}
          setOpen={setOpen}
        />
      </Drawer>
    </>
  );
}

export default BookAnAppointmentTab;
