import { Piece } from "./features/Game";
import { Square } from "./features/Game";
import { Board } from "./features/Game";

const App = () => {
	return (
		<div style={{ width: "500px", height: "500px", border: "1px solid black" }}>
			<Board />
		</div>
	);
};

export default App;
