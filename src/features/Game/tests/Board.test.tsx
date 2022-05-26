import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Board } from "../components/Board";

it("Renders 64 squares", () => {
	render(<Board />);
	const squares = screen.getAllByTestId("square");
	expect(squares).toHaveLength(64);
});