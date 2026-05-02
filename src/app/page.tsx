import { Dashboard, FAQ, Features, Footer, Header, Hero, HowItWorks } from "@/features/landing";
import { CursorAura } from "@/shared/ui";

export default function Home() {
  return (
    <div className="page-shell">
      <CursorAura />
      <div className="page-content">
        <Header />
        <main>
          <Hero />
          <Features />
          <Dashboard />
          <HowItWorks />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}
