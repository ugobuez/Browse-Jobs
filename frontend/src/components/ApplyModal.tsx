import React, { useState } from "react";
import type { Job } from "../types";

type Props = {
  job: Job;
  onClose: () => void;
};

const ApplyModal: React.FC<Props> = ({ job, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Application submitted for ${job.title}`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Apply for {job.title}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="modal-actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose} className="cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;