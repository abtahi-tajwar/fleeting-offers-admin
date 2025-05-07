namespace Utils {
	type Theme = {
		mode: "light" | "dark";
		color: {
			primary: string;
			primaryLight: string[];
			primaryDark: string[];
			accent: string;
			accentDark: string[];
		};
		font: {
			primary: string;
		}
	};

}
