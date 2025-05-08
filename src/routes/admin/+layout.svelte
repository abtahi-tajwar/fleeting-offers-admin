<script>
  let { children } = $props()
  import Sidenav from '$lib/components/Navigation/Sidenav/Sidenav.svelte'

  // States
  let containerOffset = 12
</script>

<div
  class="bg-gradient-to-r from-primary dark:from-primary-dark to-accent dark:to-accent-dark w-full h-screen"
  style="padding: {containerOffset}px"
>
  <div class="flex rounded bg-background dark:bg-background-dark h-full">
    <!-- Sidenavigation -->
    <div class="w-[280px] h-full">
      <Sidenav />
    </div>

    <!-- Right Content -->
    <div class="flex">
      <!-- Top Navigation -->
      <div>
        {@render children()}
      </div>
    </div>
  </div>
</div>
