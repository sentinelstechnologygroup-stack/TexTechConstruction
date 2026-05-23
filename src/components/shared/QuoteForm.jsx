import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle } from "lucide-react";

export default function QuoteForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-xl font-semibold">Thank You!</h3>
        <p className="text-muted-foreground max-w-sm">
          We've received your request. A TexTech team member will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        <Input
          placeholder="Full Name *"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="h-12 bg-white"
          aria-label="Full name"
        />
        <Input
          type="email"
          placeholder="Email Address *"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="h-12 bg-white"
          aria-label="Email address"
        />
        <Input
          type="tel"
          placeholder="Phone Number *"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="h-12 bg-white"
          aria-label="Phone number"
        />
        <Select
          value={formData.service}
          onValueChange={(val) => setFormData({ ...formData, service: val })}
        >
          <SelectTrigger className="h-12 bg-white" aria-label="Service interested in">
            <SelectValue placeholder="Interested In?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="kitchen">Kitchen Remodel</SelectItem>
            <SelectItem value="bathroom">Bathroom Remodel</SelectItem>
            <SelectItem value="patio">Patio Cover</SelectItem>
            <SelectItem value="roofing">Roofing</SelectItem>
            <SelectItem value="windows">Windows</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Textarea
        placeholder="Tell us about your project..."
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="min-h-[100px] bg-white"
        aria-label="Project details"
      />
      <Button type="submit" className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full text-base gap-2">
        <Send className="w-4 h-4" /> Request Free Quote
      </Button>
    </form>
  );
}


