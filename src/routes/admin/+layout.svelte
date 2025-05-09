<script>
  let { children } = $props()
  import Sidenav from '$lib/components/Navigation/Sidenav/Sidenav.svelte'
  import Topnav from '$lib/components/Navigation/Topnav/Topnav.svelte'

  // States
  let containerOffset = 12
</script>

<div
  class="bg-gradient-to-r from-primary dark:from-primary-dark to-accent dark:to-accent-dark w-full h-screen"
  style="padding: {containerOffset}px"
>
  <div
    class="flex rounded bg-gradient-to-b from-background-toned-1 to-background-toned-0 dark:bg-background-dark h-full rounded overflow-hidden"
  >
    <!-- Sidenavigation -->
    <div class="w-[280px] h-full">
      <Sidenav />
    </div>

    <!-- Right Content -->
    <div class="flex-1 flex flex-col h-full">
      <!-- Top Navigation -->
      <Topnav />
      <div class="flex-1">
        {@render children()}
      </div>
    </div>
  </div>
</div>
