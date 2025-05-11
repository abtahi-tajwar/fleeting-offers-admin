<script lang="ts">
  import { onMount } from 'svelte'
  import type { SidenavModule } from '../Sidenav.service'

  let { module }: PropTypes.SidenavSubmenuPopup = $props()
  let xPos = $state(0)
  let yPos = $state(0)

  $effect(() => {
    const el = document.getElementById(`sidenav-item-${module.id}`)
    const offset = 47
    if (el) {
      const rect = el.getBoundingClientRect()
      xPos = rect.left + offset
      yPos = rect.top
    }
  })
</script>

<div
  class="fixed z-2 h-[100px] w-[50px] bg-background-inverse"
  style={`left: ${xPos}px; top: ${yPos}px`}
></div>
