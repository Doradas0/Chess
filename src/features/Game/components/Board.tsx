import { Square } from "./Square";
import { Piece } from "./Piece";
import { PieceType } from "../types";
import { initialBoardState } from "../libs/initialBoardState";

const pieceState: PieceType[] = [...initialBoardState];

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
	const piece = checkIfSquareHasPiece(row, column);
	return (
		<div key={boardIndex} style={{ width: "12.5%", height: "12.5%" }}>
			<Square black={isSqaureBlack}>
				{piece && <Piece type={piece.type} black={piece.black} />}
			</Square>
		</div>
	);
};

const checkIfSquareHasPiece = (row: number, column: number) => {
	return pieceState.find(
		(piece) => piece.position[0] === column && piece.position[1] === row
	);
};
