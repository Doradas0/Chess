import { SquareProps } from "../types";

export const Square = (props: SquareProps) => {
	const { black, children } = props;
	const fill = black ? "black" : "white";
	const stroke = black ? "white" : "black";
	return (
		<div
			data-testid="square"
			style={{
				backgroundColor: fill,
				color: stroke,
				width: "100%",
				height: "100%",
			}}
		>
			{props.children}
		</div>
	);
};
