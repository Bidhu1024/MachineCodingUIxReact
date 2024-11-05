import { useCallback, useEffect, useState } from "react";
import Post from "./Post";

const InfiniteScroll = () => {
  const [data, setData] = useState<Array<any>>([]);
  const [pageNo, setPageNo] = useState<number>(1);

  const memoizedPage = useCallback(()=>{
setPageNo((page)=>page+1)
  },[])
  console.log(data);
  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setData((prev) => [...prev, ...d]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNo]);

  return <Post data={data} setPageNo={memoizedPage} />;
};

export default InfiniteScroll;
