import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Calendar, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Lives Impacted",
    description: "Across all our programs and initiatives",
  },
  {
    icon: MapPin,
    value: "15+",
    label: "Regions Served",
    description: "Throughout Somalia and surrounding areas",
  },
  {
    icon: Calendar,
    value: "15+",
    label: "Years of Service",
    description: "Dedicated to community development",
  },
  {
    icon: Award,
    value: "85+",
    label: "Projects Completed",
    description: "Successfully implemented initiatives",
  },
]

export function StatsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Impact by Numbers</h2>
          <p className="text-lg text-muted-foreground">
            Measurable results from our commitment to community development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
