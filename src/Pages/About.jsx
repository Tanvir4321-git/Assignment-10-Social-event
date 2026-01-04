import React from 'react';
import { FaUsers, FaBullseye, FaHeart, FaAward } from 'react-icons/fa';

export default function About() {
  const stats = [
    { icon: FaUsers, value: "50K+", label: "Volunteers" },
    { icon: FaBullseye, value: "200+", label: "Projects Completed" },
    { icon: FaHeart, value: "100K+", label: "Lives Impacted" },
    { icon: FaAward, value: "15+", label: "Years of Service" }
  ];

  const values = [
    {
      title: "Our Mission",
      description: "To create sustainable social impact through community-driven initiatives that promote environmental conservation, health awareness, and social welfare for all.",
      color: "bg-green-50"
    },
    {
      title: "Our Vision",
      description: "A world where every community thrives with clean environment, accessible healthcare, and equal opportunities for growth and development.",
      color: "bg-green-50"
    },
    {
      title: "Our Values",
      description: "Integrity, compassion, sustainability, and collaboration guide everything we do. We believe in empowering communities to create lasting positive change.",
      color: "bg-green-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20 px-4">
        <div className="max-w-11/12 mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">About Us</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto leading-relaxed">
            Building a better tomorrow through social development and environmental sustainability
          </p>
        </div>
      </div>

      
      <div className="max-w-11/12 mx-auto px-4 -mt-12  ">
        <div className="grid grid-cols-2  md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl z-50 shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-green-600" />
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="max-w-11/12 mx-auto px-4 py-20">
        <div className="flex lg:flex-row flex-col-reverse gap-12 items-center">
          <div className='flex-1'>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2010, Social Development began with a simple mission: to make our communities cleaner, healthier, and more sustainable. What started as a small tree plantation initiative has grown into a comprehensive social impact organization.
              </p>
              <p>
                Over the years, we've expanded our reach to include environmental protection, humanitarian services, and health awareness programs. Our dedicated team of volunteers and partners work tirelessly to create lasting positive change in communities across the region.
              </p>
              <p>
                Today, we're proud to have impacted over 100,000 lives through our various programs, planted thousands of trees, and built a network of passionate changemakers committed to social development.
              </p>
            </div>
          </div>
          <div className="w-full flex-1">
            <div className="bg-green-200 rounded-3xl h-96 flex items-center justify-center">
              <div className="text-center text-green-800">
                <div className="text-6xl mb-4">🌱</div>
                <p className="text-xl font-semibold">Growing Communities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-white py-20">
        <div className="max-w-11/12 mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Drives Us</h2>
          <div className="grid md:grid-cols-3 gap-4 lg:gap-8">
            {values.map((item, index) => (
              <div key={index} className={`${item.color} rounded-2xl p-4 lg:p-8 transform hover:scale-105 transition-transform`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="max-w-11/12 mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Dr. Sarah Ahmed", role: "Founder & Director", img: "👩‍⚕️" },
            { name: "Karim Rahman", role: "Program Coordinator", img: "👨‍💼" },
            { name: "Fatima Khan", role: "Community Outreach", img: "👩‍🏫" }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
              <div className="bg-gradient-to-br from-green-400 to-green-600 h-48 flex items-center justify-center text-7xl">
                {member.img}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-11/12 mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Goals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-xl font-bold mb-3">Environmental Conservation</h3>
              <p className="text-gray-100">Plant 1 million trees and restore natural habitats for a sustainable future</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-3">Health & Wellness</h3>
              <p className="text-gray-100">Provide healthcare access and promote healthy living in underserved communities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Community Development</h3>
              <p className="text-gray-100">Empower communities through education, resources, and collaborative initiatives</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-bold mb-3">Sustainable Living</h3>
              <p className="text-gray-100">Promote eco-friendly practices and reduce environmental impact in daily life</p>
            </div>
          </div>
        </div>
        </div>
        </div>
    
  );
}