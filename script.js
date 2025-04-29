// Replace with your Google Spreadsheet ID
// const SPREADSHEET_ID = '19NEmB1AEmuVlzSMnJI8UaL0TslNICLQeDykYbfUP7v8';
const sheetID = '19NEmB1AEmuVlzSMnJI8UaL0TslNICLQeDykYbfUP7v8';
const sheetName = 'AXIS';

function fetchSheet(sheetName, containerId) {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${proxyUrl}https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

  fetch(url)
    .then(res => res.text())
    .then(dataText => {
      // Remove the function wrapper and parse the JSON
      const jsonData = JSON.parse(dataText.substring(dataText.indexOf('{'), dataText.lastIndexOf('}') + 1));

      // Extract columns and rows
      const rows = jsonData.table.rows;
      const cols = jsonData.table.cols.map(col => col.label);

      // Generate HTML table
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

      // Insert the table into the container
      document.getElementById(containerId).innerHTML = html;
    })
    .catch(err => {
      console.error(`Failed to fetch ${sheetName}:`, err);
      document.getElementById(containerId).innerText = 'Failed to load data.';
    });
}

fetchSheet(sheetName, 'data-container');
