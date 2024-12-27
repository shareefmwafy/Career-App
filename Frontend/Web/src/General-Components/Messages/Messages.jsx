import React, { useState, useEffect, useRef } from "react";
import styles from "./Messages.module.css";
import axios from "axios";

const ChatSystem = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [friends, setFriends] = useState([]);
  const [activeFriend, setActiveFriend] = useState(null);
  const [isInfoVisible, setIsInfoVisible] = useState(true);
  const [isFriendsVisible, setIsFriendsVisible] = useState(true);
  const scrollRef = useRef();

  useEffect(() => {
    const myId = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    const fetchFriends = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API}/friends/acceptedFriends/${myId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setFriends(response.data);
      } catch (e) {
        setFriends([]);
        console.error("Error Fetch Friends: ", e);
      }
    };
    fetchFriends();
  }, []);

  const sendMessage = () => {
    if (input.trim() !== "") {
      const newMessage = { text: input, sender: "user" };
      setMessages((prev) => [...prev, newMessage]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "This is an auto-response.", sender: "bot" },
        ]);
      }, 500);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const handleFriendClick = (friend) => {
    setActiveFriend(friend);
    setMessages([]);
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleResize = () => {
    const width = window.innerWidth;
    setIsInfoVisible(width > 1200);
    setIsFriendsVisible(width > 800);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.chatSystem}>
      <div className={styles.friendsList}>
        <h3>Friends</h3>
        <ul>
          {friends.map((friend) => (
            <li
              key={friend._id}
              className={
                activeFriend?.profile?.firstName === friend.profile.firstName
                  ? styles.active
                  : ""
              }
              onClick={() => handleFriendClick(friend)}
            >
              <img
                src={friend.profile.profileImage}
                alt={friend.profile.firstName}
              />
              <div className={styles.friendInfo}>
                <span>{friend.profile.firstName} {friend.profile.lastName}</span>
                <p>{friend.profile.bio || "No bio available"}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.chatMain}>
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            {activeFriend && (
              <img
                src={activeFriend?.profile?.profileImage || "/default-avatar.png"}
                alt={activeFriend?.profile?.firstName || "Friend"}
              />
            )}
            <h3>{activeFriend?.profile?.firstName} {activeFriend?.profile?.lastName}</h3>
          </div>
          <div className={styles.messagesList} ref={scrollRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  msg.sender === "user" ? styles.user : styles.bot
                }`}
              >
                {msg.sender === "bot" && (
                  <img
                    src={
                      activeFriend?.profile?.profileImage || "/default-avatar.png"
                    }
                    alt="friend"
                    className={styles.messageAvatar}
                  />
                )}
                <span className={styles.messageText}>{msg.text}</span>
              </div>
            ))}
          </div>
          <div className={styles.messageInput}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                activeFriend
                  ? `Message ${activeFriend.profile.firstName}...`
                  : "Select a friend to start chatting"
              }
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
      <div className={styles.chatInfo}>
        {activeFriend && (
          <div className={styles.infoHeader}>
            <img
              src={activeFriend.profile.profileImage}
              alt={activeFriend.profile.firstName}
            />
            <div>
              <h3>{activeFriend.profile.firstName} {activeFriend?.profile?.lastName}</h3>
              <p>{activeFriend.profile.bio || "Bio not available"}</p>
              <a href={`mailto:${activeFriend.email}`}>Contact via Email</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatSystem;
