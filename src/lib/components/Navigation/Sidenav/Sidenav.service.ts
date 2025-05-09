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

export const onNavItemSelect = (
  navTree: SidenavSection[],
  selectedModule: SidenavModule
): SidenavSection[] => {
  return navTree.map((section) => ({
    ...section,
    module: section.module.map((mod): SidenavModule => {
      const isSelected = mod.id === selectedModule.id;

      return {
        // Copy over Core.NavModule props
        id: mod.id,
        label: mod.label,
        icon: mod.icon,
        description: mod.description,
        tags: mod.tags,

        // Add SidenavModule-specific props
        collapsed: false,
        selected: isSelected ? !selectedModule.selected : mod.id === selectedModule.id,
        submodule: mod.submodule.map((sub): SidenavSubmodule => ({
          id: sub.id,
          label: sub.label,
          description: sub.description,
          tags: sub.tags,

          // Add SidenavSubmodule-specific props
          selected: false,
        })),
      };
    }),
  }));
};


