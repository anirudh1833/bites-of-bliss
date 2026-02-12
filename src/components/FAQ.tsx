import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I place an order and pay?",
      answer: "You can place an order by filling out the inquiry form on this site or messaging us directly on WhatsApp. For payment, we happily accept Revolut, Cash, or Bank Transfer."
    },
    {
      question: "Do you deliver?",
      answer: "Yes! We offer delivery within a 15km radius of Cherrywood, Dublin 18. Delivery fees typically range from €5 to €15 depending on the exact distance. Alternatively, free collection is always welcome from our home kitchen."
    },
    {
      question: "Are you a registered food business?",
      answer: "Absolutely. We are fully HSE registered and hold a valid Food Business Operator license. We adhere to the highest standards of food safety and hygiene in our kitchen."
    },
    {
      question: "Do you cater to dietary requirements and allergies?",
      answer: "Yes, we do. Please let us know of any allergies when inquiring. We provide clear allergen information for all our bakes. *Please note: While we take strict precautions to prevent cross-contamination, our kitchen does handle gluten, dairy, and nuts.*"
    },
    {
      question: "How much notice do you need for an order?",
      answer: "For standard menu items like cupcakes, brookies, and brownies, we request 48-72 hours' notice. For custom celebration cakes and tiered packages, please allow at least 1-2 weeks so we have plenty of time to perfect your design!"
    }
  ];

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 space-y-4">
          <span className="badge-featured bg-secondary text-secondary-foreground">Got Questions?</span>
          <h2 className="heading-display text-3xl md:text-4xl font-semibold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-border/60 rounded-2xl bg-white overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-serif font-semibold text-lg text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
