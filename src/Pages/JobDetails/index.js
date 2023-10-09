import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../../Components/Header";
import "./index.css";
function JobDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [job, setJob] = useState(null);

  const apiKey =
    "5a5fec7d57dd6737285a09222516eb5b69875fcd3421e52e5deb9ec9267c451c";

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://www.themuse.com/api/public/jobs/${id}?api_key=${apiKey}`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setJob(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchData();
  }, [id, apiKey]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <div className="job-detail-main-container">
        <h1 className="job-detail-heading">{job.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: job.contents }} />
        <div className="btn-container">
          <button
            type="button"
            className="apply-btn"
            onClick={() => navigate("/form")}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
}

export default JobDetails;
