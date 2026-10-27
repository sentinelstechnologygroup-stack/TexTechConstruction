import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";

export default function QuoteForm({ compact = false }) {
  const [submissionError, setSubmissionError] = useState("");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionError("Your request has not been sent. Online quote requests are currently unavailable.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-muted-foreground">
        For a quote, call <a href="tel:8327556533" className="underline">(832) 755-6533</a> or email{" "}
        <a href="mailto:Info@TexTechConstruction.com" className="underline">Info@TexTechConstruction.com</a>.
        Online requests are currently unavailable.
      </p>
      {submissionError && (
        <p role="alert" className="text-sm text-red-700">{submissionError}</p>
      )}
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


