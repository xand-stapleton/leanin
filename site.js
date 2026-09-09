import { proofIndex } from "./proof-index.js?v=20260812";
import "./site-header.js?v=20260806";

export const proofCount = proofIndex.length;
export const proofNoun = proofCount === 1 ? "Proof" : "Proofs";
export const proofRouteLabel = `${proofCount} ${proofNoun}`;
export const seriesSubtitle = `${proofRouteLabel} to learn Lean (with many more on the way)`;
export const seriesTitle = `Lean In: ${seriesSubtitle}`;

export function siteHeaderHtml(root) {
  return window.LeanInHeader.html(root);
}

export function renderSiteHeader() {
  window.LeanInHeader.render();
}

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
}

export function updateSeriesCopy() {
  setText("[data-proof-count]", proofCount);
  setText("[data-proof-route-label]", proofRouteLabel);
  setText("[data-proof-subtitle]", seriesSubtitle);
  setText("[data-series-title]", seriesTitle);

  const pageTitle = document.documentElement.dataset.pageTitle;
  if (pageTitle) {
    document.title = `${pageTitle} | ${seriesTitle}`;
  } else if (document.documentElement.dataset.dynamicTitle !== undefined) {
    document.title = seriesTitle;
  }
}

export function setupAncientMode() {
  window.LeanInHeader.setupAncientMode();
}

export function initSiteChrome() {
  renderSiteHeader();
  updateSeriesCopy();
  setupAncientMode();
}

initSiteChrome();
