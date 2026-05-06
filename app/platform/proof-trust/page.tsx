import Link from 'next/link';

export default function ProofTrustPage() {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-emerald-600 via-green-700 to-teal-600 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
            <span className="text-white font-bold text-sm uppercase tracking-wider">Proof & Trust</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">Proven Track Record</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">Real results, real growth, real client success stories</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Element with Trust Indicators */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-3xl p-12 border-2 border-emerald-100 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-black text-emerald-600 mb-2">500+</div>
                  <div className="text-sm font-semibold text-gray-600">Successful Campaigns</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-black text-green-600 mb-2">200+</div>
                  <div className="text-sm font-semibold text-gray-600">Active Clients</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-black text-teal-600 mb-2">15+</div>
                  <div className="text-sm font-semibold text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-black text-emerald-600 mb-2">50+</div>
                  <div className="text-sm font-semibold text-gray-600">Industry Awards</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-bold text-gray-700">Certified & Trusted Partner</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Results That Speak</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">We believe in results, not just promises. Our clients see measurable improvements in traffic, leads, and revenue. Our approach is backed by data, industry expertise, and a proven track record of success across diverse industries.</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">From startups to enterprise clients, we help businesses grow by combining strategic thinking with data-driven execution.</p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Measurable Results</p>
                  <p className="text-slate-600 text-sm">Real data, real growth, real ROI</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 bg-green-50 rounded-xl border border-green-100">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Industry Expertise</p>
                  <p className="text-slate-600 text-sm">Deep knowledge across multiple sectors</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 bg-teal-50 rounded-xl border border-teal-100">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Client Success</p>
                  <p className="text-slate-600 text-sm">Your goals are our goals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Successful Campaigns" },
              { number: "200+", label: "Active Clients" },
              { number: "15+", label: "Years Experience" },
              { number: "50+", label: "Industry Awards" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white border border-red-100 rounded-xl p-8">
                <p className="text-5xl font-bold text-red-700 mb-2">{stat.number}</p>
                <p className="text-slate-600 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              company: "E-commerce Brand",
              result: "300% Revenue Growth",
              desc: "Scaled online store from $500K to $2M annual revenue through integrated marketing"
            },
            {
              company: "SaaS Company",
              result: "5x Customer Growth",
              desc: "Grew from 100 to 500+ customers through demand generation and retention"
            },
            {
              company: "Healthcare Provider",
              result: "150% New Patient Increase",
              desc: "Attracted 300+ new patients annually through local SEO and reputation"
            },
            {
              company: "B2B Services",
              result: "2.5x Revenue Growth",
              desc: "Increased pipeline and closed deals worth $5M+ in new business"
            },
            {
              company: "Real Estate Team",
              result: "10x Lead Generation",
              desc: "Generated 500+ qualified leads annually for property sales"
            },
            {
              company: "Education Institute",
              result: "40% Enrollment Increase",
              desc: "Attracted 200+ new students through enrollment marketing campaigns"
            }
          ].map((story, idx) => (
            <div key={idx} className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{story.company}</h3>
              <p className="text-2xl font-bold text-red-700 mb-3">{story.result}</p>
              <p className="text-slate-600">{story.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">What Clients Say About Us</h2>
          <p className="text-center text-red-200 mb-12 max-w-2xl mx-auto">
            Real feedback from clients who have experienced transformational growth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "CyberTech transformed our marketing approach. We went from struggling to find leads to having a consistent pipeline.",
                author: "CEO, Tech Startup"
              },
              {
                quote: "The team's expertise across all marketing channels means we finally have one cohesive strategy instead of fragmented efforts.",
                author: "Marketing Director, E-commerce"
              },
              {
                quote: "Their data-driven approach is refreshing. Every decision is backed by analytics and real results.",
                author: "Founder, SaaS Company"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 border border-white/20 rounded-xl p-8">
                <p className="text-lg text-white mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-red-300 font-bold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Approach to Excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Data First",
              desc: "Every strategy and decision is backed by deep data analysis and insights"
            },
            {
              title: "Results Focused",
              desc: "We measure success by your business metrics, not vanity numbers"
            },
            {
              title: "Transparency",
              desc: "Clear reporting and regular communication keep you informed"
            },
            {
              title: "Continuous Learning",
              desc: "We stay on top of latest trends and best practices"
            },
            {
              title: "Collaborative",
              desc: "Your team is our extended team—we work together"
            },
            {
              title: "Scalable",
              desc: "Our strategies grow with your business"
            }
          ].map((principle, idx) => (
            <div key={idx} className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{principle.title}</h3>
              <p className="text-slate-600">{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-red-100 mb-8">Let's discuss how we can help you achieve transformational growth</p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">Schedule Consultation</Link>
        </div>
      </section>
    </main>
  );
}
