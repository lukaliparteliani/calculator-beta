document
  .querySelector(".request-complement")
  .addEventListener("click", function() {
    document.querySelector(".complement").style.opacity = "0";
    fetch("https://complimentr.com/api")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        setTimeout(() => {
          document.querySelector(".complement").innerText = data.compliment;
          document.querySelector(".complement").style.opacity = "1";
        }, "500")
      })
      .catch(function(err) {
        console.error(err);
      });
  });