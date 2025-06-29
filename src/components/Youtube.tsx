import { Shield, Youtube, Headphones, ExternalLink, Mail, MapPin, BookOpen, Play, Podcast, FileText, User, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

function openYoutubeChannel() {
  window.open("https://www.youtube.com/@guiadeappsec", "_blank");
}

const YouTube = () => {

    return (
        <section className="py-20 bg-gradient-to-b from-[#141113] to-gray-900">
            <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Youtube className="h-10 w-10 text-[#04d6c8] mr-4" />
                Nosso Canal no Youtube
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tutoriais, dicas e discussões sobre segurança de aplicações, desenvolvimento seguro e afins.
                </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
                <div className="relative group" id="youtube_video">
                <div className="aspect-video rounded-xl overflow-hidden border border-[#04d6c8]/30 hover:border-[#04d6c8]/60 transition-all">
                    <div className="absolute inset-0 flex items-center justify-center">
                    <button
                        className="w-20 h-20 bg-[#04d6c8]/20 rounded-full flex items-center justify-center group-hover:bg-[#04d6c8]/30 transition-all focus:outline-none"
                        onClick={() => openYoutubeChannel()}
                        aria-label="Watch on YouTube"
                        type="button"
                    >
                        <Play className="h-10 w-10 text-[#04d6c8] ml-1" />
                    </button>
                    </div>
                    {/* <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md p-4 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-2">Latest: Advanced Application Security</h3>
                    <p className="text-gray-300 text-sm">Exploring modern threat landscapes and defense strategies</p>
                    </div> */}
                </div>
                </div>
                
                <div className="text-center mt-8">
                <Button size="lg" className="bg-[#04d6c8] hover:bg-[#04d6c8]/80 text-[#141113] font-semibold px-8 py-4" onClick={() => openYoutubeChannel()}>
                    <Youtube className="h-5 w-5 mr-2" />
                    Watch Now
                </Button>
                </div>
            </div>
            </div>
        </section>
    )
}

export default YouTube;