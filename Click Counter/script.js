document.addEventListener("DOMContentLoaded", function() {
  const countElement = document.getElementById("count");
  const incrementBtn = document.getElementById("incrementBtn");
  const resetBtn = document.getElementById("resetBtn");

  let count = 0;

  function updateCount() {
    countElement.textContent = count;
  }

  updateCount();

  incrementBtn.addEventListener("click", function() {
    count++;
    updateCount();
  });

  resetBtn.addEventListener("click", function() {
    count = 0;
    updateCount();
  });

  document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
      count++;
      updateCount();
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.code === "Escape") {
      count = 0;
      updateCount();
    }
  });

});
