import { Shield, Youtube, Headphones, ExternalLink, Mail, MapPin, BookOpen, Play, Scroll } from "lucide-react";
import { Button } from "@/components/ui/button";

const Newsletter = () => {

    return (
        <section className="py-20 bg-gradient-to-b from-[#141113] to-gray-900">
            <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Scroll className="h-10 w-10 text-[#04d6c8] mr-4" />
                Newsletter
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Receba diretamente no seu e-mail as últimas novidades, dicas e conteúdos exclusivos sobre segurança de aplicações. Inscreva-se agora e fique por dentro das melhores práticas de AppSec!
                </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
                <div className="relative group" id="newsletter_image">
                <div className="aspect-video rounded-xl overflow-hidden border border-[#04d6c8]/30 hover:border-[#04d6c8]/60 transition-all">
                    <div className="absolute inset-0 flex items-center justify-center">
                    
                    </div>
                </div>
                </div>
                
                <div className="text-center mt-8">
                <Button size="lg" className="bg-[#04d6c8] hover:bg-[#04d6c8]/80 text-[#141113] font-semibold px-8 py-4" onClick={() => window.open("https://blog.guiadeappsec.com.br/newsletter", "_blank")}>
                    <Youtube className="h-5 w-5 mr-2" />
                    Inscreva-se Agora
                </Button>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Newsletter;