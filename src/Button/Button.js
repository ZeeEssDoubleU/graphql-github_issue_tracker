import React from "react";

// import styles
import "./Button.css";

const Button = (
	{ children, className, ...props },
	color = "black",
	type = "button",
) => (
	<button
		className={`${className} Button Button_${color}`}
		type={type}
		{...props}>
		{children}
	</button>
);

export const ButtonUnobtrusive = (
	{ children, className, ...props },
	type = "button",
) => (
	<button
		className={`${className} Button_unobtrusive`}
		type={type}
		{...props}>
		{children}
	</button>
);

export default Button;
