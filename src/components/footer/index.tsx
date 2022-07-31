import { github, portoflio, linkedin } from "../../const/index";

export const Footer: React.FC = (): React.ReactElement => {
  return (
    <div
      className="d-flex justify-content-evenly mt-2"
      style={{ width: "100%", height: "auto" }}
    >
      <button className="btn btn-outline-danger">
        <a
          target={"_blank"}
          style={{ textDecoration: "none", fontSize: 15, color: "black" }}
          href={github}
        >
          Github
        </a>
      </button>
      <button className="btn btn-outline-danger">
        <a
          target={"_blank"}
          style={{ textDecoration: "none", fontSize: 15, color: "black" }}
          href={portoflio}
        >
          Portfolio
        </a>
      </button>
      <button className="btn btn-outline-danger">
        <a
          target={"_blank"}
          style={{ textDecoration: "none", fontSize: 15, color: "black" }}
          href={linkedin}
        >
          Linkedin
        </a>
      </button>
    </div>
  );
};
