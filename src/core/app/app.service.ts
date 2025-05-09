import { appStore } from "../../store/app.store/app.store";

function toggleTheme() {
  appStore.update((state: Store.AppStore) => ({
    ...state,
    theme: state.theme === 'light' ? 'dark' : 'light'
  }))
}
