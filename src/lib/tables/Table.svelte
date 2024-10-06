  <script>
    import { Node, Anchor } from 'svelvet';
    import pkey from '../edges/PKEY.svelte';
      
    export let configTb = {};
    export let { title = "Default Title", id = null, data = [], anchors = [], position={ x: 700, y: 400 } } = configTb;

    // Function to determine Y offset for anchor placement
    function getRowYPosition(key) {
      const rowIndex = data.findIndex(item => item.key === key);
      return rowIndex !== -1 ? 60 + rowIndex * 35 : 0;  // Assuming row height is ~35px
    }
  </script>

  <Node useDefaults id={id} position={position}>
    <div class='nodeWrapper'>
      {#each anchors as anchor}
        {#if anchor.type === 'input'}
          <!-- Input Anchor -->
          <div
            class="anchorWrapper"
            style="
              position: absolute; 
              top: {getRowYPosition(anchor.key)}px;
              {anchor.direction === 'west' ? 'left: -16px;' : 'right: -16px;'}
            "
          >
            <Anchor input edge={pkey}  connections={anchor.connections} direction={anchor.direction} />
          </div>
        {:else if anchor.type === 'output'}
          <!-- Output Anchor -->
          <div
            class="anchorWrapper"
            style="
              position: absolute; 
              top: {getRowYPosition(anchor.key)}px;
              {anchor.direction === 'west' ? 'left: -16px;' : 'right: -16px;'}
            "
          >
            <Anchor id={anchor.id} direction={anchor.direction} />
          </div>
        {/if}
      {/each}

      <div id='container'>
        <div id='heading'>{title}</div>
        <!-- Use dynamic ID for the table -->
        <table id={id + "Table"}>
          {#each data as { key, type, note }}
            <tr>
              <td>{key}</td>
              <td>{type}</td>
            </tr>
          {/each}
        </table>
      </div>
    </div>
  </Node>

  <style>
    .nodeWrapper {
      box-sizing: border-box;
      width: fit-content;
      border-radius: 8px;
      height: fit-content;
      position: relative;
      pointer-events: auto;
      display: flex;
      flex-direction: column;
      padding: 1px;
      gap: 10px;
    }

    .anchorWrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    #heading {
      display: flex;
      justify-content: center;
      background-color: #dbe3f3;
      padding: 10px;
      font-size: 18px;
      font-weight: 600;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    }

    /* Since we can't use {id} interpolation directly in CSS, you can target it this way */
    table[id$="Table"] td {
      width: 70px;
      margin: 0px;
      padding: 8px;
      justify-content: space-evenly;
      border-bottom: 1px solid gray;
      border-right: 1px solid gray;
    }

    table[id$="Table"] td:last-child {
      border-right: none;
    }
  </style>
