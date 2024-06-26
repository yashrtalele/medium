import React, { useEffect, useState } from "react";
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import { blogDetailSelector, selectedBlogIdAtom } from "../atom";
import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { Spinner } from "../components/Spinner";
import { FullBlog } from "../components/FullBlog";
export const Blog = () => {
  const { id } = useParams();
  const setSelectedBlogId = useSetRecoilState(selectedBlogIdAtom);
  const blogLoadable = useRecoilValueLoadable(blogDetailSelector(id));
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setIsPending(true);
    setSelectedBlogId(id);

    return () => {
      setSelectedBlogId(null);
    };
  }, [id, setSelectedBlogId]);

  useEffect(() => {
    if (blogLoadable.state === "hasValue") {
      setIsPending(false);
    }
  }, [blogLoadable]);

  if (blogLoadable.state === "loading" || isPending) {
    return (
      <div>
        <Appbar />

        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <Spinner />
          </div>
        </div>
      </div>
    );
  }

  if (blogLoadable.state === "hasError") {
    return <p>Error loading blog</p>;
  }

  if (blogLoadable.state === "hasValue") {
    const blog = blogLoadable.contents;
    return (
      <div>
        <FullBlog blog={blog} />
      </div>
    );
  }

  return null;
};
