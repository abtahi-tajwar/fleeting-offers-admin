namespace Utils {
	type Theme = {
		mode: "light" | "dark";
		color: {
			primary: string;
			primaryLight: string[];
			primaryDark: string[];
			accent: string;
			accentDark: string[];
			backgroundLight: string,
			backgroundDark: string
		};
		font: {
			primary: string;
		}
	};

}
