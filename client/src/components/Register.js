import React, { useState, useEffect } from 'react';
// Material UI Components
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// Material UI Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// assets
import GoogleAuthAppImg from '../assets/entering-secret-in-authenticator-app.jpg';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
  instructionsImg: {
    width: '50%'
  }
}));

// center accordian summary text
const AccordionSummary = withStyles({
  content: {
    flexGrow: 0
  }
})(MuiAccordionSummary);

export default function Register() {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [responseObj, setResponseObj] = useState(null);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:5000/api/register", { method: 'POST' })
      .then(res => res.json())
      .then(
        (result) => {
          setResponseObj(result);
          setIsLoaded(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(error);
        }
      )
  }, []);

  const IDSecretAccordion = () => {
    console.log(isLoaded);
    console.log(responseObj);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>GENERATED USER INFO</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              ID: {responseObj.id}
            </Typography>
            <Typography>
              Secret: {responseObj.secret}
            </Typography>
          </AccordionDetails>
        </Accordion>
      )
    }
  }

  return (
    <div style={{ color: 'white', background: "linear-gradient(#393e46, #00adb5)" }}>
      <Container maxWidth="md">
        <br />
        <Typography variant="h4" align="center">Registration</Typography>
        <br />
        <IDSecretAccordion />
        <br />
        <br />
        <br />
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography variant="body1">Open your Google authenticator app (this can be installed on your phone from Google Play Store for Android and App Store for iOS) and enter the key you just received.</Typography>
          <br />
          <Typography variant="body2">Personally, I would copy-paste this to Messenger or Discord and copy it from a message to myself. OR email it to myself to copy paste from Gmail</Typography>
          <br />
          <img src={GoogleAuthAppImg} className={classes.instructionsImg} alt="google authenticator app from playstore" />
        </Box>
        <br />
        <br />
      </Container>
    </div>
  );
}