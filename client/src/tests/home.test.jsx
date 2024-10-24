import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import Home from "./Home";
import Cookies from "js-cookie";
import fetchMock from "jest-fetch-mock";

// Mock components
vi.mock("../components/Navbar", () => ({ default: () => <div>Mock Navbar</div> }));
vi.mock("../components/Hero", () => ({ default: () => <div>Mock Hero</div> }));
vi.mock("../components/Metrics", () => ({ default: () => <div>Mock Metrics</div> }));
vi.mock("../components/HealthChart", () => ({ default: () => <div>Mock HealthChart</div> }));
vi.mock("../components/HealthMetricsTable", () => ({ default: () => <div>Mock HealthMetricsTable</div> }));

// Mock js-cookie
vi.mock("js-cookie", () => ({
  get: vi.fn(),
}));

// Mock fetch
global.fetch = vi.fn();

describe("Home component", () => {
  afterEach(() => {
    vi.clearAllMocks();  // Clear mocks after each test
  });

  test("renders Navbar, Hero, and other components", async () => {
    Cookies.get.mockReturnValue("12345"); // Mock userId from cookie
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [{ metric: "heartRate", value: 80 }],
    });

    render(<Home />);

    expect(screen.getByText("Mock Navbar")).toBeInTheDocument();
    expect(screen.getByText("Mock Hero")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Mock Metrics")).toBeInTheDocument();
      expect(screen.getByText("Mock HealthChart")).toBeInTheDocument();
      expect(screen.getByText("Mock HealthMetricsTable")).toBeInTheDocument();
    });
  });

  test("fetches userId from cookies", async () => {
    Cookies.get.mockReturnValue("12345"); // Mock userId from cookie
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [{ metric: "heartRate", value: 80 }],
    });

    render(<Home />);

    await waitFor(() => {
      expect(Cookies.get).toHaveBeenCalledWith("userId");
    });
  });

  test("fetches metric data from API", async () => {
    Cookies.get.mockReturnValue("12345"); // Mock userId from cookie
    const mockMetricData = [{ metric: "heartRate", value: 80 }];
    
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockMetricData,
    });

    render(<Home />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("http://localhost:3300/api/metrics/12345", {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
    });
  });

  test("displays error message on API failure", async () => {
    Cookies.get.mockReturnValue("12345");
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    });

    render(<Home />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("http://localhost:3300/api/metrics/12345", {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
    });
  });
});
