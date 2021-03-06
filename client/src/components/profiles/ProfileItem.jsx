import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => (
  <div className="profile bg-light">
    <img src={avatar} className="round-img" alt="" />
    <div>
      <h2 className="profileDetail">{name}.</h2>
      <p className="profileDetail">{status}</p>{" "}
      {company && <span className="profileDetail"> at {company}.</span>}
      <p className="my-1">
        {location && <span className="profileDetail">{location}.</span>}
      </p>
      <Link className="btn btn-primary profileDetail" to={`/profile/${_id}`}>
        View Profile
      </Link>
    </div>
    <ul>
      {skills.slice(0, 4).map((skill, idx) => (
        <li key={idx} className="text-primary">
          <i className="fas fa-check"></i> {skill}
        </li>
      ))}
    </ul>
  </div>
);

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
