//사이드바 메뉴 설정 (이름, 페이지링크)


import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";
import Enrole from "views/Enrole.js";
import p_data from "fdatabase.js";
import Chatbot from "views/Chatbot.js";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "홈",
    icon: "business_bulb-63",
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/fdatabase",
    name: "사용자 데이터",
    icon: "business_chart-pie-36",
    component: p_data,
    layout: "/admin",
  },

  {
    path: "/chatbot",
    name: "AI 챗봇",
    icon: "ui-2_chat-round",
    component: Chatbot,
    layout: "/admin",
  },

  /*{
    path: "/maps",
    name: "Maps",
    icon: "location_map-big",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications,
    layout: "/admin",
  },*/
  
  {
    path: "/icons",
    name: "Icons",
    icon: "design_image",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/extended-tables",
    name: "교육 이수 목록",
    icon: "files_paper",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "마이페이지",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/enrollment",
    name: "회원가입/정보수정",
    icon: "emoticons_satisfied",
    component: Enrole,
    layout: "/admin",
  },
  

  /*{
    path: "/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "objects_spaceship",
    component: Upgrade,
    layout: "/admin",
  },*/
];
export default dashRoutes;
