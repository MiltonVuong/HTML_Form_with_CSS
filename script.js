const resultsList = document.getElementById('results');
const heading = document.createElement('h1');
heading.textContent = "Form Report";
resultsList.append(heading);
resultsList.append(document.createElement('br'));

const table = document.createElement('table');
resultsList.append(table);

new URLSearchParams(window.location.search).forEach((value, key) => {
  const row = document.createElement('tr');

  const keyCell = document.createElement('td');
  keyCell.textContent = `${key} :`;
  row.appendChild(keyCell);

  const valueCell = document.createElement('td');
  valueCell.textContent = value;
  row.appendChild(valueCell);

  table.appendChild(row);
});
resultsList.append(document.createElement('br'));