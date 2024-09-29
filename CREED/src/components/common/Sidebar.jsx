import * as React from "react";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import LogoutIcon from "@mui/icons-material/Logout";
import LiquorIcon from "@mui/icons-material/Liquor";
import InfoIcon from "@mui/icons-material/Info";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TocIcon from "@mui/icons-material/Toc";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Home, HowToReg } from "@mui/icons-material";
import { RxCross1 } from "react-icons/rx";
import Person from "@mui/icons-material/Person";
import { LogInIcon, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/auth.service";
import { useNavigate, Link } from "react-router-dom";
const FlyoutLink = ({ children, href }) => {
  const [open1, setOpen1] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setOpen1(true)}
      onMouseLeave={() => setOpen1(false)}
      className="relative w-fit h-fit"
    >
      <Link to={href} className="relative text-black">
        {children}
        <span
          style={{
            transform: open1 ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: open1 ? "left" : "right",
            height: "0.05rem",
          }}
          className="absolute -bottom-0 -left-0 -right-1 origin-left scale-x-0 bg-black transition-transform duration-300 ease-out"
        />
      </Link>
    </div>
  );
};

export default function Sidebar() {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const toggleNav = () => setOpen((prev) => !prev);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem key={"HOME"} disablePadding>
          <ListItemButton>
            <ListItemIcon>{<Home />}</ListItemIcon>
            <FlyoutLink href="/">HOME</FlyoutLink>
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem key={"PRODUCTS"} disablePadding>
          <ListItemButton>
            <ListItemIcon>{<LiquorIcon />}</ListItemIcon>
            <FlyoutLink href="/products">ALL PRODUCTS</FlyoutLink>
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem key={"FILTER PRODUCTS"} disablePadding>
          <ListItemButton>
            <ListItemIcon>{<CategoryIcon />}</ListItemIcon>
            <FlyoutLink href="/allProducts">FILTER PRODUCTS</FlyoutLink>
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem key={"ABOUTUS"} disablePadding>
          <ListItemButton>
            <ListItemIcon>{<InfoIcon />}</ListItemIcon>
            <FlyoutLink href="/aboutus">ABOUT US</FlyoutLink>
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem key={"CAREER"} disablePadding>
          <ListItemButton>
            <ListItemIcon>{<Person />}</ListItemIcon>
            <span className="label">
              <FlyoutLink href={"/career"}>CAREER</FlyoutLink>
            </span>
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />
      <List>
        <ListItem key={"BULK ORDERS"} disablePadding>
          <ListItemButton>
            <ListItemIcon>{<LocalShippingIcon />}</ListItemIcon>
            <FlyoutLink href={"/bulk-orders"}>BULK ORDERS</FlyoutLink>
          </ListItemButton>
        </ListItem>
      </List>
      {user != null && token != null && (
        <>
          <Divider />
          {user.role == 1 && (
            <List>
              <ListItem key={"ADMIN DASHBOARD"} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{<DashboardCustomizeIcon />}</ListItemIcon>
                  <FlyoutLink href={"/admin/dashboard"}>DASHBOARD</FlyoutLink>
                </ListItemButton>
              </ListItem>
            </List>
          )}
          <List>
            <ListItem key={"LOGOUT"} disablePadding>
              <ListItemButton>
                <ListItemIcon>{<LogoutIcon />}</ListItemIcon>
                <button onClick={handleLogout}>LOGOUT</button>
              </ListItemButton>
            </ListItem>
          </List>
        </>
      )}
      {user == null && token == null && (
        <>
          <Divider />
          <List>
            <ListItem key={"LOGIN"} disablePadding>
              <ListItemButton>
                <ListItemIcon>{<LogInIcon />}</ListItemIcon>
                <FlyoutLink href={"/login"}>LOGIN</FlyoutLink>
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem key={"REGISTER"} disablePadding>
              <ListItemButton>
                <ListItemIcon>{<HowToReg />}</ListItemIcon>
                <FlyoutLink href={"/register"}>REGISTER</FlyoutLink>
              </ListItemButton>
            </ListItem>
          </List>
        </>
      )}
    </Box>
  );
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 650) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {open ? (
        <Button onClick={toggleNav}>
          <RxCross1 style={{ fontSize: "40px", color: "#303030d6" }}></RxCross1>
        </Button>
      ) : (
        <Button onClick={toggleNav}>
          <TocIcon style={{ fontSize: "40px", color: "#303030d6" }}></TocIcon>
        </Button>
      )}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
        <button
          style={{
            position: "fixed",
            bottom: "15px",
            left: "15px",
            fontSize: "13px",
          }}
        >
          <FlyoutLink href="/">CREED</FlyoutLink>
        </button>
      </Drawer>
    </div>
  );
}
