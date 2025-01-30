
document.addEventListener("DOMContentLoaded", function () {

    const urlParams = new URLSearchParams(window.location.search.replace('?',''));

    const fromTag = urlParams.get("from_tag");

    if (fromTag) {
      const sanitizedTag = fromTag.replace("～", "");

      const allH4s = document.querySelectorAll("h4");
      let targetElement = null;

      allH4s.forEach((h4) => {
        const strongTag = h4.querySelector("strong");
        if (strongTag && strongTag.textContent.includes(sanitizedTag)) {
          targetElement = h4;
          return;
        }
      });
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });

        targetElement.style.backgroundColor = "#fffae6";
        setTimeout(() => {
          targetElement.style.backgroundColor = "";
        }, 2000);
      }
    }
  });
