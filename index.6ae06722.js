document.querySelectorAll("tr").forEach(function(e){var t="THEAD"===e.parentElement.tagName||"TFOOT"===e.parentElement.tagName?document.createElement("th"):document.createElement("td");t.textContent=e.children[1].textContent,e.insertBefore(t,e.children[4])});
//# sourceMappingURL=index.6ae06722.js.map
