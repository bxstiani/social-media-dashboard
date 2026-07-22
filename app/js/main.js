const toggle = document.getElementById("theme-toggle");
const body = document.getElementById("body");

// Apply theme
function setTheme(theme) {
  body.setAttribute("class", theme);
  localStorage.setItem("theme", theme);

  // Keep slider in sync
  toggle.checked = theme === "dark";
}

// Determine initial theme
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setTheme(prefersDark ? "dark" : "light");
  }
}

initializeTheme();

// Toggle theme
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
});