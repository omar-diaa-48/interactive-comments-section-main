import data from "../data.json";
import Comment from "./Comment";

export default function Feed() {
	return (
		<div className="flex flex-col p-4 rounded shadow-md max-w-4xl">
			{data.comments.map((comment) => (<Comment key={comment.id} comment={comment} />))}
		</div>
	)
}