import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import { Pawn } from "../components/Pawn"

it("renders a white pawn", () => {
	render(<Pawn />);
	expect(screen.getByText("♙")).toBeInTheDocument();
});

it("renders a black pawn", () => {
	render(<Pawn black/>);
	expect(screen.getByText("♟")).toBeInTheDocument();
});
