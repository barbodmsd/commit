import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import fetchData from "../../../Utils/fetchData";
import useForm from "../../../Utils/useForm";
import AuthContext from "../../../Utils/authContext";
import { useContext, useState } from "react";

export default function Register({ handlePageType }) {
  const { user, setUser } = useContext(AuthContext);
  const [fields, handleChange] = useForm();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetchData("auth/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(fields),
    });
    setUser({
      username: res.data.user.username,
      email: res.data.user.email,
      role: res.data.user.role,
      image: res.data.user.image,
      token: res.data.token,
    });
  };
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Register
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='username'
            label='Username'
            name='username'
            onChange={handleChange}
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            onChange={handleChange}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            onChange={handleChange}
            autoComplete='current-password'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Button onClick={handlePageType}>
                "Don't have an account? Sign Up"
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
