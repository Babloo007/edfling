// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import SourceImg from "../../images/warriorstory.png";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

import * as React from "react";
import SourceImg from "../../images/warriorstory.png";

export default function Blog() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '72px', paddingLeft: '70px', paddingRight: '70px' }}>

      {/* Left half */}
      <div style={{ width: '100%', maxWidth: '500px', paddingRight: '50px' }}>
        <div>
          <img src={SourceImg} alt="" style={{ width: '100%', height: 'auto' }} />
        </div>

        <div>
          {/* div for hashTags */}
          <div>
            <span style={{ marginRight: "5px", color: "#444", marginTop: "0px" }}>
              <a title="LetsTalk" href="/blog"><u>#LetsTalk</u></a>
            </span>
            <span>|</span>
            <span style={{ marginRight: "5px", marginLeft: "5px", color: "#444", marginTop: "0px" }}>
              <a title="YouAreNotAlone" href="/blog"><u>#YouAreNotAlone</u></a>
            </span>
          </div>

          {/*  div for white space */}
          <div style={{ paddingRight: '5px', display: 'flex', justifyContent: 'flex-end' }}>
            <span>5 Minutes</span>
          </div>
          <div>
            <h2>
              <a href="/blog" style={{ textDecoration: 'none' }}>
                {" "}
                Smrithi’s Story of Finding Strength In Vulnerability from Therapy
              </a>
            </h2>
          </div>
        </div>
      </div>

      {/* Right half */}
      <div style={{ width: '100%', maxWidth: '500px', paddingLeft: '50px', marginTop: '20px' }}>

        {/* first right */}
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
          <div>
            <img src={SourceImg} alt="" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
            {/* div for hashTags */}
            <div>
              <span style={{ marginLeft: "5px", color: "#444", marginTop: "0px" }}>
                <a title="LetsTalk" href="/blog"><u>#LetsTalk</u></a>
              </span>
              <span>|</span>
              <span style={{ marginLeft: "5px", color: "#444", marginTop: "0px" }}>
                <a title="YouAreNotAlone" href="/blog"><u>#YouAreNotAlone</u></a>
              </span>
            </div>

            {/*  div for white space */}
            <div style={{ paddingRight: '5px', display: 'flex', justifyContent: 'flex-end' }}>
              <span>5 Minutes</span>
            </div>
            <div>
              <h5>
                <a href="/blog" style={{ textDecoration: 'none' }}>
                  {" "}
                  Smrithi’s Story of Finding Strength In Vulnerability from Therapy
                </a>
              </h5>
            </div>
          </div>
        </div>

        {/* second right */}
        <div style={{ display: 'flex', flexDirection

: 'row', marginBottom: '20px' }}>
<div>
<img src={SourceImg} alt="" style={{ width: '100%', height: 'auto' }} />
</div>
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
        {/* div for hashTags */}
        <div>
          <span style={{ marginLeft: "5px", color: "#444", marginTop: "0px" }}>
            <a title="LetsTalk" href="/blog"><u>#LetsTalk</u></a>
          </span>
          <span>|</span>
          <span style={{ marginLeft: "5px", color: "#444", marginTop: "0px" }}>
            <a title="YouAreNotAlone" href="/blog"><u>#YouAreNotAlone</u></a>
          </span>
        </div>

        {/*  div for white space */}
        <div style={{ paddingRight: '5px', display: 'flex', justifyContent: 'flex-end' }}>
          <span>5 Minutes</span>
        </div>
        <div>
          <h5>
            <a href="/blog" style={{ textDecoration: 'none' }}>
              {" "}
              Smrithi’s Story of Finding Strength In Vulnerability from Therapy
            </a>
          </h5>
        </div>
      </div>
    </div>

    {/* third right */}
    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
      <div>
        <img src={SourceImg} alt="" style={{ width: '100%', height: 'auto' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
        {/* div for hashTags */}
        <div>
          <span style={{ marginLeft: "5px", color: "#444", marginTop: "0px" }}>
            <a title="LetsTalk" href="/blog"><u>#LetsTalk</u></a>
          </span>
          <span>|</span>
          <span style={{ marginLeft: "5px", color: "#444", marginTop: "0px" }}>
            <a title="YouAreNotAlone" href="/blog"><u>#YouAreNotAlone</u></a>
          </span>
        </div>

        {/*  div for white space */}
        <div style={{ paddingRight: '5px', display: 'flex', justifyContent: 'flex-end' }}>
          <span>5 Minutes</span>
        </div>
        <div>
          <h5>
            <a href="/blog" style={{ textDecoration: 'none' }}>
              {" "}
              Smrithi’s Story of Finding Strength In Vulnerability from Therapy
            </a>
          </h5>
        </div>
      </div>
    </div>

    {/* fourth right */}
    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
      <div>
        <img src={SourceImg} alt="" style={{ width: '100%', height: 'auto' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
        {/* div for hashTags */}
        <div>
          <span style={{ marginLeft: "5px", color: "#444", marginTop: "0px" }}>
            <a title="LetsTalk" href="/blog"><u>#LetsTalk</u></a>
          </span>
          <span>|</span>
          <span style={{ marginLeft: "5px",

color: "#444", marginTop: "0px" }}>
<a title="YouAreNotAlone" href="/blog"><u>#YouAreNotAlone</u></a>
</span>
</div>
        {/*  div for white space */}
        <div style={{ paddingRight: '5px', display: 'flex', justifyContent: 'flex-end' }}>
          <span>5 Minutes</span>
        </div>
        <div>
          <h5>
            <a href="/blog" style={{ textDecoration: 'none' }}>
              {" "}
              Smrithi’s Story of Finding Strength In Vulnerability from Therapy
            </a>
          </h5>
        </div>
      </div>
    </div>
  </div>
</div>

);
}