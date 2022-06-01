import { useState } from "react";
import { Square } from "./Square";
import { Piece } from "./Piece";
import { initialBoardState } from "../libs/initialGameState";
import { initialPieceState } from "../libs/initialGameState";

export const Board = () => {
	const [pieceState, setPieceState] = useState([...initialPieceState]);
	const [boardState, setBoardState] = useState([...initialBoardState]);

	const getPieceForSqaure = (row: number, column: number) => {
		return pieceState.find(
			(piece) => piece.position[1] === column && piece.position[0] === row
		);
	};

	const renderSquare = (boardIndex: number) => {
		const column = boardIndex % 8;
		const row = Math.floor(boardIndex / 8);
		const isSqaureBlack = (row + column) % 2 === 1;
		const piece = getPieceForSqaure(row, column);
		return (
			<div
				key={boardIndex}
				style={{ width: "12.5%", height: "12.5%" }}
				onClick={() => handleSquareClick(boardIndex)}
			>
				<Square
					black={isSqaureBlack}
					isHighlighted={boardState[boardIndex].isHighlighted}
				>
					{piece && <Piece type={piece.type} black={piece.black} />}
				</Square>
			</div>
		);
	};

	const handleSquareClick = (boardIndex: number) => {
		const newBoardState = [...boardState];
		console.log(newBoardState[boardIndex]);
		boardState[boardIndex].isHighlighted = true;
		setBoardState(newBoardState);
	};

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
