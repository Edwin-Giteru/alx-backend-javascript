/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "../interface";
import * as CRUD from "./crud";

// Creating a sample row object
const row: RowElement = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// Insert the row and store the generated ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

// Update the row
const updatedRow: RowElement = { ...row, age: 31 };
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);
