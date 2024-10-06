import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Loader from "./Loader";

const Reminders = () => {
  const [userId, setUserId] = useState();
  const [reminders, setreminders] = useState(null);

  useEffect(() => {
    const id = Cookies.get("userId");
    if (id) {
      setUserId(id);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      fetchData();
    }
  }, [userId]);

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:3300/api/getreminder/${userId}`, {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
      if(!res.ok){
        console.log("err");
      }
      const data = await res.json()

      console.log(data);
      
      setreminders(data)

    } catch (err) {
        console.log(err)
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold text-teal-700 mb-6">Reminders</h3>
      
      { reminders === null ? <Loader/> : <table className="table-auto w-full text-left">
        <thead>
          <tr className="text-teal-700">
            <th className="px-4 py-2 text-xl">Task</th>
            <th className="px-4 py-2 text-xl">Time</th>
          </tr>
        </thead>
        <tbody>
          {reminders.map((reminder, index) => (
            <tr
              key={index}
              className="hover:bg-gray-100 transition-colors duration-200"
            >
              <td className="border px-4 py-2">{reminder.description}</td>
              <td className="border px-4 py-2">{reminder.reminderTime}</td>
            </tr>
          ))}
        </tbody>
      </table>


      }

    </div>
  );
};

export default Reminders;
