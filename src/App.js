import logo from "./image1.png";
import "./App.css";
function App() {
  return (
    <div>
      <div className="centeredBlock">
        <h1>Rohan Tyagi</h1>
        <img src={logo} className="centeredImage"></img>
        <br></br>
        <div className="centerText">
          <div className="row">
            <div className="column3">
              <div className="exText">
                <center>
                  <small className=" centerText">
                    <b>Full Name</b>: Rohan Tyagi
                  </small>
                </center>
              </div>
              <div className="exText">
                <center>
                  <small className=" centerText">
                    <b>Address</b>: 317 Herberts Corner Ct., Cary, NC 27513
                  </small>
                </center>
              </div>
            </div>
            <div className="column3">
              <div className="exText">
                <center>
                  <small className=" centerText">
                    <b>Phone Number</b>: (984) 833-9979
                  </small>
                </center>
              </div>
              <div className="exText">
                <center>
                  <small className=" centerText">
                    <b>Email Address</b>: rohan.x.tyagi@gmail.com
                  </small>
                </center>
              </div>
            </div>
          </div>
        </div>

        <small>
          <b>High School</b>: William G. Enloe Magnet High School (Raleigh, NC)
          - Class of 2025
        </small>
        <br></br>
        <br></br>

        <small>
          <b>Objective</b>: To attend a four-year college and attain a
          mechanical engineering and computer science degree.
        </small>
        <h2>Activities:</h2>
        <div className="exText">
          <p className="exTitle">
            RoboEagles Member | RoboEagles Board Member
            <span className="exTime">(November 2021 - Current)</span>
          </p>

          <small className="exDesc">
            Our team (Team #4828) competed in District and Statewide FIRST
            Robotics Competitions (FRC) in North Carolina. I participated in the
            team's mechanical, business, and media team where I mainly worked on
            keeping the web page up-to-date and getting the team grants and
            sponsorships. Our team won the Entrepreneurship Award for the North
            Carolina district for the 2021-22 season. I was elected to be part
            of the team's Student Board in June 2022.
          </small>
        </div>
        <div className="exText">
          <p className="exTitle">
            Scientail Inc. President
            <span className="exTime">(December 2021 - Current)</span>
          </p>

          <small className="exDesc">
            I spearheaded the execution of a nonprofit that aims to provide
            hands-on activities to students interested in the STEM field in
            North Carolina. Scientail continues to participate in community
            efforts to increase availability of the STEM field by working with
            hospitals to send "Experiment in a Box" experiments to children in
            the hospitals. Scientail also works with elementary school teachers
            to aid with curriculum-based activities for students to better
            understand important STEM subjects.My role in the nonprofit included
            overseeing the execution of these efforts as well as building and
            maintaining the website in HTML, CSS, and JS.
          </small>
        </div>
        <div className="exText">
          <p className="exTitle">
            Science Olympiad JV Team Member
            <span className="exTime">(September 2021 - Current)</span>
          </p>

          <small className="exDesc">
            I was part of the JV2 team at Enloe and competed at multiple events.
            Competed at local and state-wide competitions for <i>Bridges</i>,
            <i> It's About Time</i>, <i> Gravity Vehicles</i>,{" "}
            <i> Digital Structures</i>, and <i> Run It Code It</i>.
          </small>
        </div>

        <h2>Projects:</h2>
        <div className="exText">
          <p className="exTitle">
            Green Light
            <span className="exTime">(January 2022 - March 2022)</span>
          </p>

          <small className="exDesc">
            I worked in a group of 4 to create an Android app for Ready Set App,
            a Lenovo app-developement competition. We made an app that would aid
            teen drivers track hours, improve driving skills, and notify
            authorities in cases of accident or unresponsive drivers. I applied
            math and computer science concepts I learned in school by using
            various formulas (ie. distance formula) and using basic programming
            knowledge (ie. for/while loops) to build efficient code for the app.
          </small>
          <p className="noText"></p>
          <a
            href="https://devpost.com/software/green-light-t8aois"
            target="_blank"
          >
            <button className="btn">
              <small>View Project</small>
            </button>
          </a>
        </div>
        <div className="exText">
          <p className="exTitle">
            Scientail Website
            <span className="exTime">(December 2021 - March 2022)</span>
          </p>

          <small className="exDesc">
            This site was my first exposure to HTML, CSS, and JS coding. I
            worked on coding the site along with 2 other people. Most of my time
            was spent on formatting the specific blog pages and the main{" "}
            <a href="https://www.scientail.org/blog">scientail.org/blog</a>{" "}
            page. I also learned site best practices to reduce website load
            time.
          </small>
          <p className="noText"></p>
          <a href="https://scientail.org" target="_blank">
            <button className="btn">
              <small>View Project</small>
            </button>
          </a>
        </div>

        <h2>Awards/Honors:</h2>
        <div className="exText">
          <p className="exTitle">
            American Computer Science League Finalist
            <span className="exTime">(May 2022)</span>
          </p>
          <small className="exDesc">
            I qualified for the 2022 ACSL Finals Competition in which I
            programmed in Java.
          </small>
        </div>
        <div className="exText">
          <p className="exTitle">
            FIRST Robotics Competition District Entrepreneurship Award
            <span className="exTime">(April 2022)</span>
          </p>
          <small className="exDesc">
            My FRC team (Team 4828: RoboEagles) were awarded the District
            Entrepreneurship Award for our hard work in attaining funding for
            the team.
          </small>
        </div>
        <h2>Work Experience:</h2>

        <h2>Volunteering:</h2>
        <div className="exText">
          <p className="exTitle">
            Key Club
            <span className="exTime">(December 2021 - Current)</span>
          </p>
          <small className="exDesc">
            Completed 53 hours of community service through Key Club at Enloe
            High School as a general member.
          </small>
        </div>
        <div className="exText">
          <p className="exTitle">
            RoboEagles Outreach
            <span className="exTime">(January 2022 - Current)</span>
          </p>
          <small className="exDesc">
            Outreach performed by the RoboEagles team is aimed towards
            elementary and middle schoolers to improve inclusivity in
            STEM-related fields. I worked in the team to enhance STEM education
            through hard work, dedication, and fun as well as promote science,
            technology, and teamwork throughout the community.
          </small>
        </div>
        <h2>Skills:</h2>
        <div className="row">
          <div className="column3">
            <div className="exText">
              <p className="exTitle">• HTML, CSS, JS</p>
            </div>
            <div className="exText">
              <p className="exTitle">• Java</p>
            </div>
            <div className="exText">
              <p className="exTitle">• Guitar</p>
            </div>
          </div>
          <div className="column3">
            <div className="exText">
              <p className="exTitle">• Leadership</p>
            </div>
            <div className="exText">
              <p className="exTitle">• Robotics</p>
            </div>
            <div className="exText">
              <p className="exTitle">• Public Speaking</p>
            </div>
          </div>
          <div className="column3">
            <div className="exText">
              <p className="exTitle">• Project Management</p>
            </div>
            <div className="exText">
              <p className="exTitle">• Spanish (Limited Proficiency)</p>
            </div>
            <div className="exText">
              <p className="exTitle">• Hindi (Bilingual Proficiency)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
