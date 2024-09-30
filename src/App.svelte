<script>
  import {Svelvet, ThemeToggle} from 'svelvet';
  import Vessel from './lib/tables/Vessel.svelte';
  import People from './lib/tables/People.svelte';
  import Pilot from './lib/tables/Pilots.svelte';
  import Planet from './lib/tables/Planets.svelte';
  import Species from './lib/tables/Species.svelte';
  import Starship from './lib/tables/Starship_specs.svelte';
  import PeopleFilms from './lib/tables/People_in_films.svelte';
  import SpeciesFilms from './lib/tables/Species_in_films.svelte';
  import SpeciesInFilms from './lib/tables/Species_in_films.svelte';
  //import PlanetsInFilms from './lib/tables/Planets_in_films.svelte';
  import PlanetsInFilms from './lib/tables/Table.svelte';
  import VesselsInFilms from './lib/tables/Vessels_in_films.svelte';
  import Films from './lib/tables/Films.svelte';
  import { each } from 'svelte/internal';

  
  let config = [
    {
      title: "abc",
      id: "abc",
      position: { x: 0, y: -500 },
      data: [
        { key: 'id1', type: 'type1', note: 'note1' },
        { key: 'id2', type: 'type2', note: 'note2' },
        { key: 'id3', type: 'type3', note: 'note3' }
      ],
      anchors: [
        { type: 'input', key: 'id1', connections: [['table_id', 'anchor_id']], direction: "west" },
        { type: 'input', key: 'id2', connections: [['ass', 'ss']], direction: "east" },
        { type: 'output', key: 'id3', id: "output_anchor1", direction: "west" }
      ]
    }
  ];

</script>
<body>
  <Svelvet fitView controls minimap>
    <Vessel/>
    <People/>
    <Pilot/>
    <Planet/>
    <Species/>
    <Starship/>
    <PeopleFilms/>
    <SpeciesInFilms/>
    {#each config as tableCofnig}
    <PlanetsInFilms config={tableCofnig}/>
    {/each}
    <VesselsInFilms/>
    <Films/>
    <ThemeToggle main='dark' alt='light' slot='toggle'/>
  </Svelvet>
</body>

<style>
  body {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: gray;
		width: 100vw;
		height: 100vh;
		padding: 0;
		margin: 0;
	}
</style>