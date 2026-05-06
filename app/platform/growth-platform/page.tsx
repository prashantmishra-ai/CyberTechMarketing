import Link from 'next/link';

export default function GrowthPlatformPage() {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-orange-600 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
            <span className="text-white font-bold text-sm uppercase tracking-wider">Growth Platform</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">CyberTech Growth Platform</h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">Integrated strategy across SEO, content, paid media, and conversion optimization</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Element with Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-50 via-orange-50 to-red-50 rounded-3xl p-12 border-2 border-red-100 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-black text-red-600 mb-2">300%</div>
                  <div className="text-sm font-semibold text-gray-600">Avg Traffic Growth</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-black text-orange-600 mb-2">2.5x</div>
                  <div className="text-sm font-semibold text-gray-600">Conversion Rate</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-black text-red-600 mb-2">45%</div>
                  <div className="text-sm font-semibold text-gray-600">ROI Improvement</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-black text-orange-600 mb-2">60%</div>
                  <div className="text-sm font-semibold text-gray-600">Retention Rate</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-gray-700">Real-Time Performance Tracking</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Unified Growth Strategy</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">Our Growth Platform brings together all elements of digital marketing into one coordinated system. Rather than managing disconnected campaigns, we integrate SEO, content marketing, paid advertising, and conversion optimization into a unified strategy that multiplies results.</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">By aligning all channels around your business objectives, we create a marketing engine that consistently drives growth, builds brand authority, and maximizes ROI.</p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 bg-red-50 rounded-xl border border-red-100">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Integrated Strategy</p>
                  <p className="text-slate-600 text-sm">All channels working together seamlessly</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 bg-orange-50 rounded-xl border border-orange-100">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Data-Driven Decisions</p>
                  <p className="text-slate-600 text-sm">Every decision backed by analytics and insights</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 bg-red-50 rounded-xl border border-red-100">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Scalable Growth</p>
                  <p className="text-slate-600 text-sm">Platform grows with your business needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Platform Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Visibility Engine",
                desc: "SEO and organic visibility that builds sustainable traffic"
              },
              {
                title: "Demand Generation",
                desc: "Paid advertising that reaches customers when they're searching"
              },
              {
                title: "Authority Building",
                desc: "Content strategy that establishes expertise and trust"
              },
              {
                title: "Conversion Optimization",
                desc: "Convert more visitors into customers and leads"
              },
              {
                title: "Customer Intelligence",
                desc: "Analytics and insights that drive decisions"
              },
              {
                title: "Growth Acceleration",
                desc: "Expansion strategies that scale profitable channels"
              }
            ].map((component, idx) => (
              <div key={idx} className="bg-white border border-red-100 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{component.title}</h3>
                <p className="text-slate-600">{component.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">How the Platform Works</h2>
        <div className="space-y-8">
          {[
            {
              num: "01",
              title: "Foundation: SEO & Content",
              desc: "Build long-term visibility and authority through organic search and valuable content that ranks"
            },
            {
              num: "02",
              title: "Acceleration: Paid Channels",
              desc: "Complement organic efforts with targeted paid advertising to capture ready-to-buy prospects"
            },
            {
              num: "03",
              title: "Optimization: Conversion",
              desc: "Convert more visitors into customers with strategic optimization and user experience improvements"
            },
            {
              num: "04",
              title: "Intelligence: Analytics",
              desc: "Gain deep insights into performance and identify opportunities for growth"
            },
            {
              num: "05",
              title: "Scale: Expansion",
              desc: "Scale proven channels and test new opportunities to accelerate growth"
            }
          ].map((step, idx) => (
            <div key={idx} className="flex gap-8 items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-red-700 text-white font-bold text-2xl flex-shrink-0">{step.num}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Platform Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { metric: "300%", label: "Average Traffic Growth" },
              { metric: "2.5x", label: "Conversion Rate Increase" },
              { metric: "45%", label: "ROI Improvement" },
              { metric: "60%", label: "Customer Retention" }
            ].map((item, idx) => (
              <div key={idx} className="bg-red-700/20 border border-red-700/50 rounded-xl p-8">
                <p className="text-5xl font-bold text-red-400 mb-2">{item.metric}</p>
                <p className="text-white/80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Implement Your Growth Platform?</h2>
          <p className="text-xl text-red-100 mb-8">Let's build an integrated marketing system that drives consistent growth</p>
          <Link href="/contact" className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition-colors text-lg">Start Your Platform</Link>
        </div>
      </section>
    </main>
  );
}
