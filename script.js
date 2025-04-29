// Replace with your Google Spreadsheet ID
// const SPREADSHEET_ID = '19NEmB1AEmuVlzSMnJI8UaL0TslNICLQeDykYbfUP7v8';
const sheetID = '19NEmB1AEmuVlzSMnJI8UaL0TslNICLQeDykYbfUP7v8';
const sheetNames = ['AXIS', 'SalExp', 'Investments', 'Dashboard']; // List your sheet names here

// Render buttons
const buttonContainer = document.getElementById('buttons');
sheetNames.forEach(name => {
  const btn = document.createElement('button');
  btn.textContent = name;
  btn.onclick = () => fetchSheet(name);
  buttonContainer.appendChild(btn);
});

function fetchSheet(sheetName) {
  document.getElementById('sheet-title').innerHTML = `<h2>${sheetName}</h2>`;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${proxyUrl}https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

  fetch(url)
    .then(res => res.text())
    .then(dataText => {
      const jsonData = JSON.parse(dataText.substring(47).slice(0, -2));
      const rows = jsonData.table.rows;
      const cols = jsonData.table.cols.map(col => col.label);

      let html = "<table><thead><tr>";
      cols.forEach(col => html += `<th>${col}</th>`);
      html += "</tr></thead><tbody>";

      rows.forEach(row => {
        html += "<tr>";
        row.c.forEach(cell => {
          html += `<td>${cell ? cell.v : ''}</td>`;
        });
        html += "</tr>";
      });

      html += "</tbody></table>";
      document.getElementById('table-container').innerHTML = html;
    })
    .catch(err => {
      console.error(`Failed to fetch ${sheetName}:`, err);
      document.getElementById('table-container').innerText = 'Failed to load data.';
    });
}

// Fetch the first sheet by default
fetchSheet(sheetNames[0]);
