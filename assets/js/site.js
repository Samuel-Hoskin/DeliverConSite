(function () {
  "use strict";

  // Mobile nav toggle
  var nav = document.getElementById("dc-nav");
  var toggle = document.getElementById("dc-nav-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Agenda: star sessions into "My day" (persisted) + filter chips
  var grid = document.querySelector("[data-agenda]");
  if (!grid) return;

  var STORE_KEY = "delivercon-my-day";
  var FILTERS = {
    all: ["teams", "craft", "career", "ai"],
    career: ["career", "craft"],
    teams: ["teams"],
    ai: ["ai"],
    lightning: []
  };

  function loadStarred() {
    try {
      return JSON.parse(window.localStorage.getItem(STORE_KEY) || "[]");
    } catch (e) {
      return [];
    }
  }

  function saveStarred(list) {
    try {
      window.localStorage.setItem(STORE_KEY, JSON.stringify(list));
    } catch (e) {
      /* storage unavailable — starring still works for this page view */
    }
  }

  var starred = loadStarred();
  var badge = document.querySelector("[data-my-day-count]");

  function updateBadge() {
    if (!badge) return;
    badge.textContent = starred.length
      ? "My day · " + starred.length + " session" + (starred.length === 1 ? "" : "s")
      : "My day · nothing starred yet";
  }

  function applySessionState(button) {
    var id = button.dataset.sessionId;
    var isStarred = starred.indexOf(id) !== -1;
    var meta = button.querySelector("[data-session-meta]");
    button.classList.toggle("is-starred", isStarred);
    if (meta) {
      meta.textContent = isStarred ? "★ IN MY DAY" : button.dataset.slot;
    }
  }

  var sessionButtons = grid.querySelectorAll("[data-session-id]");
  sessionButtons.forEach(function (button) {
    applySessionState(button);
    button.addEventListener("click", function () {
      var id = button.dataset.sessionId;
      var idx = starred.indexOf(id);
      if (idx === -1) {
        starred.push(id);
      } else {
        starred.splice(idx, 1);
      }
      saveStarred(starred);
      applySessionState(button);
      updateBadge();
    });
  });
  updateBadge();

  var chips = document.querySelectorAll("[data-filter]");
  function applyFilter(filter) {
    var tags = FILTERS[filter] || FILTERS.all;
    sessionButtons.forEach(function (button) {
      var tag = button.dataset.tag;
      button.classList.toggle("is-hidden", tags.indexOf(tag) === -1);
    });
    chips.forEach(function (chip) {
      chip.classList.toggle("is-active", chip.dataset.filter === filter);
    });
  }
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      applyFilter(chip.dataset.filter);
    });
  });
})();
