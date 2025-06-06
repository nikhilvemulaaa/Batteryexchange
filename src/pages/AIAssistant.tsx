import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Bot, 
  User, 
  Mic, 
  MicOff, 
  RefreshCw,
  MapPin,
  Battery,
  Clock,
  Zap,
  MessageCircle
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

interface QuickAction {
  icon: React.ReactNode;
  label: string;
  action: string;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm your BharatCharge AI Assistant. I can help you find battery exchange stations, plan routes, check battery compatibility, and answer questions about EV charging. How can I assist you today?",
      timestamp: new Date(),
      suggestions: [
        "Find stations near me",
        "Check battery compatibility",
        "Plan a long trip route",
        "Station operating hours"
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions: QuickAction[] = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Find Nearby Stations",
      action: "Find battery exchange stations near my location"
    },
    {
      icon: <Battery className="h-5 w-5" />,
      label: "Battery Compatibility",
      action: "Check if my battery is compatible with BharatCharge stations"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Operating Hours",
      action: "What are the operating hours for stations in my area?"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      label: "Trip Planning",
      action: "Help me plan a long distance trip with charging stops"
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    let response = "";
    let suggestions: string[] = [];

    if (lowerMessage.includes('station') && lowerMessage.includes('near')) {
      response = "I found several battery exchange stations near you! Here are the closest options:\n\n🔋 **PowerSwap Hub - Connaught Place** (0.8 km away)\n- 15/20 batteries available\n- Open 24/7\n- Fast charging available\n\n🔋 **EcoCharge Point - Karol Bagh** (1.2 km away)\n- 8/12 batteries available\n- Open 6 AM - 10 PM\n- Cafe and restroom facilities\n\nWould you like directions to any of these stations?";
      suggestions = ["Get directions to nearest", "Check availability", "See all amenities"];
    } 
    else if (lowerMessage.includes('compatibility') || lowerMessage.includes('battery')) {
      response = "I can help you check battery compatibility! BharatCharge supports these common battery types:\n\n✅ **48V 30Ah** - Most popular for city commuting\n✅ **60V 32Ah** - Mid-range scooters\n✅ **72V 40Ah** - High-performance bikes\n\nTo check your specific battery:\n1. Check your vehicle manual\n2. Look at the battery label\n3. Or tell me your vehicle model\n\nWhat's your EV model?";
      suggestions = ["Ather 450X", "TVS iQube", "Bajaj Chetak", "Other model"];
    }
    else if (lowerMessage.includes('hours') || lowerMessage.includes('time')) {
      response = "Station operating hours vary by location:\n\n🕐 **Most City Centers**: 24/7 operations\n🕐 **Shopping Malls**: 10 AM - 10 PM\n🕐 **Residential Areas**: 6 AM - 11 PM\n🕐 **Highway Stations**: 24/7 operations\n\nFor specific station hours, I can check real-time information. Which area are you interested in?";
      suggestions = ["Delhi stations", "Mumbai stations", "Bangalore stations", "Highway stations"];
    }
    else if (lowerMessage.includes('trip') || lowerMessage.includes('route')) {
      response = "Great! I can help plan your trip with charging stops. For optimal trip planning, I need:\n\n📍 **Starting point**\n📍 **Destination** \n🔋 **Your vehicle's range per charge**\n⏰ **Preferred travel time**\n\nI'll map out the best route with strategically placed charging stations to ensure you never run out of power. Where are you planning to travel?";
      suggestions = ["Delhi to Mumbai", "Bangalore to Chennai", "Pune to Goa", "Custom route"];
    }
    else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      response = "BharatCharge offers transparent, affordable pricing:\n\n💰 **Battery Exchange**: ₹50-80 per swap (varies by battery type)\n💰 **Monthly Plans**: Starting ₹999 (unlimited swaps)\n💰 **Pay-per-use**: No subscription required\n\n**Special Offers:**\n🎉 First swap free for new users\n🎉 20% off monthly plans this month\n🎉 Corporate discounts available\n\nWould you like to know about specific pricing for your area?";
      suggestions = ["Monthly plan details", "Corporate pricing", "First-time user offer"];
    }
    else {
      response = "I'm here to help with all your EV battery exchange needs! I can assist with:\n\n🔍 **Finding Stations** - Locate nearby exchange points\n🔋 **Battery Info** - Compatibility and specifications\n🗺️ **Route Planning** - Trip planning with charging stops\n⏰ **Station Details** - Hours, amenities, and availability\n💰 **Pricing** - Plans and payment options\n🛠️ **Technical Support** - Troubleshooting and guidance\n\nWhat would you like to know more about?";
      suggestions = ["Find stations", "Battery compatibility", "Plan a trip", "Pricing info"];
    }

