import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

const StyledDescription = styled('div')(({ theme }) => ({
  'blockquote': {
    fontStyle: 'italic',
    color: '#555',
  },
  'table': {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  'th, td': {
    border: '1px solid #ddd',
    padding: '8px',
  },
  'th': {
    backgroundColor: '#f2f2f2',
    color: '#333',
  },
  'tr:nth-of-type(even)': {
    backgroundColor: '#f9f9f9',
  },
  'tr:hover': {
    backgroundColor: '#ddd',
  },
  'img': {
    maxWidth: '100%',
    height: 'auto',
  },
  'iframe': {
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }
}));

const About = ({ data }) => {
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
          lg: "64px",
          xl: "80px"
        }
      }}
    >
      <Grid container spacing={2} id="about">
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              fontSize: {
                xs: '24px',
                sm: '28px',
                md: '32px',
                lg: '36px',
                xl: '40px'
              }
            }}
          >
            ABOUT EVENT
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <StyledDescription
            dangerouslySetInnerHTML={{ __html: data?.description }}
            sx={{
              fontSize: {
                xs: '14px',
                sm: '16px',
                md: '18px',
                lg: '18px',
                xl: '22px'
              }
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
