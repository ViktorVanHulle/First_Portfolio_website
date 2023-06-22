import HeroSection from "../components/hero-section";
import style from "../style/page.module.css";

export default function LandingPage() {
  return (
    <div className={style.Page}>
      <HeroSection />
    </div>
  );
}
