import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import {
  TrendingUp,
  Users,
  Leaf,
  DollarSign,
  Clock,
  Shield,
  Zap,
  MapPin,
  Award,
  Globe,
  Battery,
  Building
} from 'lucide-react';

const Benefits = () => {
  // Sample data for charts
  const monthlyGrowthData = [
    { month: 'Jan', users: 5000, swaps: 15000, stations: 45 },
    { month: 'Feb', users: 7500, swaps: 22500, stations: 62 },
    { month: 'Mar', users: 11200, swaps: 33600, stations: 84 },
    { month: 'Apr', users: 16800, swaps: 50400, stations: 118 },
    { month: 'May', users: 25200, swaps: 75600, stations: 165 },
    { month: 'Jun', users: 37800, swaps: 113400, stations: 231 }
  ];

  const stateWiseData = [
    { state: 'Delhi', stations: 1250, users: 15600 },
    { state: 'Maharashtra', stations: 980, users: 12800 },
    { state: 'Karnataka', stations: 760, users: 9400 },
    { state: 'Tamil Nadu', stations: 650, users: 8200 },
    { state: 'Gujarat', stations: 540, users: 6900 },
    { state: 'Rajasthan', stations: 420, users: 5100 },
    { state: 'UP', stations: 380, users: 4600 }
  ];

  const environmentalImpact = [
    { name: 'CO₂ Reduced', value: 2400, color: '#00d4ff' },
    { name: 'Fuel Saved (L)', value: 1800, color: '#10b981' },
    { name: 'Trees Equivalent', value: 3200, color: '#34d399' }
  ];

  const userBenefits = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Save Time",
      description: "3-minute battery swaps vs 45-minute charging",
      stat: "93% faster",
      color: "text-blue-400"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Save Money",
      description: "Lower operational costs and maintenance",
      stat: "₹2,400/month savings",
      color: "text-green-400"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reliability",
      description: "Government verified stations and batteries",
      stat: "99.7% uptime",
      color: "text-yellow-400"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Go Green",
      description: "Reduce carbon footprint significantly",
      stat: "80% less emissions",
      color: "text-emerald-400"
    }
  ];

  const governmentBenefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Economic Growth",
      description: "Job creation and infrastructure development",
      impact: "15,000+ jobs created"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Environmental Goals",
      description: "Supporting India's net-zero carbon commitment",
      impact: "2.4M tons CO₂ saved annually"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Energy Independence",
      description: "Reducing oil imports and promoting self-reliance",
      impact: "₹12,000 Cr. import savings"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Smart Cities",
      description: "Supporting digital infrastructure initiatives",
      impact: "28 states covered"
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Benefits & Impact
            </h1>
            <p className="text-xl text-dark-800 max-w-3xl mx-auto">
              Discover how BharatCharge is transforming India's mobility landscape 
              with sustainable benefits for users, businesses, and the government
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Metrics */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platform Impact
            </h2>
            <p className="text-xl text-gray-300">Real-time metrics showcasing our growing impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <Users />, label: "Active Users", value: "50,000+", growth: "+127%" },
              { icon: <MapPin />, label: "Stations", value: "5,200+", growth: "+89%" },
              { icon: <Battery />, label: "Battery Swaps", value: "1.2M+", growth: "+156%" },
              { icon: <Globe />, label: "States Covered", value: "28", growth: "+40%" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-dark-800 p-6 rounded-2xl border border-dark-700 text-center"
              >
                <div className="text-electric-400 mb-3 flex justify-center">
                  {React.cloneElement(metric.icon, { className: "h-8 w-8" })}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-gray-300 mb-2">{metric.label}</div>
                <div className="text-green-400 text-sm font-semibold">{metric.growth}</div>
              </motion.div>
            ))}
          </div>

          {/* Growth Chart */}
          <div className="bg-dark-800 p-6 rounded-2xl border border-dark-700">
            <h3 className="text-xl font-bold text-white mb-6">Platform Growth Trajectory</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="users"
                  stackId="1"
                  stroke="#00d4ff"
                  fill="#00d4ff"
                  fillOpacity={0.3}
                  name="Users"
                />
                <Area
                  type="monotone"
                  dataKey="swaps"
                  stackId="2"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.3}
                  name="Battery Swaps"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.section>

        {/* User Benefits */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits for <span className="text-electric-400">EV Users</span>
            </h2>
            <p className="text-xl text-gray-300">Experience the advantages of smart battery exchange</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {userBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-dark-800 p-6 rounded-2xl border border-dark-700 hover:border-electric-400/30 transition-all duration-300"
              >
                <div className={`${benefit.color} mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className={`${benefit.color} font-bold text-lg`}>{benefit.stat}</div>
              </motion.div>
            ))}
          </div>

          {/* State-wise Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-dark-800 p-6 rounded-2xl border border-dark-700">
              <h3 className="text-xl font-bold text-white mb-6">State-wise Station Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={stateWiseData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="state" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="stations" fill="#00d4ff" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-dark-800 p-6 rounded-2xl border border-dark-700">
              <h3 className="text-xl font-bold text-white mb-6">Environmental Impact</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={environmentalImpact}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {environmentalImpact.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.section>

        {/* Government Benefits */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits for <span className="text-electric-400">Government</span>
            </h2>
            <p className="text-xl text-gray-300">Supporting national objectives and policy goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {governmentBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-dark-800 p-8 rounded-2xl border border-dark-700 hover:border-electric-400/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-electric-400 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
                    <div className="bg-electric-400/10 border border-electric-400/20 rounded-lg p-3">
                      <div className="text-electric-400 font-bold">{benefit.impact}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ROI Calculator */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-electric-400/10 to-electric-600/10 border border-electric-400/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Calculate Your Savings
              </h2>
              <p className="text-xl text-gray-300">See how much you can save by switching to BharatCharge</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-dark-800 p-6 rounded-xl border border-dark-700">
                  <DollarSign className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Monthly Savings</h3>
                  <div className="text-3xl font-bold text-green-400 mb-2">₹2,400</div>
                  <p className="text-gray-300 text-sm">vs traditional charging</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-dark-800 p-6 rounded-xl border border-dark-700">
                  <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Time Saved</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-2">42 hrs</div>
                  <p className="text-gray-300 text-sm">per month</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-dark-800 p-6 rounded-xl border border-dark-700">
                  <Leaf className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">CO₂ Reduced</h3>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">180 kg</div>
                  <p className="text-gray-300 text-sm">per month</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Future Roadmap */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Future Roadmap
            </h2>
            <p className="text-xl text-gray-300">Our vision for India's electric mobility future</p>
          </div>

          <div className="bg-dark-800 p-8 rounded-2xl border border-dark-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  year: "2024",
                  title: "Scale Up",
                  goals: ["10,000+ stations", "All tier-1 cities", "2M+ users"]
                },
                {
                  year: "2025",
                  title: "Rural Expansion",
                  goals: ["Rural connectivity", "Highway corridors", "5M+ users"]
                },
                {
                  year: "2026",
                  title: "Smart Integration",
                  goals: ["IoT integration", "AI optimization", "Carbon neutral"]
                }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-electric-400 mb-3">{phase.year}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="text-gray-300 flex items-center justify-center space-x-2">
                        <Award className="h-4 w-4 text-electric-400" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Benefits;