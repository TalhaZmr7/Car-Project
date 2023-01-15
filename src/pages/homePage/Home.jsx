import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import {  db } from "../../firebase/FireBase-config";
import "./style.css";
import {  Spin } from "antd";
import { Post } from "./Post";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    try {
      const data = await getDocs(postsCollectionRef);

      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setFilteredList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.log("Error here", error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  //for filtering
  const filterPosts = (event) => {
    const value = event.target.value ? event.target.value.toLowerCase() : "";
    const allPosts = [...postLists];
    const filtered = allPosts.filter((post) => {
      return (
        post.brand.toLowerCase().includes(value) ||
        post.brandModel.toLowerCase().includes(value) ||
        post.carColor.toLowerCase().includes(value) ||
        post.carType.toLowerCase().includes(value) ||
        post.carYear.toLowerCase().includes(value) ||
        post.fuelType.toLowerCase().includes(value) ||
        post.km.toLowerCase().includes(value) ||
        post.shiftType.toLowerCase().includes(value) ||
        post.eCar.toLowerCase().includes(value)
      );
    });

    setFilteredList(value === "" ? allPosts : filtered);
  };
  return (
    <div className="container">
      <div className="filter">
        <input
          type="text"
          onChange={filterPosts}
          placeholder="Filter cars by Brand, Model, Color, Km, Type, Year, Fuel Type..."
        />
      </div>
      {filteredList.length === 0 ? (
        <div className="spinner">
          <Spin size="large" tip="Loading, please wait..." />
        </div>
      ) : (
        <div className="homePage">
          {filteredList.map((post) => {
            return <Post post={post} isAuth={isAuth} onDelete={deletePost} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
