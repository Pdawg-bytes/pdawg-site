<script lang="ts">
    export let name: string;
    export let description: string;
    export let url: string;
</script>
  
  <style lang="scss">
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px;
      width: 300px;
      height: 300px;
      background: rgba(70, 70, 70, 0.4);
      background-position: center;
      position:relative;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
  
      .name {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        margin: 16px 0;
        z-index: 1;
      }
  
      &:hover{
        width: 305px;
        height: 305px;
      }

      .description {
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        margin: 16px;
        z-index: 1;
      }
    }
    
    .card::before
    {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 101%;
      height: 101%;
      background-image: inherit;
      filter: blur(2px);
      border-radius: 8px;
      z-index: 0;
    }
  </style>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="card" on:click={window.open(url, '_blank')}>
        <div class="name">{name}</div>
        <div class="description">{description}</div>
      </div>