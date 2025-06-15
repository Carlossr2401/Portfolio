import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";
import "./TimeLine.css";
import { FaChildren } from "react-icons/fa6";
import { CgAirplane } from "react-icons/cg";

const TimeLine = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2018"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<FaChildren />}
      >
        <h3>Liceo Francés De Gran Canaria</h3>
        <h4>Student</h4>
        <p>Student of international french school and discovering Scratch</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2018 - 2021"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<FaGraduationCap />}
      >
        <h3>IES Pérez Galdós</h3>
        <h4>Student</h4>
        <p>
          Student pursuing a Spanish-French dual degree in Biological Sciences.
          I started discovering HTML and CSS.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2021 - present"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<FaGraduationCap />}
      >
        <h3>Universidad de Las Palmas de Gran Canaria</h3>
        <h4>Computer Science</h4>
        <p>
          Building production-ready skills through academic projects and
          personal portfolio development. Currently deepening knowledge in:
        </p>
        <div className="tech-tags">
          <span>React</span> • <span>TypeScript</span> • <span>JavaScript</span>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2023 - 2024"
        iconStyle={{ background: "rgb(0, 140, 69)", color: "#fff" }}
        icon={<CgAirplane />}
      >
        <h3>Alma Mater Studiorum – Università di Bologna (Erasmus)</h3>
        <h4>Computer Science</h4>
        <p>
          I have participated in an international exchange project where i could
          learn about a lot of new cultures and people.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TimeLine;
