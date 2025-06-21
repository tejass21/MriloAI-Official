
import { MessageSquare, Home, Explore, Users, BookOpen, Settings, Plus, Search } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'explore', icon: Explore, label: 'Explore AI' },
    { id: 'team', icon: Users, label: 'Team Workspace' },
    { id: 'conversations', icon: BookOpen, label: 'My Conversations' },
  ];

  return (
    <div className="w-72 bg-gray-900 border-r border-gray-800 flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white font-medium">Chats</h2>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <button className="w-full bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" />
          New Chat
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeItem === item.id
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Search */}
        <div className="mt-6">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search chats..."
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Welcome Section */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <h3 className="text-white font-medium mb-2">Welcome to Mrilo AI</h3>
          <p className="text-gray-400 text-sm">
            Start a new chat or continue from your library
          </p>
          <button className="mt-3 text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1 transition-colors">
            <Plus className="w-3 h-3" />
            Create Folder
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
