import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import fetchData from "../../Utils/fetchData";
import BlogCard from "./BlogCard";
import { Stack, Typography } from "@mui/material";

export default function Home() {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchData("blogs?populate=categoryId");
        setBlogs(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const items = blogs?.map((e, index) => (
    <BlogCard
      key={index}
      id={e?._id}
      title={e?.title}
      description={e?.description}
      category={e?.categoryId?.title}
      img={import.meta.env.VITE_API + e?.image}
    />
  ));
  return (
    <>
      <Stack alignItems={"center"} m={"50px"} gap={"50px"}>
        {blogs ? items : <Typography>loading</Typography>}
      </Stack>
    </>
  );
}
