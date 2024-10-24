import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import HealthLog from "./HealthLog"; // import the HealthLog component

describe("HealthLog Component", () => {
  test("renders the form inputs and submit button", () => {
    render(
      <MemoryRouter>
        <HealthLog />
      </MemoryRouter>
    );

    // Check if the form inputs and submit button are rendered
    expect(screen.getByPlaceholderText("Heart Rate (bpm)")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Sugar Level (mg/dL)")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Blood Pressure (mmHg)")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Log Data/i })).toBeInTheDocument();
  });

  test("displays error message when blood pressure format is invalid", async () => {
    render(
      <MemoryRouter>
        <HealthLog />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Blood Pressure (mmHg)"), {
      target: { value: "120-80" }, // Invalid format
    });

    const submitButton = screen.getByRole("button", { name: /Log Data/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Invalid format/i)).toBeInTheDocument();
    });
  });

  test("displays success message on valid submission", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );

    render(
      <MemoryRouter initialEntries={["/log-health/123"]}>
        <Routes>
          <Route path="/log-health/:id" element={<HealthLog />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Heart Rate (bpm)"), {
      target: { value: "72" },
    });
    fireEvent.change(screen.getByPlaceholderText("Sugar Level (mg/dL)"), {
      target: { value: "100" },
    });
    fireEvent.change(screen.getByPlaceholderText("Blood Pressure (mmHg)"), {
      target: { value: "120/80" },
    });

    const submitButton = screen.getByRole("button", { name: /Log Data/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Health data logged successfully/i)).toBeInTheDocument();
    });
  });
});
