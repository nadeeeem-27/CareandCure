import React from 'react';
import { Users, Target, Heart, Globe, Award, CheckCircle, ArrowRight, Lightbulb, Shield, Compass } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Diagonal Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-800 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <Heart className="w-5 h-5 mr-3 text-pink-400" />
                <span className="text-lg font-medium">Our Story</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Building
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-200">
                  Bridges
                </span>
                <span className="block text-3xl lg:text-4xl font-normal text-blue-100 mt-4">
                  to the American Dream
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Every immigrant's journey is unique, but no one should walk it alone. 
                We're here to light the path forward.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-3xl transform -rotate-3 opacity-20"></div>
              <img 
                src="https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Community volunteers working together"
                className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Floating Cards */}
      <section className="relative -mt-20 z-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-16 border border-gray-100">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                <Compass className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-blue-600 font-semibold">Our Mission</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why We Exist
              </h2>
            </div>
            
            <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed">
              <p className="text-2xl font-light text-gray-600 mb-8 text-center">
                To create and establish a non-profit organization serving underserved immigrant 
                communities in Des Plaines, Niles, and surrounding neighborhoods.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                <div className="space-y-6">
                  <p>
                    While many immigrants have successfully navigated their new life in America, 
                    there are many more who are just beginning their journey to actualizing the American Dream.
                  </p>
                  <p>
                    There are many obstacles and hurdles to clear. Lack of adequate resources, 
                    information, and guidance add to the difficulties faced by these individuals.
                  </p>
                </div>
                <div className="space-y-6">
                  <p>
                    The need for such a facility is based upon information obtained from city governments, 
                    along with surveys conducted through various community organizations, including faith-based organizations.
                  </p>
                  <p>
                    A place such as Care and Cure will assist and facilitate an improved quality of life 
                    through comprehensive support and compassionate care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section - Modern Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
              <Shield className="w-4 h-4 mr-2 text-red-600" />
              <span className="text-red-600 font-semibold">The Reality</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Understanding the
              <span className="block text-red-600">Challenges</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Behind every statistic is a human story. These are the real challenges 
              our community faces every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Senior Citizens Challenge */}
            <div className="group relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative">
                <div className="bg-orange-100 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Vulnerable Seniors</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Senior citizens who may have led full lives in their native lands now face 
                  new challenges: language barriers leading to isolation, inadequate housing, 
                  food insecurity, and healthcare gaps.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-600">Cultural and linguistic barriers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-600">Social and emotional isolation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-600">Unmet expectations and family conflicts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Employment Challenge */}
            <div className="group relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative">
                <div className="bg-blue-100 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Employment Barriers</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Many newly arrived families struggle to find viable employment opportunities. 
                  State assistance may not be available due to various circumstances, 
                  leaving families in precarious situations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-600">Limited job opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-600">Credential recognition issues</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-600">Lack of professional networks</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cultural Barriers */}
            <div className="group relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative">
                <div className="bg-green-100 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Hidden Struggles</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Many individuals remain undetected for long periods due to cultural, 
                  religious, and linguistic differences, preventing them from accessing 
                  desperately needed help and resources.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-600">Communication barriers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-600">Cultural misunderstandings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-600">Fear of seeking help</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Family Dynamics */}
            <div className="group relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative">
                <div className="bg-purple-100 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Family Conflicts</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Generational differences, lifestyle changes, and unmet expectations 
                  create social, emotional, and economic conflicts within families, 
                  often leaving seniors feeling abandoned.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-600">Generational gaps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-600">Economic pressures</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-600">Emotional neglect</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Asymmetric Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl transform rotate-6 opacity-20"></div>
                <img 
                  src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Seniors in supportive community"
                  className="relative w-full h-[400px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Comprehensive</p>
                      <p className="text-sm text-gray-600">Support System</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
                <Lightbulb className="w-4 h-4 mr-2 text-green-600" />
                <span className="text-green-600 font-semibold">Our Approach</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive
                <span className="block text-green-600">Solutions</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Care & Cure addresses these challenges through a holistic approach that 
                treats each person with dignity, respect, and cultural sensitivity.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Healthcare & Mental Health</h3>
                  <p className="text-gray-700 text-sm">Comprehensive health services and emotional support</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                  <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Social Engagement</h3>
                  <p className="text-gray-700 text-sm">Programs to combat isolation and build community</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                  <div className="bg-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Legal Assistance</h3>
                  <p className="text-gray-700 text-sm">Immigration support and legal guidance</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200">
                  <div className="bg-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Cultural Bridge</h3>
                  <p className="text-gray-700 text-sm">Multilingual support and cultural understanding</p>
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
              Be Part of the Solution
            </h2>
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed">
              Every challenge we face is an opportunity to make a difference. 
              Join us in building a stronger, more inclusive community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <span className="flex items-center justify-center">
                  Learn About Our Services
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group border-2 border-white/30 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                Contact Us Today
                <Heart className="ml-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;