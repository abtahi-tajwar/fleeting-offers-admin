<script>
  import CollapseIcon from '$lib/icons/collapseIcon.svelte'
  import ShortcutIcon from '$lib/icons/ShortcutIcon.svelte'
  import { theme } from '../../../../config/theme/theme'
  import SidenavItems from './internal/SidenavItems.svelte'
  import navTree from '../../../../core/nav-tree/nav-tree'
</script>

<div
  class="relative flex flex-col w-full h-full overflow-hidden border-r-[0.8px] border-r-gray font-secondary font-medium bg-gray-100"
  style={`--stop-one: ${theme.light.color.primary}; --stop-two: ${theme.light.color.accent};`}
>
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
      icon={{
        component: ShortcutIcon,
        props: {
          scale: 0.8,
        },
      }}
      label="Shortcut"
      badgeCount={2}
    />
    <SidenavItems
      icon={{
        component: ShortcutIcon,
        props: {
          scale: 0.8,
        },
      }}
      label="History"
    />
  </div>

  <div class="flex flex-col p-2 overflow-y-auto flex-1">
    <!-- Section -->
    {#each navTree as section (section.id)}
      <div class="mt-3 mb-2">
        <p class="text-xs text-text-light uppercase">{section.label}</p>
        {#each section.module as module (module.id)}
          <SidenavItems
            icon={{
              component: module.icon,
              props: {
                scale: 0.8,
              },
            }}
            label={module.label}
          />
        {/each}
      </div>
    {/each}
  </div>
  <div class="absolute mesh-background -inset-10 pointer-events-none"></div>
</div>

<style>
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
