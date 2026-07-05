import { useCallback, useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BootScreen } from "./components/BootScreen";
import { DesktopBackground } from "./components/DesktopBackground";
import { Dock } from "./components/Dock";
import { FolderNav } from "./components/FolderNav";
import { Footer } from "./components/Footer";
import { RetroWindow } from "./components/RetroWindow";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HomeSection } from "./sections/HomeSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ResumeSection } from "./sections/ResumeSection";
import type { SectionId } from "./types";

const sectionComponents: Record<SectionId, ComponentType> = {
  home: HomeSection,
  projects: ProjectsSection,
  experience: ExperienceSection,
  resume: ResumeSection,
};

function App() {
  const [hasBooted, setHasBooted] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const ActiveSection = sectionComponents[activeSection];

  const enterPortfolio = useCallback(() => setHasBooted(true), []);

  return (
    <>
      <AnimatePresence>{!hasBooted ? <BootScreen onEnter={enterPortfolio} /> : null}</AnimatePresence>
      <DesktopBackground>
        <div className="relative flex h-screen items-center justify-center px-4 pb-20 pt-7 max-sm:px-2 max-sm:pb-16 max-sm:pt-5">
          <RetroWindow>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                transition={{ duration: 0.24, ease: "easeOut" }}
              >
                <ActiveSection />
                <div className="px-8 pb-8 max-sm:px-5">
                  <Footer />
                </div>
              </motion.div>
            </AnimatePresence>
          </RetroWindow>
          <FolderNav activeSection={activeSection} onSectionChange={setActiveSection} />
          <Dock onResumeShortcut={() => setActiveSection("resume")} />
        </div>
      </DesktopBackground>
    </>
  );
}

export default App;
