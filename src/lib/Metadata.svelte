<script lang="ts">
	export let title = "Pdawg";

	export let heroImage = "";

	export let description = "Pdawg's website";

	export let imageHost = "";

	export let imageProtocol = "";
</script>

<svelte:head>
	<title>{title}</title>
	<meta content={title} name="og:title" />
	{#if heroImage && imageHost && imageProtocol}
		<meta
			content="{imageProtocol}//{imageHost}{heroImage}"
			name="og:image"
		/>
	{:else}
	{/if}
	<meta content={description} name="description" />
	<meta content={description} name="og:description" />
</svelte:head>
