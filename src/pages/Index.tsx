import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Rankings from "@/components/Rankings";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <Hero />
      <Rankings />
      <Programs />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
