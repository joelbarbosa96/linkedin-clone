import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import {
  Image,
  CalendarViewDay,
  Subscriptions,
  EventNote,
} from "@material-ui/icons";
import Post from "./Post";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore/lite";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsCollectionRef = collection(db, "posts");
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [posts]);

  const sendPost = (e) => {
    e.preventDefault();

    const addPosts = async () => {
      await addDoc(collection(db, "posts"), {
        name: "Joel Barbosa",
        description: "This is a test",
        message: { input },
        photoUrl: "",
        timestamp: serverTimestamp(),
      });
    };

    addPosts();
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70b5f9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {posts.map(({ id, name, description, message, photoUrl }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message.input}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
