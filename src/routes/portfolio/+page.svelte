<script lang="ts">
    import {Metadata} from "$lib";
    let scrollY: number;
    import ProjectCard from '$lib/ProjectCard/ProjectCard.svelte';
  
  const projects = [
    {
      name: 'MS Band Simulator',
      description: 'MSBand-Simulator is a fully open source simulator for the Microsoft Bands UI.',
      url: 'https://github.com/Pdawg-bytes/MSBand-Simulator'
    },
    {
        name: "GyroShell",
        description: 'A shell for Windows 11 (and maybe 10) that aims to create a much nicer and more functional taskbar. Fully written in C# and WASDK.',
        url: 'https://github.com/Pdawg-bytes/GyroShell'
    },
  ];
</script>

<Metadata title="Pdawg • Portfolio" />

<svelte:window on:scroll={() => window.requestAnimationFrame(() => (scrollY = window.scrollY))} />
  
  <div class="projects">
    {#each projects as project}
        <ProjectCard bind:name={project.name} bind:description={project.description} bind:url={project.url}/>
    {/each}
  </div>

  <style lang="scss">
    .projects {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: auto;
    }
  </style>