"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "Building Resilient",
    highlight: "Communities",
    description:
      "ARIN works across Somalia to strengthen communities through education, health, water & sanitation, and food security programs that create lasting impact.",
    primaryCta: { text: "Partner With Us", href: "/contact" },
    secondaryCta: { text: "Our Programs", href: "/programs" },
    backgroundImage: "/humanitarian-workers-helping-community-in-somalia.png",
    alt: "ARIN humanitarian work in Somalia",
  },
  {
    title: "Empowering Through",
    highlight: "Education",
    description:
      "We provide quality education and vocational training to children and adults, breaking the cycle of poverty through knowledge and skills development.",
    primaryCta: { text: "Learn More", href: "/programs" },
    secondaryCta: { text: "Get Involved", href: "/contact" },
    backgroundImage: "/children-learning-in-classroom-somalia.png",
    alt: "Children learning in ARIN supported classroom",
  },
  {
    title: "Ensuring Access to",
    highlight: "Clean Water",
    description:
      "Our WASH programs bring clean water, sanitation facilities, and hygiene education to rural communities across Somalia, improving health outcomes.",
    primaryCta: { text: "View Projects", href: "/projects" },
    secondaryCta: { text: "Support Us", href: "/contact" },
    backgroundImage: "/water-well-in-rural-somalia.png",
    alt: "Clean water well in rural Somalia",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <img
              src={
                slide.backgroundImage
                  ? slide.backgroundImage
                  : `/placeholder.svg?height=700&width=1200&query=${encodeURIComponent(slide.alt)}`
              }
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  {slide.title}
                  <span className="text-white block">{slide.highlight}</span>
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">{slide.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href={slide.primaryCta.href}>{slide.primaryCta.text}</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    asChild
                  >
                    <Link href={slide.secondaryCta.href}>{slide.secondaryCta.text}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
