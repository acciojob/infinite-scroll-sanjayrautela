//your code here!
document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("infi-list");

  // Add initial list items
  for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${i}`;
    list.appendChild(listItem);
  }

  // Infinite scrolling
  list.addEventListener("scroll", function () {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
      // User has scrolled to the bottom
      // Add more list items
      for (let i = 1; i <= 10; i++) {
        const newItem = document.createElement("li");
        newItem.textContent = `New Item ${i}`;
        list.appendChild(newItem);
      }
    }
  });
});


