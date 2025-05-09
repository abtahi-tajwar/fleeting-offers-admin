import { writable } from "svelte/store";

const appStore = writable({
	theme: "light";
	shortcuts: NavItem[]
    sidenavOpenState: SidenavOpenStates;
})

