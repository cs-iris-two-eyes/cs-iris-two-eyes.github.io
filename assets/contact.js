/* Adresse de contact assemblée au clic : elle n'apparaît jamais en clair dans le code HTML (anti-spam). */
document.addEventListener("click", function (e) {
  var a = e.target.closest && e.target.closest("a.js-contact");
  if (!a) return;
  e.preventDefault();
  var u = ["mizu", "assistant"].join("."), d = ["gmail", "com"].join(".");
  window.location.href = "mai" + "lto:" + u + "@" + d;
});
