var table = document.createElement("table");
table.setAttribute("border", "2px");
table.setAttribute("cellspacing", "1");

async function createTable() {
  try {
    const data = await fetch("../file.json");
    return data;
  } catch (error) {
    throw error;
  }
}

const tdx = document.createElement("td").setAttribute("rowspan", "2");

const tdy = document.createElement("td").setAttribute("colspan", "3");

createTable()
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element, index1) => {
      let tr = document.createElement("tr");
      element.forEach((element, index) => {
        if (index1 != 0 && (index == 2 || index == 9)) {
          element.forEach((element, ind) => {
            tr.appendChild(document.createElement("td"));
            tr.cells[index].appendChild(document.createTextNode(element));
          });
        } else {
          tr.appendChild(document.createElement("td"));
          tr.cells[index].appendChild(document.createTextNode(element));
        }
      });
      table.appendChild(tr);
    });
    document.body.appendChild(table);
  })
  .catch((error) => console.log(error));
