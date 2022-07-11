import data from "../data.json";
import Comment from "./Comment";

export default function Feed() {
	return (
		<div className="feed">
			{data.comments.map((comment) => (<Comment key={comment.id} comment={comment} />))}
		</div>
	)
}