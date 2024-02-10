import React, { useState } from "react";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import styles from "../../styles/BookAnAppointment/BookAppointmentForm.module.css";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  clinic: "",
  date: "",
  time: "",
};
const initialErrors = {
  name: false,
  email: false,
  phone: false,
  clinic: false,
  date: false,
  time: false,
};

function BookAppointmentForm({ setFormSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (e.target.value !== "") {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (
      values.name !== "" &&
      values.email !== "" &&
      values.phone !== "" &&
      values.date !== "" &&
      values.time !== ""
    ) {
      setFormSubmit(true);
    } else if (values.name === "") {
      setErrors({ ...errors, name: true });
    } else if (values.email === "") {
      setErrors({ ...errors, email: true });
    } else if (values.phone === "") {
      setErrors({ ...errors, phone: true });
    } else if (values.clinic === "") {
      setErrors({ ...errors, clinic: true });
    } else if (values.date === "") {
      setErrors({ ...errors, date: true });
    } else if (values.time === "") {
      setErrors({ ...errors, time: true });
    }
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
          error={errors.name ? "This field is required" : null}
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
          error={errors.email ? "This field is required" : null}
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
          error={errors.phone ? "This field is required" : null}
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
          error={errors.clinic ? "This field is required" : null}
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
          <DatePicker
            slotProps={{
              textField: {
                size: "small",
                // error: false,
                error: errors.date ? "This field is required" : null,
                variant: "standard",
              },
            }}
            value={values.date}
            onChange={(e) => {
              setValues({
                ...values,
                "date": e,
              });
              if (e !== "") {
                setErrors({
                  ...errors,
                  "date": false,
                });
              }
            }}
            format="DD-MM-YYYY"
            renderInput={(params) => (
              <TextField {...params} className="myDatePicker" />
            )}
          />
        </LocalizationProvider>
      </div>
      <div className={styles.date_time_section}>
        <p className={styles.title}>Select a Time</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            slotProps={{
              textField: {
                size: "small",
                error: errors.time ? "This field is required" : null,
                variant: "standard",
              },
            }}
            value={values.time}
            onChange={(e) => {
              setValues({
                ...values,
                "time": e,
              });
              if (e !== "") {
                setErrors({
                  ...errors,
                  "time": false,
                });
              }
            }}
          />
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
          width: "100%",
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

export default BookAppointmentForm;
