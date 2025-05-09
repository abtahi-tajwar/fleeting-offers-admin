export type SidenavSubmodule = Core.NavSubmodule & {
  selected: boolean;
};

export type SidenavModule = Core.NavModule & {
  collapsed: boolean;
  selected: boolean;
  submodule: SidenavSubmodule[];
};

export type SidenavSection = Core.NavSection & {
  collapsed: boolean;
  selected: boolean;
  module: SidenavModule[];
};

export const initializeNavTreeState = (tree: Core.NavTree): SidenavSection[] => {
  return tree.map((section) => ({
    ...section,
    collapsed: false,
    selected: false,
    module: section.module.map((mod) => ({
      ...mod,
      collapsed: false,
      selected: false,
      submodule: mod.submodule.map((sub) => ({
        ...sub,
        selected: false
      }))
    }))
  }));
}

