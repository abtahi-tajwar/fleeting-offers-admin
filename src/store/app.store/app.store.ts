import { writable } from "svelte/store";

const initialState: Store.AppStore = {
  theme: 'light',
  shortcuts: [],
  sidenavOpenState: 'expanded'
}
export const appStore = writable(initialState);

