import React, {useState} from "react";
import Logo from "../../Assets/Logo.svg";
import {HiOutlineBars3} from "react-icons/hi2";
import {Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText,} from "@mui/material";
import List from "@mui/material/List";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "HOME",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];


  return (
    <nav>
    <div className="nav-logo-container">
      <img src={Logo} alt="Website Logo"/>
    </div>
    <div className="navbar-links-container">
    <a href="/home">Home</a>
    <a href="/about">About</a>
    <a href="/testimonials">Testimonials</a>
    <a href="/contact">Contact</a>
    <a href="/bookings">
    </a>
    <a href="/bookings">
    <button className="primary-button">Book Now</button>
    </a>
    </div>
    <div className="navbar-menu-container">
    <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    </div>
    <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
      <Box sx={{width: 250}} role="presentation" onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
        <List>
          {menuOptions.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ) )}
        </List>
      </Box>
    </Drawer>
    </nav>

  );
};

export default Navbar;