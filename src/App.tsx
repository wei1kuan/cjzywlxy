import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import AboutIntro from "@/pages/AboutIntro";
import AboutLeadership from "@/pages/AboutLeadership";
import AboutFaculty from "@/pages/AboutFaculty";
import Party from "@/pages/Party";
import PartyGeneral from "@/pages/PartyGeneral";
import PartyDynamics from "@/pages/PartyDynamics";
import Majors from "@/pages/Majors";
import DigitalHeritage from "@/pages/DigitalHeritage";
import EnvironmentalArt from "@/pages/EnvironmentalArt";
import ProductDesign from "@/pages/ProductDesign";
import TourismManagement from "@/pages/TourismManagement";
import HotelManagement from "@/pages/HotelManagement";
import BroadcastingHosting from "@/pages/BroadcastingHosting";
import PerformingArts from "@/pages/PerformingArts";
import Teaching from "@/pages/Teaching";
import TeachingAchievements from "@/pages/TeachingAchievements";
import TeachingExchanges from "@/pages/TeachingExchanges";
import Students from "@/pages/Students";
import StudentsActivities from "@/pages/StudentsActivities";
import StudentsClubs from "@/pages/StudentsClubs";
import StudentsAwards from "@/pages/StudentsAwards";
import Industry from "@/pages/Industry";
import IndustryPartners from "@/pages/IndustryPartners";
import IndustryProjects from "@/pages/IndustryProjects";
import IndustryBases from "@/pages/IndustryBases";
import IndustryInnovation from "@/pages/IndustryInnovation";
import Admission from "@/pages/Admission";
import AdmissionNews from "@/pages/AdmissionNews";
import AdmissionEmployment from "@/pages/AdmissionEmployment";
import Admin from "@/pages/Admin";

/**
 * ScrollToTop — 路由切换时自动滚动到顶部或 hash 锚点
 * 补偿 sticky 导航栏 + Header + TopBar 累计高度 -140px
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 140;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      } else {
        const timer = setTimeout(() => {
          const el = document.getElementById(hash.replace("#", ""));
          if (el) {
            const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 140;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

/**
 * App — 根组件
 * Layout 提供全局 TopBar + Header + Navbar + Footer
 * 所有页面通过 <Outlet /> 渲染在 Layout 内部
 */
export default function App() {
  return (
    <Router basename="/cjzywlxy">
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* 学院概况 */}
          <Route path="/about" element={<About />} />
          <Route path="/about/intro" element={<AboutIntro />} />
          <Route path="/about/leadership" element={<AboutLeadership />} />
          <Route path="/about/faculty" element={<AboutFaculty />} />
          {/* 党建工作 */}
          <Route path="/party" element={<Party />} />
          <Route path="/party/general" element={<PartyGeneral />} />
          <Route path="/party/dynamics" element={<PartyDynamics />} />
          {/* 专业设置 */}
          <Route path="/majors" element={<Majors />} />
          <Route path="/majors/digital-heritage" element={<DigitalHeritage />} />
          <Route path="/majors/environmental-art" element={<EnvironmentalArt />} />
          <Route path="/majors/product-design" element={<ProductDesign />} />
          <Route path="/majors/tourism-management" element={<TourismManagement />} />
          <Route path="/majors/hotel-management" element={<HotelManagement />} />
          <Route path="/majors/broadcasting-hosting" element={<BroadcastingHosting />} />
          <Route path="/majors/performing-arts" element={<PerformingArts />} />
          {/* 教学科研 */}
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/teaching/achievements" element={<TeachingAchievements />} />
          <Route path="/teaching/exchanges" element={<TeachingExchanges />} />
          {/* 产教融合 */}
          <Route path="/industry" element={<Industry />} />
          <Route path="/industry/partners" element={<IndustryPartners />} />
          <Route path="/industry/projects" element={<IndustryProjects />} />
          <Route path="/industry/bases" element={<IndustryBases />} />
          <Route path="/industry/innovation" element={<IndustryInnovation />} />
          {/* 学团工作 */}
          <Route path="/students" element={<Students />} />
          <Route path="/students/activities" element={<StudentsActivities />} />
          <Route path="/students/clubs" element={<StudentsClubs />} />
          <Route path="/students/awards" element={<StudentsAwards />} />
          {/* 招生就业 */}
          <Route path="/admission" element={<Admission />} />
          <Route path="/admission/news" element={<AdmissionNews />} />
          <Route path="/admission/employment" element={<AdmissionEmployment />} />
          {/* 后台管理 */}
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}
