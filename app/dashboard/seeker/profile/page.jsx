import ProfileHeader from "./components/ProfileHeader";
import AboutMeSection from "./components/AboutMeSection";
import ExperienceSection from "./components/ExperienceSection";
import CvSection from "./components/CvSection";

export default function SeekerProfilePage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">My Profile</h2>
      <ProfileHeader />
      <AboutMeSection />
      <ExperienceSection />
      <CvSection />
    </div>
  );
}
