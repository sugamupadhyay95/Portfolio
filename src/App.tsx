import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Portfolio } from "./components/Portfolio";
import { ScrollToTop } from "./components/ScrollToTop";
import { ProfileModerationCaseStudy } from "./pages/ProfileModerationCaseStudy";
import { GiftboxCaseStudy } from "./pages/GiftboxCaseStudy";
import { AiFirstDesignSystemCaseStudy } from "./pages/AiFirstDesignSystemCaseStudy";
import { StyleGuide } from "./pages/StyleGuide";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/styleguide" element={<StyleGuide />} />
        <Route path="/case-studies/profile-moderation-tool" element={<ProfileModerationCaseStudy />} />
        <Route path="/case-studies/giftbox" element={<GiftboxCaseStudy />} />
        <Route
          path="/case-studies/ai-first-design-system"
          element={<AiFirstDesignSystemCaseStudy />}
        />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;
