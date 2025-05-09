namespace Core {
  type NavSubmodule = {
    id: string;
    label: string;
    description: string;
    tags: string[];
  };

  type NavModule = {
    id: string;
    label: string;
    icon: ComponentType;
    description: string;
    tags: string[];
    submodule: NavSubmodule[];
  };

  type NavSection = {
    id: string;
    label: string;
    description: string;
    tags: string[];
    module: NavModule[];
  };

  type NavTree = NavSection[];

}
