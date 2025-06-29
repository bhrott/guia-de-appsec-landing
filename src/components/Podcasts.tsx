import { Shield, Youtube, Headphones, ExternalLink, Mail, MapPin, BookOpen, Play, Podcast, FileText, User, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Podcasts = () => {

    return (
        <section className="py-20 bg-gradient-to-b from-gray-900 to-[#141113]">
            <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Headphones className="h-10 w-10 text-[#04d6c8] mr-4" />
                Podcasts
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Toda semana um novo episódio!
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                <Card className="bg-gray-800/50 border-[#04d6c8]/30 hover:bg-gray-800/70 transition-all hover:border-[#04d6c8]/50">
                <CardHeader className="text-center pb-4">
                    <div className="w-24 h-24 bg-[#04d6c8]/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-[#04d6c8]/50 overflow-hidden">
                    {/* <Podcast className="h-12 w-12 text-[#04d6c8]" /> */}
                    <img src="/img/wss.jpg" alt="" />
                    </div>
                    <CardTitle className="text-xl text-white">WSS | Café Seguro Podcast</CardTitle>
                    <CardDescription className="text-base text-gray-300">
                    Todas as quartas-feiras ao vivo as 21h
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <Button variant="outline" className="border-[#04d6c8] text-[#04d6c8] hover:bg-[#04d6c8]/10 hover:border-[#04d6c8]" onClick={() => window.open("https://www.youtube.com/@wsssec", "_blank")}>
                    <Play className="h-4 w-4 mr-2" />
                    Escute Agora
                    </Button>
                </CardContent>
                </Card>
                
                <Card className="bg-gray-800/50 border-[#04d6c8]/30 hover:bg-gray-800/70 transition-all hover:border-[#04d6c8]/50">
                <CardHeader className="text-center pb-4">
                    <div className="w-24 h-24 bg-[#04d6c8]/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-[#04d6c8]/50 overflow-hidden">
                    {/* <Headphones className="h-12 w-12 text-[#04d6c8]" /> */}
                    <img src="/img/devsecops-podcast.png" alt="" />
                    </div>
                    <CardTitle className="text-xl text-white">DevSecOps Podcast</CardTitle>
                    <CardDescription className="text-base text-gray-300">
                    Conteúdo exclusivo sobre DevSecOps e AppSec
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <Button variant="outline" className="border-[#04d6c8] text-[#04d6c8] hover:bg-[#04d6c8]/10 hover:border-[#04d6c8]" onClick={() => window.open("https://www.youtube.com/@CassioBatistaPereira", "_blank")}>
                    <Play className="h-4 w-4 mr-2" />
                    Escute Agora
                    </Button>
                </CardContent>
                </Card>
            </div>
    {/* 
            <div className="flex justify-center space-x-6">
                <Badge className="bg-[#04d6c8]/20 text-[#04d6c8] border border-[#04d6c8]/50 px-4 py-2">Spotify</Badge>
                <Badge className="bg-[#04d6c8]/20 text-[#04d6c8] border border-[#04d6c8]/50 px-4 py-2">Apple Podcasts</Badge>
                <Badge className="bg-[#04d6c8]/20 text-[#04d6c8] border border-[#04d6c8]/50 px-4 py-2">Google Podcasts</Badge>
            </div> */}
            </div>
        </section>
    )
}

export default Podcasts;