import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  date: z.string().min(1, {
    message: "Please select a date.",
  }),
  sponge: z.string().min(1, {
    message: "Please select a sponge flavor.",
  }),
  frosting: z.string().min(1, {
    message: "Please select a frosting/filling.",
  }),
  details: z.string().optional(),
});

const CustomCakeForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      sponge: "",
      frosting: "",
      details: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Construct WhatsApp message with new fields
    const message = `*New Enquiry from Website*
    
Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone}
Date Needed: ${values.date}
Sponge: ${values.sponge}
Frosting: ${values.frosting}
Details: ${values.details || "None"}`;

    const phoneNumber = "353871234567"; // Replace with your number
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    
    toast.success("Enquiry opened in WhatsApp!");
    form.reset();
  }

  return (
    <section id="custom-cake" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-xl">
        <div className="text-center mb-10">
          <span className="badge-featured">Custom Orders</span>
          <h2 className="heading-display text-3xl md:text-4xl font-semibold mb-4">
            Design Your Dream Cake
          </h2>
          <p className="text-muted-foreground">
            Tell us about your event and we'll help create the perfect centerpiece.
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border/50">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Phone & Date Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="087 123 4567" {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date Needed</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* --- NEW DROPDOWNS --- */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Sponge Preference */}
                <FormField
                  control={form.control}
                  name="sponge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sponge Preference</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select Sponge" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Menu Options</SelectLabel>
                            <SelectItem value="Vanilla">Vanilla</SelectItem>
                            <SelectItem value="Chocolate">Chocolate</SelectItem>
                            <SelectItem value="Strawberry">Strawberry</SelectItem>
                            <SelectItem value="Red Velvet">Red Velvet</SelectItem>
                            <SelectItem value="Oreo">Oreo</SelectItem>
                            <SelectItem value="Caramel">Caramel</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Frosting Preference (with Premium) */}
                <FormField
                  control={form.control}
                  name="frosting"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Frosting Preference</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select Frosting" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Standard Frosting</SelectLabel>
                            <SelectItem value="Vanilla Buttercream">Vanilla Buttercream</SelectItem>
                            <SelectItem value="Chocolate Buttercream">Chocolate Buttercream</SelectItem>
                            <SelectItem value="Strawberry Buttercream">Strawberry Buttercream</SelectItem>
                            <SelectItem value="Cream Cheese">Cream Cheese</SelectItem>
                            <SelectItem value="Oreo Cream Cheese">Oreo Cream Cheese</SelectItem>
                            <SelectItem value="Caramel Ganache">Caramel Ganache</SelectItem>
                          </SelectGroup>
                          
                          <SelectGroup>
                            <SelectLabel className="text-primary font-semibold mt-2 border-t pt-2">Premium Options</SelectLabel>
                            <SelectItem value="Pistachio" className="font-medium text-chocolate">
                              Pistachio <span className="ml-2 text-[10px] uppercase bg-primary/20 text-chocolate px-1.5 py-0.5 rounded-full border border-primary/50">Premium</span>
                            </SelectItem>
                            <SelectItem value="Ferrero / Nutella" className="font-medium text-chocolate">
                              Ferrero / Nutella <span className="ml-2 text-[10px] uppercase bg-primary/20 text-chocolate px-1.5 py-0.5 rounded-full border border-primary/50">Premium</span>
                            </SelectItem>
                            <SelectItem value="Lotus Biscoff" className="font-medium text-chocolate">
                              Lotus Biscoff <span className="ml-2 text-[10px] uppercase bg-primary/20 text-chocolate px-1.5 py-0.5 rounded-full border border-primary/50">Premium</span>
                            </SelectItem>
                            <SelectItem value="Almond / Hazelnut" className="font-medium text-chocolate">
                              Almond / Hazelnut <span className="ml-2 text-[10px] uppercase bg-primary/20 text-chocolate px-1.5 py-0.5 rounded-full border border-primary/50">Premium</span>
                            </SelectItem>
                            <SelectItem value="Fresh fruit heavy fillings" className="font-medium text-chocolate">
                              Fresh fruit heavy fillings <span className="ml-2 text-[10px] uppercase bg-primary/20 text-chocolate px-1.5 py-0.5 rounded-full border border-primary/50">Premium</span>
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Design Details / Theme</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your theme, colors, or special requests..."
                        className="resize-none bg-background min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full btn-primary">
                Send Enquiry via WhatsApp
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default CustomCakeForm;
