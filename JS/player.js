const players = document.getElementsByClassName("player");
const liContainer = document.getElementById("order-list");

const playerNameArr = [];
for (const playerBtn of players) {
  playerBtn.addEventListener("click", function (e) {
    const playerName = e.target.parentNode.children[0].innerText;

    playerNameArr.push(playerName);
    if (playerNameArr.length <= 5) {
      const li = document.createElement("li");
      li.innerText = playerName;
      liContainer.appendChild(li);
      playerBtn.setAttribute("disabled", true);
      playerBtn.style.backgroundColor = "grey";
    } else {
      alert("cannot add more than 5 player at a time");
    }
  });
}
