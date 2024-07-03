import { Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../Utils/fetchData";

export const BlogComments = ({ title, message, img }) => {
  return (
    <Card sx={{ width: 500 }}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe'>
            <img
              width={"100%"}
              stye={{ objectFit: "cover" }}
              height={"100%"}
              src={img}
              alt={title}
            />
          </Avatar>
        }
        title={title}
      />

      <Typography variant='body2' color='text.secondary'>
        {message}
      </Typography>
    </Card>
  );
};

export default function BlogDetails() {
  const [blog, setBlog] = useState();
  const [comments, setComments] = useState();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchData(`blogs/${id}?populate=categoryId`);
        const resComment = await fetchData(`comments/${id}`);
        setBlog(res.data);
        setComments(resComment.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const items = comments?.map((e, index) => (
    <BlogComments
      key={index}
      title={e?.userId?.username}
      message={e?.message}
      img={import.meta.env.VITE_API + e?.userId?.image}
    />
  ));
  return (
    <>
      <Stack
        m={"50px"}
        gap={"5px"}
        alignItems={"center"}
        justifyContent={"center"}>
        {/* blog */}
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
        {/* comments */}
        <Stack gap={"5px"} alignItems={"center"} justifyContent={"center"}>
          {items}
        </Stack>
        
      </Stack>
    </>
  );
}
