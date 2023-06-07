import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { NavLink, Link, useLocation } from "react-router-dom";
const menus = [
  { icon: "report_icon.png", title: "Reports", path: "/" },
  { icon: "report_icon.png", title: "Workspaces", path: "/workspace" },
  { icon: "setting_icon.png", title: "Settings", path: "/setting" },
];
function Sidebar({ children }) {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  return (
    <Box
      border={"1px solid re"}
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
      display={"flex"}
      justifyContent={"space-between"}
      borderRadius={"15px"}
      //   mt={"4px"}
    >
      <Box
        border={"1px solid #EFF0F6"}
        width={"18%"}
        height={"100vh"}
        borderRadius={"12px"}
        // boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      >
        <Box
          border={"1px solid blac"}
          display={"flex"}
          justifyContent={"center"}
          mt={"10px"}
        >
          <Image src="zag_logo.png" ml={"-25px"} />
        </Box>
        <Box
          border={"1px solid re"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          mt={"15%"}
        >
          {menus.map((item) => {
            return (
              <NavLink key={item.path} to={item.path}>
                <Box
                  display={"flex"}
                  width={"80%"}
                  m={"auto"}
                  border={"1px solid re"}
                  gap={"20px"}
                  p={"10px"}
                  borderRadius={"10px"}
                  alignItems={"center"}
                  mb={"15px"}
                  bg={
                    pathname === item.path ? "rgba(27, 89, 248, 0.1)" : "#fff"
                  }
                  color={pathname === item.path ? "#1B59F8" : "black"}
                >
                  <Box>
                    <Link to={item.path}>
                      <Image src={item.icon} width={"100%"} />
                    </Link>
                  </Box>
                  <Text>{item.title}</Text>
                </Box>
              </NavLink>
            );
          })}
        </Box>
      </Box>
      <Box
        border={"1px solid blac"}
        bg={"#f9f9f9"}
        width={"85%"}
        borderRadius={"15px"}
        p={"10px 20px 10px 15px"}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Sidebar;
