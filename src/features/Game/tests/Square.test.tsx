import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Square } from "../components/Square";
import { Piece } from "../components/Piece";

it("renders a white square", () => {
	render(<Square />);
	const square = screen.getByTestId("square");
	expect(square).toHaveStyle("background-color: white");
});

it("renders a black square", () => {
	render(<Square black />);
	const square = screen.getByTestId("square");
	expect(square).toHaveStyle("background-color: black");
});

it("renders a black night on a white square", () => {
	render(
		<Square>
			<Piece type="knight" black />
		</Square>
	);
	const square = screen.getByTestId("square");
	expect(square).toHaveStyle("background-color: white");
	expect(square).toHaveStyle("color: black");
	expect(square).toHaveTextContent("♞");
});
