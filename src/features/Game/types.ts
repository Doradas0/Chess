import React from "react"
export type PieceType = {
	//default is white
	black?: boolean;
	//default is pawn
	type?: "knight" | "bishop" | "rook" | "queen" | "king";
	position: [number, number];
};

export type PieceProps = {
	//default is white
	black?: boolean;
	//default is pawn
	type?: "knight" | "bishop" | "rook" | "queen" | "king";
}

export type SquareProps = {
	//default is white
	black?: boolean;
	isHighlighted?: boolean;
	children?: React.ReactNode
}

export type BoardProps = {
	children?: React.ReactNode
}
