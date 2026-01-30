import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MeetBaker from "@/components/MeetBaker";
import Gallery from "@/components/Gallery";
import CustomCakeForm from "@/components/CustomCakeForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Hero />
        <MeetBaker />
        <Gallery />
        <CustomCakeForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
