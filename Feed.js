import "./Feed.css";
import React, { useState, useEffect } from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

function Feed() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				);
			});
	}, []);
	console.log(db);
	console.log(db.collection("posts").orderBy("timestamp", "desc"));
	// console.log(db);
	console.log(posts);

	return (
		<div className="feed">
			<StoryReel />
			<MessageSender />
			{posts.map((post) => (
				<Post
					key={post.data.id}
					profilePic={post.data.profilePic}
					message={post.data.message}
					timestamp={post.data.timestamp}
					username={post.data.username}
					image={post.data.image}
				/>
			))}

			<Post
				// key={post.data.id}
				profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmYqV169i0EnpkQExX1BF05a6SIZRQclxeA&usqp=CAU"
				message="Still learning"
				timestamp="...."
				username="Naveen Saharan"
				image="No image"
			/>

			<Post
				// key={post.data.id}
				profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCEDaIfO7ALq99OG0AgJh_D7V-tBeCJv0Ww&usqp=CAU"
				message="HAPPY BIRTHDAY MY SON !"
				timestamp="28 Feb"
				username="Minato"
				image="https://wallpaperaccess.com/full/703094.jpg"
			/>
			<Post
				// key={post.data.id}
				profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73e5SF7MuF5513IOQh13v2vV-lUXH-iZkgQ&usqp=CAU"
				message="Happy birthday bro!!"
				timestamp="29 Feb"
				username="Praveen"
				image="No image"
			/>
		</div>
	);
}

export default Feed;
