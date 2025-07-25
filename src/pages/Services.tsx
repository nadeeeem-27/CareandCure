import React from 'react';
import { Utensils, Heart, Scale, GraduationCap, Users, HelpCircle, ArrowRight, CheckCircle, Clock, Phone, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Utensils,
      title: "Nutrition Support",
      description: "Ensuring no family goes hungry with culturally appropriate food assistance and nutritional education.",
      features: ["Emergency food pantry", "Meal planning guidance", "Nutritional workshops", "Cultural food programs"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200"
    },
    {
      icon: Heart,
      title: "Healthcare & Wellness",
      description: "Comprehensive health services that address both physical and mental well-being with cultural sensitivity.",
      features: ["Primary care referrals", "Mental health counseling", "Health screenings", "Wellness education"],
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200"
    },
    {
      icon: Scale,
      title: "Legal Guidance",
      description: "Navigating complex legal systems with expert guidance and culturally informed support.",
      features: ["Immigration consultation", "Document assistance", "Rights education", "Legal referrals"],
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200"
    },
    {
      icon: GraduationCap,
      title: "Education Navigation",
      description: "Empowering families to access quality education and advocate for their children's success.",
      features: ["School enrollment help", "Parent advocacy", "Educational resources", "Academic support"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      icon: Users,
      title: "Senior Engagement",
      description: "Creating meaningful connections and combating isolation among our senior community members.",
      features: ["Social gatherings", "Cultural events", "Companionship programs", "Recreation activities"],
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      borderColor: "border-purple-200"
    },
    {
      icon: HelpCircle,
      title: "Comprehensive Support",
      description: "Flexible assistance tailored to individual and family needs as they arise.",
      features: ["Emergency assistance", "Housing support", "Employment guidance", "Resource connections"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-200"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Reach Out",
      description: "Contact us through phone, email, or visit our community center. We speak your language.",
      icon: Phone
    },
    {
      number: "02", 
      title: "Personal Assessment",
      description: "We listen to understand your unique situation and needs with cultural sensitivity.",
      icon: Heart
    },
    {
      number: "03",
      title: "Tailored Support",
      description: "Access personalized services with ongoing support from our dedicated team.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Dynamic Layout */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <Star className="w-5 h-5 mr-3 text-yellow-400" />
                <span className="text-lg font-medium">Comprehensive Care</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Services That
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-200">
                  Transform
                </span>
                <span className="block text-3xl lg:text-4xl font-normal text-blue-100 mt-4">
                  Lives Every Day
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                From basic needs to long-term empowerment, we provide holistic support 
                that honors your journey and celebrates your potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-white text-blue-900 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  Get Help Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                  Emergency Support
                  <Phone className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6 opacity-20"></div>
                <img 
                  src="https://images.pexels.com/photos/6647054/pexels-photo-6647054.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Community support services"
                  className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">24/7</p>
                      <p className="text-sm text-gray-600">Support Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Modern Cards */}
      <section className="relative -mt-16 z-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-blue-600 font-semibold">What We Offer</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Support
              <span className="block text-blue-600">For Every Need</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services are designed with cultural sensitivity and deep understanding 
              of the immigrant experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500`}></div>
                  
                  <div className="relative p-8">
                    <div className={`bg-gradient-to-br ${service.bgColor} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 ${service.borderColor} border-2`}>
                      <IconComponent className={`w-10 h-10 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`group/btn w-full bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Access - Process Flow */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
              <Clock className="w-4 h-4 mr-2 text-green-600" />
              <span className="text-green-600 font-semibold">Getting Started</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Simple Steps to
              <span className="block text-green-600">Get Support</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've made it easy to access the help you need. No complicated forms, 
              no long waits – just compassionate support when you need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-green-200 transform translate-x-4 z-0"></div>
                  )}
                  
                  <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
                    <div className="bg-gradient-to-br from-blue-500 to-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Need Immediate Help?</h2>
                <p className="text-xl text-red-100 mb-6">
                  Crisis situations require immediate response. Our emergency support team 
                  is available 24/7 to provide urgent assistance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>24/7 emergency hotline</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Multilingual crisis support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Immediate resource connection</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="bg-white p-8 rounded-2xl shadow-xl inline-block">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Hotline</h3>
                  <a href="tel:555-911-HELP" className="text-4xl font-bold text-red-600 hover:text-red-700 transition-colors">
                    (555) 911-HELP
                  </a>
                  <p className="text-gray-600 mt-2">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Your Journey Starts Here
            </h2>
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed">
              Don't face challenges alone. Our community is here to support you 
              every step of the way toward a brighter future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <span className="flex items-center justify-center">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <a 
                href="tel:555-123-4567"
                className="group border-2 border-white/30 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Call (555) 123-4567
                <Phone className="ml-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;