import "./Resume.css";


import resumePDF from "../../assets/carl_alex_resume.pdf";

const Resume = () => {
    return (
        <div className="resume-container">
            <iframe
                src={resumePDF}
                width="100%"
                height="800px"
                title="Resume"
            />
        </div>
    );
};

export default Resume;
