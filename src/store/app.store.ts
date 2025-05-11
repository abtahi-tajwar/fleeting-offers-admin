import { writable } from "svelte/store";

const appStore = writable({
	theme: "light",
	shortcuts: Store.NavItem[],
	sidenavOpenState: SidenavOpenStates;
})

