import React, { useState } from "react";
import "./Students.css";

export function Students() {
  const [data, setData] = useState([
    {
      Name: "Alex",
      Age: 22,
      COURSE: "MERN",
      Batch: "October",
    },
    {
      Name: "Jane",
      Age: 25,
      COURSE: "MEAN",
      Batch: "November",
    },
    {
      Name: "Peter",
      Age: 30,
      COURSE: "MEVN",
      Batch: "December",
    },
    {
      Name: "Alice",
      Age: 22,
      COURSE: "MERN",
      Batch: "January",
    },
    {
      Name: "Bob",
      Age: 27,
      COURSE: "MEAN",
      Batch: "February",
    },
    {
      Name: "Carol",
      Age: 32,
      COURSE: "MEVN",
      Batch: "March",
    },
    {
      Name: "David",
      Age: 23,
      COURSE: "MERN",
      Batch: "April",
    },
    {
      Name: "Emily",
      Age: 28,
      COURSE: "MEAN",
      Batch: "May",
    },
    {
      Name: "Frank",
      Age: 33,
      COURSE: "MEVN",
      Batch: "June",
    },
    {
      Name: "George",
      Age: 24,
      COURSE: "MERN",
      Batch: "July",
    },
    {
      Name: "Helen",
      Age: 29,
      COURSE: "MEAN",
      Batch: "August",
    },
    {
      Name: "Ivan",
      Age: 34,
      COURSE: "MEVN",
      Batch: "September",
    },
    {
      Name: "James",
      Age: 25,
      COURSE: "MERN",
      Batch: "October",
    },
    {
      Name: "Kate",
      Age: 30,
      COURSE: "MEAN",
      Batch: "November",
    },
    {
      Name: "Leo",
      Age: 35,
      COURSE: "MEVN",
      Batch: "December",
    },
    {
      Name: "Mary",
      Age: 26,
      COURSE: "MERN",
      Batch: "January",
    },
    {
      Name: "Noah",
      Age: 31,
      COURSE: "MEAN",
      Batch: "February",
    },
    {
      Name: "Oliver",
      Age: 36,
      COURSE: "MEVN",
      Batch: "March",
    },
    {
      Name: "Penelope",
      Age: 27,
      COURSE: "MERN",
      Batch: "April",
    },
    {
      Name: "Quentin",
      Age: 32,
      COURSE: "MEAN",
      Batch: "May",
    },
    {
      Name: "Robert",
      Age: 37,
      COURSE: "MEVN",
      Batch: "June",
    },
  ]);
  return (
    <>
      <div className="SubHeading">
        <h1>Student Details</h1>
        <button>Add new student</button>
      </div>
      <div className="table_container">
        <table borderless style={{ width: "50%",   borderCollapse: "collapse"}}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Course</td>
              <td>Batch</td>
              <td>Change</td>
            </tr>
          </thead>
          <tbody>
            {data.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.Name}</td>
                  <td>{element.Age}</td>
                  <td>{element.COURSE}</td>
                  <td>{element.Batch}</td>
                  <td>Edit</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
