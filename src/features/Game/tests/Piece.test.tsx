import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Piece } from "../components/Piece";

it("renders a white pawn", () => {
	render(<Piece />);
	expect(screen.getByText("♙")).toBeInTheDocument();
});

it("renders a black pawn", () => {
	render(<Piece black />);
	expect(screen.getByText("♟")).toBeInTheDocument();
});

it("renders a white knight", () => {
	render(<Piece type="knight" />);
	expect(screen.getByText("♘")).toBeInTheDocument();
});

it("renders a black knight", () => {
	render(<Piece type="knight" black />);
	expect(screen.getByText("♞")).toBeInTheDocument();
});

it("renders a white bishop", () => {
	render(<Piece type="bishop" />);
	expect(screen.getByText("♗")).toBeInTheDocument();
});

it("renders a black bishop", () => {
	render(<Piece type="bishop" black />);
	expect(screen.getByText("♝")).toBeInTheDocument();
});

it("renders a white rook", () => {
	render(<Piece type="rook" />);
	expect(screen.getByText("♖")).toBeInTheDocument();
});

it("renders a black rook", () => {
	render(<Piece type="rook" black />);
	expect(screen.getByText("♜")).toBeInTheDocument();
});

it("renders a white queen", () => {
	render(<Piece type="queen" />);
	expect(screen.getByText("♕")).toBeInTheDocument();
});

it("renders a black queen", () => {
	render(<Piece type="queen" black />);
	expect(screen.getByText("♛")).toBeInTheDocument();
});

it("renders a white king", () => {
	render(<Piece type="king" />);
	expect(screen.getByText("♔")).toBeInTheDocument();
});

it("renders a black king", () => {
	render(<Piece type="king" black />);
	expect(screen.getByText("♚")).toBeInTheDocument();
});
