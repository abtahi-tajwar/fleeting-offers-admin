<script lang="ts">
  import type { SvelteComponent } from 'svelte'
  import Text from '$lib/ui/typography/Text/Text.svelte'

  export let label: string = 'Nav Item'
  export let icon: {
    component: Utils.AppComponent
    props: Record<string, any>
  }
  export let selected: boolean = false
  export let badgeCount: number = 0
</script>

<div
  class="flex flex-row my-1 items-center gap-2 p-2 rounded cursor-pointer hover:bg-background-pure/50 transition ease-in-out duration-300"
>
  {#if icon}
    <svelte:component this={icon.component} scale={0.8} {...icon.props} />
  {/if}
  <Text class="text-sm">{label}</Text>
  {#if badgeCount > 0}
    <div
      class="h-6 w-6 text-base/0 rounded flex justify-center items-center ml-auto bg-background-pure text-text-primary"
    >
      <p class="m-0! p-0! text-sm">{badgeCount}</p>
    </div>
  {/if}
</div>
