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

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const route = useLocation();

  const toggleDrawer = (val: boolean) => (event: React.MouseEvent | React.KeyboardEvent) => {
    setMenuOpen(val);
  }

  return (
    <>
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

      <div className="bg-primary bg-opacity-10 px-[5%] mt-[-76px] pt-[140px]">
        <div className="w-full md:w-1/2 sm:w-3/4">
          <Typography variant="h1" className="text-center sm:text-left">
            A <span className="text-primary">Better Future</span> requires a <span className="text-primary">Better Foundation</span>
          </Typography>
          <Typography className="py-6 text-center sm:text-left">
            Decentralized Oracle Network provide tamper-proof inputs, outputs, and computations to support advanced smart contracs on any blockchain.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-3 pb-16">
            <Button variant="contained">
              Develop with Cascadia
            </Button>
            <Button variant="outlined">
              Explore solutions
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;