import { Square } from "./Square";

export const Board = () => {
	const squares = [];
	for (let i = 0; i < 64; i++) {
		squares.push(renderSquare(i));
	}
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexWrap: "wrap",
			}}
		>
			{squares}
		</div>
	);
};

const renderSquare = (boardIndex: number) => {
	const row = boardIndex % 8;
	const column = Math.floor(boardIndex / 8);
	const isSqaureBlack = (row + column) % 2 === 1;
	return (
		<div key={boardIndex} style={{ width: "12.5%", height: "12.5%" }}>
			<Square black={isSqaureBlack} />
		</div>
	);
};
