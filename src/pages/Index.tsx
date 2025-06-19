
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Youtube, Headphones, ExternalLink, Mail, MapPin, Calendar, BookOpen } from "lucide-react";
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/SocialIcons";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-blue-500/20 p-6 backdrop-blur-sm border border-blue-400/30">
              <Shield className="h-16 w-16 text-blue-300" />
            </div>
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Guia de AppSec
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-blue-100 mb-8">
            Seu recurso definitivo para Segurança de Aplicações. Conteúdo especializado, 
            insights práticos e as melhores práticas do mercado.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3">
            Explorar Conteúdo
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre o Autor</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Especialista em Segurança de Aplicações com mais de 10 anos de experiência 
                na área. Autor de diversos artigos e creator de conteúdo focado em ajudar 
                desenvolvedores e profissionais de segurança a implementar as melhores 
                práticas de AppSec.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Apaixonado por compartilhar conhecimento através de YouTube, podcasts e 
                workshops, sempre buscando tornar a segurança de aplicações mais acessível 
                para todos.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Especialidades</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">OWASP Top 10</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Secure Coding</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Penetration Testing</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">DevSecOps</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Security Architecture</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">Vulnerability Assessment</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                  <span>São Paulo, Brasil</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-3 text-blue-600" />
                  <span>contato@guiadeappsec.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                  <span>10+ anos de experiência</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl rotate-6"></div>
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Autor do Guia de AppSec"
                  className="relative rounded-2xl shadow-2xl w-80 h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Youtube className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Canal no YouTube</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vídeos semanais sobre segurança de aplicações, tutoriais práticos e 
              análises das últimas vulnerabilidades descobertas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <Youtube className="h-12 w-12 text-red-600" />
                </div>
                <CardTitle className="text-lg">OWASP Top 10 Explicado</CardTitle>
                <CardDescription>
                  Série completa explicando cada vulnerabilidade do OWASP Top 10 2021
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <Youtube className="h-12 w-12 text-red-600" />
                </div>
                <CardTitle className="text-lg">Secure Code Review</CardTitle>
                <CardDescription>
                  Como fazer revisão de código focada em segurança
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <Youtube className="h-12 w-12 text-red-600" />
                </div>
                <CardTitle className="text-lg">DevSecOps na Prática</CardTitle>
                <CardDescription>
                  Implementando segurança no pipeline de desenvolvimento
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Youtube className="h-5 w-5 mr-2" />
              Visitar Canal
            </Button>
          </div>
        </div>
      </section>

      {/* Podcasts Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Headphones className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Podcasts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Participações em podcasts e programa próprio discutindo os temas 
              mais importantes da segurança de aplicações.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">AppSec Talks</CardTitle>
                <CardDescription className="text-base">
                  Podcast semanal com discussões sobre as últimas tendências em 
                  segurança de aplicações e entrevistas com especialistas.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  Ouvir Episódios
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Security Cast</CardTitle>
                <CardDescription className="text-base">
                  Participações regulares no Security Cast, discutindo cases reais 
                  e análises de incidentes de segurança.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Ouvir Episódios
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Redes Sociais</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acompanhe as últimas atualizações, dicas rápidas e interaja com a comunidade 
              de segurança através das redes sociais.
            </p>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a 
              href="#" 
              className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <LinkedinIcon className="h-16 w-16 text-blue-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">LinkedIn</h3>
              <p className="text-gray-600 text-center mt-2">Artigos técnicos e insights profissionais</p>
            </a>
            
            <a 
              href="#" 
              className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <InstagramIcon className="h-16 w-16 text-pink-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Instagram</h3>
              <p className="text-gray-600 text-center mt-2">Behind the scenes e conteúdo visual</p>
            </a>
            
            <a 
              href="#" 
              className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <YoutubeIcon className="h-16 w-16 text-red-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">YouTube</h3>
              <p className="text-gray-600 text-center mt-2">Vídeos educativos e tutoriais</p>
            </a>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Links Úteis e Recursos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma coleção cuidadosamente selecionada de ferramentas, documentações 
              e recursos essenciais para profissionais de AppSec.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>OWASP Foundation</span>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                </CardTitle>
                <CardDescription>
                  Recursos oficiais da OWASP incluindo Top 10, ASVS, e guias de testing
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>NIST Cybersecurity</span>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                </CardTitle>
                <CardDescription>
                  Framework e guidelines do NIST para implementação de segurança
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>PortSwigger Academy</span>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                </CardTitle>
                <CardDescription>
                  Laboratórios práticos e treinamentos em web security
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>SANS Reading Room</span>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                </CardTitle>
                <CardDescription>
                  White papers e pesquisas acadêmicas sobre segurança
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>CVE Database</span>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                </CardTitle>
                <CardDescription>
                  Base de dados oficial de vulnerabilidades conhecidas
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Security Tools</span>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                </CardTitle>
                <CardDescription>
                  Lista curada das melhores ferramentas de security testing
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-blue-600 p-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Guia de AppSec</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Tornando a segurança de aplicações acessível para todos os desenvolvedores 
              e profissionais de tecnologia.
            </p>
            <Separator className="bg-gray-700 mb-6" />
            <p className="text-gray-500">
              © 2024 Guia de AppSec. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
