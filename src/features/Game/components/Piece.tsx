import { PieceType } from "../types";

export const Piece = (props: PieceType) => {
	const { black, type } = props;
	if (type === "knight") return black ? <span>♞</span> : <span>♘</span>;
	if (type === "bishop") return black ? <span>♝</span> : <span>♗</span>;
	return black ? <span>♟</span> : <span>♙</span>;
};
