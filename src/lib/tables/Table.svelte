<script>
  import { Node, Anchor } from 'svelvet';

  export let title = "Planets in Films";
  export let inputData = [
    { key: 'id1', type: 'type1', note: 'note1' },
    { key: 'id2', type: 'type2', note: 'note2' },
    { key: 'id3', type: 'type3', note: 'note3' }
  ];
</script>

<Node useDefaults id='planets_in_films' position={{ x: 700, y: 400 }}>
  <div class='nodeWrapper'>
    <div class='p_1'>
      <Anchor input connections={[['planets', 'planets_anchor2']]} direction="west" />
    </div>
    <div class='p_2'>
      <Anchor input connections={[['films', 'films_anchor1']]} direction="east" />
    </div>

    <div id='container'>
      <div id='heading'>{title}</div>
      <table id="planets_filmsTable">
        {#each inputData as { key, type, note }}
          <tr>
            <td>{key}</td>
            <td>{type}</td>
            <td>{note}</td>
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

  .p_1 {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 10px;
    top: 56px;
    left: -16px;
  }

  .p_2 {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 10px;
    top: 90px;
    right: -14px;
  }

  #heading {
    display: flex;
    justify-content: center;
    background-color: rgb(247, 108, 108);
    padding: 10px;
    font-size: 18px;
    font-weight: 600;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  #planets_filmsTable td {
    width: 70px;
    margin: 0px;
    padding: 8px;
    justify-content: space-evenly;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;
  }

  #planets_filmsTable td:last-child {
    border-right: none;
  }
</style>
