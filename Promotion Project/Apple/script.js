const panels = document.querySelectorAll(".panel");
const panelGrowthDuration = Number.parseFloat(
  getComputedStyle(document.documentElement).getPropertyValue(
    "--panel-growth-duration"
  )
);

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("expanding");
    // once the panel is fully expanded, we want to apply the "active" class to it
    setTimeout(function () {
      panel.classList.remove("expanding");
      panel.classList.add("active");
    }, panelGrowthDuration * 1000);
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}