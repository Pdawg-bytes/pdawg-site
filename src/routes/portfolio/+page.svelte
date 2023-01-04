<script lang="ts">
    import {Metadata} from "$lib";
    let scrollY: number;
</script>

<Metadata title="Pdawg • Portfolio" />

<svelte:window
	on:scroll={() =>
		window.requestAnimationFrame(() => (scrollY = window.scrollY))}
/>

<style lang="scss">
</style>