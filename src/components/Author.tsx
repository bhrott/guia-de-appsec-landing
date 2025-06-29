import { Shield, Youtube, Headphones, ExternalLink, Mail, MapPin, BookOpen, Play, Podcast, FileText, User, Globe, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Author = () => {

    return (
        <section className="py-20 bg-gradient-to-b from-gray-900 to-[#141113]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <User className="h-10 w-10 text-[#04d6c8] mr-4" />
              Ben-Hur Santos Ott
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#04d6c8] to-cyan-400 rounded-2xl rotate-3 security-glow"></div>
                <img 
                  src="/img/autor.png"
                  alt="Application Security Expert"
                  className="relative rounded-2xl shadow-2xl w-100 h-100 object-cover border-4 border-[#04d6c8]/50"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#04d6c8] rounded-full p-4 border-4 border-[#141113]">
                  <Shield className="h-8 w-8 text-[#141113]" />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              {/* <h3 className="text-3xl font-bold text-white mb-6">Application Security Specialist</h3> */}
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Com quase duas décadas de experiência na área de tecnologia, atuei como desenvolvedor em diversas linguagens, frameworks e plataformas. Nos últimos anos, tenho me dedicado à área de cibersegurança e hoje busco compartilhar conhecimento sobre segurança no desenvolvimento de software com o objetivo de contribuir para um mundo digital mais seguro.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Sou <b className="text-[#04d6c8]">Senior Solutions Engineer</b> na <b className="text-[#04d6c8]">Snyk</b>, onde ajudamos empresas a estarem seguras na era da Inteligência Artificial.
              </p>
              
              <div className="mb-8">
                {/* <h4 className="text-xl font-semibold text-white mb-4">Expertise Areas</h4> */}
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-[#04d6c8]/20 text-[#04d6c8] border border-[#04d6c8]/50 px-3 py-1">Application Security</Badge>
                  <Badge className="bg-[#04d6c8]/20 text-[#04d6c8] border border-[#04d6c8]/50 px-3 py-1">DevSecOps</Badge>
                  <Badge className="bg-[#04d6c8]/20 text-[#04d6c8] border border-[#04d6c8]/50 px-3 py-1">SSDLC</Badge>
                  <Badge className="bg-[#04d6c8]/20 text-[#04d6c8] border border-[#04d6c8]/50 px-3 py-1">Threat Modeling</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-300 hover:text-[#04d6c8] transition-colors cursor-pointer">
                  <Mail className="h-6 w-6 mr-4 text-[#04d6c8]" />
                  <span>guiadeappsec@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-[#04d6c8] transition-colors cursor-pointer">
                  <Linkedin className="h-6 w-6 mr-4 text-[#04d6c8]" />
                  <a href="https://www.linkedin.com/in/benhurott/" target="_blank" rel="noopener noreferrer">@benhurott</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Author;