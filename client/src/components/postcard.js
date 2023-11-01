import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

//import { Typography } from "@mui/material/styles/createTypography";

const styles = {
  accentedButton: "bg-black text-white py-2 px-4 rounded-full",
  content: "max-w-7xl flex-1 flex items-center justify-between",
  wrapper:
    "h-max-[10rem] flex items-center justify-center bg-[#FAF9F6] border-y border-black",
};
const PostCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className="space-y-5 px-10 py-10">
          <h1 className="max-w-xl text-[6rem] font-mediumserif">Flipbook</h1>

          <h3 className="text-2xl">
            A new and improved way of digesting information in a fraction of the
            time.
          </h3>
          <button className={styles.accentedButton}>Start Reading Today</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
