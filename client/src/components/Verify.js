import React, { useState } from 'react';
// custom Auth function
import { signin } from '../utils/api-auth';
import auth from '../utils/auth-helper';
// routing
import { Link, Redirect } from "react-router-dom";
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
// Material UI Lab Components
import { Alert, AlertTitle } from '@material-ui/lab';
// Material UI Icons
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  alertWidth: {
    width: '100%'
  }
}));

function Verify(props) {
  const classes = useStyles();

  const { from } = props.location.state || {
    from: {
      pathname: '/'
    }
  };
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = (event) => {
    signin(userId, token).then(data => {
      console.log(data)
      if (data.error) {
        setError(data.error)
      } else {
        auth.authenticate(data, () => {
          setLoggedIn(true);
        });
      }
    });
  };

  const handleUserIdChange = (event) => {
    console.log(event.target.value)
    setUserId(event.target.value)
  }

  const handleTokenChange = (event) => {
    console.log(event.target.value);
    setToken(event.target.value);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(null);
  };

  if (isLoggedIn) {
    return <Redirect to={from} />;
  } else {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Verify User with Token
          </Typography>
          <div className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userId"
              label="User ID"
              name="userId"
              onChange={handleUserIdChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="token"
              label="Token"
              name="token"
              onChange={handleTokenChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleLogin}
            >
              Verify
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/register">Don't have a usearId or token? Copy one down from here</Link>
              </Grid>
            </Grid>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={error} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error" className={classes.alertWidth}>
                <AlertTitle>Error</AlertTitle>
                Something went wrong — <strong>check it out!</strong>
              </Alert>
            </Snackbar>
          </div>
        </div>
      </Container>
    );
  }
}

export default Verify;