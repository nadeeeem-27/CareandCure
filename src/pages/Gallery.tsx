import React, { useState } from 'react';
import { Camera, Heart, Users, Award, ArrowRight, X, Play } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/6995391/pexels-photo-6995391.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Community gathering event",
      title: "Community Unity Celebration",
      description: "Bringing together families from diverse backgrounds to celebrate our shared humanity and build lasting connections.",
      category: "Community Events"
    },
    {
      src: "https://images.pexels.com/photos/6647054/pexels-photo-6647054.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Health screening event",
      title: "Free Health Screening Day",
      description: "Providing essential healthcare services to underserved community members with cultural sensitivity and care.",
      category: "Healthcare"
    },
    {
      src: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Seniors social activity",
      title: "Seniors Social Circle",
      description: "Creating meaningful connections among senior community members to combat isolation and celebrate wisdom.",
      category: "Senior Care"
    },
    {
      src: "https://images.pexels.com/photos/6646976/pexels-photo-6646976.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Educational workshop",
      title: "Educational Empowerment Workshop",
      description: "Empowering families with knowledge and resources to navigate educational systems and advocate for their children.",
      category: "Education"
    },
    {
      src: "https://images.pexels.com/photos/6647022/pexels-photo-6647022.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Food distribution program",
      title: "Nutritional Support Program",
      description: "Ensuring no family goes hungry while respecting cultural dietary preferences and nutritional needs.",
      category: "Nutrition"
    },
    {
      src: "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Legal assistance session",
      title: "Legal Guidance Session",
      description: "Providing crucial legal information and immigration assistance to help families navigate complex systems.",
      category: "Legal Support"
    },
    {
      src: "https://images.pexels.com/photos/6646943/pexels-photo-6646943.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Youth education program",
      title: "Youth Leadership Development",
      description: "Nurturing the next generation of community leaders through mentorship and educational opportunities.",
      category: "Youth Programs"
    },
    {
      src: "https://images.pexels.com/photos/6647000/pexels-photo-6647000.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Family support meeting",
      title: "Family Empowerment Circle",
      description: "Supporting families through challenges while celebrating their resilience and cultural heritage.",
      category: "Family Support"
    },
    {
      src: "https://images.pexels.com/photos/6994945/pexels-photo-6994945.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Community volunteers",
      title: "Volunteer Appreciation Day",
      description: "Celebrating the dedicated volunteers who make our mission possible through their selfless service.",
      category: "Volunteers"
    }
  ];

  const impactStats = [
    { number: "1,200+", label: "Lives Transformed", icon: Heart, color: "from-pink-500 to-rose-500" },
    { number: "500+", label: "Families Supported", icon: Users, color: "from-blue-500 to-indigo-500" },
    { number: "2,500+", label: "Meals Provided", icon: Award, color: "from-green-500 to-emerald-500" },
    { number: "150+", label: "Seniors Engaged", icon: Camera, color: "from-purple-500 to-violet-500" }
  ];

  const categories = ["All", "Community Events", "Healthcare", "Senior Care", "Education", "Nutrition", "Legal Support", "Youth Programs", "Family Support", "Volunteers"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Creative Layout */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30">
                <Camera className="w-5 h-5 mr-3 text-pink-400" />
                <span className="text-lg font-medium">Visual Stories</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Moments of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200">
                  Hope
                </span>
                <span className="block text-3xl lg:text-4xl font-normal text-purple-100 mt-4">
                  Captured in Time
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-purple-100 leading-relaxed">
                Every photograph tells a story of resilience, community, and the transformative 
                power of compassionate care. These are the faces of change.
              </p>
            </div>
            
            <div className="lg:col-span-4 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform -rotate-6 opacity-20"></div>
                <img 
                  src="https://images.pexels.com/photos/6995391/pexels-photo-6995391.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Community celebration"
                  className="relative w-full h-80 lg:h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Play className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Watch</p>
                      <p className="text-sm text-gray-600">Our Story</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics - Floating Cards */}
      <section className="relative -mt-16 z-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`bg-gradient-to-r ${stat.color} p-4 rounded-2xl`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-gray-900">{stat.number}</p>
                      <p className="text-gray-600 font-medium">{stat.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Masonry Style */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Stories of
              <span className="block text-purple-600">Transformation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each image captures a moment where lives intersect, hope is renewed, 
              and communities grow stronger together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-4 aspect-h-5">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="inline-block px-3 py-1 bg-purple-600 rounded-full text-sm font-medium mb-3">
                      {image.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200 line-clamp-2">{image.description}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-3">
                    {image.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <img 
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-96 object-cover"
            />
            
            <div className="p-8">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
                {selectedImage.category}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedImage.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl lg:text-2xl mb-12 text-purple-100 leading-relaxed">
              Every moment captured here represents hope, transformation, and community. 
              Join us in creating more stories worth telling.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <span className="flex items-center justify-center">
                  Volunteer With Us
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group border-2 border-white/30 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                Share Your Story
                <Heart className="ml-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;