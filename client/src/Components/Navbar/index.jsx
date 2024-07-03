import React from "react";
import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Stack
        direction='row'
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          height: "60px",
          px: "50px",
          bgcolor: "teal",
        }}>
        {/* left side */}
        <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
          <Link to={"/"}>
            <Button sx={{ color: "white" }}>Home</Button>
          </Link>
          <Link to={"/auth"}>
            <Button sx={{ color: "white" }}>Auth</Button>
          </Link>
        </Stack>
        {/* right side */}
        <Stack direction='row' alignItems={"center"}>
          <Link to={"/admin-dashboard"}>
            <Button sx={{ color: "white" }}>Panel</Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
}
