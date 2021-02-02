import React from "react";
// Routing
import { Link } from 'react-router-dom';
// Material UI components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// Material UI icons
import CodeIcon from '@material-ui/icons/Code';

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

  return (
    <AppBar position="static" style={{background: 'none'}}>
      <Toolbar>
        <div className={classes.grow} />
        <Link to="/" style={{textDecoration: 'none'}}>
          <Box display="flex" alignItems='center'>
            <CodeIcon fontSize="large" gutterBottom/>
            <Typography variant="h4">EZ_2FA</Typography>
          </Box>
        </Link>
        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;