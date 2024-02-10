import React, { useState } from "react";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useRouter } from "next/navigation";
// import Time from "./Time";

import styles from "../styles/BookAppointment.module.css";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  clinic: "",
  date: "",
  time: "",
};

function BookAppointment() {
  const router = useRouter();
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log("hello", values);
    router.push("/thank-you");
  };

  return (
    <form className={styles.book_appointment_wrapper} onSubmit={onHandleSubmit}>
      <header className={styles.header}>Book Your Appointment</header>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <TextField
          id="standard-helperText"
          label="Name"
          variant="standard"
          name="name"
          value={values.name}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <TextField
          id="standard-helperText"
          label="Email Address"
          variant="standard"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <TextField
          id="standard-helperText"
          label="Phone Number"
          variant="standard"
          name="phone"
          value={values.phone}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Select a Clinic
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name="clinic"
          value={values.clinic}
          onChange={handleInputChange}
          label="Clinic"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"TrustCare Medical Group"}>
            TrustCare Medical Group
          </MenuItem>
          <MenuItem value={"Premier Health Center"}>
            Premier Health Center
          </MenuItem>
          <MenuItem value={"EliteCare Clinic"}>EliteCare Clinic</MenuItem>
        </Select>
      </FormControl>
      <div className={styles.date_time_section}>
        <p className={styles.title}>Pick a Date</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              // name="date"
              value={values.date}
              onChange={(e) => {
                setValues({
                  ...values,
                  "date": e,
                });
              }}
              format="DD-MM-YYYY"
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black",
                      },
                    },
                  }}
                />
              )}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className={styles.date_time_section}>
        <p className={styles.title}>Pick a Time</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* <DemoItem> */}
          <TimePicker
            // name="time"
            value={values.time}
            onChange={(e) => {
              setValues({
                ...values,
                "time": e,
              });
            }}
          />
          {/* </DemoItem> */}
        </LocalizationProvider>
      </div>
      <p className={styles.confirmation_text}>
        To confirm the appointment, Please proceed to pay a sum of ₹200. This
        amount will be deducted at the time of your billing
      </p>
      <Button
        variant="text"
        pill
        sx={{
          fontWeight: 600,
          fontSize: "24px",
          color: "#FFFFFF",
          backgroundColor: "#357A75",
          borderRadius: "80px",
          textTransform: "none",
          height: "63px",
          width: "482px",
          "&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#357A75",
          },
        }}
        onClick={onHandleSubmit}
      >
        Confirm My Appointment
      </Button>
      <div className={styles.refund_terms_section}>
        <p className={styles.refund_terms_text}>Refund Policy</p>
        <p className={styles.refund_terms_text}>Terms & conditions</p>
      </div>
    </form>
  );
}

export default BookAppointment;
