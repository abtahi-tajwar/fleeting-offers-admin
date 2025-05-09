<script lang="ts">
  import type { SvelteComponent } from 'svelte'
  import Text from '$lib/ui/typography/Text/Text.svelte'
  import ArrowRightIcon from '$lib/icons/ArrowRightIcon.svelte'

  export let label: string = 'Nav Item'
  export let icon: {
    component: Utils.AppComponent
    props: Record<string, any>
  }
  export let selected: boolean = false
  export let badgeCount: number = 0
  export let submodules: Core.NavSubmodule[] = []
</script>

<div>
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
    {#if submodules.length !== 0}
      <div class="ml-auto">
        <ArrowRightIcon scale={0.65} />
      </div>
    {/if}
  </div>
  {#if submodules.length !== 0}
    <ul class="relative" style="max-height: {34 * submodules.length}px;">
      {#each submodules as item (item.id)}
        <a class="cursor-pointer pl-6 block group hover">
          <li
            class="relative before:absolute before:left-[-12px] before:-top-4 before:w-3 before:h-9 before:border-l before:border-b before:border-gray-300 before:rounded-bl-md text-xs text-text-light"
          >
            <Text
              variant="span"
              class="group-hover:text-text-primary group-hover:bg-background-pure/50 rounded-lg transition ease-in-out duration-300 py-[9px] px-2 block"
            >
              {item.label}
            </Text>
          </li>
        </a>
      {/each}
    </ul>
  {/if}
</div>
