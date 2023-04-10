(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const i of t.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = r(e);
    fetch(e.href, t);
  }
})();
const u = document.getElementById("hours"),
  l = document.getElementById("minutes"),
  d = document.getElementById("seconds"),
  m = document.getElementById("ampm");
function c() {
  let n = new Date().getHours(),
    o = new Date().getMinutes(),
    r = new Date().getSeconds(),
    s = "AM";
  n > 12 && ((n = n - 12), (s = "PM")),
    (n = n < 10 ? "0" + n : n),
    (o = o < 10 ? "0" + o : o),
    (r = r < 10 ? "0" + r : r),
    (u.innerText = n),
    (l.innerText = o),
    (d.innerText = r),
    (m.innerText = s),
    setTimeout(() => {
      c();
    }, 1e3);
}
c();
