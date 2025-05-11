import { appStore } from "../../store/app.store/appStore.svelte";

export function toggleTheme() {
  const theme = appStore.theme === 'light' ? 'dark' : 'light'
  appStore.theme = theme;
  document.documentElement.classList.toggle('dark')
}


export function expandSidenav() {
  appStore.sidenavOpenState = "expanded"
}
export function collapseSidenav() {
  appStore.sidenavOpenState = "collapsed"
}
