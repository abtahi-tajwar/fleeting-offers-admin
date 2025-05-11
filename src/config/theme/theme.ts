export const theme: Core.Theme = {
	mode: "light",
	light: {
		color: {
			primary: "#571089",
			primary_light: ["#6411ad", "#6d23b6", "#822faf", "#973aa8", "#ac46a1"],
			primary_deep: ["#47126b"],
			accent: "#ea698b",
			accent_deep: ["#d55d92", "#c05299", "#c05299"],
			background: "#FCFAF8",
			background_pure: "#ffffff",
			background_toned: [
				'#FCFAF8', // layer-0: base background
				'#F5F3F1', // layer-1: very light gray
				'#ECEAE8', // layer-2: light gray
				'#E3E0DE', // layer-3: medium-light gray
				'#DAD6D4', // layer-4: muted surface or border background
			],
			gray: "#E1E1E1",
			text: "#000000",
			text_inverse: "#ffffff",
			text_light: "#4E4E4C",
			text_primary: "#47126b",
			text_primary_light: ["#571089"]
		},
		font: {
			primary: `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
			secondary: `"Noto Sans JP", "Cal Sans", ui-sans-serif`
		}
	},
	dark: {
		color: {
			primary: "#571089",
			primary_light: ["#6411ad", "#6d23b6", "#822faf", "#973aa8", "#ac46a1"],
			primary_deep: ["#47126b"],
			accent: "#ea698b",
			accent_deep: ["#d55d92", "#c05299", "#c05299"],
			background: "#0a0f1c",
			background_pure: "#000000",
			background_toned: [
				'#121212', // layer-0: base dark background
				'#1B191A', // layer-1: slightly lighter than base
				'#242223', // layer-2: mild elevation
				'#2D2A2C', // layer-3: moderate elevation
				'#373336', // layer-4: contrast surface like modals/cards
			],
			gray: "#E1E1E1",
			text: "#ffffff",
			text_inverse: "#000000",
			text_light: "#BDBDBB",
			text_primary: "#47126b",
			text_primary_light: ["#571089"]
		},
		font: {
			primary: `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
			secondary: `"Noto Sans JP", "Cal Sans", ui-sans-serif`
		}
	}

}

