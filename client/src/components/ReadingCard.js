//import { db } from '../firebase'
//import { doc, getDoc } from '@firebase/firestore'
import { useState, useEffect } from "react";
//import { async } from '@firebase/util'
const styles = {
  wrapper:
    "flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer",
  authorcontainer: "flex gap-[.4rem]",
  authorImageContainer:
    "grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]",
  postDetails: "flex-[2.5] flex flex-col",
  authorsImage: "object-cover",
  authorName: "font-semibold",
  title: "font-bold text-2xl",
  peek: "text-[#787878]",
  detailsContainer: " flex  items-center justify-between text-[#787878]",
  articleDetails: "my-2 text -[.8rem]",
  categroy: "bg-[#F2F3F2] p-1 rounded-full",
};
const ReadingCard = ({ read }) => {
  return (
    <li class="flex justify-between gap-x-6 py-5  border-2">
      <div class="flex gap-x-4 px-5">
        <div class="min-w-0 flex-auto padding ">
          <p class="text-sm font-semibold leading-6 text-gray-900">
            {read.Title}
          </p>
          <p class="mt-1 truncate text-xs leading-5 text-gray-500">
            {read.Author}
          </p>
          <p class="text-sm font-semibold leading-6 text-gray-900">
            {read.Description}
          </p>
        </div>
      </div>
      <div class="hidden sm:flex sm:flex-col sm:items-end">
        <p class="text-sm leading-6 text-gray-900">Co-Founder / CEO</p>
        <p class="mt-1 text-xs leading-5 text-gray-500">
          Last seen <time datetime="2023-01-23T13:23Z">3h ago</time>
        </p>
      </div>
    </li>
  );
};
export default ReadingCard;
