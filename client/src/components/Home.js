import React, { useState } from 'react';
// Routing
import { Link } from 'react-router-dom';
// Material UI components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Paper, Typography } from '@material-ui/core';
// Material UI icons
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// background image
import MyBackgroundImg from '../assets/background-image.jpg';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(15, 0, 30),
  },
  buttons: {
    marginTop: theme.spacing(4),
  },
  primaryButton: {
  },
  landingRoot: {
    height: theme.spacing(93),
    objectFit: 'cover'
  }
}));

function Home(props) {
  const classes = useStyles();
  const [loginArrowShown, setLoginArrowShown] = useState(false);
  const [registerArrowShown, setRegisterArrowShown] = useState(false);
  const hololiveButton = loginArrowShown ? <>{"Log In"} <ArrowRightAltIcon /></> : <>{"Log In"}</>
  const registerButton = registerArrowShown ? <>{"Register"} <ArrowRightAltIcon /></> : <>{"Register"}</>

  return (
    <div className={classes.heroContent} style={{ minHeight: '40vh', background: "linear-gradient(#393e46, #00adb5)"}}>
      <Container maxWidth="sm">
        <Paper style={{padding: 10}}>
          <Typography variant="h4" align="center" color="textPrimary">
            Speakeasy 2FA User Interface
          </Typography>
          <br />
          <Typography variant="h6" align="center" color="textPrimary">
            Full-stack app with React + Express + (JSON file database), users authenticate with 2FA.
          </Typography>
          <div className={classes.buttons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Link
                  aria-label="Register Link"
                  to="/register"
                  style={{textDecoration: 'none'}}
                >
                  <Button
                    size="large"
                    className={classes.primaryButton}
                    variant="contained"
                    color="primary"
                    onMouseEnter={() => setRegisterArrowShown(true)}
                    onMouseLeave={() => setRegisterArrowShown(false)}
                  >
                    {registerButton}
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link
                  aria-label="Login Link"
                  to="/verify"
                  style={{textDecoration: 'none'}}
                >
                  <Button
                    size="large"
                    className={classes.primaryButton}
                    variant="outlined"
                    color="primary"
                    onMouseEnter={() => setLoginArrowShown(true)}
                    onMouseLeave={() => setLoginArrowShown(false)}
                  >
                    {hololiveButton}
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default Home;