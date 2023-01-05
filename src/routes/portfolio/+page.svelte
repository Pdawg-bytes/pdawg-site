<script lang="ts">
    import {Metadata} from "$lib";
    let scrollY: number;
    import ProjectCard from '$lib/ProjectCard/ProjectCard.svelte';
  
  const projects = [
    {
      name: 'MS Band Simulator',
      description: 'MSBand-Simulator is a fully open source simulator for the Microsoft Bands UI.',
      url: 'https://github.com/Pdawg-bytes/MSBand-Simulator',
    },
    {
        name: "GyroShell",
        description: 'A shell for Windows 11 (and maybe 10) that aims to create a much nicer and more functional taskbar. Fully written in C# and WASDK.',
        url: 'https://github.com/Pdawg-bytes/GyroShell'
    },
    {
      name: "Band Webtile Generator",
      description: "This is a UWP app that replaces the old website to make a Microsoft Band Web Tile.",
      url: "https://github.com/Pdawg-bytes/band-webtile-generator"
    },
    {
      name: "WinUI 3 Tasklist",
      description: "A Task List app written fully in WinUI 3 C# .NET. This is my first WinUI 3 app.",
      url: "https://github.com/Pdawg-bytes/WinUI3-TaskList"
    },
    {
      name: "Bad Apple UWP",
      description: "This is my implementation of Bad Apple, all on XAML and C#. This works by taking each frame, and then applying it as a background of a control, then updating it to achieve 15fps!",
      url: "https://github.com/Pdawg-bytes/bad-apple-uwp"
    },
    {
      name:"WP7 Center",
      description: "Windows Phone 7 Center is an all-in-one app that has as much info as I can find that would be important to a WP7 device owner.",
      url: "https://github.com/Pdawg-bytes/wp7-center"
    },
    {
      name:"Darkwash VS Theme",
      description: "This is the Darkwash Theme for Visual Studio 2022. It brings in a clean dark mode to rest your eyes, along with shades of purple that fit quite nicely together. Give it a try!",
      url: "https://github.com/Pdawg-bytes/darkwash-vs2022-theme"
    },
    {
      name:"Metro UI Demo",
      description: "This Metro UI Demo was written in WinForms .NET. It's using the ModernMetroUI package to recreate Metro UI components such as Tiles, Toggles, Combo Boxes, etc.",
      url: "https://github.com/Pdawg-bytes/Metro-UI-Demo-WinForms",
    },
    {
      name:"Pdawg's Site",
      description: "The website you're reading this on right now!",
      url: "https://github.com/Pdawg-bytes/pdawg-site"
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
        margin-top: 70px;
        margin-bottom: 70px;
        margin-left: 20px;
        margin-right: 20px;
        vertical-align: middle;
    }
  </style>