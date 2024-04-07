import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Avatar,
  Tooltip
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const PAGES = [
  { name: "Home", path: "/" },
  { name: "Buy", path: "/buy" },
  { name: "Marketplace", path: "/market" },
];

const Header = () => {

  const location = useLocation();

  const pagePaths = PAGES.map((page) => page.path);
  const activeTab = pagePaths.indexOf(location.pathname);

  return (
    <Box>
        <AppBar sx={{ background: "#474B4f" }} elevation={0}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Tooltip title="username" arrow>
                <Avatar></Avatar>
              </Tooltip>
            </Box>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
                <Tabs
                  textcolor="7C8DB0"
                  value={activeTab !== -1 ? activeTab : false}
                  indicatorColor="primary"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "& .MuiTabs-indicator": {
                      backgroundColor: "#0f9b0f",
                      height: 2,
                      borderRadius: "30px", 
                    },
                  }}
                >
                  {PAGES.map((page, index) => (
                    <Link
                      key={index}
                      to={page.path}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Tab
                        label={page.name}
                        value={index}
                        sx={{
                          color: index === activeTab ? "#0f9b0f" : "white",
                          borderRadius: "5px",
                        }}
                        disableRipple
                      />
                    </Link>
                  ))}
                </Tabs>
                <Button href="chrome-extension://ejjladinnckdgjemekebdpeokbikhfci/onboarding.html">Link Wallet</Button>
            </Box>
          </Toolbar>
        </AppBar>
    </Box>
  );
};

export default Header;