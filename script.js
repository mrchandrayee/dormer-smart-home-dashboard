const shell = document.querySelector("#appShell");
const views = [...document.querySelectorAll(".view")];
const navItems = [...document.querySelectorAll(".nav-item")];
const crumb = document.querySelector("#crumbCurrent");
const toast = document.querySelector("#toast");
let toastTimer;

function notify(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2100);
}

function showView(name) {
  const target = document.querySelector(`#view-${name}`);
  if (!target) return;
  views.forEach(view => view.classList.toggle("active", view === target));
  navItems.forEach(item => item.classList.toggle("active", item.dataset.view === name));
  const label = navItems.find(item => item.dataset.view === name)?.innerText.trim() || "Overview";
  crumb.textContent = label;
  window.scrollTo({top: 0, behavior: "smooth"});
}

navItems.forEach(item => item.addEventListener("click", () => showView(item.dataset.view)));
document.querySelectorAll("[data-view-link]").forEach(button => {
  button.addEventListener("click", () => showView(button.dataset.viewLink));
});

document.querySelector("#themeToggle").addEventListener("click", () => {
  shell.classList.toggle("dark");
  notify(shell.classList.contains("dark") ? "Dark theme enabled" : "Light theme enabled");
});

document.querySelectorAll(".scene-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".scene-button").forEach(item => item.classList.toggle("selected", item === button));
    document.querySelector("#sceneFeedback").textContent = `${button.dataset.scene} scene is active`;
    notify(`${button.dataset.scene} scene activated`);
    const scene = button.dataset.scene;
    if (scene === "Night" || scene === "Movie" || scene === "Away") {
      document.querySelectorAll('[data-device="Ceiling lights"],[data-device="Counter lights"]').forEach(input => input.checked = false);
    } else {
      document.querySelector('[data-device="Ceiling lights"]').checked = true;
    }
  });
});

document.querySelectorAll(".room-hotspot").forEach(hotspot => {
  const selectRoom = () => {
    const room = hotspot.dataset.room;
    document.querySelector("#roomTitle").textContent = room;
    showView("rooms");
    notify(`${room} selected`);
  };
  hotspot.addEventListener("click", selectRoom);
  hotspot.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectRoom();
    }
  });
});

document.querySelectorAll("[data-device]").forEach(input => {
  input.addEventListener("change", () => notify(`${input.dataset.device} ${input.checked ? "turned on" : "turned off"}`));
});

let targetTemp = 21.5;
function updateTemp() {
  document.querySelector("#thermoTemp").textContent = targetTemp.toFixed(1);
  const pct = Math.max(10, Math.min(92, ((targetTemp - 14) / 16) * 100));
  document.querySelector("#thermoFill").style.height = `${pct}%`;
  document.querySelector("#homeTemp").textContent = `${(targetTemp - .8).toFixed(1)}°`;
}
document.querySelector("#tempDown").addEventListener("click", () => {
  targetTemp = Math.max(15, targetTemp - .5);
  updateTemp();
});
document.querySelector("#tempUp").addEventListener("click", () => {
  targetTemp = Math.min(28, targetTemp + .5);
  updateTemp();
});
updateTemp();

document.querySelector("#quickActions").addEventListener("click", () => {
  notify("Quick actions: choose a scene or control a device");
});
document.querySelector("#viewFloor").addEventListener("click", () => notify("Floor plan zoom is at 100%"));

document.querySelector("#globalSearch").addEventListener("keydown", event => {
  if (event.key !== "Enter") return;
  const query = event.currentTarget.value.trim().toLowerCase();
  if (!query) return;
  const found = [...document.querySelectorAll("[data-device]")].find(input => input.dataset.device.toLowerCase().includes(query));
  if (found) {
    showView("rooms");
    found.closest(".device-row").scrollIntoView({behavior: "smooth", block: "center"});
    notify(`${found.dataset.device} found`);
  } else {
    notify(`No device found for "${event.currentTarget.value.trim()}"`);
  }
});

document.querySelectorAll(".segmented button").forEach(button => {
  button.addEventListener("click", () => {
    button.parentElement.querySelectorAll("button").forEach(b => b.classList.toggle("active", b === button));
    notify(`${button.textContent} climate view selected`);
  });
});
