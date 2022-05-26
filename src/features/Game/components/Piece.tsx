import { PieceProps } from "../types";
import { piecevalues } from "../libs/pieceValues";

export const Piece = (props: PieceProps) => {
	const { black, type } = props;
	if (type === "knight")
		return black ? (
			<span>{piecevalues.BLACK_KNIGHT}</span>
		) : (
			<span>{piecevalues.WHITE_KNIGHT}</span>
		);
	if (type === "bishop")
		return black ? (
			<span>{piecevalues.BLACK_BISHOP}</span>
		) : (
			<span>{piecevalues.WHITE_BISHOP}</span>
		);
	if (type === "rook")
		return black ? (
			<span>{piecevalues.BLACK_ROOK}</span>
		) : (
			<span>{piecevalues.WHITE_ROOK}</span>
		);
	if (type === "queen")
		return black ? (
			<span>{piecevalues.BLACK_QUEEN}</span>
		) : (
			<span>{piecevalues.WHITE_QUEEN}</span>
		);
	if (type === "king")
		return black ? (
			<span>{piecevalues.BLACK_KING}</span>
		) : (
			<span>{piecevalues.WHITE_KING}</span>
		);
	return black ? (
		<span>{piecevalues.BLACK_PAWN}</span>
	) : (
		<span>{piecevalues.WHITE_PAWN}</span>
	);
};
