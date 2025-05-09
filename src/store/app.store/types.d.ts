namespace Store {
  type AppStore = {
    theme: Utils.ThemeColorSchemes;
    shortcuts: NavItem[]
    sidenavOpenState: SidenavOpenStates;
  }
  type NavItem = {
    id: string,
    url: string,
    label: string,
    icon: Utils.AppComponent,
    description?: string,
    tags?: [string]
  }
  type SidenavOpenStates = "expanded" | "collapsed" | "hidden"
}
