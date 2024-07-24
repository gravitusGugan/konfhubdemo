import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Stack,
  Link,
  Box,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PaidIcon from "@mui/icons-material/Paid";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Sans-serif",
  },
});

const HomePage = ({ data }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const eventDate = new Date("2034-07-31T06:00:00Z");
      const currentDate = new Date();
      const timeDifference = eventDate - currentDate;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        id="home"
        sx={{
          height: { xs: "auto", md: "600px" },
          backgroundColor: "rgba(211, 211, 211, 0.2)",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
          p: { xs: 2, md: 4 },
          mt: { xs: 6, md: 6 },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          sx={{
            borderRadius: "8px",
            padding: "8px",
            display: { xs: "none", md: "block" },
          }}
        >
          <img
            src={data?.event_poster_url}
            alt="welcome"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            sx={{ mt: 2, position: 'sticky', top: '0' }}
          >
            <Grid item>
              <Button
                sx={{
                  padding: {
                    xs: "8px 16px",
                    sm: "12px 24px",
                    md: "16px 32px",
                  },
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "14px",
                  },
                  backgroundColor: "#FFDADA",
                  borderRadius: "20px",
                  color: "#000",
                  "&:hover": {
                    backgroundColor: "#FFC0C0",
                  },
                  textTransform: "none",
                }}
              >
                Buy Now
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{
                  padding: {
                    xs: "8px 16px",
                    sm: "12px 24px",
                    md: "16px 32px",
                  },
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "14px",
                  },
                  backgroundColor: "#EBEBEB",
                  borderRadius: "20px",
                  color: "#000",
                  "&:hover": {
                    backgroundColor: "#D6D6D6",
                  },
                  textTransform: "none",
                }}
              >
                Official Website
                <OpenInNewIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ p: 2 }}>
          <Box
            sx={{
              maxWidth: 400,
              animation: "pulse 2s infinite",
              borderRadius: "16px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              "@keyframes pulse": {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.05)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Card
              sx={{
                borderRadius: "16px",
                p: 2,
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontWeight={600}
                    sx={{ fontSize: { xs: "18px", md: "24px" } }}
                  >
                    {data?.name}
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ mb: 2 }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <VideocamIcon />
                      <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>
                        Online
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <PaidIcon />
                      <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>
                        Paid
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ mb: 2 }}
                  >
                    <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>
                      <b>Event Link:</b>
                    </Typography>
                    <Link href={data?.event_url} fontSize={14}>
                      Open Screening Website
                    </Link>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ mb: 2 }}
                  >
                    <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>
                      <b>Date:</b> Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00
                      PM IST
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ mb: 2 }}
                  >
                    <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>
                      <b>EVENT STARTS IN:</b>
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ mb: 2 }}
                  >
                    <Typography variant="h6">
                      {`${timeRemaining.days}d ${timeRemaining.hours}h ${timeRemaining.minutes}m ${timeRemaining.seconds}s`}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ mb: 2 }}
                  >
                    <Typography sx={{ fontSize: { xs: "12px", md: "16px" } }}>
                      <b>Hosted By:</b>
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ mb: 2 }}
                  >
                    <Box display="flex" alignItems="center">
                      <img
                        src={data?.organiser_image_url}
                        alt="img"
                        width={30}
                        height={30}
                        style={{ marginRight: "8px", borderRadius: "50%" }}
                      />
                      <Typography variant="h6">
                        {data?.organiser_name}
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: { xs: "12px", md: "16px" } }}
                    >
                      This is the description of the organiser. You can get to
                      know more about the organiser here.
                    </Typography>
                  </Stack>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={2}
                    sx={{ mt: 2, display: { xs: "flex", md: "none" } }}
                  >
                    <Grid item>
                      <Button
                        sx={{
                          padding: {
                            xs: "8px 16px",
                            sm: "12px 24px",
                            md: "16px 32px",
                          },
                          fontSize: {
                            xs: "10px",
                            sm: "12px",
                            md: "14px",
                          },
                          backgroundColor: "#FFDADA",
                          borderRadius: "20px",
                          color: "#000",
                          "&:hover": {
                            backgroundColor: "#FFC0C0",
                          },
                          textTransform: "none",
                        }}
                      >
                        Buy Now
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        sx={{
                          padding: {
                            xs: "8px 16px",
                            sm: "12px 24px",
                            md: "16px 32px",
                          },
                          fontSize: {
                            xs: "10px",
                            sm: "12px",
                            md: "14px",
                          },
                          backgroundColor: "#EBEBEB",
                          borderRadius: "20px",
                          color: "#000",
                          "&:hover": {
                            backgroundColor: "#D6D6D6",
                          },
                          textTransform: "none",
                        }}
                      >
                        Official Website
                        <OpenInNewIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default HomePage;
