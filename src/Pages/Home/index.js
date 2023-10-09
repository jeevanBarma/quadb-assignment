import React, { useState, useEffect } from "react";
import JobList from "../../Components/JobList";
import NavBar from "../../Components/Header";
import "./index.css";
function Home() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey =
      "5a5fec7d57dd6737285a09222516eb5b69875fcd3421e52e5deb9ec9267c451c";
    const maxPages = 10;
    const allJobs = [];

    const fetchJobsForPage = (page) => {
      const apiUrl = `https://www.themuse.com/api/public/jobs?page=${page}&api_key=${apiKey}`;

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `API request failed with status ${response.status}`
            );
          }
          return response.json();
        })
        .then((data) => {
          allJobs.push(...data.results);
          if (page < maxPages && page < data.page_count) {
            fetchJobsForPage(page + 1);
          } else {
            setJobs(allJobs);
          }
        })
        .catch((error) => {
          setError(error.message);
        });
    };

    fetchJobsForPage(2);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSearch = () => {
    const filteredJob = jobs.filter((job) =>
      job.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    console.log(filteredJob);
    setFilteredJobs(filteredJob);
  };

  return (
    <>
      <NavBar />
      <div className="div">
        <h1 className="heading">Search your dream Job</h1>
        <div className="search-container">
          <input
            className="search-input"
            type="search"
            value={search}
            placeholder="Enter your skill"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="button" className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <ul className="job-ul">
          {filteredJobs.length < 1 ? (
            !jobs ? (
              <div className="loading">Loding...</div>
            ) : (
              jobs.map((job) => <JobList key={job.id} jobs={job} />)
            )
          ) : (
            filteredJobs.map((job) => <JobList key={job.id} jobs={job} />)
          )}
        </ul>
      </div>
    </>
  );
}

export default Home;
