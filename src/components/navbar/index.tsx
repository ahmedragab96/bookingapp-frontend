import React from 'react';
// import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import styles from './styles';

interface State {
  isMenuOpened: boolean;
  isMobileMenuOpened: boolean;
  anchorEl: null | HTMLElement;
  mobileAnchorEl: null | HTMLElement
}

class NavBar extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isMenuOpened: false,
      isMobileMenuOpened: false,
      anchorEl: null,
      mobileAnchorEl: null,
    };
  }

  handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleMobileMenuClose = () => {
    this.setState({
      mobileAnchorEl: null,
      isMobileMenuOpened: false,
    });
  };

  handleMenuClose = () => {
    this.setState({
      anchorEl: null,
      isMenuOpened: false,
    });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({
      mobileAnchorEl: event.currentTarget,
      isMobileMenuOpened: true,
    });
  };

  renderMenu = () => {
    const {
      isMenuOpened,
      anchorEl,
    } = this.state;
    return (
      <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={'primary-search-account-menu'}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpened}
      onClose={this.handleMenuClose}
    >
      <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
    </Menu>
    );
  }

  renderMobileMenu = () => {
    const {
      mobileAnchorEl,
      isMobileMenuOpened,
    } = this.state;
    return (
      <Menu
        anchorEl={mobileAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={'primary-search-account-menu-mobile'}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpened}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
  };
  render() {

    return (
      <div style={styles.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              style={styles.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography style={styles.title} variant="h6" noWrap>
              Material-UI
          </Typography>
            <div style={styles.search}>
              <div style={styles.searchIcon}>
                <SearchIcon />
              </div>
              <div>
                <InputBase
                  placeholder="Search…"
                  style={styles.inputInput}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </div>
            <div style={styles.grow} />
            <div style={styles.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={'primary-search-account-menu'}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div style={styles.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={'primary-search-account-menu-mobile'}
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {/* {this.renderMobileMenu} */}
        {/* {this.renderMenu} */}
      </div>
    );
  }
}

export default NavBar;