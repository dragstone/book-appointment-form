import React, { useState } from "react";
import styles from "../styles/Appointments.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BookAnAppointmentTab from "./BookAnAppointment/BookAnAppointmentTab";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Appointments() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles.wrapper}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Book Appointments"
              {...a11yProps(0)}
              sx={{ fontSize: "18px", fontWeight: 400, textTransform: "none" }}
            />
            <Tab label="Upcoming Appointments" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <BookAnAppointmentTab />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Upcoming Appointments
        </CustomTabPanel>
      </Box>
    </div>
  );
}

export default Appointments;
