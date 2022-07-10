export default function Avatar({ image, username }) {
	return (
		<div className="rounded-full w-16">
			<img src={image} alt={username} />
		</div>
	)
}