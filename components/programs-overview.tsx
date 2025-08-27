import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Droplets, Heart, Wheat, Shield, Users } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    title: "Education",
    description: "Quality education and vocational training for all genders, focusing on literacy elimination.",
    icon: GraduationCap,
    color: "text-primary",
  },
  {
    title: "WASH",
    description: "Water, sanitation, and hygiene programs to improve community health and wellbeing.",
    icon: Droplets,
    color: "text-accent",
  },
  {
    title: "Health & Nutrition",
    description: "Mother and child healthcare centers, nutrition programs, and health promotion.",
    icon: Heart,
    color: "text-red-500",
  },
  {
    title: "Food Security",
    description: "Livelihood programs and food security initiatives to combat hunger and poverty.",
    icon: Wheat,
    color: "text-yellow-600",
  },
  {
    title: "Humanitarian Response",
    description: "Emergency response and peacebuilding initiatives for conflict-affected communities.",
    icon: Shield,
    color: "text-orange-500",
  },
  {
    title: "Human Rights",
    description: "Advocacy for human rights, FGM abandonment campaigns, and community empowerment.",
    icon: Users,
    color: "text-purple-500",
  },
]

export function ProgramsOverview() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We focus on six key areas to build resilient communities across Somalia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.map((program) => {
            const IconComponent = program.icon
            return (
              <Card key={program.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <IconComponent className={`h-8 w-8 ${program.color}`} />
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
