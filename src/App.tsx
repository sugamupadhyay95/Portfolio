import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Portfolio } from "./components/Portfolio";
import { ProfileModerationCaseStudy } from "./pages/ProfileModerationCaseStudy";
import { GiftboxCaseStudy } from "./pages/GiftboxCaseStudy";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/case-studies/profile-moderation-tool" element={<ProfileModerationCaseStudy />} />
        <Route path="/case-studies/giftbox" element={<GiftboxCaseStudy />} />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;
