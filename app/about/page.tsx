import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Users, Shield, Lightbulb, Building2, Award, Globe, Calendar } from "lucide-react"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "About ARIN | Agency for Resilience Initiative Network",
  description:
    "Learn about ARIN (Agency for Resilience Initiative Network), a non-profit humanitarian organization in Somalia dedicated to education, health, livelihoods, WASH, and community resilience.",
  keywords: [
    "ARIN",
    "Somalia NGO",
    "humanitarian organization",
    "community resilience",
    "education",
    "health",
    "WASH",
    "food security",
  ],
  openGraph: {
    title: "About ARIN | Agency for Resilience Initiative Network",
    description:
      "ARIN is a Somali non-profit NGO providing education, healthcare, livelihoods, and humanitarian aid to vulnerable communities.",
    url: "https://arinorg.com/about",
    siteName: "ARIN",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About ARIN | Agency for Resilience Initiative Network",
    description:
      "Discover ARIN’s mission, vision, and focus areas. Empowering Somalia’s communities with education, health, food security, and resilience.",
  },
}



const coreValues = [
  {
    title: "Respect",
    description:
      "We adhere to respect the values and cultures of all our stakeholders whose participation in our decision making process is of high importance.",
    icon: Heart,
  },
  {
    title: "Integrity",
    description: "We behave in compliance with our mission, being honest and transparent in our activities.",
    icon: Shield,
  },
  {
    title: "Voluntary Service",
    description: "We participate in our activities with a commitment not prompted in any manner by desire for gain.",
    icon: Users,
  },
  {
    title: "Transparency & Accountability",
    description:
      "We always remain accountable to our stakeholders by giving appropriate and timely feedback and transparency in our activities.",
    icon: Lightbulb,
  },
]

const targetGroups = [
  "Women",
  "Poor marginalized communities",
  "Communities affected by disasters",
  "Youth and vulnerable people",
  "Internally Displaced People",
  "Communities with special needs",
  "Orphans",
  "HIV/AIDS affected persons",
]

const organizationalStructure = [
  { role: "Executive Director", name: "Hassan Abdirizack", contact: "+254731618366" },
  { role: "Finance Coordinator", department: "Finance & Administration" },
  { role: "Program Coordinator", department: "Program Management" },
  { role: "Project Manager", department: "Project Implementation" },
  { role: "Admin/HR Officer", department: "Human Resources" },
]

const focusAreas = [
  {
    title: "Education",
    description: "Quality education and vocational training for sustainable development",
    icon: Building2,
  },
  {
    title: "Water, Sanitation & Hygiene (WASH)",
    description: "Clean water access and sanitation facilities for healthy communities",
    icon: Globe,
  },
  {
    title: "Health & Nutrition",
    description: "Comprehensive healthcare services and nutrition programs",
    icon: Heart,
  },
  {
    title: "Food Security & Livelihoods",
    description: "Sustainable food systems and income-generating activities",
    icon: Award,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About ARIN</h1>
            <p className="text-xl text-muted-foreground mb-4">Agency for Resilience Initiative Network</p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Founded 2010</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>Somalia Operations</span>
              </div>
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                ARIN was initially founded by a group of concerned and like-minded persons, under demand-driven
                initiatives. While ARIN assumes the role of community-based safety valve focusing on South Central
                Somalia region, Puntland and Somaliland by intellectual to respond to the increased suffering,
                starvation and death of the communities badly affected by the increasing poverty status, tribal conflict
                and famine in the target regions.
              </p>
              <p className="mb-6">
                ARIN started its activities soon after it was established and became an autonomous organization;
                responsible for creating its own development strategies, programmatic activities and fundraising. By
                October 2010, ARIN had built its reputation at grassroots level and sufficient to attract funds from
                international agencies as an organization capable of delivering services to the most needy and
                vulnerable populations.
              </p>
              <p className="mb-6">
                ARIN is a non-governmental, non-political, not-for-profit making, charitable, humanitarian and
                developmental organization, providing community support services across Somalia.
              </p>
              <p>
                The organization collaborates as an implementing agency through information-sharing and partnering with
                agencies with similar convictions in the region and across the world. ARIN encourages the intellectual
                Diaspora community to participate in alleviating the current situation in Somalia by actively engaging
                in creation of opportunities to the needy communities.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    To create a society that enjoys sustainable peace and development
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Eye className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    To improve, enhance and positively transform the social and economic structures that generate
                    poverty and violence of the target communities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {focusAreas.map((area) => {
                const IconComponent = area.icon
                return (
                  <Card key={area.title} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <IconComponent className="h-10 w-10 text-primary mx-auto mb-3" />
                      <CardTitle className="text-lg">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value) => {
                const IconComponent = value.icon
                return (
                  <Card key={value.title}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <IconComponent className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Leadership & Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-primary" />
                    Executive Leadership
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground">Hassan Abdirizack</h3>
                    <p className="text-sm text-muted-foreground">Executive Director</p>
                    <p className="text-sm text-muted-foreground">Tel: +254731618366 / +252906956075</p>
                    <p className="text-sm text-muted-foreground">Email: Info.arinorg@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    Organizational Structure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {organizationalStructure.slice(1).map((position, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 border-b border-muted last:border-0"
                      >
                        <span className="font-medium text-sm">{position.role}</span>
                        <span className="text-xs text-muted-foreground">{position.department}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Target Groups */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Who We Serve</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              {`ARIN's operations are designed to meet the needs of the affected people of all categories, the
              marginalized and the oppressed.`}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {targetGroups.map((group) => (
                <Badge key={group} variant="secondary" className="text-sm py-2 px-4">
                  {group}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Commitment</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                ARIN encourages the intellectual Diaspora community to go back and participate in the assistance of the
                needy through financial or material support. We also urge donor countries and aid organizations to
                facilitate aid to the affected persons.
              </p>
              <p>
                ARIN welcomes development programs either from individuals, countries or group of investors to set up
                productive projects in Somalia. This will create jobs and improve the likelihood of the Somali society.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
