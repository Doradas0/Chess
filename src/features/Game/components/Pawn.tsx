import { Piece } from "../types";

export const Pawn = (props: Piece) => {
	const { black } = props;
	return black ? <span>♟</span> : <span>♙</span>;
};
