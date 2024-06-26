import { atom, selectorFamily } from "recoil";
import axios from "axios";

export const selectedBlogIdAtom = atom({
  key: "selectedBlogIdAtom",
  default: null,
});

export const blogDetailSelector = selectorFamily({
  key: "blogDetailSelector",
  get: (blogId) => async () => {
    if (!blogId) return null;
    try {
      const response = await axios.get(
        `https://backend.yash-talele97.workers.dev/api/v1/blog/${blogId}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching blog details: ", error);
      return null;
    }
  },
});
