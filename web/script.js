function sendCommand() {
  fetch("http://192.168.178.187:5000/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ led: 1 })
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById("status").innerText = "Antwort: " + data;
  })
  .catch(error => {
    document.getElementById("status").innerText = "Fehler: " + error;
  });
}
