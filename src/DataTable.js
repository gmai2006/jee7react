import React, { Component } from "react";
import MaterialTable from "material-table";




function DataTable(mydata) {
    return (
      <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        title={mydata.title}
        columns={mydata.cols}
        data={query =>
          new Promise((resolve, reject) => {

            fetch(mydata.url)
              .then(response => response.json())
              .then(result => {
                console.log(result);
                resolve({
                  data: result,
                  page: 1,
                  totalCount: 10,
                })
              })
          })
        }
        actions={[
          {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          }
        ]}
      />
      </div>
    );
}

export default DataTable;