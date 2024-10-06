<script>
  import {Node, Anchor} from 'svelvet';
  export let text1 = "RIMS Database";
  export let text2 = "SUN RIDGE SYSTEMS";
</script>

<Node useDefaults id='home_node' class='home_node' position={{x:-300, y:600}}>
  <div class='nodeWrapper home_node_wapper'>
  <h1 class="home_node_heading">{text1}</h1>
  <h2 class="home_node_heading watermark">{text2}</h2>
  </div>
</Node>


<style>

.nodeWrapper{
  box-sizing: border-box;
  width:fit-content;
  border-radius: 8px;
  height: fit-content;
  position: relative;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  padding: 1px;
  gap: 10px;
}

.watermark {
  font-family: Arial, sans-serif;
  text-align: center;
  opacity: 0.1; /* Adjust opacity to simulate a watermark */
}

.home_node_wapper h1 .home_node_heading {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}

.home_node_wapper h2 .home_node_heading {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.home_node_heading{
  display: flex;
  justify-content: center;
  background-color: lightblue;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding: 10px;
}

.home_node_wapper * {
    border: none !important;
    background: none !important;
    opacity: 0.4; /* Adjust opacity to simulate a watermark */
}
    
</style>