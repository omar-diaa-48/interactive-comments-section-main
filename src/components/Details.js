import { useState } from "react";
import ActionButtons from "./ActionButtons";
import AddComment from "./AddComment";
import Avatar from "./Avatar";
import Counter from "./Counter";

export default function Details({ details }) {
	// const [willEdit, setWillEdit] = useState(false)
	const [willReply, setWillReply] = useState(false)

	const handleEdit = () => { }

	const handleReply = () => {
		setWillReply((prevValue) => !prevValue)
	}

	return (
		<div className="flex flex-col">
			<div className="flex flex-col px-4 py-2 bg-white rounded shadow-sm mt-4 mb-8 md:flex-row">

				<div className="flex flex-col">
					<div className="flex items-center text-grayish-blue mb-2">
						<Avatar image={details.user.image.png} user={details.user.username} />
						<p className="ml-4 font-medium">{details.user.username}</p>
						<p className="ml-4 flex-grow">{details.createdAt}</p>
						<ActionButtons className="hidden md:flex" details={details} handleEdit={handleEdit} handleReply={handleReply} />
					</div>

					<p className="mb-4 mt-2 text-grayish-blue">{details.content}</p>
				</div>


				<div className="flex justify-between items-center md:order-first md:flex-col md:mr-4 text-moderate-blue ">
					<Counter count={details.score} />
					<ActionButtons className="flex md:hidden" details={details} />
				</div>
			</div>

			<AddComment className={`${willReply ? "block" : "hidden"}`} />
		</div>
	)
}