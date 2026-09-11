import { comingSoonProofNumbers, proofIndex } from "./proof-index.js?v=20260911";
import {
  initSiteChrome,
  proofRouteLabel,
  seriesTitle,
  siteHeaderHtml
} from "./site.js?v=20260812";

function inferRootPrefix() {
  if (document.documentElement.dataset.root !== undefined) {
    return document.documentElement.dataset.root;
  }

  return window.location.pathname.includes("/intro-to-lean-in-18-proofs/") ? "../" : "";
}

const rootPrefix = inferRootPrefix();

function proofFileName(proof) {
  return `proof-${String(proof.number).padStart(2, "0")}-${proof.slug}.html`;
}

function proofUrl(proof) {
  return `${rootPrefix}intro-to-lean-in-18-proofs/${proofFileName(proof)}`;
}

function isComingSoon(proof) {
  return comingSoonProofNumbers.includes(proof.number);
}

function tagsHtml(ideas) {
  return ideas.map((idea) => `<span class="tag">${idea}</span>`).join("");
}

function renderProofCards(targetId, limit) {
  const target = document.getElementById(targetId);
  if (!target) return;
  const shown = limit ? proofIndex.slice(0, limit) : proofIndex;
  target.innerHTML = shown.map((proof) => {
    const comingSoon = isComingSoon(proof);
    const content = `
      <span class="proof-number">${String(proof.number).padStart(2, "0")}</span>
      <h3>${proof.title}</h3>
      <p>${proof.summary}</p>
      <div class="tag-row">${comingSoon ? '<span class="tag coming-soon-label">Coming soon</span>' : ""}${tagsHtml(proof.ideas.slice(0, 3))}</div>`;

    return comingSoon
      ? `<article class="proof-card proof-card--coming-soon">${content}</article>`
      : `<a class="proof-card" href="${proofUrl(proof)}">${content}</a>`;
  }).join("");
}

function renderProofLadder(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = proofIndex.map((proof) => isComingSoon(proof)
    ? `<li class="proof-ladder--coming-soon"><span>${proof.title} <small>Coming soon</small></span></li>`
    : `<li><a href="${proofUrl(proof)}">${proof.title}</a></li>`
  ).join("");
}

function plainTitle(proof) {
  return proof.title.replace(/\$/g, "");
}

function proofEyebrow(proof) {
  return proof.bonus
    ? `Bonus Proof ${String(proof.number).padStart(2, "0")}`
    : `Proof ${String(proof.number).padStart(2, "0")}`;
}

function renderProofSourcePage() {
  const source = document.querySelector(".proof-content");
  if (!source) return;

  document.documentElement.lang = "en-GB";

  const fileName = window.location.pathname.split("/").pop();
  const proof = proofIndex.find((item) => fileName === proofFileName(item));
  if (!proof) return;

  const currentIndex = proofIndex.indexOf(proof);
  // Skip unpublished proofs in either direction, keeping the catalogue order.
  const prev = proofIndex.slice(0, currentIndex).reverse().find((item) => !isComingSoon(item));
  const next = proofIndex.slice(currentIndex + 1).find((item) => !isComingSoon(item));
  const proofHtml = source.innerHTML;

  document.title = `${plainTitle(proof)} | ${seriesTitle}`;
  const description = document.querySelector('meta[name="description"]') || document.createElement("meta");
  description.name = "description";
  description.content = proof.summary;
  if (!description.parentElement) document.head.appendChild(description);

  document.body.innerHTML = `
    ${siteHeaderHtml(rootPrefix)}

    <main>
      <header class="page-head">
        <p class="breadcrumb"><a href="${rootPrefix}index.html">Home</a> / <a href="${rootPrefix}intro-to-lean-in-18-proofs/index.html">${proofRouteLabel}</a></p>
        <p class="eyebrow">${proofEyebrow(proof)}</p>
        <h1>${proof.title}</h1>
        <p class="lead">${proof.summary}</p>
      </header>

      <div class="proof-layout">
        <article class="proof-article">
          ${proofHtml}

          <section class="proof-section">
            <h2>Tags</h2>
            <div class="tag-row">${tagsHtml(proof.ideas)}</div>
          </section>

          <nav class="prev-next" aria-label="Proof navigation">
            ${prev ? `<a href="${proofUrl(prev)}"><span>Previous</span>${prev.title}</a>` : "<span></span>"}
            ${next ? `<a href="${proofUrl(next)}"><span>Next</span>${next.title}</a>` : "<span></span>"}
          </nav>
        </article>

        <aside class="sidebar">
          <div class="side-box">
            <h2>All Proofs</h2>
            <ul>
              ${proofIndex.map((item) => isComingSoon(item)
                ? `<li class="proof-list--coming-soon">${String(item.number).padStart(2, "0")}. ${item.title} <small>Coming soon</small></li>`
                : `<li><a href="${proofUrl(item)}" ${item.number === proof.number ? 'aria-current="page"' : ""}>${String(item.number).padStart(2, "0")}. ${item.title}</a></li>`
              ).join("")}
            </ul>
          </div>
        </aside>
      </div>
    </main>

    <footer class="site-footer">
      <div class="footer-inner">${seriesTitle}</div>
    </footer>
  `;

  initSiteChrome();
}

function loadMathJax() {
  if (document.documentElement.dataset.theme === "ancient") return;
  if (!document.body.textContent.includes("$")) return;

  window.MathJax = {
    tex: {
      inlineMath: [["$", "$"], ["\\(", "\\)"]]
    },
    options: {
      skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code"]
    },
    svg: {
      fontCache: "global"
    }
  };

  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
  script.async = true;
  document.head.appendChild(script);
}

renderProofCards("proof-grid");
renderProofCards("featured-proofs", 6);
renderProofLadder("proof-ladder");
renderProofSourcePage();
loadMathJax();
