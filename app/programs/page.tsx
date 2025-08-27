import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Droplets, Heart, Wheat, Shield, Users } from "lucide-react"

const programs = [
  {
    title: "Education",
    description:
      "Quality education and vocational training for all genders, focusing on literacy elimination and sustainable learning opportunities.",
    icon: GraduationCap,
    color: "text-primary",
    details: [
      "Illiteracy elimination through sustainable, qualitative and accessible basic education",
      "Vocational training for every gender",
      "Orphan education support",
      "Community education systems and capacity development initiatives",
    ],
  },
  {
    title: "WASH (Water, Sanitation & Hygiene)",
    description: "Improving community health through access to clean water, proper sanitation, and hygiene education.",
    icon: Droplets,
    color: "text-accent",
    details: [
      "Improving quality and accessibility of drinking water",
      "Rehabilitating boreholes and other facilities",
      "Rural community water supply and sanitation services",
      "Hygiene promotion and education",
    ],
  },
  {
    title: "Health & Nutrition",
    description:
      "Comprehensive healthcare services focusing on mother and child health, nutrition, and community wellness.",
    icon: Heart,
    color: "text-red-500",
    details: [
      "Promoting mother and child care health centers (MCH)",
      "Human and animal healthcare services",
      "Nutrition programs and health promotion",
      "Community health education and awareness",
    ],
  },
  {
    title: "Food Security & Livelihoods",
    description:
      "Combating hunger and poverty through sustainable food production and livelihood improvement programs.",
    icon: Wheat,
    color: "text-yellow-600",
    details: [
      "Food security through hunger safety net initiatives",
      "Small-scale food production programs",
      "Poverty alleviation through sustainable livelihoods",
      "Cash plus livestock input distribution",
    ],
  },
  {
    title: "Humanitarian Response & Peacebuilding",
    description:
      "Emergency response and conflict transformation initiatives for building lasting peace in communities.",
    icon: Shield,
    color: "text-orange-500",
    details: [
      "Humanitarian response to emergencies",
      "Conflict management and transformation",
      "Peacebuilding initiatives",
      "Emergency relief for disaster-affected communities",
    ],
  },
  {
    title: "Human Rights & Empowerment",
    description: "Advocacy for human rights, gender equality, and community empowerment programs.",
    icon: Users,
    color: "text-purple-500",
    details: [
      "Creating awareness on basic human rights and privileges",
      "FGM abandonment and awareness campaigns",
      "Youth and women empowerment programs",
      "Community advocacy and networking",
    ],
  },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Programs</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive initiatives building resilient communities across Somalia
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {programs.map((program) => {
                const IconComponent = program.icon
                return (
                  <Card key={program.title} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <IconComponent className={`h-10 w-10 ${program.color}`} />
                        <div>
                          <CardTitle className="text-2xl">{program.title}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            Active Program
                          </Badge>
                        </div>
                      </div>
                      <CardDescription className="text-base">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3 text-foreground">Key Activities:</h4>
                      <ul className="space-y-2">
                        {program.details.map((detail, index) => (
                          <li key={index} className="flex items-start text-sm text-muted-foreground">
                            <span className="text-accent mr-2 mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Make a Difference?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Partner with us to support these vital programs and help build resilient communities across Somalia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Partner With Us
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                View Our Projects
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
