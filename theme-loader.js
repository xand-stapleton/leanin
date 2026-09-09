(function () {
  var storageKey = "lean-in-ancient-mode";
  var ancient = false;

  try {
    ancient = window.localStorage.getItem(storageKey) === "true";
  } catch (error) {
    ancient = false;
  }

  if (ancient) {
    document.documentElement.setAttribute("data-theme", "ancient");
  }

  var script = document.currentScript;
  var scriptUrl = script && script.src ? script.src : "";
  var baseUrl = scriptUrl.slice(0, scriptUrl.lastIndexOf("/") + 1);
  var stylesheet = document.createElement("link");

  stylesheet.id = "site-stylesheet";
  stylesheet.rel = "stylesheet";
  stylesheet.href = baseUrl + (ancient ? "ancient.css" : "styles.css");
  document.head.appendChild(stylesheet);

  window.LeanInTheme = {
    ancient: ancient,
    storageKey: storageKey
  };
})();
