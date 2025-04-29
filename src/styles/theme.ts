type ColorsType = {
	background: string;
	text: string;
	primary: string;
	secondary: string;
	gradient: string;
	black: string;
};

export type ThemeType = {
	colors: ColorsType;
};

export const lightTheme = {
	colors: {
		background: "#FFFFFF",
		text: "#1E1E1E",
		primary: "#6D28D9",
		secondary: "#0ABAB5",
		gradient: "linear-gradient(45deg, #6D28D9 0%, #0ABAB5 100%)",
		black: "#474A51",
	},
};


