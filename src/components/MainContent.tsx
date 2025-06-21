
import { Paperclip, Settings, ArrowUp } from "lucide-react";

const MainContent = () => {
  const quickActions = [
    {
      icon: "🧠",
      title: "Explain a concept",
      description: "Get clear explanations on any topic",
      shortcut: "⌘E"
    },
    {
      icon: "📄",
      title: "Summarize text",
      description: "Create concise summaries",
      shortcut: "⌘S"
    },
    {
      icon: "</>",,
      title: "Generate code",
      description: "Create code snippets in any language",
      shortcut: "⌘C"
    },
    {
      icon: "✍️",
      title: "Write content",
      description: "Draft blogs, essays, or stories",
      shortcut: "⌘W"
    },
    {
      icon: "🔍",
      title: "Research assistant",
      description: "Find information on any topic",
      shortcut: "⌘R"
    },
    {
      icon: "🗃️",
      title: "Create SQL query",
      description: "Generate database queries",
      shortcut: "⌘Q"
    }
  ];

  return (
    <div className="flex-1 bg-gray-950 flex flex-col items-center justify-center p-8">
      {/* Header */}
      <div className="absolute top-4 right-4 flex items-center gap-4">
        <button className="text-gray-400 hover:text-white transition-colors">
          <Plus className="w-5 h-5" />
          <span className="ml-2">New Chat</span>
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
          Sign up with Google
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl w-full text-center">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Where <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Knowledge Evolves</span>
          </h1>
          <p className="text-gray-400 text-xl mb-8">
            Experience the next generation of AI assistance. Ask anything, get intelligent answers.
          </p>

          {/* Chat Input */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-4 flex items-center gap-3">
              <Paperclip className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Ask anything..."
                className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
              />
              <button className="text-gray-500 hover:text-white transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 p-2 rounded-full transition-colors">
                <ArrowUp className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-white text-lg font-medium mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-gray-600 rounded-xl p-4 cursor-pointer transition-all duration-200 hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{action.icon}</span>
                  <span className="text-gray-500 text-sm">{action.shortcut}</span>
                </div>
                <h3 className="text-white font-medium mb-1 group-hover:text-purple-400 transition-colors">
                  {action.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {action.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
