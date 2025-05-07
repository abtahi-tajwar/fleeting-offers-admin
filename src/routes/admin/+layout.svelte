<script>
	let { children } = $props();
	import Sidenav from '$lib/components/Navigation/Sidenav.svelte';
</script>

<div class="bg-gradient-to-r from-primary to-accent w-full h-screen">
	<div class="flex m-4 rounded bg-backgroundLight dark:bg-backgroundDark">
		<!-- Sidenavigation -->
		<div class="w-[280px]">
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

