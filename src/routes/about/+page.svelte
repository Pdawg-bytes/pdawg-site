<script lang="ts">
    import {Metadata} from "$lib";
    import {TextBlock} from "fluent-svelte";
</script>

<Metadata title="Pdawg • About" />

<div class="title">
    <TextBlock variant="titleLarge">Hey!</TextBlock>
</div>
<div class="body">
    <TextBlock variant="bodyStrong">Seems like you want to know more about me. I'm flattered.</TextBlock>
    <p>So, here's some more about me. Like I said on the home page, I am a 13 year old software developer, and I hope to work at Microsoft someday. I have been into computers since the age of 6, and it hasn't stopped since then.</p>
    <TextBlock variant="bodyStrong">What started the spark?</TextBlock>
    <p>Let's talk about what started my software development journey. I published my first "app" to GitHub on March 20th, 2022. This was where it all started. It was a Windows Forms app that was demoing the Metro UI framework for Windows Forms. This package brought a lot of Metro UI elements into WinForms, like buttons, checkboxes, text, etc. Most of the controls that you would need in an app. If you're really that interested, view it here (warning, it's bad): <a href="https://github.com/Pdawg-bytes/Metro-UI-Demo-WinForms">Metro WinForms app</a> but here it is. After that, I realized WinForms was not a great option for app development anymore, as it was outdated and slow. So my next creation, WinUI3-Tasklist, was exactly that. It was my jump into the XAML world. It is a simple task list app in WinUI 3 that lets you input a task, save it to a list, and that's about it. My knowledge at the time (August 2022) was very limited in C# and XAML. My code was incredibly basic, and at the time, I thought my 60 line MainPage.xaml.cs file was the best I would ever achieve.</p>
    <TextBlock variant="bodyStrong">Let's get up to speed.</TextBlock>
    <p>Fast foward to September, 2022. I have been a part of the Microsoft Band community since August, 2021 (the month the Discord community was created), and I have an idea. The UWP Community Discord server has inspired me to start UWP development. I decide to create my app, Microsoft Band Simulator. Now, in comparison to what I'm doing today, MS Band Simulator is nothing special. But at the time, it once again felt like the peak of my software development "career". Anyway, MS Band Simulator was a project directed towards the MS Band community, as a developer tool and an app for those who wanted to experience the Band devices.</p>
</div>

<style lang="scss">
    @use "src/styles/pages/about.scss";
</style>