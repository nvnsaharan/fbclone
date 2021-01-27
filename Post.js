import "./Post.css";
import React from "react";
import { Avatar } from "@material-ui/core";
import {
	AccountCircle,
	ChatBubbleOutline,
	NearMe,
	ThumbUp,
	ExpandMoreOutlined,
} from "@material-ui/icons";

function Post({ profilePic, image, username, timestamp, message }) {
	return (
		<div className="post">
			<div className="post_top">
				<Avatar src={profilePic} className="post_avatar" />
				<div className="post_topInfo">
					<h4>{username}</h4>
					<p>
						{
							timestamp /*new Date(timestamp.toDate()).toUTCString()*/
						}
					</p>
				</div>
			</div>
			<div className="post_bottom">
				<p>{message}</p>
			</div>
			<div className="post_image">
				<img src={image} alt="" />
			</div>
			<div className="post_btns">
				<div className="post_btn">
					<ThumbUp />
					<p>Like</p>
				</div>

				<div className="post_btn">
					<ChatBubbleOutline />
					<p>Comment</p>
				</div>
				<div className="post_btn">
					<NearMe />
					<p>Share</p>
				</div>
				<div className="post_btn">
					<AccountCircle />
					<ExpandMoreOutlined />
				</div>
			</div>
		</div>
	);
}

export default Post;
