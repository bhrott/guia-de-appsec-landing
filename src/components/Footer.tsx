import { Separator } from "@/components/ui/separator";
import { Shield, Youtube, Headphones, ExternalLink, Mail, MapPin, BookOpen, Play, Podcast, FileText, User, Globe } from "lucide-react";

const Footer = () => {

    return (
        <footer className="bg-black/60 border-t border-[#04d6c8]/30 text-white py-12">
            <div className="container mx-auto px-6">
            <div className="text-center">
                <div className="flex justify-center mb-6">
                <div className="rounded-full bg-[#04d6c8]/20 p-4 border-2 border-[#04d6c8]/50 security-glow overflow-hidden">
                    <img src="/logo.png" alt="" className="w-32 h-32" />
                </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Guia de AppSec</h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Empowering developers and security professionals with practical application security knowledge.
                </p>
                <Separator className="bg-[#04d6c8]/30 mb-6" />
                <p className="text-gray-500">
                © 2025 Guia de AppSec. Securing applications, one guide at a time.
                </p>
            </div>
            </div>
        </footer>
    )
}

export default Footer;  