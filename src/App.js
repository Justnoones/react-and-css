import React from 'react'
import Navbar from './components/Navbar/index'
import PostsList from './components/PostsLists/index'
import Modal from './components/Modal/index'
import { useState } from 'react'

export default function App() {
  let [posts, setPosts] = useState([
    {
      id : 1,
      title : "First Title"
    },
    {
      id : 2,
      title : "Second Title"
    },
    {
      id : 3,
      title : "Third Title"
    }
  ]);
  let [showModal, setShowModadl] = useState(false);
  return (
    // react fragment
    <>
      <Navbar setShowModal={setShowModadl} />
      {/* exports props */}
      <PostsList posts={posts} testData="test data" />
      {showModal && <Modal >
            {/* modal content (slots) */}
            <h1>Terms and Conditions</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button onClick={() => setShowModadl(false)}>Close</button>
      </Modal>}
    </>
  )
}
