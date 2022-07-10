import Avatar from "./Avatar";
import Counter from "./Counter";

export default function Comment({ comment }) {
	return (
		<div className="flex flex-col px-4 py-2 bg-white rounded shadow-sm mt-4 mb-8 md:flex-row">

			<div className="flex flex-col">
				<div className="flex items-center text-grayish-blue mb-2">
					<Avatar image={comment.user.image.png} user={comment.user.username} />
					<p className="ml-4 font-medium">{comment.user.username}</p>
					<p className="ml-4 flex-grow">{comment.createdAt}</p>
					<p className="hidden md:block text-moderate-blue">Reply</p>
				</div>

				<p className="mb-4 mt-2 text-grayish-blue">{comment.content}</p>
			</div>


			<div className="flex justify-between md:order-first md:flex-col md:mr-4 text-moderate-blue ">
				<Counter count={comment.score} />
				<p className="md:hidden text-moderate-blue">Reply</p>
			</div>

		</div>
	)
}