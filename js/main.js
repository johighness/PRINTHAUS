// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Simple visual toggle for size/paper/frame option pills.
  // This only updates which pill looks selected — it does not yet
  // affect price or feed into the Stripe checkout. Once Stripe is
  // connected, this is the hook point for updating the price shown
  // and which Payment Link / price ID gets used at checkout.
  document.querySelectorAll(".option-pills").forEach(function (group) {
    group.addEventListener("click", function (e) {
      var btn = e.target.closest(".option-pill");
      if (!btn) return;
      group.querySelectorAll(".option-pill").forEach(function (p) {
        p.setAttribute("aria-pressed", "false");
      });
      btn.setAttribute("aria-pressed", "true");
    });
  });
});
