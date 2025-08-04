import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Smartphone,
  Code,
  Palette,
  Database,
  Cloud,
  Users,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Adil Sheikh</h1>
            <div className="hidden md:flex space-x-6">
              <Link href="#about" className="text-sm hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-sm hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-sm hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-sm hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Mobile App Developer</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Creating innovative mobile experiences that connect people and solve real-world problems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6">
                  I'm a passionate mobile app developer with over 5 years of experience creating user-centric applications for Android and cross-platform environments using Flutter. My journey began with a fascination for how technology can simplify daily tasks and bring people together.
                </p>
                <p className="text-lg mb-6">
                  I specialize in building scalable, high-performance mobile applications for Android using both native tools and Flutter. From concept to deployment, I manage the entire development lifecycle with a strong focus on user experience, code quality, and modern development practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">5+ Years Experience</Badge>
                  <Badge variant="secondary">20+ Projects</Badge>
                  <Badge variant="secondary">Cross-Platform Work</Badge>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Rawalpindi, Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>sheihkadil077@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+92 331-3362276</span>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com/ShSAdil" target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://linkedin.com/in/shsadil" target="_blank">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-primary" />
                    Mobile Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Native Android</Badge>
                    <Badge>Flutter</Badge>
                    <Badge>Kotlin</Badge>
                    <Badge>Dart</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Java</Badge>
                    <Badge>Kotlin</Badge>
                    <Badge>Dart</Badge>
                    <Badge>Python</Badge>
                    <Badge>JavaScript</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    Backend & Database
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Firebase</Badge>
                    <Badge>SQLite</Badge>
                    <Badge>REST</Badge>
                    <Badge>GraphQL</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-primary" />
                    Cloud & DevOps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>AWS</Badge>
                    <Badge>Google Cloud</Badge>
                    <Badge>Docker</Badge>
                    <Badge>CI/CD</Badge>
                    <Badge>Fastlane</Badge>
                  </div>
                </CardContent>
              </Card> */}

              {/* <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-primary" />
                    Design & UX
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Figma</Badge>
                    <Badge>Adobe XD</Badge>
                    <Badge>Sketch</Badge>
                    <Badge>Prototyping</Badge>
                    <Badge>User Research</Badge>
                  </div>
                </CardContent>
              </Card> */}

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Tools & Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Android Studio</Badge>
                    <Badge>VS Code</Badge>
                    <Badge>Git</Badge>
                    <Badge>Github</Badge>
                    <Badge>Postman</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid gap-12">
              {/* Project 1 */}
              {/* <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl mb-2">Trip Mileage Tracker</CardTitle>
                      <CardDescription className="text-base">
                        A GPS-based trip mileage tracking app that automatically records your travel routes, calculates total distance covered, and provides detailed trip summaries. Ideal for personal use, business travel logs, or mileage reimbursement purposes with accurate, real-time tracking and history management. Developed while working at <strong>Hexa IT Solutions</strong>.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Used Java as the primary language for this project.</li>
                            <li>• Utilized device's GPS tracking to track user journeys and movement.</li>
                            <li>• Implemented SQLite database for data persistence.</li>
                            <li>• Included Firebase's firestore database to store global configuration of the app.</li>
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Android</Badge>
                          <Badge variant="outline">Java</Badge>
                          <Badge variant="outline">SQLite</Badge>
                          <Badge variant="outline">Firebase</Badge>
                        </div>
                        <div className="flex gap-3 pt-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link href="#" target="_blank">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Link>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <Link href="#" target="_blank">
                              <Github className="w-4 h-4 mr-2" />
                              Source Code
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4">
                      <Image
                        src="/placeholder.svg?height=300&width=150"
                        alt="FitTracker Pro Home Screen"
                        width={720}
                        height={1400}
                        className="rounded-lg shadow-lg"
                      />
                      <Image
                        src="/placeholder.svg?height=300&width=150"
                        alt="FitTracker Pro Workout Screen"
                        width={720}
                        height={1400}
                        className="rounded-lg shadow-lg mt-8"
                      />
                    </div>
                  </div>
                </div>
              </Card> */}

              {/* Project 2 */}
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 flex items-center justify-center order-2 md:order-1">
                    <div className="grid grid-cols-2 gap-4">
                      <Image
                        src="/ocr-scanner-1.jpg"
                        alt="ExpenseWise Dashboard"
                        width={720}
                        height={1400}
                        className="rounded-lg shadow-lg"
                      />
                      <Image
                        src="/ocr-scanner-2.jpg"
                        alt="ExpenseWise Budget Screen"
                        width={720}
                        height={1400}
                        className="rounded-lg shadow-lg mt-8"
                      />
                    </div>
                  </div>
                  <div className="p-8 order-1 md:order-2">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl mb-2">OCR Scanner</CardTitle>
                      <CardDescription className="text-base">
                        An OCR Scanner app that leverages Optical Character Recognition (OCR) technology to detect and extract text from images or live camera input, allowing users to edit the scanned content and seamlessly export it as a high-quality, shareable PDF document. Developed while working at <strong>Hexa IT Solutions</strong>.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Developed this app using Android & Kotlin.</li>
                            <li>• Used Jetpack CameraX to for device's camera access.</li>
                            <li>• Used Google MLKit features for Text Recognition & Translation.</li>
                            <li>• Implemented a Rich Text Editor to edit the scanned text.</li>
                            <li>• Implemented PDF Generation for the export of the document.</li>
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Android</Badge>
                          <Badge variant="outline">Kotlin</Badge>
                          <Badge variant="outline">Firebase</Badge>
                        </div>
                        <div className="flex gap-3 pt-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link href="https://play.google.com/store/apps/details?id=com.hexaitsolutions.ocrscanner" target="_blank">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Link>
                          </Button>
                          {/* <Button size="sm" variant="outline" asChild>
                            <Link href="#" target="_blank">
                              <Github className="w-4 h-4 mr-2" />
                              Source Code
                            </Link>
                          </Button> */}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>

              {/* Project 3 */}
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl mb-2">Smart Spend - Expense Tracker</CardTitle>
                      <CardDescription className="text-base">
                        An intuitive expense tracker application designed to help users manage their finances by logging daily expenses, categorizing spending, setting monthly budgets, and providing insightful summaries to stay financially organized and make informed budgeting decisions. Developed while working at <strong>Hexa IT Solutions</strong>.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Developed an expense tracker app using Flutter.</li>
                            <li>• Used SQLite database for storing information, as well as effective querying.</li>
                            <li>• Used Firebase to store global configuration for the application.</li>
                            <li>• Implemented In App Purchases using RevenueCat.</li>
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Flutter</Badge>
                          <Badge variant="outline">Dart</Badge>
                          <Badge variant="outline">SQLite</Badge>
                          <Badge variant="outline">Firebase</Badge>
                          <Badge variant="outline">RevenueCat</Badge>
                        </div>
                        <div className="flex gap-3 pt-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link href="https://play.google.com/store/apps/details?id=com.spendmoneysmartly.smartspend" target="_blank">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Link>
                          </Button>
                          {/* <Button size="sm" variant="outline" asChild>
                            <Link href="#" target="_blank">
                              <Github className="w-4 h-4 mr-2" />
                              Source Code
                            </Link>
                          </Button> */}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4">
                      <Image
                        src="/smart-spend-1.jpg"
                        alt="TaskFlow Task Board"
                        width={720}
                        height={1400}
                        className="rounded-lg shadow-lg"
                      />
                      <Image
                        src="/smart-spend-2.jpg"
                        alt="TaskFlow Team Screen"
                        width={720}
                        height={1400}
                        className="rounded-lg shadow-lg mt-8"
                      />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Project 4 */}
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-orange-50 to-amber-100 p-8 flex items-center justify-center order-2 md:order-1">
                    <div className="grid grid-cols-2 gap-4">
                      <Image
                        src="/resume-maker-1.jpg"
                        alt="ExpenseWise Dashboard"
                        width={720}
                        height={1400}
                        className="rounded-lg shadow-lg"
                      />
                      <Image
                        src="/resume-maker-2.jpg"
                        alt="ExpenseWise Budget Screen"
                        width={720}
                        height={1400}
                        className="rounded-lg shadow-lg mt-8"
                      />
                    </div>
                  </div>
                  <div className="p-8 order-1 md:order-2">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl mb-2">Smart Resume Maker</CardTitle>
                      <CardDescription className="text-base">
                        A resume generator application that enables users to input their personal and professional details, choose from various templates and color schemes, and instantly generate a polished, downloadable PDF resume tailored to their preferred style and layout. Developed while working at <strong>Hexa IT Solutions</strong>.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Developed a resume generator application using Flutter.</li>
                            <li>• Used RealmDB for data storage and persistence.</li>
                            <li>• Implemented PDF Generation and export.</li>
                            <li>• Implemented In App Purchases & Subscription using RevenueCat.</li>
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Flutter</Badge>
                          <Badge variant="outline">Dart</Badge>
                          <Badge variant="outline">RealmDB</Badge>
                          <Badge variant="outline">RevenueCat</Badge>
                        </div>
                        <div className="flex gap-3 pt-2">
                          {/* <Button size="sm" variant="outline" asChild>
                            <Link href="#" target="_blank">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Link>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <Link href="#" target="_blank">
                              <Github className="w-4 h-4 mr-2" />
                              Source Code
                            </Link>
                          </Button> */}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-12">
              I'm always interested in new opportunities and exciting projects. Whether you have a specific idea in mind
              or just want to explore possibilities, I'd love to hear from you.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">sheikhadil077@gmail.com</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                  <CardTitle>Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+92 331-3362276</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                  <CardTitle>Social</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center gap-4">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://github.com/ShSAdil" target="_blank">
                        <Github className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://linkedin.com/in/shsadil" target="_blank">
                        <Linkedin className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" asChild>
              <Link href="mailto:sheikhadil077@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Alex Johnson. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer> */}
    </div>
  )
}
