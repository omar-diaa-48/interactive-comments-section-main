import { useContext } from "react";
import { AppContext } from "../App";

export default function DeleteModal() {
	const { handleDelete } = useContext(AppContext);

	return (
		<div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
			<div className="bg-white px-8 py-6 rounded-md text-center flex flex-col justify-center max-w-sm">

				<h1 className="text-lg mb-4 font-bold text-dark-blue self-start">Delete comment</h1>

				<p className="text-md mb-4 text-slate-500">
					Are you sure you want to delete this comment? This will remove the comment and can`t be undone.
				</p>

				<div className="flex flex-row justify-center text-white">
					<button className="bg-grayish-blue px-4 py-2 mr-2 rounded-md text-md w-1/2" onClick={() => handleDelete(false)}>NO, CANCEL</button>
					<button className="bg-soft-red hover:bg-red-600 px-4 py-2 ml-2 rounded-md text-md w-1/2" onClick={() => handleDelete(false)}>YES, DELETE</button>
				</div>

			</div>
		</div>
	)
}