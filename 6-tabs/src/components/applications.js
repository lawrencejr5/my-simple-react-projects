import MoreInfoBtn from "./moreInfo";
const Applications = ({ applicant }) => {
  const {
    user,
    profession,
    duration,
    experiences: { exp1, exp2, exp3 },
  } = applicant;
  return (
    <section className="applications">
      <div className="header">
        <b className="profession">{profession}</b>
        <span className="name">{user}</span>
      </div>
      <br />
      <div className="duration">{duration}</div>
      <div className="experience">
        <p>...{exp1}</p>
        <p>...{exp2}</p>
        <p>...{exp3}</p>
      </div>
      <MoreInfoBtn />
    </section>
  );
};
export default Applications;
