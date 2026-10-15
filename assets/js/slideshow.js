(function () {
  var root = document.querySelector("[data-slideshow]");
  if (!root || !window.HYROX_SLIDES || !window.HYROX_SLIDES.length) return;

  var slides = window.HYROX_SLIDES;
  var img = root.querySelector("[data-slideshow-image]");
  var currentEl = root.querySelector("[data-slideshow-current]");
  var totalEl = root.querySelector("[data-slideshow-total]");
  var dotsWrap = root.querySelector("[data-slideshow-dots]");
  var prevBtn = root.querySelector("[data-slideshow-prev]");
  var nextBtn = root.querySelector("[data-slideshow-next]");
  var index = 0;

  if (totalEl) totalEl.textContent = String(slides.length);

  function renderDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = "";
    slides.forEach(function (_, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "slideshow-dot" + (i === index ? " is-active" : "");
      btn.setAttribute("aria-label", "Go to slide " + (i + 1));
      btn.setAttribute("aria-current", i === index ? "true" : "false");
      btn.addEventListener("click", function () {
        goTo(i);
      });
      dotsWrap.appendChild(btn);
    });
  }

  function goTo(nextIndex) {
    index = (nextIndex + slides.length) % slides.length;
    img.classList.add("is-fading");
    window.setTimeout(function () {
      img.src = slides[index];
      img.alt = "Hyrox tip slide " + (index + 1) + " of " + slides.length;
      if (currentEl) currentEl.textContent = String(index + 1);
      renderDots();
      img.classList.remove("is-fading");
    }, 120);
  }

  if (prevBtn) prevBtn.addEventListener("click", function () { goTo(index - 1); });
  if (nextBtn) nextBtn.addEventListener("click", function () { goTo(index + 1); });
  if (img) {
    img.style.cursor = "pointer";
    img.title = "Click for next slide";
    img.addEventListener("click", function () { goTo(index + 1); });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") goTo(index - 1);
    if (event.key === "ArrowRight") goTo(index + 1);
  });

  var touchStartX = null;
  root.addEventListener("touchstart", function (event) {
    touchStartX = event.changedTouches[0].screenX;
  }, { passive: true });

  root.addEventListener("touchend", function (event) {
    if (touchStartX === null) return;
    var delta = event.changedTouches[0].screenX - touchStartX;
    touchStartX = null;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) goTo(index + 1);
    else goTo(index - 1);
  }, { passive: true });

  renderDots();
})();
