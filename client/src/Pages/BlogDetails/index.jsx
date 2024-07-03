import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../Utils/fetchData";

export default function BlogDetails() {
  const [blog, setBlog] = useState();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchData(`blogs/${id}?populate=categoryId`);
        setBlog(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Stack height={"80vh"} alignItems={"center"} justifyContent={"center"}>
        <Stack>
          <Card elevation={4} sx={{ width: 500, height: 400 }}>
            <CardHeader
              title={blog?.title}
              subheader={`Category : ${blog?.categoryId?.title}`}
            />
            <CardMedia
              component='img'
              height='200px'
              image={import.meta.env.VITE_API + blog?.image}
              alt={blog?.title}
            />
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                {blog?.description}
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </>
  );
}
