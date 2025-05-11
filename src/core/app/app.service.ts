import { appStore } from "../../store/app.store/appStore.svelte";

export function toggleTheme() {
  appStore.theme = appStore.theme === 'light' ? 'dark' : 'light'
}


export function expandSidenav() {
  appStore.sidenavOpenState = "expanded"
}
export function collapseSidenav() {
  appStore.sidenavOpenState = "collapsed"
}
