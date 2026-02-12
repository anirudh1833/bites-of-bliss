import { useState } from "react";
import { toast } from "sonner";
import { Camera, Link as LinkIcon } from "lucide-react";

const CustomCakeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    sponge: "",
    frosting: "",
    vision: "",
    inspirationLink: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay for a smooth UI experience
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        "Wonderful! Your custom cake inquiry has been received. 🎂",
        {
          description: "Please continue to WhatsApp to discuss your vision with us directly!",
          action: {
            label: "Open WhatsApp",
            onClick: () => {
              const linkText = formData.inspirationLink ? `\nInspiration Link: ${formData.inspirationLink}` : "";
              const message = encodeURIComponent(
                `Hi! I just submitted a custom cake inquiry:\n\nName: ${formData.name}\nDate Needed: ${formData.date}\nSponge: ${formData.sponge}\nFrosting: ${formData.frosting}\nVision: ${formData.vision}${linkText}`
              );
              // Replace with your actual WhatsApp number (e.g., 353871234567)
              window.open(`https://wa.me/353899721609?text=${message}`, "_blank");
            },
          },
          duration: 8000,
        }
      );
      setFormData({ name: "", date: "", sponge: "", frosting: "", vision: "", inspirationLink: "" });
    }, 1000);
  };

  return (
    <section id="custom-cake" className="section-padding bg-gradient-to-b from-secondary/20 to-mint/20">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-4xl mb-4 block">🎂</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Dreaming of a Custom Cake?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Let's make your sweetest dreams come true! Fill out the form below, 
            and we'll chat on WhatsApp to bring your vision to life.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-card rounded-3xl shadow-card p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Jane Doe"
                className="w-full input-bakery"
              />
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-medium text-foreground">
                Date Needed
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full input-bakery"
              />
            </div>

            {/* Sponge Preference */}
            <div className="space-y-2">
              <label htmlFor="sponge" className="block text-sm font-medium text-foreground">
                Sponge Preference
              </label>
              <select
                id="sponge"
                name="sponge"
                value={formData.sponge}
                onChange={handleChange}
                required
                className="w-full input-bakery"
              >
                <option value="">Select a sponge...</option>
                <option value="Vanilla">Vanilla</option>
                <option value="Chocolate">Chocolate</option>
                <option value="Strawberry">Strawberry</option>
                <option value="Red Velvet">Red Velvet</option>
                <option value="Oreo">Oreo</option>
                <option value="Caramel">Caramel</option>
              </select>
            </div>

            {/* Frosting Preference */}
            <div className="space-y-2">
              <label htmlFor="frosting" className="block text-sm font-medium text-foreground">
                Frosting Preference
              </label>
              <select
                id="frosting"
                name="frosting"
                value={formData.frosting}
                onChange={handleChange}
                required
                className="w-full input-bakery"
              >
                <option value="">Select frosting...</option>
                <optgroup label="Standard Options">
                  <option value="Vanilla Buttercream">Vanilla Buttercream</option>
                  <option value="Chocolate Buttercream">Chocolate Buttercream</option>
                  <option value="Strawberry Buttercream">Strawberry Buttercream</option>
                  <option value="Cream Cheese">Cream Cheese</option>
                  <option value="Oreo Cream Cheese">Oreo Cream Cheese</option>
                  <option value="Caramel Ganache">Caramel Ganache</option>
                </optgroup>
                <optgroup label="Premium Flavours">
                  <option value="Pistachio">Pistachio (Premium)</option>
                  <option value="Ferrero / Nutella">Ferrero / Nutella (Premium)</option>
                  <option value="Lotus Biscoff">Lotus Biscoff (Premium)</option>
                  <option value="Almond / Hazelnut">Almond / Hazelnut (Premium)</option>
                  <option value="Fresh fruit heavy fillings">Fresh fruit heavy fillings (Premium)</option>
                </optgroup>
              </select>
            </div>

            {/* Vision */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="vision" className="block text-sm font-medium text-foreground">
                Describe Your Vision
              </label>
              <textarea
                id="vision"
                name="vision"
                value={formData.vision}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Theme, colors, decorations, serving size..."
                className="w-full input-bakery resize-none"
              />
            </div>

            {/* Inspiration Link */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="inspirationLink" className="block text-sm font-medium text-foreground flex items-center gap-2">
                <LinkIcon className="w-4 h-4" />
                Inspiration Link <span className="text-muted-foreground font-normal">(Optional)</span>
              </label>
              <input
                type="url"
                id="inspirationLink"
                name="inspirationLink"
                value={formData.inspirationLink}
                onChange={handleChange}
                placeholder="Paste a Pinterest or Instagram link here..."
                className="w-full input-bakery"
              />
            </div>
          </div>

          {/* Friendly Photo Prompt */}
          <div className="mt-8 bg-blush/20 border border-blush/50 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
            <div className="bg-white p-3 rounded-full text-chocolate shrink-0 shadow-sm">
              <Camera className="w-6 h-6" />
            </div>
            <p className="text-chocolate font-medium leading-relaxed">
              Have a screenshot? Awesome! Have it ready to attach as soon as our WhatsApp chat opens. 📸
            </p>
          </div>

          {/* Submit */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full sm:w-auto min-w-[200px] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Inquiry via WhatsApp"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CustomCakeForm;
