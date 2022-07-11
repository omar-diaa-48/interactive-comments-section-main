import data from "../data.json";
import Avatar from "./Avatar";

export default function AddComment() {
	return (
		<div className="flex justify-between items-start px-4 py-2 bg-white rounded shadow-sm mt-4 mb-8">
			<Avatar image={data.currentUser.image.png} username={data.currentUser.username} />
			<textarea className="border border-light-gray rounded flex-grow mx-4 p-2 resize-none" rows="6" placeholder="Add a comment..." />
			<button className="bg-moderate-blue rounded text-white py-2 px-4">SEND</button>
		</div>
	)
}