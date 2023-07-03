/* eslint-disable jsx-a11y/alt-text */
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  function clickDiv(){
    window.location.href = url;
  }
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={clickDiv}>
        <img src={imgUrl} className="img-card"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
