import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { positions } from '@material-ui/system';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';



const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const responseGoogle = (response) => {
    console.log(response);
  }

  const responseFacebook = (response) => {
    console.log(response);
  }

  const componentClicked=()=> {
    //alert('Evento onClick');
  }

  
  return (
    <div >
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
        >
        Login
      </Button>
      <StyledMenu
      
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        
        
      >
        <StyledMenuItem>
            <ListItemIcon>
                
                <GoogleLogin
            clientId="82938787030-vqm4j9po6qs5ku1ir31ficekkflinjct.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            />
              </ListItemIcon>   
          <FacebookLogin
            appId="492612431975822"
            autoLoad={false}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} />
        </StyledMenuItem>
      </StyledMenu>
      
    </div>

  );
}