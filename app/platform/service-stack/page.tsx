import Link from 'next/link';

export default function ServiceStackPage() {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
            <span className="text-white font-bold text-sm uppercase tracking-wider">Service Stack</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">Our Service Stack</h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">Comprehensive digital marketing, design, and web capabilities behind our growth platform</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Element with Service Icons */}
          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-12 border-2 border-indigo-100 shadow-xl">
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl mb-2">📊</div>
                  <div className="text-xs font-bold text-gray-700">Strategy</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl mb-2">🎨</div>
                  <div className="text-xs font-bold text-gray-700">Design</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl mb-2">💻</div>
                  <div className="text-xs font-bold text-gray-700">Development</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl mb-2">📱</div>
                  <div className="text-xs font-bold text-gray-700">Social</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl mb-2">✍️</div>
                  <div className="text-xs font-bold text-gray-700">Content</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl mb-2">📈</div>
                  <div className="text-xs font-bold text-gray-700">Analytics</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-sm font-bold text-gray-700">Full-Service Capability</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Complete Service Portfolio</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">Behind our growth platform is a comprehensive stack of digital marketing, design, and development services. This integrated approach means we can seamlessly connect every element of your marketing strategy.</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">From strategy and creative to execution and optimization, we handle all aspects of your digital presence under one roof, ensuring consistency and effectiveness.</p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Full-Service Capability</p>
                  <p className="text-slate-600 text-sm">Everything from strategy to execution</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 bg-purple-50 rounded-xl border border-purple-100">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Integrated Teams</p>
                  <p className="text-slate-600 text-sm">All specialists working as one unified team</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 bg-pink-50 rounded-xl border border-pink-100">
                <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Single Accountability</p>
                  <p className="text-slate-600 text-sm">One partner, unified results and reporting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Complete Offering</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Strategy & Consulting</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Marketing Strategy',
                'Competitive Analysis',
                'Market Research',
                'Growth Planning',
                'Performance Audit',
                'Roadmap Development'
              ].map((service, idx) => (
                <div key={idx} className="bg-white border border-red-100 rounded-xl p-6">
                  <p className="text-lg font-bold text-slate-900">{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Digital Marketing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'SEO & Organic Search',
                'Pay-Per-Click Advertising',
                'Social Media Marketing',
                'Email Marketing',
                'Content Marketing',
                'Marketing Analytics'
              ].map((service, idx) => (
                <div key={idx} className="bg-white border border-red-100 rounded-xl p-6">
                  <p className="text-lg font-bold text-slate-900">{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Design & Creative</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Brand Identity',
                'Logo & Branding',
                'Graphic Design',
                'Social Media Design',
                'Marketing Collateral',
                'Video Production'
              ].map((service, idx) => (
                <div key={idx} className="bg-white border border-red-100 rounded-xl p-6">
                  <p className="text-lg font-bold text-slate-900">{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Web & Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Web Design & Development',
                'E-commerce Solutions',
                'CMS Implementation',
                'Mobile Development',
                'Web Performance',
                'Security & Compliance'
              ].map((service, idx) => (
                <div key={idx} className="bg-white border border-red-100 rounded-xl p-6">
                  <p className="text-lg font-bold text-slate-900">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Integrated Delivery Model</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Rather than managing multiple vendors, work with one partner that has deep expertise across all disciplines
        </p>
        
        <div className="space-y-8">
          {[
            {
              num: "01",
              title: "Strategy Foundation",
              desc: "Develop a comprehensive strategy that aligns all services toward your business goals"
            },
            {
              num: "02",
              title: "Integrated Planning",
              desc: "Plan creative, marketing, and technical elements as one cohesive system"
            },
            {
              num: "03",
              title: "Unified Execution",
              desc: "Execute all services with perfect alignment and consistency"
            },
            {
              num: "04",
              title: "Collaborative Optimization",
              desc: "All teams work together to continuously improve results"
            }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-8 items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-red-700 text-white font-bold text-2xl flex-shrink-0">{item.num}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Integrated Marketing Excellence?</h2>
          <p className="text-xl text-red-100 mb-8">Let's leverage our complete service stack for your success</p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">Explore Our Services</Link>
        </div>
      </section>
    </main>
  );
}
