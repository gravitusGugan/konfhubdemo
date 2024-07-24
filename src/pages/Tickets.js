import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Tab,
  Typography,
} from "@mui/material";
import * as React from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

// Helper function to format currency
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(amount);
};

const TicketCard = ({ title, description, price, isFree }) => (
  <Card
    sx={{
      borderRadius: "20px",
      border: "1px solid rgba(0, 0, 0, 0.2)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s, box-shadow 0.3s",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
      },
      maxWidth: "100%",
      width: {
        xs: "100%",
        sm: "80%",
        md: "60%",
        lg: "50%",
        xl: "40%",
      },
      mx: "auto",
    }}
  >
    <CardContent>
      <Typography variant="h5">
        <u>{title}</u>
      </Typography>
      <Typography variant="body1">{description}</Typography>
      <Link
        href="https://www.google.com/maps?q=KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India"
        target="_blank"
        rel="noopener"
      >
        <LocationOnIcon fontSize="small" />
        KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru,
        Karnataka, India
      </Link>
      <Typography variant="body2">This is additional venue details.</Typography>
      <Typography>Available Till: 31st Aug 2034, 06:00 PM IST</Typography>
      <Typography variant="h5">
        {isFree ? "FREE" : formatCurrency(price)}
      </Typography>
      <Button variant="outlined">Register</Button>
    </CardContent>
  </Card>
);

const Tickets = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgba(211, 211, 211, 0.2)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        textAlign: { xs: "center", md: "left" },
        padding: {
          xs: "16px",
          sm: "32px",
          md: "48px",
          lg: "80px",
          xl: "80px",
        },
      }}
    >
      <Box sx={{ width: "100%", typography: "body1" }} id="tickets">
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              xs: "24px",
              sm: "28px",
              md: "32px",
              lg: "36px",
              xl: "40px",
            },
          }}
        >
          TICKETS
        </Typography>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="FREE" value="1" />
              <Tab label="PAID" value="2" />
              <Tab label="DONATION" value="3" />
              <Tab label="COUPON" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <TicketCard
              title="Free Ticket"
              description="This is a ticket description. This is a free ticket. This ticket is uncategorised."
              price={0}
              isFree={true}
            />
          </TabPanel>
          <TabPanel value="2">
            <TicketCard
              title="Paid Ticket"
              description="This is a ticket description. This is a paid ticket. This ticket is uncategorised."
              price={1000}
            />
          </TabPanel>
          <TabPanel value="3">
            <TicketCard
              title="Donation Ticket"
              description="This is a ticket description. This is a donation ticket. This ticket is uncategorised."
              price={1}
            />
          </TabPanel>
          <TabPanel value="4">
            <TicketCard
              title="Coupon Ticket"
              description="This is a ticket description. This is a coupon ticket. This ticket is uncategorised."
              price={1000}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default Tickets;
