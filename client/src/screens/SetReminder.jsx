import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SetReminder = () => {
  const [email, setEmail] = useState("");
  const [reminderDate, setReminderDate] = useState(""); // For reminder date
  const [reminderTime, setReminderTime] = useState(""); // For reminder time
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && reminderDate && reminderTime && description) {
      try {
        const response = await fetch("http://localhost:3300/api/reminder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: id, // Include userId in the request body
            email,
            reminderDate,
            reminderTime,
            description,
          }),
        });

        if (response.ok) {
          setSuccessMessage("Reminder set successfully!");
          setErrorMessage("");
          setEmail("");
          setReminderDate("");
          setReminderTime("");
          setDescription("");
        } else {
          throw new Error("Failed to set reminder");
        }
      } catch (error) {
        console.error("Error setting reminder", error);
        setErrorMessage("An error occurred while setting the reminder.");
      }
    } else {
      setErrorMessage("Please fill in all fields.");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-teal-600">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-6">
            Set a Reminder
          </h2>
          {errorMessage && (
            <p className="text-red-500 text-sm text-center mb-4">
              {errorMessage}
            </p>
          )}
          {successMessage && (
            <p className="text-green-500 text-sm text-center mb-4">
              {successMessage}
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex items-center border border-gray-300 rounded">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border-none rounded focus:outline-none"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4 flex items-center border border-gray-300 rounded">
              <input
                type="date"
                value={reminderDate}
                onChange={(e) => setReminderDate(e.target.value)}
                required
                className="w-full p-2 border-none rounded focus:outline-none"
              />
            </div>
            <div className="mb-4 flex items-center border border-gray-300 rounded">
              <input
                type="time"
                value={reminderTime}
                onChange={(e) => setReminderTime(e.target.value)}
                required
                className="w-full p-2 border-none rounded focus:outline-none"
              />
            </div>
            <div className="mb-4 flex items-center border border-gray-300 rounded">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full p-2 border-none rounded focus:outline-none"
                placeholder="Reminder Description"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition duration-300"
            >
              Set Reminder
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SetReminder;
