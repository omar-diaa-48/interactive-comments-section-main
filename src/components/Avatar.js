export default function Avatar({ image, username, className }) {
	return (
		<div className={`${className} rounded-full w-16`}>
			<img src={image} alt={username} />
		</div>
	)
}