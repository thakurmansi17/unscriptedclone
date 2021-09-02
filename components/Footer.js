/* eslint-disable @next/next/no-img-element */
const Footer = () => {
    return (
      <div style={{ backgroundColor: "black" }}>
        <div
          className="social"
          style={{
            display: "flex",
            padding: "20px",
            color: "black",
            backgroundColor: "#fee000",
          }}
        >
          <div style={{ marginLeft: "60px", fontSize: "25px" }}>
            <b>Follow Us</b>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <img
              width="40px"
              alt=""
              src="https://img.icons8.com/ios-glyphs/30/000000/facebook-circled--v1.png"
            />
          </div>
          <div style={{ marginLeft: "40px" }}>
            <img
              width="40px"
              alt=""
              src="https://img.icons8.com/material-outlined/48/000000/instagram-new--v2.png"
            />
          </div>
          <div style={{ marginLeft: "40px" }}>
            <img
              width="40px"
              alt=""
              src="https://img.icons8.com/material-rounded/48/000000/youtube-play.png"
            />
          </div>
        </div>
  
        <h1 style={{float:"left",color: "#fee000" ,marginLeft:"80px", marginTop:"20px",fontFamily: 'Source Serif Pro'}}>unscripted</h1>
  
        <div
          style={{
            display: "flex",
            paddingTop: "40px",
            paddingBottom: "30px",
            marginLeft:"65px",
            justifyContent: "space-between",
          }}
          className="container"
        >
          <div>
          <svg
              color= "#fee000" 
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              style={{fontSize:"1.1rem;padding-right:5px;font-weight:normal",
              height:"1em",
              width:"1em",
              xmlns:"http://www.w3.org/2000/svg"}}
            >
              <path d="M12,22c5.421,0,10-4.579,10-10S17.421,2,12,2S2,6.579,2,12S6.579,22,12,22z M12,4c4.337,0,8,3.663,8,8s-3.663,8-8,8 s-8-3.663-8-8S7.663,4,12,4z"></path>
              <path d="M12,17c0.901,0,2.581-0.168,3.707-1.292l-1.414-1.416C13.85,14.735,12.992,15,12,15c-1.626,0-3-1.374-3-3s1.374-3,3-3 c0.993,0,1.851,0.265,2.293,0.707l1.414-1.414C14.582,7.168,12.901,7,12,7c-2.757,0-5,2.243-5,5S9.243,17,12,17z"></path>
            </svg>
  
            <span style={{ color: "#fee000" }}>
              2021 ScoopWhoop Media Pvt Ltd
            </span>
          </div>
          <div>
            <ul style={{ listStyle: "none", display: "flex", color: "white" }}>
              <li>Community Guidelines &nbsp;| &nbsp; </li>
              <li>Privacy Policy&nbsp; | &nbsp;</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  export default Footer;
  