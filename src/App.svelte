<script>
  import { Svelvet, ThemeToggle } from 'svelvet';
  import TableNode from './lib/tables/Table.svelte';
  import HomeNode from './lib/tables/Home.svelte';

  let gridSize = 350; // Adjust the grid size to space out the items

  let config = [];

  // Function to calculate positions dynamically with anchor-aware positioning
function calculatePositions(configArray, gridSize) {
  let x = 0, y = 0;
  configArray.forEach((item, index) => {
    item.position = { x: x, y: y };

    item.anchors.forEach(anchor => {
      if (anchor.type === 'input') {
        let otherNode = configArray.find(n =>
          n.anchors.some(a => a.connections && a.connections.some(c => c[1] === anchor.id))
        );

        if (otherNode) {
          // Compare x positions of the current node and the connected node
          if (item.position.x > otherNode.position.x) {
            anchor.direction = 'west';
          } else {
            anchor.direction = 'east';
          }
        } else {
          // Default direction if no connection
          anchor.direction = anchor.direction || 'west';
        }
      } else if (anchor.type === 'output') {
        // Handle outputs similarly if needed
        let otherNode = configArray.find(n =>
          n.anchors.some(a => a.connections && a.connections.some(c => c[0] === anchor.id))
        );

        if (otherNode) {
          if (item.position.x < otherNode.position.x) {
            anchor.direction = 'east';
          } else {
            anchor.direction = 'west';
          }
        } else {
          anchor.direction = anchor.direction || 'east';
        }
      }
    });

    x += gridSize;
    if (x > gridSize * 3) {
      x = 0;
      y += gridSize;
    }
  });
}


  calculatePositions(config, gridSize); // Call the function to set positions

  // Define a method to clear and set new config
  window.SetDiagram = function(newconfig) {
    config.length = 0;
    config = [...newconfig]; // Replace the config with the new array
    calculatePositions(config, gridSize); // Recalculate positions for new config
  };

</script>

<body>
  <Svelvet fitView controls minimap>
    {#if config.length === 0}
      <HomeNode />
    {:else}
      {#each config as tableConfig (tableConfig.id)}
        <TableNode configTb={tableConfig} />
      {/each}
    {/if}
    <ThemeToggle main='light' alt='dark' slot='toggle' />
  </Svelvet>
</body>

<style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    width: 50vw;
    height: 100vh;
    padding: 0;
    margin: 0;
  }
</style>
