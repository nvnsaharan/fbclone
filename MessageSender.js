import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import "./MessageSender.css";
import { useStateValue } from "./StateProvider";

function MessageSender() {
	const [{ user }, dispatch] = useStateValue();
	const [input, setInput] = useState("");
	const [imageURL, setImageURL] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();

		//Database

		setInput("");
		setImageURL("");
	};
	return (
		<div className="messageSender">
			<div className="messageSender_top">
				<Avatar src={user.photoURL} />
				<form>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="messageSender_input"
						placeholder={`What is on your mind,${user.displayName} ?`}
					/>
					<input
						value={imageURL}
						onChange={(e) => setImageURL(e.target.value)}
						placeholder={"image URL (Optional)"}
					/>
					<button onClick={handleSubmit} type="submit">
						Hidden submit
					</button>
				</form>
			</div>
			<div className="messageSender_bottom">
				<div className="messageSender_option">
					<Videocam style={{ color: "red" }} />
					<h4>Live Video</h4>
				</div>
				<div className="messageSender_option">
					<PhotoLibrary style={{ color: "green" }} />
					<h4>Photo/Video</h4>
				</div>
				<div className="messageSender_option">
					<InsertEmoticon style={{ color: "orange" }} />
					<h4>Feeling/Activity</h4>
				</div>
			</div>
		</div>
	);
}

export default MessageSender;
