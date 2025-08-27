"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    quote:
      "ARIN's civic education program has transformed our community's understanding of governance. We now actively participate in local decision-making processes.",
    author: "Amina Hassan",
    role: "Community Leader",
    location: "Kismayo",
  },
  {
    quote:
      "The emergency response during the floods was incredible. ARIN was there when we needed them most, providing both immediate aid and long-term support.",
    author: "Mohamed Ali",
    role: "Local Resident",
    location: "Beletweyne",
  },
  {
    quote:
      "Through ARIN's livestock program, I was able to rebuild my livelihood after losing everything. Their support gave my family hope for the future.",
    author: "Fatima Omar",
    role: "Program Beneficiary",
    location: "Garowe",
  },
  {
    quote:
      "The FGM abandonment campaign opened our eyes to harmful practices. ARIN's approach was respectful and effective in changing mindsets.",
    author: "Khadija Ahmed",
    role: "Women's Group Leader",
    location: "Puntland",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Voices from Our Communities</h2>
          <p className="text-lg text-muted-foreground">
            Hear directly from the people whose lives have been transformed
          </p>
        </div>

        <Card className="relative">
          <CardContent className="p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Quote className="h-8 w-8 text-primary" />
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl text-center text-foreground mb-8 leading-relaxed">
              {`"${currentTestimonial.quote}"`}
            </blockquote>

            <div className="text-center">
              <div className="font-semibold text-lg text-foreground">{currentTestimonial.author}</div>
              <div className="text-muted-foreground">{currentTestimonial.role}</div>
              <div className="text-sm text-muted-foreground">{currentTestimonial.location}</div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-muted"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="icon" onClick={prevTestimonial}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextTestimonial}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
