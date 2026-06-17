import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import VideoGallery from "./components/VideoGallery";
import EditingTools from "./components/EditingTools";
import DevProjects from "./components/DevProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper font-body">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <VideoGallery />
        <EditingTools />
        <DevProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
