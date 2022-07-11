import React, { useState } from "react";
import DeleteModal from "./components/DeleteModal";
import Feed from "./components/Feed";

export const AppContext = React.createContext();

function App() {
	const [willDelete, setWillDelete] = useState(false)
	const handleDelete = (value) => setWillDelete(value)

	return (
		<AppContext.Provider value={{
			handleDelete
		}}>
			<div className="container">
				<Feed />
				{willDelete && (<DeleteModal />)}
			</div>
		</AppContext.Provider>
	);
}

export default App;
