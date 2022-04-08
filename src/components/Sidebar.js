// import React from "react";
// import Icon, {
//   EllipsisOutlined,
//   GlobalOutlined,
//   HomeOutlined,
//   MessageOutlined,
//   NotificationOutlined,
//   PlaySquareOutlined,
//   ReadOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// // import "./Sidebar.css";
// export default function Sidebar() {
//   function SidebarOption({ text, name, tag }) {
//     return (
//       <div className="sidebar-option">
//         <Icon className="sidebar-icon" component={name} size="medium" />
//         <h2>{text}</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="sidebar">
//       <SidebarOption text="Home" name={HomeOutlined} />
//       <SidebarOption text="Profile" name={UserOutlined} />
//       <SidebarOption text="Messages" name={MessageOutlined} />
//       <SidebarOption text="Notify" name={NotificationOutlined} />
//       <SidebarOption text="News" name={ReadOutlined} />
//       <SidebarOption text="Videos" name={PlaySquareOutlined} />
//       <SidebarOption text="Explore" name={GlobalOutlined} />
//       <SidebarOption text="More" name={EllipsisOutlined} />
//     </div>
//   );
// }

// export function MiniSidebar() {
//   function SidebarOption({ text, name, tag }) {
//     return (
//       <div className="sidebar-option">
//         <Icon className="sidebar-icon" component={name} size="medium" />
//         <h3 style={{ paddingTop: "23px" }}>{text}</h3>
//       </div>
//     );
//   }
//   return (
//     <div className="mini-sidebar">
//       <SidebarOption text="Home" name={HomeOutlined} />
//       <SidebarOption text="Profile" name={UserOutlined} />
//       <SidebarOption text="Messages" name={MessageOutlined} />
//       <SidebarOption text="Notify" name={NotificationOutlined} />
//       <SidebarOption text="News" name={ReadOutlined} />
//       <SidebarOption text="Videos" name={PlaySquareOutlined} />
//       <SidebarOption text="Explore" name={GlobalOutlined} />
//       <SidebarOption text="More" name={EllipsisOutlined} />
//     </div>
//   );
// }



// // import React from "react";
// // import { Nav } from "react-bootstrap";
// // import { withRouter } from "react-router";
// // // import '../pages/style/Dashboard.css'

// // const Side = props => {


// //   return (
// //     <>
// //       <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
// //         // todo: look into this active key thing
// //         activeKey="/home"
// //         onSelect={selectedKey => alert(`selected ${selectedKey}`)}
// //       >
// //         <div className="sidebar-sticky"></div>
// //         <Nav.Item>
// //           <Nav.Link href="/home">Active</Nav.Link>
// //         </Nav.Item>
// //         <Nav.Item>
// //           <Nav.Link eventKey="link-1">Link</Nav.Link>
// //         </Nav.Item>
// //         <Nav.Item>
// //           <Nav.Link eventKey="link-2">Link</Nav.Link>
// //         </Nav.Item>
// //         <Nav.Item>
// //           <Nav.Link eventKey="disabled" disabled>
// //             Disabled
// //           </Nav.Link>
// //         </Nav.Item>
// //       </Nav>
// //     </>
// //   );
// // };
// // const Sidenav = withRouter(Side);
// // export default Sidenav