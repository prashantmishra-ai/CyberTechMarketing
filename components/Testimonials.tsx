import { getAllTestimonials, type TestimonialDocument } from '@/lib/queries';
import { defaultHomePageContent } from '@/lib/homePage';

const fallbackTestimonials = [
    { name: "Ananya", text: "As a startup, we needed a digital marketing partner who could understand our unique needs. They not only understood but also delivered outstanding results through their marketing strategies." },
    { name: "Ajay", text: "Working with Cybertech Marketing has been a game-changer for my business. Their team's expertise and dedication to results have helped us achieve a 200% increase in website traffic. I highly recommend them!" },
    { name: "Simran", text: "We've been partners for years, and they continue to exceed our expectations. Their campaigns have consistently delivered a high ROI, and their attention to detail is unmatched." },
    { name: "Rahul", text: "Choosing Cybertech Marketing was one of the best decisions we made for our e-commerce business. Their strategies have propelled us to the top of search engine rankings, resulting in a significant increase in sales." },
    { name: "Jai", text: "It's a pleasure to work with the team. Their dedication to our success is evident in the consistent growth of our email marketing campaigns. They're responsive, professional, and results-driven." }
  ];

type TestimonialCard = {
  name: string;
  text: string;
  role?: string;
};

type TestimonialsProps = {
  title?: string;
  subtitle?: string;
  testimonials?: TestimonialCard[];
};

function mapTestimonial(doc: TestimonialDocument): TestimonialCard | null {
  if (!doc.authorName || !doc.content) {
    return null;
  }

  return {
    name: doc.authorName,
    text: doc.content,
    role: doc.authorRole || 'Client',
  };
}

export default async function Testimonials({
  title = defaultHomePageContent.testimonialsTitle,
  subtitle = defaultHomePageContent.testimonialsSubtitle,
  testimonials,
}: TestimonialsProps) {
  const resolvedTestimonials = testimonials
    ? testimonials
    : ((await getAllTestimonials()).map(mapTestimonial).filter(Boolean) as TestimonialCard[]);

  const cards = resolvedTestimonials.length > 0 ? resolvedTestimonials : fallbackTestimonials;

  // Color schemes for variety
  const colorSchemes = [
    { bg: 'from-red-50 to-orange-50', border: 'border-red-200', accent: 'bg-red-600', quote: 'text-red-500' },
    { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-200', accent: 'bg-blue-600', quote: 'text-blue-500' },
    { bg: 'from-purple-50 to-pink-50', border: 'border-purple-200', accent: 'bg-purple-600', quote: 'text-purple-500' },
    { bg: 'from-green-50 to-emerald-50', border: 'border-green-200', accent: 'bg-green-600', quote: 'text-green-500' },
    { bg: 'from-amber-50 to-yellow-50', border: 'border-amber-200', accent: 'bg-amber-600', quote: 'text-amber-500' },
    { bg: 'from-rose-50 to-red-50', border: 'border-rose-200', accent: 'bg-rose-600', quote: 'text-rose-500' },
  ];

  return (
    <section id="testimonials" className="py-32 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-6">
            <span className="text-red-700 font-bold text-sm uppercase tracking-wider">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((t, idx) => {
            const colors = colorSchemes[idx % colorSchemes.length];
            return (
              <div 
                key={idx} 
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${colors.bg} border-2 ${colors.border} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group`}
              >
                {/* Quote Icon */}
                <div className={`mb-6 ${colors.quote}`}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-800 mb-8 text-lg leading-relaxed font-medium">
                  {t.text}
                </p>
                
                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t-2 border-white/50">
                  <div className={`w-14 h-14 rounded-full ${colors.accent} flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-lg">{t.name}</h4>
                    <p className="text-gray-600 text-sm font-medium">{t.role || 'Client'}</p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">Join hundreds of satisfied clients who have transformed their business with us</p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Your Success Story
          </a>
        </div>
      </div>
    </section>
  );
}
