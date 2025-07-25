import React from 'react';
import { ArrowRight, Users, Heart, Shield, Hand as Hands, Star, CheckCircle, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Asymmetric Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-20 lg:py-32">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                <span className="text-sm font-medium">Serving Communities Since 2024</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Empowering
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                  Dreams
                </span>
                <span className="block text-4xl lg:text-5xl font-normal text-blue-100">
                  One Family at a Time
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                Transforming lives in Des Plaines, Niles, and beyond through comprehensive support, 
                compassionate care, and unwavering commitment to immigrant communities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/services"
                  className="group bg-white text-blue-900 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  Discover Our Impact
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact"
                  className="group border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Join Our Mission
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6 opacity-20"></div>
                <img 
                  src="/Gathering.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="Community gathering"
                  className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">500+</p>
                      <p className="text-sm text-gray-600">Families Helped</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats - Floating Cards */}
      <section className="relative -mt-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl backdrop-blur-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">1,200+</p>
                  <p className="text-gray-600">Lives Touched</p>
                </div>
              </div>
              <p className="text-gray-700">Individuals and families supported through our comprehensive programs</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl backdrop-blur-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">150+</p>
                  <p className="text-gray-600">Seniors Cared For</p>
                </div>
              </div>
              <p className="text-gray-700">Senior citizens receiving dedicated support and social engagement</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl backdrop-blur-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">6</p>
                  <p className="text-gray-600">Languages Spoken</p>
                </div>
              </div>
              <p className="text-gray-700">Multilingual support breaking down communication barriers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Modern Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-blue-600 font-semibold">What We Do</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Support
              <span className="block text-blue-600">For Every Need</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From healthcare to legal assistance, we provide holistic support that addresses 
              the unique challenges faced by immigrant communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare & Wellness</h3>
                <p className="text-gray-600 mb-6">Comprehensive health services including mental health support and wellness programs.</p>
                <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
            
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative">
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Legal Guidance</h3>
                <p className="text-gray-600 mb-6">Immigration assistance and legal information to help navigate complex processes.</p>
                <Link to="/services" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
            
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative">
                <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Hands className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community Connection</h3>
                <p className="text-gray-600 mb-6">Social engagement programs that build bridges and combat isolation.</p>
                <Link to="/services" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Modern Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                <Award className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-blue-600 font-semibold">Leadership</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Visionary Leadership
                <span className="block text-blue-600">Driving Change</span>
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-3xl border border-blue-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">[Leader Name]</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">Founder & Executive Director</p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    With unwavering dedication to immigrant communities and years of experience in social advocacy, 
                    our leader brings a unique blend of compassion, strategic vision, and cultural understanding 
                    to Care & Cure's transformative mission.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Community Advocate</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Cultural Bridge Builder</span>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="/about"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Discover Our Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl transform rotate-3 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-3xl transform -rotate-3 opacity-20"></div>
                <img 
                  src="/Leader.jpg"
                  alt="Organization Leader"
                  className="relative w-full h-[550px] object-cover object-top rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">5+</p>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Modern Design */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white relative overflow-hidden">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to Transform Lives?
            </h2>
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed">
              Join our mission to create lasting change in immigrant communities. 
              Every contribution, every volunteer hour, every act of kindness matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <span className="flex items-center justify-center">
                  Make a Donation
                  <Heart className="ml-2 h-6 w-6 group-hover:scale-110 transition-transform" />
                </span>
              </button>
              <Link 
                to="/contact"
                className="group border-2 border-white/30 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Volunteer Today
                <Users className="ml-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
