import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/Header";
import swal from "sweetalert";
import "./index.css";

const SubmitForm = () => {
  const naviagte = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [letter, setLetter] = useState("");
  const [file, setFile] = useState(null);

  const Submithandler = (e) => {
    e.preventDefault();
    if (name || email || letter || file) {
      swal("Submitted Sucessfully!", " ", "success");
      setName("");
      setEmail("");
      setLetter("");
      setFile("");
      naviagte("/");
    } else {
      swal("Oops!", "Please fill out all fields and select a file.", "error");
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <>
      <NavBar />
      <form className="job-detail-form" onSubmit={Submithandler}>
        <h1>Fill the Required Details</h1>
        <div className="job-detail-label-container">
          <label className="job-detail-label">Name:</label>
          <input
            className="job-detail-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <div className="job-detail-label-container">
          <label className="job-detail-label">Email:</label>
          <input
            className="job-detail-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="job-detail-label-container">
          <label className="job-detail-label">Cover letter:</label>
          <textarea
            className="custom-textarea"
            rows="8"
            cols="100"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
          ></textarea>
        </div>
        <div className="job-detail-label-container">
          <label className="job-detail-label">Resume:</label>
          <input
            className="job-detail-input file"
            type="file"
            onChange={handleFileChange}
          />
        </div>
        <button className="apply-btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default SubmitForm;
