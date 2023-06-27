import { FaGithub, FaLink } from 'react-icons/fa';
import './ProjectLinks.css';

export const ProjectLinks = ({codeSrc, linkSrc}) => {
  return (
    <div className="links">
      <a
        className="projectLink"
        href={codeSrc}
      >
        <span>
          <FaGithub /> Code
        </span>
      </a>
      <a className="projectLink" href={linkSrc}>
        <span>
          <FaLink /> Link
        </span>
      </a>
    </div>
  );
};
