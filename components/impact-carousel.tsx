"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Users, Heart, Droplets, GraduationCap } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

const impactStories = [
  {
    icon: Users,
    title: "Community Empowerment",
    description:
      "Over 15,000 community members trained in civic education and governance across Kismayo and Barawe regions.",
    image: "/community-meeting-in-somalia.png",
    stats: "15,000+ People Reached",
  },
  {
    icon: Droplets,
    title: "Clean Water Access",
    description:
      "Rehabilitated 25 boreholes providing clean water access to rural communities in Puntland and South Central Somalia.",
    image: "/water-well-in-rural-somalia.png",
    stats: "25 Boreholes Rehabilitated",
  },
  {
    icon: GraduationCap,
    title: "Education Programs",
    description:
      "Established 12 learning centers providing quality education to orphans and vulnerable children across our target regions.",
    image: "/children-learning-in-classroom-somalia.png",
    stats: "12 Learning Centers",
  },
  {
    icon: Heart,
    title: "Healthcare Initiatives",
    description:
      "Delivered healthcare services to over 8,000 mothers and children through our MCH programs and health promotion campaigns.",
    image: "/healthcare-clinic-in-somalia.png",
    stats: "8,000+ Lives Improved",
  },
]

export function ImpactCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % impactStories.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + impactStories.length) % impactStories.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  const currentStory = impactStories[currentIndex]
  const Icon = currentStory.icon

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Impact Stories</h2>
          <p className="text-lg text-muted-foreground">
            Real stories of transformation and hope from communities we serve
          </p>
        </div>

        <Card className="overflow-hidden py-0">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-80">
                <Image
                  src={currentStory.image || "/placeholder.svg"}
                  alt={currentStory.title}
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-6 w-6" />
                    <span className="font-semibold">{currentStory.stats}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{currentStory.title}</h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{currentStory.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {impactStories.map((_, index) => (
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
                    <Button variant="outline" size="icon" onClick={prevSlide}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={nextSlide}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
