import { Routes, Route } from "react-router-dom";
import { Portfolio } from "./components/Portfolio";
import { ProfileModerationCaseStudy } from "./pages/ProfileModerationCaseStudy";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/case-studies/profile-moderation-tool" element={<ProfileModerationCaseStudy />} />
      </Routes>
    </div>
  );
}

export default App;
