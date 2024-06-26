import { atom, selectorFamily } from "recoil";
import { BACKEND_URL } from "../config";
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
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${blogId}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching blog details: ", error);
      return null;
    }
  },
});
