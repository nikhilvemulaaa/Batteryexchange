import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Navigation, 
  Battery, 
  Clock, 
  Phone, 
  Star,
  Filter,
  Search,
  RefreshCw,
  Zap,
  Calendar,
  Info,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Wifi,
  Coffee,
  Car,
  Shield,
  CreditCard,
  Users,
  Truck,
  X
} from 'lucide-react';

interface Station {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  distance: number;
  availableBatteries: number;
  totalSlots: number;
  rating: number;
  operatingHours: string;
  phone: string;
  batteryTypes: string[];
  amenities: string[];
  coordinates: [number, number];
  is24x7: boolean;
  pricePerSwap: number;
  estimatedWaitTime: number;
  lastUpdated: string;
  managerName: string;
  emergencyContact: string;
  paymentMethods: string[];
  vehicleTypes: string[];
  description: string;
  images: string[];
}

const StationLocator = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedBatteryType, setSelectedBatteryType] = useState('');
  const [sortBy, setSortBy] = useState('distance');
  const [isLoading, setIsLoading] = useState(true);
  const [stations, setStations] = useState<Station[]>([]);
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [reservationData, setReservationData] = useState({
    date: '',
    time: '',
    batteryType: '',
    vehicleModel: '',
    phone: '',
    name: ''
  });

  // Enhanced mock data with Telangana focus and 24x7 services
  const mockStations: Station[] = [
    {
      id: '1',
      name: 'BharatCharge Hub - Connaught Place',
      address: 'Block A, Connaught Place, Central Delhi',
      city: 'Delhi',
      state: 'Delhi',
      distance: 0.8,
      availableBatteries: 15,
      totalSlots: 20,
      rating: 4.8,
      operatingHours: '24/7',
      phone: '+91 11 2334 5567',
      batteryTypes: ['48V 30Ah', '60V 32Ah', '72V 40Ah'],
      amenities: ['Fast Charging', 'Cafe', 'Restroom', 'WiFi', 'Security', 'ATM'],
      coordinates: [28.6139, 77.2090],
      is24x7: true,
      pricePerSwap: 65,
      estimatedWaitTime: 2,
      lastUpdated: '2 mins ago',
      managerName: 'Rajesh Kumar',
      emergencyContact: '+91 11 2334 5568',
      paymentMethods: ['UPI', 'Card', 'Cash', 'Wallet'],
      vehicleTypes: ['Scooter', 'Bike', 'Auto'],
      description: 'Premium 24x7 battery exchange hub in the heart of Delhi with full amenities and emergency support.',
      images: ['https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg']
    },
    {
      id: '2',
      name: 'PowerSwap Station - Banjara Hills',
      address: 'Road No. 12, Banjara Hills, Hyderabad',
      city: 'Hyderabad',
      state: 'Telangana',
      distance: 2.3,
      availableBatteries: 18,
      totalSlots: 24,
      rating: 4.9,
      operatingHours: '24/7',
      phone: '+91 40 2335 6789',
      batteryTypes: ['48V 30Ah', '60V 32Ah', '72V 40Ah'],
      amenities: ['Fast Charging', 'Parking', 'Security', 'WiFi', 'Cafe', 'EV Service'],
      coordinates: [17.4126, 78.4482],
      is24x7: true,
      pricePerSwap: 58,
      estimatedWaitTime: 1,
      lastUpdated: '1 min ago',
      managerName: 'Srinivas Reddy',
      emergencyContact: '+91 40 2335 6790',
      paymentMethods: ['UPI', 'Card', 'Wallet'],
      vehicleTypes: ['Scooter', 'Bike', 'Auto', 'Car'],
      description: 'State-of-the-art 24x7 facility in Banjara Hills with premium services and fastest battery swaps in Telangana.',
      images: ['https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg']
    },
    {
      id: '3',
      name: 'EcoCharge Point - HITEC City',
      address: 'Cyber Towers, HITEC City, Hyderabad',
      city: 'Hyderabad',
      state: 'Telangana',
      distance: 1.5,
      availableBatteries: 22,
      totalSlots: 28,
      rating: 4.7,
      operatingHours: '24/7',
      phone: '+91 40 4012 3456',
      batteryTypes: ['48V 30Ah', '72V 40Ah', '60V 32Ah', '84V 50Ah'],
      amenities: ['Fast Charging', 'Cafe', 'ATM', 'Parking', 'WiFi', 'Food Court', 'Shopping'],
      coordinates: [17.4435, 78.3772],
      is24x7: true,
      pricePerSwap: 62,
      estimatedWaitTime: 3,
      lastUpdated: '3 mins ago',
      managerName: 'Priya Sharma',
      emergencyContact: '+91 40 4012 3457',
      paymentMethods: ['UPI', 'Card', 'Cash', 'Wallet', 'Corporate'],
      vehicleTypes: ['Scooter', 'Bike', 'Auto', 'Car', 'Commercial'],
      description: 'Premium tech hub location with 24x7 operations, serving IT professionals and commercial vehicles.',
      images: ['https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg']
    },
    {
      id: '4',
      name: 'GreenPower Exchange - Gachibowli',
      address: 'DLF Cyber City, Gachibowli, Hyderabad',
      city: 'Hyderabad',
      state: 'Telangana',
      distance: 4.2,
      availableBatteries: 16,
      totalSlots: 20,
      rating: 4.6,
      operatingHours: '24/7',
      phone: '+91 40 6789 1234',
      batteryTypes: ['48V 30Ah', '60V 32Ah', '72V 40Ah'],
      amenities: ['Fast Charging', 'Security', 'Parking', 'WiFi', 'Restroom'],
      coordinates: [17.4239, 78.3428],
      is24x7: true,
      pricePerSwap: 60,
      estimatedWaitTime: 4,
      lastUpdated: '5 mins ago',
      managerName: 'Venkat Rao',
      emergencyContact: '+91 40 6789 1235',
      paymentMethods: ['UPI', 'Card', 'Wallet'],
      vehicleTypes: ['Scooter', 'Bike', 'Auto'],
      description: 'Strategic location in Gachibowli tech corridor with 24x7 service and corporate tie-ups.',
      images: ['https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg']
    },
    {
      id: '5',
      name: 'TelanganaCharge Hub - Secunderabad',
      address: 'SP Road, Secunderabad, Hyderabad',
      city: 'Secunderabad',
      state: 'Telangana',
      distance: 8.1,
      availableBatteries: 12,
      totalSlots: 16,
      rating: 4.5,
      operatingHours: '24/7',
      phone: '+91 40 2784 5678',
      batteryTypes: ['48V 30Ah', '60V 32Ah'],
      amenities: ['Fast Charging', 'Railway Station Access', 'Security', 'Food Court'],
      coordinates: [17.5040, 78.4993],
      is24x7: true,
      pricePerSwap: 55,
      estimatedWaitTime: 6,
      lastUpdated: '4 mins ago',
      managerName: 'Lakshmi Devi',
      emergencyContact: '+91 40 2784 5679',
      paymentMethods: ['UPI', 'Card', 'Cash'],
      vehicleTypes: ['Scooter', 'Bike', 'Auto'],
      description: 'Convenient railway station location with 24x7 operations for commuters and travelers.',
      images: ['https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg']
    },
    {
      id: '6',
      name: 'SmartCharge Station - Warangal',
      address: 'Main Road, Hanamkonda, Warangal',
      city: 'Warangal',
      state: 'Telangana',
      distance: 145.3,
      availableBatteries: 8,
      totalSlots: 12,
      rating: 4.4,
      operatingHours: '24/7',
      phone: '+91 870 2456 789',
      batteryTypes: ['48V 30Ah', '60V 32Ah'],
      amenities: ['Fast Charging', 'Parking', 'Restroom', 'Local Food'],
      coordinates: [17.9689, 79.5941],
      is24x7: true,
      pricePerSwap: 50,
      estimatedWaitTime: 8,
      lastUpdated: '7 mins ago',
      managerName: 'Ramesh Goud',
      emergencyContact: '+91 870 2456 790',
      paymentMethods: ['UPI', 'Cash'],
      vehicleTypes: ['Scooter', 'Bike'],
      description: 'First 24x7 battery exchange station in Warangal district, serving rural and urban areas.',
      images: ['https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg']
    }
  ];

  const indianStates = [
    'Delhi', 'Telangana', 'Maharashtra', 'Karnataka', 'Uttar Pradesh', 'Tamil Nadu',
    'Gujarat', 'Rajasthan', 'West Bengal', 'Madhya Pradesh'
  ];

  const batteryTypes = ['48V 30Ah', '60V 32Ah', '72V 40Ah', '84V 50Ah'];

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setStations(mockStations);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredStations = stations.filter(station => {
    const matchesSearch = station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         station.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         station.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState = !selectedState || station.state === selectedState;
    const matchesBatteryType = !selectedBatteryType || station.batteryTypes.includes(selectedBatteryType);
    
    return matchesSearch && matchesState && matchesBatteryType;
  });

  const sortedStations = [...filteredStations].sort((a, b) => {
    switch (sortBy) {
      case 'distance':
        return a.distance - b.distance;
      case 'rating':
        return b.rating - a.rating;
      case 'availability':
        return b.availableBatteries - a.availableBatteries;
      case 'price':
        return a.pricePerSwap - b.pricePerSwap;
      default:
        return 0;
    }
  });

  const handleGetDirections = (station: Station) => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${station.coordinates[0]},${station.coordinates[1]}&travelmode=driving`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleReserveSlot = (station: Station) => {
    setSelectedStation(station);
    setShowReservationModal(true);
  };

  const handleReservationSubmit = () => {
    // Simulate reservation API call
    alert(`Reservation confirmed at ${selectedStation?.name}!\nDate: ${reservationData.date}\nTime: ${reservationData.time}\nBattery: ${reservationData.batteryType}`);
    setShowReservationModal(false);
    setReservationData({ date: '', time: '', batteryType: '', vehicleModel: '', phone: '', name: '' });
  };

  const getAvailabilityColor = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (percentage > 60) return 'text-green-400';
    if (percentage > 30) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getWaitTimeColor = (waitTime: number) => {
    if (waitTime <= 3) return 'text-green-400';
    if (waitTime <= 6) return 'text-yellow-400';
    return 'text-red-400';
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Find Battery Exchange Stations
            </h1>
            <p className="text-xl text-dark-800 max-w-2xl mx-auto">
              Locate verified 24x7 stations near you with real-time battery availability across India
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-dark-800">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>24x7 Service Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Government Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>Instant Reservations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-dark-800 rounded-2xl p-6 mb-8 border border-dark-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Search */}
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by city, area, or station name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-dark-700 border border-dark-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-electric-400"
              />
            </div>

            {/* State Filter */}
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-400"
            >
              <option value="">All States</option>
              {indianStates.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>

            {/* Battery Type Filter */}
            <select
              value={selectedBatteryType}
              onChange={(e) => setSelectedBatteryType(e.target.value)}
              className="bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-400"
            >
              <option value="">All Battery Types</option>
              {batteryTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-dark-700 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-400"
            >
              <option value="distance">Sort by Distance</option>
              <option value="rating">Sort by Rating</option>
              <option value="availability">Sort by Availability</option>
              <option value="price">Sort by Price</option>
            </select>

            {/* 24x7 Filter */}
            <div className="flex items-center justify-center bg-dark-700 border border-dark-600 rounded-lg px-4 py-3">
              <Clock className="h-5 w-5 text-electric-400 mr-2" />
              <span className="text-white text-sm font-medium">24x7 Only</span>
            </div>
          </div>
        </motion.div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Station List */}
          <div className="lg:col-span-2">
            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="text-electric-400"
                >
                  <RefreshCw className="h-8 w-8" />
                </motion.div>
                <span className="ml-3 text-gray-300">Loading stations...</span>
              </div>
            ) : (
              <div className="space-y-6">
                {sortedStations.map((station, index) => (
                  <motion.div
                    key={station.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-dark-800 rounded-2xl p-6 border border-dark-700 hover:border-electric-400/30 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{station.name}</h3>
                          {station.is24x7 && (
                            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                              24x7
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 mb-1">{station.address}</p>
                        <p className="text-gray-400 text-sm">{station.city}, {station.state}</p>
                        <p className="text-gray-500 text-xs mt-1">Updated: {station.lastUpdated}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{station.rating}</span>
                        </div>
                        <p className="text-electric-400 font-semibold">{station.distance} km away</p>
                        <p className="text-green-400 text-sm font-semibold">₹{station.pricePerSwap}/swap</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                      <div className="text-center">
                        <Battery className="h-6 w-6 text-electric-400 mx-auto mb-1" />
                        <p className="text-sm text-gray-300">Available</p>
                        <p className={`font-bold ${getAvailabilityColor(station.availableBatteries, station.totalSlots)}`}>
                          {station.availableBatteries}/{station.totalSlots}
                        </p>
                      </div>
                      <div className="text-center">
                        <Clock className="h-6 w-6 text-electric-400 mx-auto mb-1" />
                        <p className="text-sm text-gray-300">Wait Time</p>
                        <p className={`font-bold ${getWaitTimeColor(station.estimatedWaitTime)}`}>
                          {station.estimatedWaitTime} min
                        </p>
                      </div>
                      <div className="text-center">
                        <Phone className="h-6 w-6 text-electric-400 mx-auto mb-1" />
                        <p className="text-sm text-gray-300">Contact</p>
                        <p className="font-bold text-white text-xs">{station.phone}</p>
                      </div>
                      <div className="text-center">
                        <Zap className="h-6 w-6 text-electric-400 mx-auto mb-1" />
                        <p className="text-sm text-gray-300">Types</p>
                        <p className="font-bold text-white text-xs">{station.batteryTypes.length} types</p>
                      </div>
                      <div className="text-center">
                        <Users className="h-6 w-6 text-electric-400 mx-auto mb-1" />
                        <p className="text-sm text-gray-300">Manager</p>
                        <p className="font-bold text-white text-xs">{station.managerName}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {station.amenities.slice(0, 4).map(amenity => (
                        <span
                          key={amenity}
                          className="bg-dark-700 text-electric-400 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {amenity}
                        </span>
                      ))}
                      {station.amenities.length > 4 && (
                        <span className="bg-dark-700 text-gray-400 px-3 py-1 rounded-full text-xs">
                          +{station.amenities.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-3">
                      <button 
                        onClick={() => handleGetDirections(station)}
                        className="flex-1 bg-electric-400 hover:bg-electric-500 text-dark-900 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <Navigation className="h-4 w-4" />
                        <span>Get Directions</span>
                      </button>
                      <button 
                        onClick={() => handleReserveSlot(station)}
                        className="flex-1 border border-electric-400 text-electric-400 hover:bg-electric-400 hover:text-dark-900 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <Calendar className="h-4 w-4" />
                        <span>Reserve Slot</span>
                      </button>
                      <button 
                        onClick={() => setSelectedStation(station)}
                        className="bg-dark-700 hover:bg-dark-600 text-white py-3 px-4 rounded-lg transition-colors duration-200"
                      >
                        <Info className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Map and Info Sidebar */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-dark-800 rounded-2xl p-6 border border-dark-700">
              <h3 className="text-xl font-bold text-white mb-4">Station Map</h3>
              <div className="bg-dark-700 rounded-lg h-64 flex items-center justify-center border border-dark-600">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-electric-400 mx-auto mb-3" />
                  <p className="text-gray-300">Interactive map coming soon</p>
                  <p className="text-sm text-gray-400">Real-time station locations</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-dark-800 rounded-2xl p-6 border border-dark-700">
              <h4 className="font-semibold text-white mb-4">Quick Stats</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Total Stations Found:</span>
                  <span className="text-electric-400 font-semibold">{sortedStations.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">24x7 Stations:</span>
                  <span className="text-green-400 font-semibold">
                    {sortedStations.filter(s => s.is24x7).length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Avg. Distance:</span>
                  <span className="text-electric-400 font-semibold">
                    {sortedStations.length > 0 
                      ? (sortedStations.reduce((sum, s) => sum + s.distance, 0) / sortedStations.length).toFixed(1)
                      : '0'} km
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Available Batteries:</span>
                  <span className="text-electric-400 font-semibold">
                    {sortedStations.reduce((sum, s) => sum + s.availableBatteries, 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Avg. Price:</span>
                  <span className="text-green-400 font-semibold">
                    ₹{sortedStations.length > 0 
                      ? Math.round(sortedStations.reduce((sum, s) => sum + s.pricePerSwap, 0) / sortedStations.length)
                      : '0'}
                  </span>
                </div>
              </div>
            </div>

            {/* Telangana Special Info */}
            {selectedState === 'Telangana' && (
              <div className="bg-gradient-to-r from-electric-400/10 to-electric-600/10 border border-electric-400/20 rounded-2xl p-6">
                <h4 className="font-semibold text-white mb-4 flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-electric-400" />
                  <span>Telangana EV Initiative</span>
                </h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <p>• All stations offer 24x7 service</p>
                  <p>• Government subsidized rates</p>
                  <p>• Special corporate packages available</p>
                  <p>• Emergency roadside assistance</p>
                  <p>• Integration with TS-iPASS portal</p>
                </div>
                <div className="mt-4 p-3 bg-electric-400/10 rounded-lg">
                  <p className="text-electric-400 font-semibold text-sm">
                    🎉 Special Offer: 20% off first 5 swaps for Telangana residents!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reservation Modal */}
      <AnimatePresence>
        {showReservationModal && selectedStation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-800 rounded-2xl p-6 w-full max-w-md border border-dark-700"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Reserve Battery Slot</h3>
                <button
                  onClick={() => setShowReservationModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-4 p-4 bg-dark-700 rounded-lg">
                <h4 className="font-semibold text-white mb-2">{selectedStation.name}</h4>
                <p className="text-gray-300 text-sm">{selectedStation.address}</p>
                <p className="text-electric-400 text-sm font-semibold">₹{selectedStation.pricePerSwap}/swap</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                    <input
                      type="date"
                      value={reservationData.date}
                      onChange={(e) => setReservationData({...reservationData, date: e.target.value})}
                      className="w-full bg-dark-700 border border-dark-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-electric-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Time</label>
                    <input
                      type="time"
                      value={reservationData.time}
                      onChange={(e) => setReservationData({...reservationData, time: e.target.value})}
                      className="w-full bg-dark-700 border border-dark-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-electric-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Battery Type</label>
                  <select
                    value={reservationData.batteryType}
                    onChange={(e) => setReservationData({...reservationData, batteryType: e.target.value})}
                    className="w-full bg-dark-700 border border-dark-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-electric-400"
                  >
                    <option value="">Select Battery Type</option>
                    {selectedStation.batteryTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Vehicle Model</label>
                  <input
                    type="text"
                    placeholder="e.g., Ather 450X"
                    value={reservationData.vehicleModel}
                    onChange={(e) => setReservationData({...reservationData, vehicleModel: e.target.value})}
                    className="w-full bg-dark-700 border border-dark-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-electric-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={reservationData.name}
                    onChange={(e) => setReservationData({...reservationData, name: e.target.value})}
                    className="w-full bg-dark-700 border border-dark-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-electric-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={reservationData.phone}
                    onChange={(e) => setReservationData({...reservationData, phone: e.target.value})}
                    className="w-full bg-dark-700 border border-dark-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-electric-400"
                  />
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowReservationModal(false)}
                  className="flex-1 border border-gray-600 text-gray-300 py-3 rounded-lg font-semibold hover:bg-dark-700 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReservationSubmit}
                  disabled={!reservationData.date || !reservationData.time || !reservationData.batteryType || !reservationData.name || !reservationData.phone}
                  className="flex-1 bg-electric-400 hover:bg-electric-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-dark-900 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Confirm Reservation
                </button>
              </div>

              <div className="mt-4 p-3 bg-electric-400/10 border border-electric-400/20 rounded-lg">
                <p className="text-electric-400 text-sm">
                  💡 Reservation will be held for 30 minutes. SMS confirmation will be sent.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Station Details Modal */}
      <AnimatePresence>
        {selectedStation && !showReservationModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-800 rounded-2xl p-6 w-full max-w-2xl border border-dark-700 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">{selectedStation.name}</h3>
                <button
                  onClick={() => setSelectedStation(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Station Information</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-300">{selectedStation.address}</p>
                      <p className="text-gray-300">{selectedStation.city}, {selectedStation.state}</p>
                      <p className="text-electric-400">📞 {selectedStation.phone}</p>
                      <p className="text-red-400">🚨 Emergency: {selectedStation.emergencyContact}</p>
                      <p className="text-gray-300">👨‍💼 Manager: {selectedStation.managerName}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3">Service Details</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-green-400">⏰ {selectedStation.operatingHours}</p>
                      <p className="text-electric-400">💰 ₹{selectedStation.pricePerSwap} per swap</p>
                      <p className="text-yellow-400">⏱️ {selectedStation.estimatedWaitTime} min wait</p>
                      <p className="text-gray-300">🔋 {selectedStation.availableBatteries}/{selectedStation.totalSlots} available</p>
                      <p className="text-gray-400">Updated: {selectedStation.lastUpdated}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Description</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedStation.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Battery Types Available</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedStation.batteryTypes.map(type => (
                      <span key={type} className="bg-electric-400/20 text-electric-400 px-3 py-1 rounded-full text-sm font-medium">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Vehicle Types Supported</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedStation.vehicleTypes.map(type => (
                      <span key={type} className="bg-dark-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Payment Methods</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedStation.paymentMethods.map(method => (
                      <span key={method} className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Amenities</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {selectedStation.amenities.map(amenity => (
                      <div key={amenity} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleGetDirections(selectedStation)}
                    className="flex-1 bg-electric-400 hover:bg-electric-500 text-dark-900 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Navigation className="h-4 w-4" />
                    <span>Get Directions</span>
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedStation(selectedStation);
                      setShowReservationModal(true);
                    }}
                    className="flex-1 border border-electric-400 text-electric-400 hover:bg-electric-400 hover:text-dark-900 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Reserve Slot</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default StationLocator;