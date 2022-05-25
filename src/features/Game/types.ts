export type PieceType = {
	//default is white
	black?: boolean;
	//default is pawn
	type?: "knight" | "bishop" | "rook" | "queen" | "king";
};

export type SquareProps = {
	//default is white
	black?: boolean;
}
