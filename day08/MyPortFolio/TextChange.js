document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-items");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove ☜ from all nav-text elements
      navItems.forEach((navItem) => {
        const navText = navItem.querySelector(".nav-text");
        if (navText) {
          navText.textContent = navText.textContent.replace("   ⬅️", "");
        }
      });

      // Add ☜ to the clicked nav-text element
      const clickedNavText = item.querySelector(".nav-text");
      if (clickedNavText) {
        clickedNavText.textContent += "   ⬅️";
      }
    });
  });
});
