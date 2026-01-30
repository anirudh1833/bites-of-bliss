import { useState } from "react";
import { toast } from "sonner";

const CustomCakeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    flavor: "",
    vision: "",
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

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        "Wonderful! Your custom cake inquiry has been received. 🎂",
        {
          description: "Please continue to WhatsApp to discuss your vision with us directly!",
          action: {
            label: "Open WhatsApp",
            onClick: () => {
              const message = encodeURIComponent(
                `Hi! I just submitted a custom cake inquiry:\n\nName: ${formData.name}\nDate Needed: ${formData.date}\nFlavor: ${formData.flavor}\nVision: ${formData.vision}`
              );
              window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
            },
          },
          duration: 8000,
        }
      );
      setFormData({ name: "", date: "", flavor: "", vision: "" });
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

            {/* Flavor */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="flavor" className="block text-sm font-medium text-foreground">
                Flavor Preference
              </label>
              <select
                id="flavor"
                name="flavor"
                value={formData.flavor}
                onChange={handleChange}
                required
                className="w-full input-bakery"
              >
                <option value="">Select a flavor...</option>
                <option value="vanilla">Classic Vanilla</option>
                <option value="chocolate">Rich Chocolate</option>
                <option value="red-velvet">Red Velvet</option>
                <option value="lemon">Zesty Lemon</option>
                <option value="strawberry">Fresh Strawberry</option>
                <option value="carrot">Spiced Carrot</option>
                <option value="custom">Custom / Not Sure Yet</option>
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
                rows={4}
                placeholder="Tell us about your dream cake—theme, colors, decorations, serving size, any inspiration photos you have..."
                className="w-full input-bakery resize-none"
              />
            </div>
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
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Inquiry"
              )}
            </button>
            <span className="text-sm text-muted-foreground">
              or message us directly on WhatsApp
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CustomCakeForm;
