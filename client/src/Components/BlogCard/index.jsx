import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

export default function BlogCard({ img, description }) {
  return (
    <>
      <Card sx={{ width: 500, height: 400 }}>
        <CardMedia component='img' height='194' image={img} alt='Paella dish' />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
