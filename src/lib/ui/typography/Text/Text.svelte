<script lang="ts">
  export let variant: 'p' | 'span' = 'p'
</script>

{#if variant === 'p'}
  <p class="text-class" {...$$restProps}><slot /></p>
{:else if variant === 'span'}
  <span class="text-class leading-[0]" {...$$restProps}><slot /></span>
{:else}
  <p class="text-class" {...$$restProps}><slot /></p>
{/if}

<style>
  .text-class {
    color: var(--text-primary);
  }
  .dark .text-class {
    color: var(--text-primary-dark);
  }
</style>
