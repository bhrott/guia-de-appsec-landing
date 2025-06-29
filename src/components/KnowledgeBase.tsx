import { Shield, Youtube, Headphones, ExternalLink, Mail, MapPin, BookOpen, Play, Podcast, FileText, User, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const cards = [
    {
        title: "OWASP ASVS",
        description: "he OWASP Application Security Verification Standard (ASVS) Project provides a basis for testing web application technical security controls and also provides developers with a list of requirements for secure development.",
        link: "https://owasp.org/www-project-application-security-verification-standard/"
    },
    {
        title: "OWASP SAMM",
        description: "Our mission is to provide an effective and measurable way for you to analyze and improve your secure development lifecycle.",
        link: "https://owasp.org/www-project-samm/"
    },
    {
        title: "Snyk Learn",
        description: "Learn application security concepts through interactive courses and hands-on labs",
        link: "https://learn.snyk.io/catalog/"
    }
]


const KnowledgeBase = () => {

    return (
        <section className="py-20 bg-gradient-to-b from-[#141113] to-gray-900">
            <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-[#04d6c8] mr-4" />
                Base de Conhecimento
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Artigos, documentações, e recursos para aprofundar seu conhecimento em segurança de aplicações.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {cards.map((card, idx) => (
                    <Card
                        key={idx}
                        className="bg-gray-800/50 border-[#04d6c8]/30 hover:bg-gray-800/70 transition-all group hover:border-[#04d6c8]/50 cursor-pointer"
                    >
                        <CardHeader>
                            <a href={card.link} target="_blank">
                                <div className="flex items-center justify-between">
                                    <FileText className="h-8 w-8 text-[#04d6c8]" />
                                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[#04d6c8] transition-colors" />
                                </div>
                                <CardTitle className="text-lg text-white">{card.title}</CardTitle>
                                <CardDescription className="text-gray-300">
                                    {card.description}
                                </CardDescription>
                            </a>
                        </CardHeader>
                    </Card>
                ))}
                
            </div>
            
            <div className="text-center">
                <Button size="lg" className="bg-[#04d6c8] hover:bg-[#04d6c8]/80 text-[#141113] font-semibold px-8 py-4" onClick={() => window.open("https://ben-hurs-organization.gitbook.io/guia-de-appsec/", "_blank")}>
                    <BookOpen className="h-5 w-5 mr-2" />
                    Visite a Base de Conhecimento
                </Button>
            </div>
            </div>
        </section>
    )
}

export default KnowledgeBase;