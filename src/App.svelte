<script>
  import { Svelvet, ThemeToggle } from 'svelvet';
  import PlanetsInFilms from './lib/tables/Table.svelte';

  let gridSize = 350; // Adjust the grid size to space out the items

  let config = [
  {
    "title": "Films",
    "id": "films",
    "position": { "x": 1090, "y": 150 },
    "anchors": [
      { "type": "output", "key": "id", "id": "films_anchor1", "direction": "west" },
      { "type": "input", "key": "title", "id": "people_anchor3", "edge": "{pkey}", "connections": [["species", "species_anchor1"]], "direction": "west" },
    ],
    "data": [
      { "key": "id", "type": "bigint", "note": "Primary Key, autoincrement()" },
      { "key": "title", "type": "varchar", "note": "not null" },
      { "key": "episode_id", "type": "varchar", "note": "not null" },
      { "key": "opening_crawl", "type": "varchar", "note": "not null" },
      { "key": "director", "type": "varchar", "note": "not null" },
      { "key": "producer", "type": "varchar", "note": "not null" },
      { "key": "release_date", "type": "date", "note": "not null" }
    ]
  },
  {
    "title": "People",
    "id": "people",
    "position": { "x": -300, "y": -300 },
    "anchors": [
      { "type": "output", "key": "id", "id": "people_anchor1", "direction": "west" },
      { "type": "input", "key": "species_id", "id": "people_anchor3", "edge": "{pkey}", "connections": [["species", "species_anchor1"]], "direction": "east" },
      { "type": "input", "key": "homeworld_id", "id": "people_anchor4", "edge": "{pkey}", "connections": [["planets", "planets_anchor1"]], "direction": "east" }
    ],
    "data": [
      { "key": "id", "type": "bigint", "note": "Primary Key, autoincrement()" },
      { "key": "name", "type": "varchar", "note": "not null" },
      { "key": "mass", "type": "varchar", "note": "optional" },
      { "key": "hair_color", "type": "varchar", "note": "optional" },
      { "key": "skin_color", "type": "varchar", "note": "optional" },
      { "key": "eye_color", "type": "varchar", "note": "optional" },
      { "key": "birth_year", "type": "varchar", "note": "optional" },
      { "key": "gender", "type": "varchar", "note": "optional" },
      { "key": "species_id", "type": "bigint", "note": "Foreign Key to Species" },
      { "key": "homeworld_id", "type": "bigint", "note": "Foreign Key to Planets" },
      { "key": "height", "type": "int", "note": "optional" }
    ]
  },
  {
    "title": "Pilots",
    "id": "pilot",
    "position": { "x": -300, "y": 300 },
    "anchors": [
      { "type": "input", "key": "person_id", "id": "pilots_anchor1", "connections": [["people", "people_anchor1"]], "direction": "west" }
    ],
    "data": [
      { "key": "id", "type": "bigint", "note": "Primary Key, autoincrement()" },
      { "key": "person_id", "type": "bigint", "note": "Foreign Key to People, not null" },
      { "key": "vessel_id", "type": "bigint", "note": "not null" }
    ]
  },
  {
    "title": "Planets in Films",
    "id": "planets_in_films",
    "position": { "x": 700, "y": 400 },
    "anchors": [
      { "type": "input", "key": "id", "connections": [["planets", "planets_anchor2"]], "direction": "west" },
      { "type": "input", "key": "film_id", "connections": [["films", "films_anchor1"]], "direction": "east" }
    ],
    "data": [
      { "key": "id", "type": "bigint", "note": "Primary Key, autoincrement()" },
      { "key": "film_id", "type": "bigint", "note": "Foreign Key to Films, not null" },
      { "key": "planet_id", "type": "bigint", "note": "Foreign Key to Planets, not null" }
    ]
  },
  {
    "title": "Planets",
    "id": "planets",
    "position": { "x": 240, "y": 600 },
    "anchors": [
      { "type": "output", "key": "id", "id": "planets_anchor1", "direction": "west" },
      { "type": "output", "key": "id", "id": "planets_anchor2", "direction": "east" }
    ],
    "data": [
      { "key": "id", "type": "bigint", "note": "Primary Key, autoincrement()" },
      { "key": "name", "type": "varchar", "note": "optional" },
      { "key": "mass", "type": "varchar", "note": "optional" }
    ]
  },
  {
    "title": "Species in Films",
    "id": "species_in_films",
    "position": { "x": 700, "y": 80 },
    "anchors": [
      { "type": "input", "key": "id", "connections": [["species", "species_anchor2"]], "direction": "west" },
      { "type": "input", "key": "film_id", "connections": [["films", "films_anchor1"]], "direction": "east" }
    ],
    "data": [
      { "key": "id", "type": "bigint", "note": "Primary Key, autoincrement()" },
      { "key": "film_id", "type": "bigint", "note": "Foreign Key to Films, not null" },
      { "key": "species_id", "type": "bigint", "note": "Foreign Key to Species, not null" }
    ]
  },
  {
    "title": "Species",
    "id": "species",
    "position": { "x": 225, "y": -280 },
    "anchors": [
      { "type": "output", "key": "id", "id": "species_anchor1", "direction": "west" },
      { "type": "output", "key": "id", "id": "species_anchor2", "direction": "east" },
      { "type": "input", "key": "homeworld_id", "id": "species_anchor3", "connections": [["planets", "planets_anchor1"]], "direction": "west" }
    ],
    "data": [
      { "key": "id", "type": "bigint", "note": "Primary Key, autoincrement()" },
      { "key": "name", "type": "varchar", "note": "not null" },
      { "key": "classification", "type": "varchar", "note": "optional" },
      { "key": "average_height", "type": "varchar", "note": "optional" },
      { "key": "average_lifespan", "type": "varchar", "note": "optional" },
      { "key": "hair_color", "type": "varchar", "note": "optional" },
      { "key": "skin_color", "type": "varchar", "note": "optional" },
      { "key": "eye_colors", "type": "varchar", "note": "optional" },
      { "key": "language", "type": "varchar", "note": "optional" },
      { "key": "homeworld_id", "type": "bigint", "note": "Foreign Key to Planets, optional" }
    ]
  }
];

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
    {#each config as tableConfig}
      <PlanetsInFilms config={tableConfig} />
    {/each}
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
