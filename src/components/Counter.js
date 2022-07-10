export default function Counter({ count, handleChange }) {
	return (
		<div className="flex items-center md:flex-col bg-light-grayish-blue gap-8 px-4 rounded py-2">
			<p className="cursor-pointer">+</p>
			{count}
			<p className="cursor-pointer">-</p>
		</div>
	)
}