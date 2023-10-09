import { Link } from "react-router-dom";
import "./index.css";
const JobList = (props) => {
  const { jobs } = props;
  const { name, company, publication_date, levels, id } = jobs;
  return (
    <Link className="link" to={`/jobs/${id}`}>
      <li className="job-li">
        <h1>{name}</h1>
        <p className="company-name">
          Company:<span className="span">{company.name}</span>
        </p>
        <p className="company-name">
          published Date:<span className="span">{publication_date}</span>
        </p>
        <p className="company-name">
          Experence<span className="span">{levels[0].name}</span>
        </p>
      </li>
    </Link>
  );
};

export default JobList;
