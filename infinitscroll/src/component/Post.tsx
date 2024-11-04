import React, { FC } from 'react'
interface Post{
    data:any;
}
const Post:FC<Post> = ({data}) => {
  return (
    <div className='container'>
        {data.map((image)=>{
  return <img key={image.id} src={image.download_url} alt="dd" />
        })}
           

    </div>
  )
}

export default Post
