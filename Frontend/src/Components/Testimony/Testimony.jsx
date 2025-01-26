import "./Testimony.css";
import anonymousUser from "../../assets/Others/hacker.png";

const Testimony = ({header_quote, body_quote,type, reviewer = "Anonymous", profile = anonymousUser}) => {
    return (
      <div className="testimonial">
            <img src={profile} className="user-profile" alt="user-profile"/>
          <div className="testimony">
            <p className="header-quote">{header_quote}</p>
            <p className="body-quote">{body_quote}</p>
          </div>
          <div className="testimony-info">
            <p className="testimony-type">{type}</p>
            <p className="reviewer">By: {reviewer}</p>
          </div>
      </div>
    )
  }


export default Testimony;