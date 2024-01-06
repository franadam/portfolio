import { Hero, Navbar, Skills, About, Projects } from '@/components';

export default function Home() {
  return (
    <main className="main-container">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
    </main>
  );
}
