import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Board } from "../components/Board";
import { piecevalues} from "../libs/pieceValues";

it("Renders 64 squares", () => {
	render(<Board />);
	const squares = screen.getAllByTestId(/square/);
	expect(squares).toHaveLength(64);
});

it("Renders 32 black squares", () => {
	render(<Board />);
	const squares = screen.getAllByTestId(/square-black/);
	expect(squares).toHaveLength(32);
});

it("Renders the black starting position", () => {
	render(<Board />);
	const squares = screen.getAllByTestId(/square/);
	expect(squares[0]).toHaveTextContent(piecevalues.BLACK_ROOK);
	expect(squares[1]).toHaveTextContent(piecevalues.BLACK_KNIGHT);
	expect(squares[2]).toHaveTextContent(piecevalues.BLACK_BISHOP);
	expect(squares[3]).toHaveTextContent(piecevalues.BLACK_QUEEN);
	expect(squares[4]).toHaveTextContent(piecevalues.BLACK_KING);
	expect(squares[5]).toHaveTextContent(piecevalues.BLACK_BISHOP);
	expect(squares[6]).toHaveTextContent(piecevalues.BLACK_KNIGHT);
	expect(squares[7]).toHaveTextContent(piecevalues.BLACK_ROOK);
	expect(squares[8]).toHaveTextContent(piecevalues.BLACK_PAWN);
	expect(squares[9]).toHaveTextContent(piecevalues.BLACK_PAWN);
	expect(squares[10]).toHaveTextContent(piecevalues.BLACK_PAWN);
	expect(squares[11]).toHaveTextContent(piecevalues.BLACK_PAWN);
	expect(squares[12]).toHaveTextContent(piecevalues.BLACK_PAWN);
	expect(squares[13]).toHaveTextContent(piecevalues.BLACK_PAWN);
	expect(squares[14]).toHaveTextContent(piecevalues.BLACK_PAWN);
	expect(squares[15]).toHaveTextContent(piecevalues.BLACK_PAWN);
});

it("Renders the white starting position", () => {
	render(<Board />);
	const squares = screen.getAllByTestId(/square/);
	expect(squares[48]).toHaveTextContent(piecevalues.WHITE_PAWN);
	expect(squares[49]).toHaveTextContent(piecevalues.WHITE_PAWN);
	expect(squares[50]).toHaveTextContent(piecevalues.WHITE_PAWN);
	expect(squares[51]).toHaveTextContent(piecevalues.WHITE_PAWN);
	expect(squares[52]).toHaveTextContent(piecevalues.WHITE_PAWN);
	expect(squares[53]).toHaveTextContent(piecevalues.WHITE_PAWN);
	expect(squares[54]).toHaveTextContent(piecevalues.WHITE_PAWN);
	expect(squares[55]).toHaveTextContent(piecevalues.WHITE_PAWN);
	expect(squares[56]).toHaveTextContent(piecevalues.WHITE_ROOK);
	expect(squares[57]).toHaveTextContent(piecevalues.WHITE_KNIGHT);
	expect(squares[58]).toHaveTextContent(piecevalues.WHITE_BISHOP);
	expect(squares[59]).toHaveTextContent(piecevalues.WHITE_QUEEN);
	expect(squares[60]).toHaveTextContent(piecevalues.WHITE_KING);
	expect(squares[61]).toHaveTextContent(piecevalues.WHITE_BISHOP);
	expect(squares[62]).toHaveTextContent(piecevalues.WHITE_KNIGHT);
	expect(squares[63]).toHaveTextContent(piecevalues.WHITE_ROOK);
});