    return {
      id: Date.now().toString(),
      type: 'bot',
      content: response,
      timestamp: new Date(),
      suggestions
    };
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleQuickAction = (action: string) => {
    setInputMessage(action);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // Voice recognition would be implemented here
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 min-h-screen bg-dark-900"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-electric-400 to-electric-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Bot className="h-12 w-12 text-dark-900" />
              <h1 className="text-4xl md:text-5xl font-bold text-dark-900">
                AI Assistant
              </h1>
            </div>
            <p className="text-xl text-dark-800 max-w-2xl mx-auto">
              Get instant help with station locations, battery compatibility, trip planning, and more
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Quick Actions Sidebar */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-dark-800 rounded-2xl p-6 border border-dark-700 sticky top-24">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Zap className="h-5 w-5 text-electric-400" />
                <span>Quick Actions</span>
              </h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.action)}
                    className="w-full bg-dark-700 hover:bg-dark-600 border border-dark-600 hover:border-electric-400/50 rounded-lg p-3 text-left transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-electric-400 group-hover:text-electric-300">
                        {action.icon}
                      </div>
                      <span className="text-white text-sm font-medium">
                        {action.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 p-4 bg-electric-400/10 rounded-lg border border-electric-400/20">
                <h4 className="text-electric-400 font-semibold mb-2">💡 Pro Tip</h4>
                <p className="text-sm text-gray-300">
                  Ask me about specific locations like "stations near Connaught Place" 
                  or "route from Delhi to Jaipur" for more accurate results!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Chat Interface */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-dark-800 rounded-2xl border border-dark-700 h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-dark-700 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-electric-400 rounded-full flex items-center justify-center">
                    <Bot className="h-6 w-6 text-dark-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">BharatCharge Assistant</h3>
                    <p className="text-sm text-electric-400">Online • Ready to help</p>
                  </div>
                </div>
                <button
                  onClick={toggleListening}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    isListening 
                      ? 'bg-red-500 text-white' 
                      : 'bg-dark-700 text-gray-400 hover:text-white'
                  }`}
                >
                  {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md xl:max-w-lg flex ${
                        message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                      } space-x-2`}>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'user' 
                            ? 'bg-electric-400 text-dark-900 ml-2' 
                            : 'bg-dark-700 text-electric-400 mr-2'
                        }`}>
                          {message.type === 'user' ? 
                            <User className="h-4 w-4" /> : 
                            <Bot className="h-4 w-4" />
                          }
                        </div>
                        <div>
                          <div className={`rounded-2xl px-4 py-3 ${
                            message.type === 'user'
                              ? 'bg-electric-400 text-dark-900'
                              : 'bg-dark-700 text-white'
                          }`}>
                            <p className="text-sm leading-relaxed whitespace-pre-line">
                              {message.content}
                            </p>
                          </div>
                          <p className="text-xs text-gray-400 mt-1 px-2">
                            {message.timestamp.toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </p>
                          
                          {/* Suggestions */}
                          {message.suggestions && message.suggestions.length > 0 && (
                            <div className="mt-3 space-y-2">
                              {message.suggestions.map((suggestion, index) => (
                                <button
                                  key={index}
                                  onClick={() => handleSuggestionClick(suggestion)}
                                  className="block bg-dark-600 hover:bg-dark-500 border border-dark-500 hover:border-electric-400/50 text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm transition-all duration-200 mr-2 mb-2"
                                >
                                  {suggestion}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Loading Indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex space-x-2 mr-2">
                      <div className="w-8 h-8 bg-dark-700 text-electric-400 rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="bg-dark-700 rounded-2xl px-4 py-3">
                      <div className="flex space-x-2">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-electric-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-electric-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-electric-400 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-dark-700">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask me about stations, batteries, routes..."
                    className="flex-1 bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-electric-400"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    className="bg-electric-400 hover:bg-electric-500 disabled:bg-dark-600 disabled:text-gray-400 text-dark-900 p-3 rounded-lg transition-colors duration-200"
                  >
                    {isLoading ? (
                      <RefreshCw className="h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AIAssistant;