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

export default function HomePage(props) {
  const classes = useStyles();
  const [loginArrowShown, setLoginArrowShown] = useState(false);
  const [registerArrowShown, setRegisterArrowShown] = useState(false);
  const hololiveButton = loginArrowShown ? <>{"Log In"} <ArrowRightAltIcon /></> : <>{"Log In"}</>
  const registerButton = registerArrowShown ? <>{"Register"} <ArrowRightAltIcon /></> : <>{"Register"}</>

  return (
    <div id={id} className={classes.heroContent} style={{ backgroundImage: `url(${MyBackgroundImg})`, backgroundSize: 'cover'}}>
      <Container maxWidth="sm">
        <Paper>
          <Typography variant="h4" align="center" color="textPrimary">
            Speakeasy 2FA User Interface
          </Typography>
          <br />
          <Typography variant="h6" align="center" color="textPrimary">
            Full-stack app with React + Express, users authenticate with 2FA.
          </Typography>
          <div className={classes.buttons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Link
                  ariaLabel="Register Link"
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
                  ariaLabel="Login Link"
                  to="/login"
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