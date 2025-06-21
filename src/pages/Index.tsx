
import { Edit, Code, FileText, Search } from "lucide-react";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";

const Index = () => {
  const features = [
    {
      icon: Edit,
      title: "Write Content Instantly",
      description: "Draft blogs, stories, or scripts with AI"
    },
    {
      icon: Code,
      title: "Generate Code",
      description: "From SQL to Python, automate your coding tasks"
    },
    {
      icon: FileText,
      title: "Summarize Anything",
      description: "Turn long docs into clear insights"
    },
    {
      icon: Search,
      title: "Explain Concepts",
      description: "Learn faster with crystal-clear AI explanations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <main className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto pt-16 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Headlines */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Personal{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI Workspace
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-medium">
              Smarter Answers. Faster Work. Always with You.
            </p>
            
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              MriloAI is your all-in-one AI assistant to explain concepts, generate code, 
              write content, and boost productivity — available on mobile, wherever you are.
            </p>

            {/* CTA Section */}
            <CTASection />
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="max-w-6xl mx-auto pb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Streamline your workflow with powerful AI features designed for modern productivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto pb-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-500 mb-4">
              Built with ❤️ for productivity enthusiasts everywhere
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Support</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
