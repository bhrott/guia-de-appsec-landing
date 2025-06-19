
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Youtube, Headphones, ExternalLink, Mail, MapPin, Calendar, BookOpen, Lock, Server, Brain, Terminal, Cpu, Zap } from "lucide-react";
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/SocialIcons";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#141113] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#141113] via-gray-900 to-black">
        <div className="absolute inset-0 matrix-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#03989e]/20 to-transparent"></div>
        <div className="relative container mx-auto px-6 py-24 text-center z-10">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-[#03989e]/20 p-6 backdrop-blur-sm border border-[#03989e]/50 cyber-glow">
              <Shield className="h-16 w-16 text-[#03989e]" />
            </div>
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl bg-gradient-to-r from-[#03989e] to-cyan-300 bg-clip-text text-transparent">
            Guia de AppSec
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-300 mb-8">
            Especialista em Segurança de Aplicações, IA e Cibersegurança. 
            Conteúdo técnico avançado para profissionais de tecnologia.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#03989e]/20 rounded-full border border-[#03989e]/30">
              <Terminal className="h-4 w-4 text-[#03989e]" />
              <span className="text-sm text-gray-300">Security Research</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#03989e]/20 rounded-full border border-[#03989e]/30">
              <Brain className="h-4 w-4 text-[#03989e]" />
              <span className="text-sm text-gray-300">AI Security</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#03989e]/20 rounded-full border border-[#03989e]/30">
              <Cpu className="h-4 w-4 text-[#03989e]" />
              <span className="text-sm text-gray-300">DevSecOps</span>
            </div>
          </div>
          <Button size="lg" className="bg-[#03989e] hover:bg-[#03989e]/80 text-white font-semibold px-8 py-3 border border-[#03989e]/50">
            <Zap className="h-5 w-5 mr-2" />
            Explorar Arsenal
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-[#141113] to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center">
                <Lock className="h-10 w-10 text-[#03989e] mr-4" />
                Security Expert
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Especialista em Segurança de Aplicações com foco em tecnologias emergentes 
                e inteligência artificial. Pesquisador de vulnerabilidades, arquiteto de 
                soluções de segurança e evangelista de práticas DevSecOps.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Dedicado a explorar as intersecções entre IA, cibersegurança e desenvolvimento 
                seguro, compartilhando insights através de conteúdo técnico avançado.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Server className="h-6 w-6 text-[#03989e] mr-2" />
                  Core Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-[#03989e]/20 text-[#03989e] border border-[#03989e]/30">Zero Trust Architecture</Badge>
                  <Badge className="bg-[#03989e]/20 text-[#03989e] border border-[#03989e]/30">AI Security</Badge>
                  <Badge className="bg-[#03989e]/20 text-[#03989e] border border-[#03989e]/30">Threat Modeling</Badge>
                  <Badge className="bg-[#03989e]/20 text-[#03989e] border border-[#03989e]/30">Red Team Operations</Badge>
                  <Badge className="bg-[#03989e]/20 text-[#03989e] border border-[#03989e]/30">Cloud Security</Badge>
                  <Badge className="bg-[#03989e]/20 text-[#03989e] border border-[#03989e]/30">Secure SDLC</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-[#03989e]" />
                  <span>São Paulo, Brasil</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-[#03989e]" />
                  <span>sec@guiadeappsec.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="h-5 w-5 mr-3 text-[#03989e]" />
                  <span>10+ anos em Cybersecurity</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#03989e] to-cyan-500 rounded-2xl rotate-6 cyber-glow"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Security Expert"
                  className="relative rounded-2xl shadow-2xl w-80 h-80 object-cover border-2 border-[#03989e]/30"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#03989e] rounded-full p-3 border-4 border-[#141113]">
                  <Terminal className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-[#141113]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Youtube className="h-12 w-12 text-[#03989e] mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Security Channel</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Análises técnicas de vulnerabilidades, demonstrações de ferramentas 
              e deep dives em tópicos avançados de segurança.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-[#03989e]/30 hover:bg-gray-800/70 transition-all hover:border-[#03989e]/50">
              <CardHeader>
                <div className="aspect-video bg-gray-700 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#03989e]/20 to-transparent"></div>
                  <Youtube className="h-12 w-12 text-[#03989e] z-10" />
                </div>
                <CardTitle className="text-lg text-white">AI Security Threats</CardTitle>
                <CardDescription className="text-gray-300">
                  Análise das principais ameaças em sistemas de IA e ML
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gray-800/50 border-[#03989e]/30 hover:bg-gray-800/70 transition-all hover:border-[#03989e]/50">
              <CardHeader>
                <div className="aspect-video bg-gray-700 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#03989e]/20 to-transparent"></div>
                  <Terminal className="h-12 w-12 text-[#03989e] z-10" />
                </div>
                <CardTitle className="text-lg text-white">Advanced Pentesting</CardTitle>
                <CardDescription className="text-gray-300">
                  Técnicas avançadas de penetration testing
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gray-800/50 border-[#03989e]/30 hover:bg-gray-800/70 transition-all hover:border-[#03989e]/50">
              <CardHeader>
                <div className="aspect-video bg-gray-700 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#03989e]/20 to-transparent"></div>
                  <Brain className="h-12 w-12 text-[#03989e] z-10" />
                </div>
                <CardTitle className="text-lg text-white">Zero-Day Research</CardTitle>
                <CardDescription className="text-gray-300">
                  Metodologias de pesquisa de vulnerabilidades
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-[#03989e] hover:bg-[#03989e]/80 text-white border border-[#03989e]/50">
              <Youtube className="h-5 w-5 mr-2" />
              Acessar Canal
            </Button>
          </div>
        </div>
      </section>

      {/* Podcasts Section */}
      <section className="py-20 bg-gradient-to-b from-[#141113] to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Headphones className="h-12 w-12 text-[#03989e] mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Security Podcasts</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discussões aprofundadas sobre cibersegurança, threat intelligence 
              e as últimas tendências em security research.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800/50 border-[#03989e]/30 hover:bg-gray-800/70 transition-all">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#03989e]/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#03989e]/50">
                  <Headphones className="h-8 w-8 text-[#03989e]" />
                </div>
                <CardTitle className="text-xl text-white">CyberSec Deep Dive</CardTitle>
                <CardDescription className="text-base text-gray-300">
                  Análises técnicas de incidentes, threat hunting e 
                  entrevistas com especialistas da indústria.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="border-[#03989e] text-[#03989e] hover:bg-[#03989e]/10">
                  Ouvir Episódios
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-[#03989e]/30 hover:bg-gray-800/70 transition-all">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#03989e]/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#03989e]/50">
                  <Brain className="h-8 w-8 text-[#03989e]" />
                </div>
                <CardTitle className="text-xl text-white">AI Security Cast</CardTitle>
                <CardDescription className="text-base text-gray-300">
                  Foco nas implicações de segurança da IA, machine learning 
                  security e defensive AI strategies.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="border-[#03989e] text-[#03989e] hover:bg-[#03989e]/10">
                  Ouvir Episódios
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-[#141113]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Security Network</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conecte-se para insights diários, threat intelligence e discussões 
              sobre as últimas descobertas em cibersegurança.
            </p>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a 
              href="#" 
              className="group flex flex-col items-center p-8 bg-gray-800/50 rounded-2xl border border-[#03989e]/30 hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-2 hover:border-[#03989e]/50"
            >
              <LinkedinIcon className="h-16 w-16 text-[#03989e] group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mt-4">LinkedIn</h3>
              <p className="text-gray-300 text-center mt-2">Research papers e análises técnicas</p>
            </a>
            
            <a 
              href="#" 
              className="group flex flex-col items-center p-8 bg-gray-800/50 rounded-2xl border border-[#03989e]/30 hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-2 hover:border-[#03989e]/50"
            >
              <InstagramIcon className="h-16 w-16 text-[#03989e] group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mt-4">Instagram</h3>
              <p className="text-gray-300 text-center mt-2">Security tips e behind the scenes</p>
            </a>
            
            <a 
              href="#" 
              className="group flex flex-col items-center p-8 bg-gray-800/50 rounded-2xl border border-[#03989e]/30 hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-2 hover:border-[#03989e]/50"
            >
              <YoutubeIcon className="h-16 w-16 text-[#03989e] group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mt-4">YouTube</h3>
              <p className="text-gray-300 text-center mt-2">Technical demos e tutorials</p>
            </a>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gradient-to-b from-[#141113] to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 text-[#03989e] mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Security Arsenal</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ferramentas essenciais, frameworks de segurança e recursos 
              para profissionais de cibersegurança e pesquisadores.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-[#03989e]/30 hover:bg-gray-800/70 transition-all group hover:border-[#03989e]/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-white">
                  <span>OWASP Arsenal</span>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[#03989e]" />
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Top 10, ASVS, Testing Guide e ferramentas de security testing
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gray-800/50 border-[#03989e]/30 hover:bg-gray-800/70 transition-all group hover:border-[#03989e]/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-white">
                  <span>NIST Framework</span>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[#03989e]" />
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Cybersecurity Framework e guidelines para implementação
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gray-800/50 border-[#03989e]/30 hover:bg-gray-800/70 transition-all group hover:border-[#03989e]/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-white">
                  <span>Exploit Database</span>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[#03989e]" />
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Repository de exploits e payloads para security research
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gray-800/50 border-[#03989e]/30 hover:bg-gray-800/70 transition-all group hover:border-[#03989e]/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-white">
                  <span>MITRE ATT&CK</span>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[#03989e]" />
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Framework de tactics, techniques e procedures
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gray-800/50 border-[#03989e]/30 hover:bg-gray-800/70 transition-all group hover:border-[#03989e]/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-white">
                  <span>CVE Intelligence</span>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[#03989e]" />
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Base oficial de vulnerabilidades e threat intelligence
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gray-800/50 border-[#03989e]/30 hover:bg-gray-800/70 transition-all group hover:border-[#03989e]/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-white">
                  <span>Security Toolkit</span>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[#03989e]" />
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Curated list das melhores ferramentas de hacking ético
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-[#03989e]/30 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-[#03989e]/20 p-4 border border-[#03989e]/50 cyber-glow">
                <Shield className="h-8 w-8 text-[#03989e]" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Guia de AppSec</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Advancing cybersecurity through research, education and innovation. 
              Securing the digital future, one application at a time.
            </p>
            <Separator className="bg-[#03989e]/30 mb-6" />
            <p className="text-gray-500">
              © 2024 Guia de AppSec. All systems secured.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
