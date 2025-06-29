
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Youtube, Headphones, ExternalLink, Mail, MapPin, BookOpen, Play, Podcast, FileText, User, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#141113] text-white">
      {/* Cover Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 data-pattern"></div>
        <div className="absolute inset-0 pattern-overlay"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="rounded-full bg-[#04d6c8]/20 p-8 backdrop-blur-sm border-2 border-[#04d6c8]/50 security-glow">
                <Shield className="h-24 w-24 text-[#04d6c8]" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#04d6c8] rounded-full animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#04d6c8] to-white bg-clip-text text-transparent">
            Guia de AppSec
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Your guide to securing applications
          </p>
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-[#04d6c8] rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#04d6c8] rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="py-20 bg-gradient-to-b from-[#141113] to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <Youtube className="h-10 w-10 text-[#04d6c8] mr-4" />
              Video Insights & Tutorials
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep dives into AppSec topics, practical tutorials, and expert interviews.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-[#04d6c8]/30 hover:border-[#04d6c8]/60 transition-all">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#04d6c8]/20 rounded-full flex items-center justify-center group-hover:bg-[#04d6c8]/30 transition-all">
                    <Play className="h-10 w-10 text-[#04d6c8] ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Latest: Advanced Application Security</h3>
                  <p className="text-gray-300 text-sm">Exploring modern threat landscapes and defense strategies</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button size="lg" className="bg-[#04d6c8] hover:bg-[#04d6c8]/80 text-[#141113] font-semibold px-8 py-4">
                <Youtube className="h-5 w-5 mr-2" />
                Watch Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Podcasts Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-[#141113]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <Headphones className="h-10 w-10 text-[#04d6c8] mr-4" />
              Listen & Learn
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              On-the-go discussions on the latest in application security, vulnerability trends, and best practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="bg-gray-800/50 border-[#04d6c8]/30 hover:bg-gray-800/70 transition-all hover:border-[#04d6c8]/50">
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 bg-[#04d6c8]/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-[#04d6c8]/50">
                  <Podcast className="h-12 w-12 text-[#04d6c8]" />
                </div>
                <CardTitle className="text-xl text-white">Latest Episode</CardTitle>
                <CardDescription className="text-base text-gray-300">
                  Zero-Day Vulnerabilities: Detection and Response Strategies
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="border-[#04d6c8] text-[#04d6c8] hover:bg-[#04d6c8]/10 hover:border-[#04d6c8]">
                  <Play className="h-4 w-4 mr-2" />
                  Listen Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-[#04d6c8]/30 hover:bg-gray-800/70 transition-all hover:border-[#04d6c8]/50">
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 bg-[#04d6c8]/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-[#04d6c8]/50">
                  <Headphones className="h-12 w-12 text-[#04d6c8]" />
                </div>
                <CardTitle className="text-xl text-white">Popular Series</CardTitle>
                <CardDescription className="text-base text-gray-300">
                  Secure Development Lifecycle: A Complete Guide
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="border-[#04d6c8] text-[#04d6c8] hover:bg-[#04d6c8]/10 hover:border-[#04d6c8]">
                  <Play className="h-4 w-4 mr-2" />
                  Listen Now
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center space-x-6">
            <Badge className="bg-[#04d6c8]/20 text-[#04d6c8] border border-[#04d6c8]/50 px-4 py-2">Spotify</Badge>
            <Badge className="bg-[#04d6c8]/20 text-[#04d6c8] border border-[#04d6c8]/50 px-4 py-2">Apple Podcasts</Badge>
            <Badge className="bg-[#04d6c8]/20 text-[#04d6c8] border border-[#04d6c8]/50 px-4 py-2">Google Podcasts</Badge>
          </div>
        </div>
      </section>

      {/* Knowledge Base Section */}
      <section className="py-20 bg-gradient-to-b from-[#141113] to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <BookOpen className="h-10 w-10 text-[#04d6c8] mr-4" />
              Comprehensive Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Articles, guides, and practical resources to deepen your understanding of application security concepts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-800/50 border-[#04d6c8]/30 hover:bg-gray-800/70 transition-all group hover:border-[#04d6c8]/50 cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <FileText className="h-8 w-8 text-[#04d6c8]" />
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[#04d6c8] transition-colors" />
                </div>
                <CardTitle className="text-lg text-white">OWASP Top 10</CardTitle>
                <CardDescription className="text-gray-300">
                  Complete guide to the most critical web application security risks
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gray-800/50 border-[#04d6c8]/30 hover:bg-gray-800/70 transition-all group hover:border-[#04d6c8]/50 cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <FileText className="h-8 w-8 text-[#04d6c8]" />
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[#04d6c8] transition-colors" />
                </div>
                <CardTitle className="text-lg text-white">Secure Coding</CardTitle>
                <CardDescription className="text-gray-300">
                  Best practices for writing secure code in modern applications
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gray-800/50 border-[#04d6c8]/30 hover:bg-gray-800/70 transition-all group hover:border-[#04d6c8]/50 cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <FileText className="h-8 w-8 text-[#04d6c8]" />
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[#04d6c8] transition-colors" />
                </div>
                <CardTitle className="text-lg text-white">Threat Modeling</CardTitle>
                <CardDescription className="text-gray-300">
                  Systematic approach to identifying and mitigating security threats
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gray-800/50 border-[#04d6c8]/30 hover:bg-gray-800/70 transition-all group hover:border-[#04d6c8]/50 cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <FileText className="h-8 w-8 text-[#04d6c8]" />
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[#04d6c8] transition-colors" />
                </div>
                <CardTitle className="text-lg text-white">Penetration Testing</CardTitle>
                <CardDescription className="text-gray-300">
                  Comprehensive testing methodologies and tools for security assessment
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gray-800/50 border-[#04d6c8]/30 hover:bg-gray-800/70 transition-all group hover:border-[#04d6c8]/50 cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <FileText className="h-8 w-8 text-[#04d6c8]" />
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[#04d6c8] transition-colors" />
                </div>
                <CardTitle className="text-lg text-white">DevSecOps</CardTitle>
                <CardDescription className="text-gray-300">
                  Integrating security practices into the development lifecycle
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gray-800/50 border-[#04d6c8]/30 hover:bg-gray-800/70 transition-all group hover:border-[#04d6c8]/50 cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <FileText className="h-8 w-8 text-[#04d6c8]" />
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[#04d6c8] transition-colors" />
                </div>
                <CardTitle className="text-lg text-white">Vulnerability Management</CardTitle>
                <CardDescription className="text-gray-300">
                  Strategies for identifying, assessing, and remediating security vulnerabilities
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-[#04d6c8] hover:bg-[#04d6c8]/80 text-[#141113] font-semibold px-8 py-4">
              <BookOpen className="h-5 w-5 mr-2" />
              Explore Knowledge Base
            </Button>
          </div>
        </div>
      </section>

      {/* About the Author & Contacts Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-[#141113]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <User className="h-10 w-10 text-[#04d6c8] mr-4" />
              Meet the Expert
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#04d6c8] to-cyan-400 rounded-2xl rotate-3 security-glow"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Application Security Expert"
                  className="relative rounded-2xl shadow-2xl w-80 h-80 object-cover border-4 border-[#04d6c8]/50"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#04d6c8] rounded-full p-4 border-4 border-[#141113]">
                  <Shield className="h-8 w-8 text-[#141113]" />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-white mb-6">Application Security Specialist</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Passionate about securing digital applications and sharing knowledge with the cybersecurity community. 
                With extensive experience in vulnerability research, secure development practices, and threat assessment, 
                I help organizations build robust security frameworks.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Through content creation and educational resources, I aim to make application security accessible 
                and practical for developers, security professionals, and organizations worldwide.
              </p>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4">Expertise Areas</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-[#04d6c8]/20 text-[#04d6c8] border border-[#04d6c8]/50 px-3 py-1">Web Application Security</Badge>
                  <Badge className="bg-[#04d6c8]/20 text-[#04d6c8] border border-[#04d6c8]/50 px-3 py-1">OWASP</Badge>
                  <Badge className="bg-[#04d6c8]/20 text-[#04d6c8] border border-[#04d6c8]/50 px-3 py-1">Penetration Testing</Badge>
                  <Badge className="bg-[#04d6c8]/20 text-[#04d6c8] border border-[#04d6c8]/50 px-3 py-1">Secure Coding</Badge>
                  <Badge className="bg-[#04d6c8]/20 text-[#04d6c8] border border-[#04d6c8]/50 px-3 py-1">DevSecOps</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-300 hover:text-[#04d6c8] transition-colors cursor-pointer">
                  <Mail className="h-6 w-6 mr-4 text-[#04d6c8]" />
                  <span>contact@guiadeappsec.com</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-[#04d6c8] transition-colors cursor-pointer">
                  <Globe className="h-6 w-6 mr-4 text-[#04d6c8]" />
                  <span>LinkedIn Profile</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-6 w-6 mr-4 text-[#04d6c8]" />
                  <span>Available for consulting and speaking engagements</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 border-t border-[#04d6c8]/30 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-[#04d6c8]/20 p-4 border-2 border-[#04d6c8]/50 security-glow">
                <Shield className="h-8 w-8 text-[#04d6c8]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Guia de AppSec</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Empowering developers and security professionals with practical application security knowledge.
            </p>
            <Separator className="bg-[#04d6c8]/30 mb-6" />
            <p className="text-gray-500">
              © 2024 Guia de AppSec. Securing applications, one guide at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
