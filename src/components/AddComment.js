import data from "../data.json";
import Avatar from "./Avatar";

export default function AddComment() {
	return (
		<div className="flex flex-col md:flex-row justify-center md:justify-between md:items-start px-4 py-2 bg-white rounded shadow-sm mt-4 mb-8">
			<Avatar image={data.currentUser.image.png} username={data.currentUser.username} className="hidden md:block" />
			<textarea className="border border-light-gray rounded flex-grow mb-2 md:mx-4 p-2 resize-none focus:outline-0" rows="6" placeholder="Add a comment..." />
			<button className="bg-moderate-blue rounded text-white py-2 px-4 self-end md:place-self-auto">SEND</button>
		</div>
	)
}