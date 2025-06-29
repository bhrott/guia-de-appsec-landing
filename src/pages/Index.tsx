
import Conver from "@/components/Cover";
import YouTube from "@/components/Youtube";
import Podcasts from "@/components/Podcasts";
import Newsletter from "@/components/Newsletter";
import KnowledgeBase from "@/components/KnowledgeBase";
import Author from "@/components/Author";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#141113] text-white">
      <Conver />
      <YouTube />
      <Podcasts />
      <Newsletter />
      <KnowledgeBase />
      <Author />
      <Footer />
    </div>
  );
};

export default Index;
