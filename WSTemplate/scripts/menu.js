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
    // Get the current page path
    const currentPath = window.location.pathname;
  
    navItems.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = item.text;
      a.href = item.href;
      
      // Check if this link matches the current page
      // Compare the normalized paths to handle different path formats
      const linkPath = new URL(item.href, window.location.origin).pathname;
      if (currentPath.includes(linkPath) || linkPath.includes(currentPath.split('/').slice(-2).join('/'))) {
        a.classList.add("active");
      }
      
      li.appendChild(a);
      navList.appendChild(li);
    });
  });