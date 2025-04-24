export const lightTheme = {
  colors: {
    background: "#FFFFFF",
    text: "#1E1E1E",
    primary: "#6D28D9",     // roxo
    secondary: "#0ABAB5",   // tiffany
    gradient: "linear-gradient(45deg, #6D28D9 0%, #0ABAB5 100%)",
  },
};

export const darkTheme = {
  colors: {
    background: "#1E1E1E",
    text: "#FFFFFF",
    primary: "#8B5CF6",     // roxo claro
    secondary: "#0ABAB5",   // tiffany
    gradient: "linear-gradient(45deg, #8B5CF6 0%, #0ABAB5 100%)",
  },
};

export type ThemeType = typeof lightTheme;