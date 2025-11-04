import Button from "./components/Button";
import DemoImg from "./components/DemoImg";
import Header from "./components/Header";
import HeroHeader from "./components/HeroHeader";

export default function Home() {
  return (
    <section className="h-screen [background:linear-gradient(to_bottom,#000000_0%,#5DB782_67%,#1C221E_100%)]">
      <Header />
      <HeroHeader />
      <Button />
      <DemoImg />
    </section>
  );
}
