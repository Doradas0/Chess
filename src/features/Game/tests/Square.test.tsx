import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Square } from "../components/Square";

it("renders a white square", () => {
	render(<Square />);
	const square = screen.getByTestId("square");
	expect(square).toHaveStyle("background-color: white");
});

it("renders a black square", () => {
	render(<Square black/>);
	const square = screen.getByTestId("square");
	expect(square).toHaveStyle("background-color: black");
});
