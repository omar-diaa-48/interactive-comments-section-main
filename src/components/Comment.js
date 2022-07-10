import Details from "./Details";

export default function Comment({ comment }) {
	return (
		<div className="flex flex-col">
			<Details details={comment} />

			{
				comment.replies && comment.replies.length > 0 && (
					<div className="flex flex-col border-l-2 border-l-light-gray pl-8 md:pl-16 ml:4 md:ml-8">
						{comment.replies.map((reply) => (
							<Details key={reply.id} details={reply} />
						))}
					</div>
				)
			}
		</div>
	)
}