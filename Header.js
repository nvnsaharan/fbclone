import { Avatar, IconButton } from "@material-ui/core";
import {
	Search,
	Home,
	Flag,
	SubscriptionsOutlined,
	StorefrontOutlined,
	SupervisedUserCircle,
	Add,
	ExpandMore,
	Forum,
	NotificationsActive,
} from "@material-ui/icons";
import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
	const [{ user }, dispatch] = useStateValue();
	return (
		<div className="header">
			<div className="header_left">
				<img
					src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
					alt=""
				/>
				<div className="header_input">
					<Search className="search-icon" />
					<input
						placeholder="Search Facebook"
						className="header_input_field"
						type="text"
					/>
				</div>
			</div>
			<div className="header_middle">
				<div className="header_option header_option-active">
					<Home />
				</div>
				<div className="header_option">
					<Flag />
				</div>
				<div className="header_option">
					<SubscriptionsOutlined />
				</div>
				<div className="header_option">
					<StorefrontOutlined />
				</div>
				<div className="header_option">
					<SupervisedUserCircle />
				</div>
			</div>
			<div className="header_right">
				<div className="header_info">
					<Avatar src={user.photoURL} />
					<h4>{user.displayName}</h4>
				</div>
				<IconButton>
					<Add />
				</IconButton>
				<IconButton>
					<Forum />
				</IconButton>
				<IconButton>
					<NotificationsActive />
				</IconButton>
				<IconButton>
					<ExpandMore />
				</IconButton>
			</div>
		</div>
	);
}

export default Header;
