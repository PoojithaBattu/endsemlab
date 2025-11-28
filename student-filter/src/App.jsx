import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const students = [
    { roll: "101", name: "Alice Johnson" },
    { roll: "102", name: "Bob Kumar" },
    { roll: "103", name: "Charlie Smith" },
    { roll: "104", name: "Deborah Williams" },
    { roll: "105", name: "Eve Patel" },
    { roll: "106", name: "Farhan Ali" },
    { roll: "107", name: "Grace Thomas" },
    { roll: "108", name: "Harish Reddy" },
    { roll: "109", name: "Ishita Sharma" },
    { roll: "110", name: "Jaspreet Kaur" },
    { roll: "111", name: "Kiran Kumar" },
    { roll: "112", name: "Lakshmi Devi" }
  ];

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.roll.includes(search)
  );

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#2586dbff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        color: "black"
      }}
    >
      <div
        style={{
          width: "600px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(147, 13, 13, 0.65)",
          color: "black"
        }}
      >
        <h2>Student List</h2>

        <input
          type="text"
          placeholder="Search by name or roll number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #3f14edff",
            color: "black"
          }}
        />

        <ul>
          {filteredStudents.map((stu) => (
            <li
              key={stu.roll}
              style={{
                padding: "10px",
                borderBottom: "1px solid #c81d1dff",
                fontSize: "18px",
                color: "black"
              }}
            >
              <b>{stu.roll}</b> — {stu.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
