import { CardHeader } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ title, img, category, id, description }) {
  return (
    <>
      <Link to={`/blog-details/${id}`}>
        <Card elevation={4} sx={{ width: 500, height: 400 }}>
          <CardHeader title={title} subheader={`Category : ${category}`} />
          <CardMedia component='img' height='200px' image={img} alt={title} />
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </>
  );
}
