namespace Utils {
	export type Theme = {
		mode: ThemeColorSchemes;
		light: ThemeDefinition;
		dark: ThemeDefinition; // optional if you want to support dark mode later
	};

	export type ThemeDefinition = {
		color: {
			primary: string;
			primary_light: string[];
			primary_deep: string[];
			accent: string;
			accent_deep: string[];
			background: string;
			background_pure: string;
			background_toned: [string];
			gray: string;
			text: string,
			text_light: string,
			text_primary: string;
			text_primary_light: string[];
		};
		font: {
			primary: string;
			secondary: string;
		};
	};
	export type ThemeColorSchemes = "light" | "dark";
}
