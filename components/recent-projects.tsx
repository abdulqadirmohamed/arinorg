"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const projects = [
  {
    title: "Strengthening Community Governance",
    year: "2025",
    donor: "UNICEF",
    region: "Kismayo & Barawe",
    outcomes: ["Capacity building on civic education", "Enhanced citizen participation", "Improved local governance"],
  },
  {
    title: "Emergency Response - Beletweyne",
    year: "2025",
    donor: "SADO/Change Fund",
    region: "Beletweyne",
    outcomes: ["Emergency humanitarian aid", "Community resilience building", "Disaster response coordination"],
  },
  {
    title: "Cash Plus Livestock Distribution",
    year: "2022",
    donor: "FAO",
    region: "Garowe",
    outcomes: ["Livestock input distribution", "Cash transfer programs", "Livelihood improvement"],
  },
  {
    title: "FGM Abandonment Campaign",
    year: "2021",
    donor: "PUNSAA",
    region: "Puntland",
    outcomes: ["Community awareness campaigns", "Behavior change initiatives", "Women empowerment programs"],
  },
]

export function RecentProjects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const projectsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + projectsPerView >= projects.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, projects.length - projectsPerView) : prev - 1))
  }

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerView)

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Recent Projects</h2>
            <p className="text-lg text-muted-foreground">
              Discover our latest initiatives making a difference across Somalia
            </p>
          </div>

          <div className="hidden md:flex space-x-2">
            <Button variant="outline" size="icon" onClick={prevSlide}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visibleProjects.map((project, index) => (
            <Card key={`${project.title}-${currentIndex + index}`} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{project.year}</Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                <CardDescription>
                  <span className="font-medium">{project.donor}</span> • {project.region}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {project.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
