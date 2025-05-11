import { appStore } from "../../store/app.store/app.store";

function toggleTheme() {
  appStore.update((state: Store.AppStore) => ({
    ...state,
    theme: state.theme === 'light' ? 'dark' : 'light'
  }))
}

function toggleSideNav() {
  appStore.update((state: Store.AppStore) => ({
    ...state,
    sidenavOpenState: state.sidenavOpenState === "expanded" ? "collapsed" : "expanded",
  }))
}
