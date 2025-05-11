import { writable } from "svelte/store";

const initialState: Store.AppStore = {
  theme: 'light',
  shortcuts: [],
  sidenavOpenState: 'collapsed'
}
export const appStore = $state(initialState);

