<script>
  import SearchInput from '$lib/components/Input/SearchInput.svelte'
  import NotificationIcon from '$lib/icons/NotificationIcon.svelte'
  import ProfileIcon from '$lib/icons/ProfileIcon.svelte'
  import IconButton from '$lib/ui/Button/IconButton.svelte'
  import Text from '$lib/ui/typography/Text/Text.svelte'
  import { theme } from '../../../../config/theme/theme'
</script>

<div
  class="relative border-b-gray border-b-[0.8px] p-4"
  style={`--mesh-color: ${theme.light.color.primary_light[3]}`}
>
  <div class="mesh-background inset-0 pointer-events-none z-0"></div>
  <div class="relative inset-0 z-1 flex flex-row items-center gap-12">
    <div class="flex flex-col gap-2">
      <Text variant="span" class="text-sm text-text-light font-light"
        >Welcome</Text
      >
      <Text variant="span">Abtahi Tajwar</Text>
    </div>

    <div class="flex-1">
      <!-- Search finder -->
      <SearchInput containerStyleClass="bg-background-pure/40" />
    </div>
    <div class="flex items-center justify-end gap-2">
      <IconButton size="sm">
        <NotificationIcon scale={0.8} />
      </IconButton>
      <IconButton size="sm">
        <ProfileIcon scale={0.8} />
      </IconButton>
    </div>
  </div>
</div>

<style>
  .mesh-background {
    position: absolute;
    opacity: 0.38;
    background: radial-gradient(
      circle 250px at 70% -150px,
      var(--mesh-color) 0%,
      transparent 100%
    );
    background-blend-mode: screen;
    filter: blur(60px);
  }
</style>
