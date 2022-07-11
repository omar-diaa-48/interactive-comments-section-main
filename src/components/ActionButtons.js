import data from "../data.json";

export default function ActionButtons(props) {
	return (
		<div className={props.className}>

			{data.currentUser.username === props.details.user.username && (
				<p className="text-soft-red cursor-pointer">Delete</p>
			)}

			{data.currentUser.username === props.details.user.username ? (
				<p className="text-moderate-blue cursor-pointer ml-4">Edit</p>
			) : (
				<p className="text-moderate-blue cursor-pointer ml-4">Reply</p>
			)}

		</div>
	)
}