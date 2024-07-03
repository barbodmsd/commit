import { Button, Stack } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Store/Slices/authSlice";

export default function Navbar() {
  const { token } = useSelector((state) => state.authSlice);
  const dispatch=useDispatch()
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
          {token ? (
            <Button sx={{ color: "white" }} onClick={()=>dispatch(logout())}>Log Out</Button>
          ) : (
            <Link to={"/auth"}>
              <Button sx={{ color: "white" }}>Auth</Button>
            </Link>
          )}
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
