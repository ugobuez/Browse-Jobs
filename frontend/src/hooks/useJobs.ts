import { useState, useEffect } from "react";
import type {  JobsResponse } from "../types/Job";

type Params = { page: number; limit: number; category?: string; type?: string };

export const useJobs = ({ page, limit, category, type }: Params) => {
  const [jobsData, setJobsData] = useState<JobsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch(
      `http://localhost:3000/jobs?page=${page}&limit=${limit}${
        category ? `&category=${category}` : ""
      }${type ? `&type=${type}` : ""}`
    )
      .then((res) => res.json())
      .then((data: JobsResponse) => {
        setJobsData(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load jobs");
        setLoading(false);
      });
  }, [page, limit, category, type]);

  return { jobsData, loading, error };
};