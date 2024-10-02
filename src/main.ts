import App from './App.svelte'

// const app = new App({
//   target: document.getElementById('appDiagram'),
// })


// Create a function to initialize the app and handle the export
function initializeApp() {
  const appDiagram = document.getElementsByClassName('appDiagram')[0];
  if (appDiagram) {
    return new App({
      target: appDiagram
    });
  }
  return null;
}

const app = initializeApp();

window.diagramApp=app;



export default app;