import React, { FC, useEffect } from "react";
interface Post {
  data: any;
  setPageNo: () => void;
}
const Post: FC<Post> = ({ data, setPageNo }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((param) => {
      if (param[0].isIntersecting) {
        observer.unobserve(lastImage);
        setPageNo();
      }
    });
    const lastImage = document.querySelector(".image-post:last-child");
    if (!lastImage) {
      return;
    }
    observer.observe(lastImage);

    return () => {
      if (lastImage) {
        observer.unobserve(lastImage);
      }
      observer.disconnect();
    };
  }, [data]);
  return (
    <div className="container">
      {data.map((image) => {
        return (
          <img
            className="image-post"
            key={image.id}
            src={image.download_url}
            alt="dd"
          />
        );
      })}
    </div>
  );
};

export default Post;
