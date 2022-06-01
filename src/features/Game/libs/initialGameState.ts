import { PieceType } from "../types";
export const initialPieceState: PieceType[] = [
	{ black: true, type: "rook", position: [0, 0] },
	{ black: true, type: "knight", position: [0, 1] },
	{ black: true, type: "bishop", position: [0, 2] },
	{ black: true, type: "queen", position: [0, 3] },
	{ black: true, type: "king", position: [0, 4] },
	{ black: true, type: "bishop", position: [0, 5] },
	{ black: true, type: "knight", position: [0, 6] },
	{ black: true, type: "rook", position: [0, 7] },
	{ black: true, position: [1, 0] },
	{ black: true, position: [1, 1] },
	{ black: true, position: [1, 2] },
	{ black: true, position: [1, 3] },
	{ black: true, position: [1, 4] },
	{ black: true, position: [1, 5] },
	{ black: true, position: [1, 6] },
	{ black: true, position: [1, 7] },
	{ black: false, type: "rook", position: [7, 0] },
	{ black: false, type: "knight", position: [7, 1] },
	{ black: false, type: "bishop", position: [7, 2] },
	{ black: false, type: "queen", position: [7, 3] },
	{ black: false, type: "king", position: [7, 4] },
	{ black: false, type: "bishop", position: [7, 5] },
	{ black: false, type: "knight", position: [7, 6] },
	{ black: false, type: "rook", position: [7, 7] },
	{ black: false, position: [6, 0] },
	{ black: false, position: [6, 1] },
	{ black: false, position: [6, 2] },
	{ black: false, position: [6, 3] },
	{ black: false, position: [6, 4] },
	{ black: false, position: [6, 5] },
	{ black: false, position: [6, 6] },
	{ black: false, position: [6, 7] },
];

const generateBoard = () => {
	const squares = [];
	for (let i = 0; i < 64; i++) {
		const column = i % 8;
		const row = Math.floor(i / 8);
		squares.push({ row: row, column: column, isHighlighted: false });
	}
	return squares;
};

export const initialBoardState: any[] = generateBoard();
