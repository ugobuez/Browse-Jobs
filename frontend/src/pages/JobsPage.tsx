import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FiltersSidebar from "../components/FiltersSidebar";
import JobsList from "../components/JobsList";
import Pagination from "../components/Pagination";
import type {  JobsResponse } from "../types/Job";
import "../App.css"; 

const categoryOptions = [
  { label: "Engineering", value: "Engineering" },
  { label: "Design", value: "Design" },
];

const typeOptions = [
  { label: "Full-time", value: "Full-time" },
  { label: "Contract", value: "Contract" },
];

const JobsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobsData, setJobsData] = useState<JobsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const page = Number(searchParams.get("page") || 1);
  const category = searchParams.get("category") || "";
  const type = searchParams.get("type") || "";
  const limit = 5;

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError("");
      try {
        const query = new URLSearchParams({
          page: String(page),
          limit: String(limit),
          ...(category && { category }),
          ...(type && { type }),
        }).toString();

        const res = await fetch(`http://localhost:3000/jobs?${query}`);
        if (!res.ok) throw new Error("Network response was not ok");

        const data: JobsResponse = await res.json();
        setJobsData(data);
      } catch (err) {
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [page, category, type]);

  const updateFilters = (newFilters: Record<string, string>) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      ...newFilters,
      page: "1",
    });
  };

  const goToPage = (newPage: number) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      page: String(newPage),
    });
  };

  return (
    <div className="container">
      <h1>Browse Jobs</h1>

      <div className="jobs-wrapper">
        {/* Filters Sidebar */}
        <div className="sidebar">
          <FiltersSidebar
            categoryOptions={categoryOptions}
            typeOptions={typeOptions}
            selectedCategory={category}
            selectedType={type}
            onFilterChange={updateFilters}
                onResetFilters={() => setSearchParams({ page: "1" })}
          />
        </div>

        {/* Jobs List + Pagination */}
        <div className="jobs-list">
          {loading && <div className="loading">Loading jobs...</div>}
          {error && <div className="error">{error}</div>}

          {!loading && !error && jobsData && jobsData.data.length > 0 && (
            <>
              <JobsList jobs={jobsData.data} />
              <Pagination
                page={jobsData.meta.page}
                totalPages={jobsData.meta.totalPages}
                onPageChange={goToPage}
              />
            </>
          )}

          {!loading && !error && jobsData && jobsData.data.length === 0 && (
            <div className="empty">No jobs found for selected filters.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;