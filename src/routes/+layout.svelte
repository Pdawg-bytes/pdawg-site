<script lang="ts">
	import { dev } from "$app/environment";
	import { page } from "$app/stores";
	import { onMount } from "svelte";

	import { Navbar } from "$layout";
	import type { NavbarItem } from "$data/links";

	import "fluent-svelte/theme.css";

	import Home from "@fluentui/svg-icons/icons/home_24_regular.svg?raw";
	import News from "@fluentui/svg-icons/icons/news_24_regular.svg?raw";
	import Portfolio from "@fluentui/svg-icons/icons/book_24_regular.svg?raw";
	import Information from "@fluentui/svg-icons/icons/info_24_regular.svg?raw";

	const navbarItems: NavbarItem[] = [
		{
			name: "Home",
			path: '/',
			icon: Home
		},
		{
			name: "Blog",
			path: "/blog",
			icon: News
		},
		{
			name: "Portfolio",
			path: "/portfolio",
			icon: Portfolio
		},
		{
			name: "About me",
			path: "/about",
			icon: Information
		}
	];
</script>

<svelte:head>
	<meta content="Pdawg's website" name="og:site_name" />
	<meta content="website" name="og:type" />
	<meta content="Pdawg" name="author" />
	<meta content="#0078d4" name="theme-color" />

	{#if !dev}
		<script>
			(function (c, l, a, r, i, t, y) {
				c[a] =
					c[a] ||
					function () {
						(c[a].q = c[a].q || []).push(arguments);
					};
				t = l.createElement(r);
				t.async = true;
				t.src = "https://www.clarity.ms/tag/" + i;
				y = l.getElementsByTagName(r)[0];
				y.parentNode.insertBefore(t, y);
			})(window, document, "clarity", "script", "4q1wajdktz");
		</script>
	{/if}
</svelte:head>

<Navbar items={navbarItems}/>
<div class="background">
	<slot />
</div>

<style global lang="scss">
	@use "src/styles/global";
	@use "src/styles/markdown";
</style>
