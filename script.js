let id = 1;

function addEmployee() {
  const name = document.getElementById("name").value;
  const salary = document.getElementById("salary").value;
  const department = document.getElementById("department").value;
  const position = document.getElementById("position").value;

  if (!name || !salary || !department || !position) {
    alert("Please fill all fields");
    return;
  }

  const tableBody = document.getElementById("tableBody");
  const noData = document.getElementById("noData");
  if (noData) noData.remove();

  const row = document.createElement("tr");
  row.innerHTML = `
        <td>${id++}</td>
        <td>${name}</td>
        <td>${salary}</td>
        <td>${department}</td>
        <td>${position}</td>
        <td>
            <button class="delete" onclick="this.parentElement.parentElement.remove()">Delete</button>
        </td>
    `;
  tableBody.appendChild(row);

  document.querySelectorAll("input").forEach((input) => (input.value = ""));
}