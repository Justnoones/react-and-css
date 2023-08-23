import React from 'react'
import "./index.css"
// import SinglePost from './single-post';
                              // props from App.js
export default function postList({testData ,posts}) {
  console.log(testData);
  return (
    <div className='post-list-component '>
      <div className='postList container'>
        {/* {posts.map(post => <SinglePost post={post}/>)} */}
        {posts.map(post => <div key={post.id} className='single-post'>{post.title}</div>)}
      </div>
    </div>

  )
}
