<script lang="ts">
  import CollapseIcon from '$lib/icons/collapseIcon.svelte'
  import ShortcutIcon from '$lib/icons/ShortcutIcon.svelte'
  import { theme } from '../../../../config/theme/theme'
  import SidenavItems from './internal/SidenavItems.svelte'
  import navTree from '../../../../core/nav-tree/nav-tree'
  import HistoryIcon from '$lib/icons/HistoryIcon.svelte'
  import { initializeNavTreeState, onNavItemSelect } from './Sidenav.service'
  import type { SidenavModule } from './Sidenav.service'
  import { appStore } from '../../../../store/app.store/appStore.svelte'

  let navItems = initializeNavTreeState(navTree)
  let sidenavOpenState = $derived(appStore.sidenavOpenState)

  const handleNavItemSelect = (e: CustomEvent<SidenavModule>) => {
    navItems = onNavItemSelect(navItems, e.detail)
  }
</script>

<div
  class="relative flex flex-col w-full h-full overflow-hidden border-r-[0.8px] border-r-gray font-secondary font-medium bg-gray-100 transition ease-in-out duration-300"
  style={`
--stop-one: ${theme.light.color.primary}; 
--stop-two: ${theme.light.color.accent};
width: ${sidenavOpenState === 'expanded' ? '100%' : '70px'}
`}
>
  {#if sidenavOpenState === 'expanded'}
    <div class="p-4 flex items-center flex-row gap-[15px]">
      <div class="h-[30px] w-[30px] rounded overflow-hidden">
        <img src="/logo.jpg" class="h-full w-full" alt="Main Logo" />
      </div>
      <p class="text-bold">fleetingoffers</p>
      <div class="ml-auto">
        <button class="btn btn-circle btn-ghost border-none!">
          <CollapseIcon />
        </button>
      </div>
    </div>
    <div class="flex flex-col p-2 border-b-gray border-b-[0.8px]">
      <SidenavItems
        badgeCount={2}
        module={{
          label: 'Shortcuts',
          icon: ShortcutIcon,
          id: 'history',
          tags: ['history'],
          description: '',
          submodule: [],
          collapsed: true,
          selected: true,
        }}
      />
      <SidenavItems
        badgeCount={0}
        module={{
          label: 'History',
          icon: HistoryIcon,
          id: 'history',
          tags: ['history'],
          description: '',
          submodule: [],
          collapsed: true,
          selected: false,
        }}
      />
    </div>

    <div class="flex flex-col p-2 overflow-y-auto flex-1">
      <!-- Section -->
      {#each navItems as section (section.id)}
        <div class="mt-3 mb-2">
          <p class="text-xs text-text-light uppercase">{section.label}</p>
          {#each section.module as module (module.id)}
            <SidenavItems
              on:menuclick={handleNavItemSelect}
              {module}
              badgeCount={0}
            />
          {/each}
        </div>
      {/each}
    </div>
    <div class="absolute mesh-background -inset-10 pointer-events-none"></div>
  {:else if sidenavOpenState === 'collapsed'}
    <div class="flex flex-col gap-1 items-center overflow-y-auto">
      <div class="w-full my-2 flex flex-col gap-1 items-center">
        <img src="logo.jpg" alt="App Logo" class="h-[50px] w-[50px]" />
        <div class="collapsed_icon_container">
          <ShortcutIcon />
        </div>
        <div class="collapsed_icon_container">
          <HistoryIcon />
        </div>
      </div>

      {#each navItems as section (section.id)}
        <div class="my-2">-</div>
        {#each section.module as module (module.id)}
          <div class="collapsed_icon_container">
            <svelte:component this={module.icon} />
          </div>
        {/each}
      {/each}
    </div>
  {/if}
</div>

<style>
  .collapsed_icon_container {
    height: 50px;
    width: 50px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .collapsed_icon_container:hover {
    background-color: var(--color-background-pure);
  }
  .mesh-background {
    position: absolute;
    opacity: 0.18;
    background:
      radial-gradient(
        circle 450px at 30% 60%,
        var(--stop-one) 0%,
        transparent 100%
      ),
      radial-gradient(
        circle 250px at 40% 80%,
        var(--stop-two) 0%,
        transparent 100%
      );
    background-blend-mode: screen;
    animation: moveBlobs 10s ease-in-out infinite alternate;
    filter: blur(60px);
  }

  @keyframes moveBlobs {
    0% {
      background-position:
        20% 20%,
        80% 30%,
        50% 80%;
    }
    100% {
      background-position:
        30% 10%,
        70% 40%,
        60% 90%;
    }
  }
</style>
