import React, { useState } from "react";
import type { Job } from "../types";
import ApplyModal from "./ApplyModal";

type Props = {
  jobs: Job[];
};

const JobsList: React.FC<Props> = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  if (jobs.length === 0) return <p className="empty">No jobs found.</p>;

  return (
    <>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h4>{job.title}</h4>
            <p>
              Category: {job.category} | Type: {job.type}
            </p>

            <button
              className="apply-btn"
              onClick={() => setSelectedJob(job)}
            >
              Apply
            </button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {selectedJob && (
        <ApplyModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </>
  );
};

export default JobsList;