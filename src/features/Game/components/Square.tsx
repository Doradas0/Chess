import { SquareProps } from "../types";

export const Square = (props: SquareProps) => {
	const fill = props.black? "black" : "white";
	return <div data-testid="square" style={{backgroundColor: fill}}/>
}
