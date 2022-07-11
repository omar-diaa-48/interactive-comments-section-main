import data from "../data.json";

export default function ActionButtons({ className, details, handleEdit, handleReply }) {
	return (
		<div className={className}>

			{data.currentUser.username === details.user.username && (
				<p className="text-soft-red cursor-pointer">Delete</p>
			)}

			{data.currentUser.username === details.user.username ? (
				<p className="text-moderate-blue cursor-pointer ml-4" onClick={handleEdit}>Edit</p>
			) : (
				<p className="text-moderate-blue cursor-pointer ml-4" onClick={handleReply}>Reply</p>
			)}

		</div>
	)
}