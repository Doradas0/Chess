import { Square } from "./Square";

export const Board = () => {
	const squareArray = new Array(64).fill(0);
	return (
		<div>
			{squareArray.map((square, i) => (
				<Square key={i} />
			))}
		</div>
	);
};
