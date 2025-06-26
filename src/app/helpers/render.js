import mustache from "mustache";

export function render(target, file, data = {}, DOMrefresh = true) {
  if (DOMrefresh) {
    document.querySelector("#app").innerHTML = "";
  }

  const rendered = mustache.render(file, data);

  document.querySelector(target).innerHTML = rendered;
}

export function include(target, file, data = {}) {
  render(target, file, data, false);
}