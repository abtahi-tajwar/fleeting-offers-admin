<script lang="ts">
  export let size: 'sm' | 'md' | 'lg' = 'md'
</script>

{#if size === 'sm'}
  <button
    class="btn btn-circle btn-sm btn-ghost bg-background-pure border-none!"
  >
    <slot scale={0.8} {...$$restProps} />
  </button>
{:else if size === 'md'}
  <button
    class="btn btn-circle btn-md btn-ghost bg-background-pure border-none!"
  >
    <slot scale={1} {...$$restProps} />
  </button>
{:else if size === 'lg'}
  <button
    class="btn btn-circle btn-lg btn-ghost bg-background-pure border-none!"
  >
    <slot scale={1.2} {...$$restProps} />
  </button>
{/if}
