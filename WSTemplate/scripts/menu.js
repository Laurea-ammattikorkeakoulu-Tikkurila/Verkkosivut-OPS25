document.addEventListener("DOMContentLoaded", function () {
    const navItems = [
      { text: "01 HTML Intro", href: "../WS01/index.html" },
      { text: "02 CSS Fundamentals", href: "../WS02/index.html" },
      { text: "03 Advanced CSS", href: "../WS03/index.html" },
      { text: "04 Page layout", href: "../WS04/index.html" },
      { text: "05 Responsive Design", href: "../WS05/index.html" },
      { text: "06 Bootstrap", href: "../WS06/index.html" },
      { text: "07 Project", href: "../WS07/index.html" },
    ];
  
    const navList = document.getElementById("nav-list");
  
    navItems.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = item.text;
      a.href = item.href;
      li.appendChild(a);
      navList.appendChild(li);
    });
  });