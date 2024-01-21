import { useEffect, useState } from "react";
import Table from "../Table";
import axios from "axios";
const AdminConsole = () => {
  const [users, setUsers] = useState("");
  const [employeeScore, setEmployeeScore] = useState("");
  const [displayEmployeeList, setDisplayEmployeeList] = useState(false);
  const [dislayScores, setDisplayScores] = useState(false);
  const retrieveEmailList = async () => {
    await axios
      .get("http://localhost:4000/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {}, [retrieveEmailList()]);
  const getEmployeeList = () => {
    setDisplayEmployeeList(true);
  };

  const getQuizScores = async () => {
    await axios
      .get("http://localhost:4000/employee-score")
      .then((res) => {
        setEmployeeScore(res.data);

        // console.log(employeeScore.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setDisplayScores(true);
  };

  return (
    <>
      <div className="flex">
        <button
          onClick={getEmployeeList}
          className="m-10 p-6 flex self-end middle none center mr-3 rounded-lg bg-gradient-to-tr from-orange-600 to-orange-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-lg shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Get Employee List
        </button>
        <button
          onClick={getQuizScores}
          className="m-10 p-6 flex self-end middle none center mr-3 rounded-lg bg-gradient-to-tr from-orange-600 to-orange-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-lg shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Get All Employee Quiz Scores
        </button>
      </div>
      {displayEmployeeList && <Table data={users} column={0} />}
      {dislayScores && <Table data={employeeScore.data} column={1} />}
    </>
  );
};

export default AdminConsole;
