<script lang="ts">
	import { externalLink, Metadata } from "$lib";
	import Share from "@fluentui/svg-icons/icons/share_24_regular.svg?raw";
	import ArrowLeft from "@fluentui/svg-icons/icons/arrow_left_24_regular.svg?raw";
	import { IconButton, MenuFlyout, MenuFlyoutItem, TextBlock, TextBox, TextBoxButton } from "fluent-svelte";
	import type { LayoutData } from "./$types";
	import { page } from "$app/stores";

	export let data: LayoutData;

	$: ({ title, thumbnail, author, date, description, host, protocol } = data);
	let commentValue = "";
</script>

<Metadata title="Pdawg • {title}" heroImage={thumbnail} description={description} imageHost={host} imageProtocol={protocol} />

<section class="blog-post">
	<article>
		<div class="post-title">
			<IconButton
				--icon-color="var(--text-color-secondary)"
				aria-label="Back to Blog"
				class="back-button"
				href="/blog"
				title="Back to Blog"
			>
				{@html ArrowLeft}
			</IconButton>
			<h1>{title}</h1>
		</div>
		<div class="post-info">
			<img alt="{author} avatar" src="https://github.com/Pdawg-bytes.png" />
			<a class="hyperlink" href="https://github.com/Pdawg-bytes" {...externalLink}
				>@{author}</a
			>
			<span>•</span>
			{new Date(date.replace(/-/g, "/").replace(/T.+/, "")).toLocaleDateString(
				"en-US",
				{
					year: "numeric",
					day: "numeric",
					month: "short"
				}
			)}
			<MenuFlyout placement="bottom">
				<IconButton
					size={20}
					aria-label="Share"
					class="share-button"
					title="Share"
					id="share-button"
				>
					{@html Share}
				</IconButton>
				<svelte:fragment slot="flyout">
					<MenuFlyoutItem
						on:click={() => navigator.clipboard.writeText($page.url.href)}
					>
						Copy URL
					</MenuFlyoutItem>
					<MenuFlyoutItem
						on:click={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent($page.url.href)}`, "_blank")}
					>
						Twitter
					</MenuFlyoutItem>
				</svelte:fragment>
			</MenuFlyout>
		</div>
		{#if thumbnail}
			<img class="post-thumbnail" src={thumbnail} alt="Thumbnail" />
		{/if}
		<div class="markdown-body">
			<slot />
		</div>
		<!--<hr class="separate"/>
		<div class="comment-section">
			<TextBlock variant="title">Comments</TextBlock>
			<div class="commentBox">
				<TextBox bind:value={commentValue} placeholder="Send a comment..." style="height: 30px;">
					<TextBoxButton slot="buttons" on:click={() => alert("Why won't this work")}>
						<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd" 
								d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
								fill="currentColor"
							/>
						</svg>
					</TextBoxButton>
				</TextBox>
				<p>Current value: {commentValue}</p>
			</div>
		</div>-->
	</article>
</section>

<style lang="scss">
	@use "src/styles/pages/blogPost";
</style>
