import React from "react";
// Routing
import { Link, NavLink, useHistory } from 'react-router-dom';
// Material UI components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// Material UI icons
import CodeIcon from '@material-ui/icons/Code';
// auth
import auth from '../utils/auth-helper';

const activeLinkStyle = {
	fontWeight: "bold",
	color: '#F44336'
}
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  }
}));

function Navbar() {
  const classes = useStyles();
	const history = useHistory();

  return (
    <AppBar position="static" style={{background: 'none'}}>
      <Toolbar>
        <Link to="/" style={{textDecoration: 'none'}}>
          <Box display="flex" alignItems='center'>
            <CodeIcon fontSize="large"/>
            <Typography variant="h4">EZ_2FA</Typography>
          </Box>
        </Link>
        <div className={classes.grow} />
					{!auth.isAuthenticated() && (
						<div>
							<NavLink
								to="/register"
								activeStyle={activeLinkStyle}
							>
								<Button color="inherit" variant="outlined">Register</Button>
							</NavLink>
							<NavLink
								to="/verify"
								activeStyle={activeLinkStyle}
							>
								<Button color="inherit">Login</Button>
							</NavLink>
						</div>
					)}
					{auth.isAuthenticated() && (
						<div>
							<NavLink
								to={'/user/' + auth.isAuthenticated().id}
								activeStyle={activeLinkStyle}
							>
								<Button color="inherit">
									My Profile
								</Button>
							</NavLink>
							<Button
								color="inherit"
								onClick={() => {
									auth.signout(() => history.push('/'));
								}}
							>
								Sign out
							</Button>
						</div>
					)}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;