import { SquareProps } from "../types";

export const Square = (props: SquareProps) => {
	const { black, children } = props;
	const fill = black ? "black" : "white";
	const stroke = black ? "white" : "black";
	return (
		<div
			data-testid={black ? "square-black" : "square-white"}
			style={{
				backgroundColor: fill,
				color: stroke,
				width: "100%",
				height: "100%",
				fontSize: "3rem",
				textAlign: "center",
			}}
		>
			{props.children}
		</div>
	);
};
