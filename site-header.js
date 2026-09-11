(function () {
  function pageRoot() {
    return document.documentElement.dataset.root || "";
  }

  function navigationHtml(root) {
    return `
      <nav class="nav" aria-label="Main navigation">
        <a class="brand" href="${root}index.html"><span class="brand-mark">∀</span><span>Lean In</span></a>
        <div class="nav-links">
          <a href="${root}intro-to-lean-in-18-proofs/index.html" data-proof-route-label>Proofs</a>
          <a href="${root}helpful-resources.html">Helpful Resources</a>
          <a href="${root}lean-neovim-setup.html">Neovim Setup</a>
          <a href="${root}learn-mathlib-in-y-minutes.html">mathlib in Y Minutes</a>
          <button class="ancient-toggle" type="button" data-ancient-toggle title="A simpler view for older devices that cannot cope with this site’s JavaScript — inspired by trying it on my beloved iPad mini (2nd generation, 2014).">Ancient mode</button>
        </div>
      </nav>
    `;
  }

  function ancientModeNoticeHtml() {
    return `<aside class="ancient-mode-notice" data-ancient-mode-notice>A simpler view for older devices that cannot cope with this site’s JavaScript — inspired by trying it on my beloved iPad mini (2nd generation, 2014).</aside>`;
  }

  function siteHeaderHtml(root) {
    return `<header class="site-header">${navigationHtml(root)}</header>${ancientModeNoticeHtml()}`;
  }

  function setupAncientMode() {
    const ancient = document.documentElement.dataset.theme === "ancient";

    document.querySelectorAll("[data-ancient-toggle]").forEach((button) => {
      button.setAttribute("aria-pressed", String(ancient));
      button.textContent = ancient ? "Exit ancient mode" : "Ancient mode";

      if (button.dataset.ancientToggleReady !== undefined) return;
      button.dataset.ancientToggleReady = "";

      button.addEventListener("click", () => {
        const nextValue = !ancient;
        const storageKey = window.LeanInTheme?.storageKey || "lean-in-ancient-mode";

        try {
          window.localStorage.setItem(storageKey, String(nextValue));
        } catch (error) {
          // The preference remains available for this page even if storage is blocked.
        }

        window.location.reload();
      });
    });
  }

  function renderSiteHeader(root = pageRoot()) {
    document.querySelectorAll("[data-site-header]").forEach((header) => {
      header.classList.add("site-header");
      header.innerHTML = navigationHtml(root);

      const nextElement = header.nextElementSibling;
      if (nextElement?.hasAttribute("data-ancient-mode-notice")) nextElement.remove();
      header.insertAdjacentHTML("afterend", ancientModeNoticeHtml());
    });

    setupAncientMode();
  }

  window.LeanInHeader = {
    render: renderSiteHeader,
    setupAncientMode,
    html: siteHeaderHtml
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => renderSiteHeader());
  } else {
    renderSiteHeader();
  }
})();
