"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const projects = [
  {
    title: "Strengthening Community Governance",
    year: "2025",
    donor: "UNICEF",
    region: "Kismayo & Barawe",
    sector: "Governance",
    status: "Active",
    outcomes: ["Capacity building on civic education", "Enhanced citizen participation", "Improved local governance"],
  },
  {
    title: "Emergency Response - Beletweyne",
    year: "2025",
    donor: "SADO/Change Fund",
    region: "Beletweyne",
    sector: "Emergency Response",
    status: "Active",
    outcomes: ["Emergency humanitarian aid", "Community resilience building", "Disaster response coordination"],
  },
  {
    title: "Civic Education in Kismayo",
    year: "2023",
    donor: "UNICEF",
    region: "Kismayo & Afmadow",
    sector: "Education",
    status: "Completed",
    outcomes: ["Community civic education", "Democratic participation training", "Local governance capacity building"],
  },
  {
    title: "COVID-19 Community Engagement",
    year: "2022-2023",
    donor: "UNICEF/WARDI",
    region: "Multiple",
    sector: "Health",
    status: "Completed",
    outcomes: ["COVID-19 control and containment", "Disease prevention programs", "Community health education"],
  },
  {
    title: "Cash Plus Livestock Distribution",
    year: "2021-2022",
    donor: "FAO",
    region: "Garowe",
    sector: "Livelihoods",
    status: "Completed",
    outcomes: ["Livestock input distribution", "Cash transfer programs", "Livelihood improvement"],
  },
  {
    title: "FGM Abandonment Campaign",
    year: "2021",
    donor: "PUNSAA",
    region: "Puntland",
    sector: "Human Rights",
    status: "Completed",
    outcomes: ["Community awareness campaigns", "Behavior change initiatives", "Women empowerment programs"],
  },
  {
    title: "Unconditional Cash Transfer Supervision",
    year: "2021-2022",
    donor: "FAO",
    region: "Burtinle",
    sector: "Livelihoods",
    status: "Completed",
    outcomes: ["Cash transfer supervision", "Community support services", "Poverty alleviation"],
  },
  {
    title: "Cash for Work Program",
    year: "2019-2020",
    donor: "FAO",
    region: "Garowe",
    sector: "Livelihoods",
    status: "Completed",
    outcomes: ["Employment opportunities", "Community infrastructure", "Economic empowerment"],
  },
]

const sectors = ["All", "Governance", "Emergency Response", "Education", "Health", "Livelihoods", "Human Rights"]
const years = ["All", "2025", "2024", "2023", "2022", "2021", "2020", "2019"]
const regions = ["All", "Kismayo & Barawe", "Beletweyne", "Garowe", "Puntland", "Multiple", "Burtinle"]

export default function ProjectsPage() {
  const [sectorFilter, setSectorFilter] = useState("All")
  const [yearFilter, setYearFilter] = useState("All")
  const [regionFilter, setRegionFilter] = useState("All")

  const filteredProjects = projects.filter((project) => {
    return (
      (sectorFilter === "All" || project.sector === sectorFilter) &&
      (yearFilter === "All" || project.year.includes(yearFilter)) &&
      (regionFilter === "All" || project.region === regionFilter)
    )
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Projects</h1>
            <p className="text-xl text-muted-foreground">
             {` Discover the impact we've made across Somalia through our various initiatives`}
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Filter by Sector</label>
                <Select value={sectorFilter} onValueChange={setSectorFilter}>
                  <SelectTrigger className="w-full border border-border">
                    <SelectValue placeholder="Select sector" />
                  </SelectTrigger>
                  <SelectContent>
                    {sectors.map((sector) => (
                      <SelectItem key={sector} value={sector}>
                        {sector}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Filter by Year</label>
                <Select value={yearFilter} onValueChange={setYearFilter}>
                  <SelectTrigger className="w-full border border-border">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Filter by Region</label>
                <Select value={regionFilter} onValueChange={setRegionFilter}>
                  <SelectTrigger className="w-full border border-border">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-muted-foreground">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant={project.status === "Active" ? "default" : "secondary"}>{project.status}</Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                    <CardDescription>
                      <div className="space-y-1">
                        <div>
                          <span className="font-medium">{project.donor}</span> • {project.year}
                        </div>
                        <div className="text-sm">{project.region}</div>
                        <Badge variant="outline" className="text-xs">
                          {project.sector}
                        </Badge>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2 text-sm">Key Outcomes:</h4>
                    <ul className="space-y-1">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <span className="text-accent mr-2">•</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found matching your filters.</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setSectorFilter("All")
                    setYearFilter("All")
                    setRegionFilter("All")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
