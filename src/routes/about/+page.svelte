<script lang="ts">
    import { Metadata } from "$lib";
    import { TextBlock, Expander } from "fluent-svelte";
</script>

<Metadata title="Pdawg • About" />

<div class="title">
    <TextBlock variant="titleLarge">Hey!</TextBlock>
</div>

<div class="body-container">
    <div class="body">
        <TextBlock variant="bodyStrong">Seems like you want to know more about me. I'm flattered.</TextBlock>
        <TextBlock class="textBody">So, here's some more about me. Like I said on the home page, I am a 15 year old software developer, and I hope to work at Microsoft someday. I have been into computers since the age of 6, and it hasn't stopped since then.</TextBlock>
        <TextBlock variant="bodyStrong">What lit the spark?</TextBlock>
        <TextBlock class="textBody">Let's talk about what started my software development journey. On March 20th, 2022, I published my first "app" to GitHub. It was a Windows Forms app that demonstrated the Metro UI framework for Windows Forms. The app included various Metro UI elements, such as buttons, checkboxes, and text. Although it was a useful learning experience, I eventually realized that WinForms was no longer a viable option for app development due to its outdated and slow nature. As a result, I moved on to creating WinUI3-Tasklist, a simple task list app in WinUI 3. At the time (August 2022), my knowledge of C# and XAML was limited, so the code for the app was basic. Despite this, I was proud of my MainPage.xaml.cs file, which was only 60 lines long.</TextBlock>
        <TextBlock variant="bodyStrong">Let's get up to speed.</TextBlock>
        <TextBlock class="textBody">Fast forward to September 2022. As a member of the Microsoft Band community, I had an idea for an app called Microsoft Band Simulator. This app was intended for the MS Band community as a developer tool and as a way for people to experience the Band devices. While the app had a user-friendly interface, the backend was poorly designed, with a 300+ line switch statement for setting the wallpaper and code that was difficult to modify due to its widespread nature. Additionally, the UI logic made heavy use of reflection, which made it difficult to work with. I spent about a month and a half working on MS Band Sim before moving on to my next project, Band Webtile generator. This app allowed users to create webtiles for the Band devices, something that was no longer possible since the website was down. The app handled the serialization process through a friendly frontend UI. That's a brief summary of my software development journey.</TextBlock>
    </div>
</div>

<div class="extra-container">
    <div class="extra">
        <Expander>
            About this website
            <svelte:fragment slot="content">
                <TextBlock variant="bodyStrong">Pdawg's site</TextBlock>
                <TextBlock>Built on SvelteKit and SCSS</TextBlock>
                <br/>
                <TextBlock>Styling: <a href="https://github.com/Tropix126/fluent-svelte">Fluent Svelte</a></TextBlock>
            </svelte:fragment>
        </Expander>
    </div>
</div>

<style lang="scss">
    @use "src/styles/pages/about.scss";
</style>
