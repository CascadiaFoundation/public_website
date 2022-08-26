import { useState } from 'react';
import { Button, IconButton, List, ListItem,  SwipeableDrawer, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  {
    label: 'Learning',
    link: '/learning'
  },
  {
    label: 'Ecosystem',
    link: '/ecosystem'
  },
  {
    label: 'ESG',
    link: '/esg'
  },
  {
    label: 'Community',
    link: '/community'
  },
  {
    label: 'Blog',
    link: '/blog'
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const route = useLocation();

  const toggleDrawer = (val: boolean) => (event: React.MouseEvent | React.KeyboardEvent) => {
    setMenuOpen(val);
  }

  return (
    <div className="mx-[5%] flex items-center py-6 gap-20 md:justify-start justify-between">
      <Button variant='text' component={NavLink} to='/'>
        <Typography variant='h3' color='primary'>Cascadia</Typography>
      </Button>
      <div className="gap-9 hidden md:flex">
        {
          navItems.map((item, index) => (
            <Button
              key={index}
              variant='text'
              color={item.link===route.pathname?'primary':'secondary'}
              component={NavLink}
              to={item.link}
            >
              {item.label}
            </Button>
          ))
        }      
      </div>
      <div className="block md:hidden justify-self-end">
        <IconButton onClick={toggleDrawer(true)} size="small">
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
        <SwipeableDrawer
          anchor="top"
          open={menuOpen}
          onOpen={toggleDrawer(true)}
          onClose={toggleDrawer(false)}
          onClick={toggleDrawer(false)}
        >
          <List disablePadding>
            {
              navItems.map((item, key) => (
                <ListItem key={key} disablePadding>
                  <NavLink to={item.link}
                    className={({ isActive })=>
                      isActive ? "text-grey-light w-full text-center p-4 bg-grey-dark" : "text-light-dark w-full text-center p-4 bg-grey-light" 
                    }
                  >
                    {item.label}
                  </NavLink>
                </ListItem>
              ))
            }
          </List>
        </SwipeableDrawer>
      </div>
    </div>
  );
};

export default Navbar;