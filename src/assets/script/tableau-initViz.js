function initViz(url) {
  let containerDiv = document.getElementById('vizContainer');

  options = {
    height: '100%',
    width: '100%',
    hideTabs: true,
    onFirstInteractive: function () {
      console.log("Run this code when the viz has finished loading.");
    }
  };

  let viz = new tableau.Viz(containerDiv, url, options);
}
