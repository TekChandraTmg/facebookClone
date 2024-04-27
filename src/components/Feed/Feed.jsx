import React from "react";
import "./Feed.css";
import StoryReel from "../StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";
const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      {/* MessageSender  */}
      <MessageSender />
      <Post
        profilePic="https://media.istockphoto.com/id/1314415203/photo/always-smile.jpg?s=612x612&w=0&k=20&c=5Khv1DGOjBLVolv1561s5I9BMU3_U2Uvn0dT9yjfje8="
        message="Hey dudes!"
        timestamp="This is timestamp"
        username="Tecus"
        image="https://www.realmenrealstyle.com/wp-content/uploads/2023/08/Pocket-Square-The-Square-Fold.jpg"
      />
      <Post
        profilePic="https://media.istockphoto.com/id/1314415203/photo/always-smile.jpg?s=612x612&w=0&k=20&c=5Khv1DGOjBLVolv1561s5I9BMU3_U2Uvn0dT9yjfje8="
        message="Hey dudes!"
        timestamp="This is timestamp"
        username="Tecus"
        image="https://www.realmenrealstyle.com/wp-content/uploads/2023/08/Pocket-Square-The-Square-Fold.jpg"
      />
      <Post
        profilePic="https://media.istockphoto.com/id/1314415203/photo/always-smile.jpg?s=612x612&w=0&k=20&c=5Khv1DGOjBLVolv1561s5I9BMU3_U2Uvn0dT9yjfje8="
        message="Hey dudes!"
        timestamp="This is timestamp"
        username="Tecus"
        image="https://www.realmenrealstyle.com/wp-content/uploads/2023/08/Pocket-Square-The-Square-Fold.jpg"
      />
      <Post
        profilePic="https://media.istockphoto.com/id/1314415203/photo/always-smile.jpg?s=612x612&w=0&k=20&c=5Khv1DGOjBLVolv1561s5I9BMU3_U2Uvn0dT9yjfje8="
        message="Hey dudes!"
        timestamp="This is timestamp"
        username="Tecus"
        image="https://www.realmenrealstyle.com/wp-content/uploads/2023/08/Pocket-Square-The-Square-Fold.jpg"
      />
    </div>
  );
};

export default Feed;
