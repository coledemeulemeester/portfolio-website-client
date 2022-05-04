import './Experience.css';
import { Button, Card, Navbar, Nav, Container, Offcanvas, NavDropdown, Form, FormControl, Row, Col, Image, CardGroup } from "react-bootstrap"; //update to specifics
import "bootstrap/dist/css/bootstrap.min.css";
// import Sidebar from "../components/Sidebar.js";
import XpCard from "../components/XpCard";
// "\src\components\XpCard.js"


function Experience() {
  let experiences1 = [
    {
      "company": "Juni Learning",
      "link": "",
      "date": "Jun 2019 - May 2021",
      "title": "Product & Business Development Associate",
      "logo": "https://junilearning.com/static/juni_logo_preview-101e7872d58e53d7323d24502e7ff973.png",
      "bullets": [
        "▪ Overhauled instructor recruitment process by designing top-of-funnel recruitment strategy, leading campus ambassador initiative, advising recruitment pipeline project, reaching 10,000+ prospective instructors, directly hiring 100+ instructors and reducing total interview timeline by 50+%, respectively",
        "▪ Interviewed 12 Juni and non-Juni affiliated instructors, analyzed 1,100+ instructor applications and researched 90+ target universities to identify competitive advantages, pipeline bottlenecks and target instructor saturation",
        "▪ Project-managed and hosted fall open house reaching 200 prospective parent families within first 3 events and coordinated Marketing, Sales, Curriculum subteams while interfacing directly with CEO, CTO and COO",
        "▪ Interviewed 40+ instructor applicants and virtually taught 100+ students in private and small group classrooms, connecting with diverse personalities and learning styles to convey course content and foster community when possible",
      ],
    },
    {
      "company": "Titan Analytics",
      "link": "",
      "date": "Sep 2018 - Sep 2019",
      "title": "Product Manager & Data Analyst",
      "logo": "https://media-exp1.licdn.com/dms/image/C4E0BAQF2MBakfINYoA/company-logo_200_200/0/1552077966495?e=2147483647&v=beta&t=zr3LDD46sfzqdo1Xaos5LIBm1ATS_0BO4tEQu65ApuA",
      "bullets": [
        "▪ Led Software and Data subteams in developing an MVP insights dashboard that allows high school football coaches to save dozens of hours understanding and analyzing opponent's play-calling tendencies",
        "▪ Interpreted coaches' feedback and followed Scrum and Agile development methods to lead team in building prototypes using Google Data Studio and Python",
        "▪ Interpreted an NFL dataset of over 42,000 plays using SQL, Python and Pandas; plotted each player's production under 25 distinct criteria using Matplotlib; and scored every receiver's efficiency during the 2018 season",
        "",
      ],
    },

    {
      "company": "Cornell University, Office of Housing and Residence Life",
      "link": "",
      "date": "Aug 2019 - Dec 2020",
      "title": "Resident Advisor",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/800px-Cornell_University_seal.svg.png",
      "bullets": [
        "▪ Guided 150+ freshmen students to lead successful and wholistic college careers and supported amidst academic, social, career, and personal concerns",
        "▪ Advised dorm council of 7 members to manage $1,000 budget and execute student-driven events promoting community",
        "",
        "",
      ],
    },
  ]
  let experiences2 = [
    {
      "company": "Ridgeline",
      "link": "",
      "date": "Jun 2021 - Aug 2021",
      "title": "Product Engineer Intern",
      "logo": "https://global-uploads.webflow.com/6126ab68c73f925bdc355c97/619ce9b385a3c90b19d7c640_Logo.svg",
      "bullets": [
        "▪ Designed and developed go-live, full-stack feature enabling automated retrieval of external emails and internal CRM logging",
        "▪ Designed core data model leveraging NoSQL architecture to index across 8 unique fields and scale for millions of entries",
        "▪ Implemented back-end APIs in Python and front-end webpages using React for users to interface with email data",
        "",
      ],
    },

    {
      "company": "Golden Bees",
      "link": "https://smart2020ugandagoldenbees.travel.blog/",
      "date": "Oct 2019 - Mar 2020",
      "title": "Marketing & Production Consultant",
      "logo": "http://goldenbeesltd.com/wp-content/uploads/2021/07/cropped-IMG-20210706-WA0016.jpg",
      "bullets": [
        "▪ Analyzed field-research to present branding and packaging revisions, production protocols and supply tracking recommendations to Golden Bees' leadership",
        "▪ Conducted 120 surveys and interviews with end-consumers, stakeholders and policy makers about honey consumption habits, benefit to Ugandan supply chain and challenges to the production and supply chain",
        "▪ Secured 3 verbal agreements to strategic partnerships with a high-end restaurant, tourism agency and the Uganda Wildlife Authority to carry Golden Bees' products and promote Golden Bees' brand",
        "",
      ],
    },

    {
      "company": "CUABS",
      "link": "",
      "date": "Feb 2019 - Dec 2020",
      "title": "VP of Internal Affairs, Social Chair",
      "logo": "https://images.squarespace-cdn.com/content/v1/5cf33ad9bf30cf00011799f3/1561821889949-44OJC3DPGFZHF2CAAG9S/Horizontal+Clear+-+Thin.png?format=1500w",
      "bullets": [
        "▪ Led 48 club members to design, plan and execute first-ever virtual recruitment for 193 applicants during COVID-19",
        "▪ Managed $1,600 budget and carried out 15+ events to integrate new members and promote an inclusive and inspiring club culture",
        "",
        "",
      ],
    },

    {
      "company": "Lutron Electronics",
      "link": "",
      "date": "Jan 2020 - May 2020",
      "title": "Software Engineer Co-Op",
      "logo": "https://findvectorlogo.com/wp-content/uploads/2019/04/lutron-electronics-vector-logo.png",
      "bullets": [
        "",
        "",
        "",
        "",
      ],
    },
  ]

  let experiences3 = [

    {
      "company": "RateMyMajor",
      "link": "https://www.figma.com/proto/lmxQQOFHFgWufxP8pBdtfd/HCI-Group-14?node-id=327%3A25472&scaling=min-zoom&page-id=327%3A12030&starting-point-node-id=327%3A25472",
      "date": "Oct 2020 - Dec 2020",
      "title": "Product Designer, User Researcher",
      "logo": "",
      "bullets": [
        "Human Computer Interaction final project",
        "- 1st Place Final Project (\"The Shut-Up-And-Take-My-Money Award\")",
        "- Collaborated with Jalil Evans, Julia Kelly, and Veronica Wertz",
        "",
      ],
    },

    {
      "company": "Spendentity",
      "link": "",
      "date": "Jun 2020 - Sep 2020",
      "title": "Data Analyst",
      "logo": "",
      "bullets": [
        "Recruited by Cornell Alum for pre-seed ESG fintech venture",
        "- Webscraped and consolidated open-source data, secured data-provider discounts, and implemented scoring engine mvp",
        "- Collaborated with Alexander Spivak, Mark Zhou",
        "",
      ],
    },

    {
      "company": "Clarkson Hold'em Poker",
      "link": "https://github.com/coledemeulemeester/Clarkson-Hold-Em",
      "date": "Nov 2019 - Dec 2019",
      "title": "Software Engineer",
      "logo": "",
      "bullets": [
        "CS 3110 Functional Programming final project - Texas Hold'em in OCaml",
        "- Designed and implemented hand-checking algorithm + terminal-based GUI",
        "- Collaborated with Kunal Sheth and Reza Madhavan",
        "",
      ],
    },

    {
      "company": "",
      "link": "",
      "date": "",
      "title": "",
      "logo": "",
      "bullets": [
        "",
        "",
        "",
        "",
      ],
    },


    {
      "company": "Andover Cochran Bird Sanctuary Trail Surveying",
      "link": "",
      "date": "Aug 2016 - May 2017",
      "title": "",
      "logo": "https://cdn.businessyab.com/assets/uploads/cfbb6a431a1c556dab9b28faf4bd9b1b_-united-states-massachusetts-essex-county-andover-chapel-avenue-66-88-cochran-wildlife-sanctuary.jpg",
      "bullets": [
        "Eagle Scout Project",
        "- Pitched for Abbot Academy Funding",
        "- Surveyed and designed trail map with Photoshop and GIS data",
        "- Recruited 10 volunteers and marked trails in Phillips Academy's Cochran Bird Sanctuary",
      ],
    },

    {
      "company": "",
      "link": "",
      "date": "",
      "title": "",
      "logo": "",
      "bullets": [
        "",
        "",
        "",
        "",
      ],
    },

  ];



  return (
    <div className="Experience">

      <Container>

        <div class="row">
          {/* COL 1 */}
          <div class="col-12 col-md-4">
            <>{
              experiences1.map((experience, index) =>
                <XpCard
                  logo={experience["logo"]}
                  company={experience["company"]}
                  date={experience["date"]}
                  bullets={experience["bullets"]}
                  link={experience["link"]}
                ></XpCard>
              )
            }</>

          </div>

          {/* COL 2 */}
          <div class="col-12 col-md-4">
            <>{
              experiences2.map((experience, index) =>
                <XpCard
                  logo={experience["logo"]}
                  company={experience["company"]}
                  date={experience["date"]}
                  bullets={experience["bullets"]}
                  link={experience["link"]}
                ></XpCard>
              )
            }</>
          </div>


          {/* COL 3 */}
          <div class="col-12 col-md-4">
            <>{
              experiences3.map((experience, index) =>
                <XpCard
                  logo={experience["logo"]}
                  company={experience["company"]}
                  date={experience["date"]}
                  bullets={experience["bullets"]}
                  link={experience["link"]}
                ></XpCard>
              )
            }</>
          </div>
        </div>

      </Container>


    </div>
  );
}

export default Experience;
