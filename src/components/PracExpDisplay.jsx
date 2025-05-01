import "../styles/PracExpDisplay.css";
import { format, parseISO } from "date-fns";

function PracExpDisplay({ practicalExperience }) {

  return (
    <>
      <h3>Professional Experience</h3>
      {practicalExperience.map((value, index) => {
        const isoStart = parseISO(value.startDate);
        const isoEnd = parseISO(value.endDate);
        const startDate = format(isoStart, 'MMMM yyy');
        const endDate = format(isoEnd, 'MMMM yyy');

        return (
          <div key={index} className="company-container">
            <div className="company-title">
              <h4>{value.company}</h4>
              &nbsp;&mdash;&nbsp;
              <p>{`${startDate} - ${endDate}`}</p>
            </div>
            <p>{value.position}</p>
            <p>{value.responsibilities}</p>
          </div>
        )
      })}
    </>
  );
}

export default PracExpDisplay;