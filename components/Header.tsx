import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "components/Image";

const Links = () => (
  <>
    <a data-menuanchor="home" href="#home">
      Home
    </a>
    <a data-menuanchor="features" href="#features">
      Features
    </a>
    <a data-menuanchor="beta" href="#beta">
      Beta
    </a>
    <a data-menuanchor="concept" href="#concept">
      Concept
    </a>
    <a data-menuanchor="team" href="#team">
      Team
    </a>
  </>
);

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuClick = () => {
    setDrawerOpen(true);
  };

  const handleMenuClose = () => {
    setDrawerOpen(false);
  };

  return (
    <header className="z-50 fixed top-0 inset-x-0 w-full h-14 sm:h-16 bg-theme-green text-white">
      <div className="flex flex-row items-center container h-full mx-auto px-2 sm:px-8">
        <IconButton
          sx={{
            color: "white",
            display: {
              xs: "flex",
              sm: "none",
            },
          }}
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <div className="flex flex-row items-center ml-2 sm:ml-0">
          <Image
            className="w-8 h-8 sm:w-10 sm:h-10"
            src="logo-image-small.png"
            alt="logo"
            width={256}
            height={256}
          />
          <Image
            className="ml-2 sm:ml-2 w-auto h-5 sm:h-7"
            src="logo-text-white.png"
            alt="nurtue"
            width={668}
            height={144}
          />
        </div>
        <nav
          id="nav"
          className="flex-row items-center space-x-8 ml-auto text-xl hidden sm:flex"
        >
          <Links />
        </nav>
        <div className="visible sm:hidden">
          <Drawer
            variant="temporary"
            ModalProps={{
              keepMounted: true,
            }}
            open={drawerOpen}
            onClose={handleMenuClose}
          >
            <nav
              id="nav"
              className="flex-col w-36 h-full pt-16 px-4 space-y-4 bg-theme-green text-white flex sm:hidden"
            >
              <Links />
            </nav>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
