import "../styles/ExperienceDisplay.css";
import { format, parseISO } from "date-fns";

function ExperienceDisplay({ experiences, title, place, role, description }) {
  return (
    <>
      <h3>{title}</h3>
      {experiences.map((value, index) => {
        const isoStart = parseISO(value.startDate);
        const isoEnd = value.endDate ? parseISO(value.endDate) : "";
        const startDate = format(isoStart, "MMMM yyy");
        const endDate = isoEnd ? format(isoEnd, "MMMM yyy") : "";

        return (
          <div key={index} className="experience-container">
            <div className="experience-title">
              <h4>{value[place]}</h4>
              &nbsp;&mdash;&nbsp;
              <p>{`${startDate} - ${endDate}`}</p>
            </div>
            <p>{value[role]}</p>
            <p>{value[description]}</p>
          </div>
        );
      })}
    </>
  );
}

export default ExperienceDisplay;
