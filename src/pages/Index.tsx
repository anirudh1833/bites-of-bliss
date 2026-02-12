import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MeetBaker from "@/components/MeetBaker";
import Menu from "@/components/Menu"; // Import the new Menu component
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
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
        <Menu /> {/* Used to be Gallery */}
        <Testimonials />
        <FAQ />
        <CustomCakeForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
