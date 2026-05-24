import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BackgroundAnimation from '../components/ui/BackgroundAnimation';

/**
 * Halaman Bantuan (Help / Support Page)
 * Menyediakan antarmuka untuk mencari panduan, melihat Frequently Asked Questions (FAQ),
 * melacak tiket yang sedang berjalan, serta membuka formulir tiket bantuan baru.
 */
export default function Help() {
  // State untuk mengelola ID dari FAQ yang sedang dibuka
  const [openFaq, setOpenFaq] = useState(null);

  // Fungsi pembantu untuk membuka atau menutup panel FAQ
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-base overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container relative z-0">
      {/* Mengaktifkan animasi latar belakang */}
      <BackgroundAnimation />

      <Navbar />

      {/* Main Content */}
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-gutter py-section-gap flex flex-col gap-section-gap relative z-10">
        
        {/* Hero Search Section */}
        <section 
          className="relative w-full rounded-xl overflow-hidden metal-border min-h-[300px] flex flex-col items-center justify-center p-xl" 
          style={{ background: 'radial-gradient(circle at center, rgba(34,211,238,0.15) 0%, #0e0e12 70%)' }}
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          <h1 className="font-display-lg text-display-lg text-center text-primary drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] mb-xl z-10">
            How can we help?
          </h1>
          <div className="w-full max-w-2xl relative z-10 group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center bg-[#0f0f13] metal-border rounded-lg p-md focus-within:border-primary-container focus-within:ring-1 focus-within:ring-primary-container transition-all">
              <span className="material-symbols-outlined text-outline ml-sm mr-md">search</span>
              <input 
                className="flex-grow bg-transparent border-none text-on-surface font-body-base placeholder:text-outline-variant focus:ring-0 focus:outline-none h-full py-sm" 
                placeholder="Search for guides, error codes, or account issues..." 
                type="text" 
              />
              <button className="bg-primary-container text-[#000000] font-label-caps text-label-caps px-lg py-sm rounded ml-md glow-cyan btn-scale hover:bg-primary-fixed transition-colors">
                SEARCH
              </button>
            </div>
          </div>
        </section>

        {/* Bento Grid Content */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          
          {/* Left Column: FAQs & Recent Tickets */}
          <div className="lg:col-span-8 flex flex-col gap-xl">
            
            {/* FAQ Accordion */}
            <div className="bg-surface-container-low metal-border rounded-xl p-lg shadow-lg">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-md flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary">live_help</span>
                Frequently Asked Questions
              </h2>
              <div className="flex flex-col gap-sm">
                
                {/* FAQ Item 1 */}
                <div className="bg-[#0f0f13] metal-border rounded-lg overflow-hidden accordion-item">
                  <button 
                    className="w-full text-left px-md py-md flex justify-between items-center hover:bg-surface-container-highest/30 transition-colors focus:outline-none" 
                    onClick={() => toggleFaq(1)}
                  >
                    <span className="font-body-bold text-on-surface">I was banned incorrectly. How do I appeal?</span>
                    <span className={`material-symbols-outlined transition-transform duration-300 accordion-icon ${openFaq === 1 ? 'text-primary rotate-180' : 'text-outline rotate-0'}`}>expand_more</span>
                  </button>
                  <div className={`accordion-content px-md text-on-surface-variant font-body-base border-t border-outline-variant/30 ${openFaq === 1 ? 'open' : ''}`}>
                    <div className="pt-sm">
                      To appeal a ban, please use the "Open a Ticket" form on this page. Select "Ban Appeal" as the category and provide your in-game username along with any evidence or context you have. Appeals are reviewed within 48 hours.
                    </div>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="bg-[#0f0f13] metal-border rounded-lg overflow-hidden accordion-item">
                  <button 
                    className="w-full text-left px-md py-md flex justify-between items-center hover:bg-surface-container-highest/30 transition-colors focus:outline-none" 
                    onClick={() => toggleFaq(2)}
                  >
                    <span className="font-body-bold text-on-surface">I purchased an item but didn't receive it.</span>
                    <span className={`material-symbols-outlined transition-transform duration-300 accordion-icon ${openFaq === 2 ? 'text-primary rotate-180' : 'text-outline rotate-0'}`}>expand_more</span>
                  </button>
                  <div className={`accordion-content px-md text-on-surface-variant font-body-base border-t border-outline-variant/30 ${openFaq === 2 ? 'open' : ''}`}>
                    <div className="pt-sm">
                      Store transactions can sometimes take up to 15 minutes to process depending on network congestion. If it has been longer than 15 minutes, please open a "Billing" ticket with your transaction ID.
                    </div>
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="bg-[#0f0f13] metal-border rounded-lg overflow-hidden accordion-item">
                  <button 
                    className="w-full text-left px-md py-md flex justify-between items-center hover:bg-surface-container-highest/30 transition-colors focus:outline-none" 
                    onClick={() => toggleFaq(3)}
                  >
                    <span className="font-body-bold text-on-surface">How do I report a bug or glitch?</span>
                    <span className={`material-symbols-outlined transition-transform duration-300 accordion-icon ${openFaq === 3 ? 'text-primary rotate-180' : 'text-outline rotate-0'}`}>expand_more</span>
                  </button>
                  <div className={`accordion-content px-md text-on-surface-variant font-body-base border-t border-outline-variant/30 ${openFaq === 3 ? 'open' : ''}`}>
                    <div className="pt-sm">
                      Bug reports are handled primarily through our community Discord. However, critical exploits should be submitted via a "Technical" ticket here to ensure confidentiality and immediate developer attention.
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Recent Tickets (Logged In) */}
            <div className="bg-surface-container-lowest metal-border rounded-xl p-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="flex justify-between items-center mb-md border-b border-outline-variant/50 pb-sm">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface flex items-center gap-sm">
                  <span className="material-symbols-outlined text-tertiary">history</span>
                  Recent Tickets
                </h2>
                <span className="font-label-caps text-label-caps text-outline bg-surface-variant px-sm py-xs rounded">3 ACTIVE</span>
              </div>
              <div className="flex flex-col gap-md">
                
                {/* Ticket Item 1 */}
                <div className="bg-[#0d0d0f] metal-border-gold rounded-lg p-md flex flex-col md:flex-row md:items-center justify-between gap-md relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-tertiary rounded-l-lg shadow-[0_0_10px_rgba(255,217,104,0.8)]"></div>
                  <div className="pl-sm">
                    <div className="flex items-center gap-sm mb-xs">
                      <span className="font-code text-code text-tertiary-fixed-dim">#TKT-8992</span>
                      <span className="bg-surface-container-highest text-on-surface-variant text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider border border-outline-variant">Billing</span>
                    </div>
                    <h3 className="font-body-bold text-on-surface">Missing VIP Rank after purchase</h3>
                    <p className="font-body-base text-on-surface-variant text-sm mt-1">Last updated: 2 hours ago</p>
                  </div>
                  <div className="flex items-center gap-md">
                    <span className="flex items-center gap-xs text-primary font-label-caps text-label-caps">
                      <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_5px_#8aebff]"></span>
                      AWAITING STAFF
                    </span>
                    <button className="p-sm hover:bg-surface-variant rounded-full text-outline hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </div>
                </div>

                {/* Ticket Item 2 */}
                <div className="bg-[#0d0d0f] metal-border rounded-lg p-md flex flex-col md:flex-row md:items-center justify-between gap-md relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-outline rounded-l-lg"></div>
                  <div className="pl-sm">
                    <div className="flex items-center gap-sm mb-xs">
                      <span className="font-code text-code text-outline">#TKT-8841</span>
                      <span className="bg-surface-container-highest text-on-surface-variant text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider border border-outline-variant">Technical</span>
                    </div>
                    <h3 className="font-body-bold text-on-surface">Client crashes upon entering spawn</h3>
                    <p className="font-body-base text-on-surface-variant text-sm mt-1">Last updated: 1 day ago</p>
                  </div>
                  <div className="flex items-center gap-md">
                    <span className="flex items-center gap-xs text-outline font-label-caps text-label-caps">
                      <span className="w-2 h-2 rounded-full bg-outline"></span>
                      RESOLVED
                    </span>
                    <button className="p-sm hover:bg-surface-variant rounded-full text-outline hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Open a Ticket Form */}
          <div className="lg:col-span-4 h-full">
            <div className="bg-[#0d0d0f] metal-border rounded-xl p-lg h-full relative" style={{ perspective: '1800px' }}>
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] pointer-events-none rounded-xl"></div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-md flex items-center gap-sm relative z-10">
                <span className="material-symbols-outlined text-primary-container">support_agent</span>
                Open a Ticket
              </h2>
              <p className="font-body-base text-on-surface-variant mb-xl relative z-10">
                Need direct assistance? Fill out the form below and our support cyber-team will investigate.
              </p>
              
              <form className="flex flex-col gap-md relative z-10">
                {/* Subject */}
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-outline-variant" htmlFor="subject">SUBJECT</label>
                  <input 
                    className="bg-[#0f0f13] border border-[#3c494c] rounded-md px-md py-sm text-on-surface font-body-base cyber-input placeholder:text-outline-variant" 
                    id="subject" 
                    placeholder="Brief summary of issue" 
                    type="text" 
                  />
                </div>
                
                {/* Category */}
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-outline-variant" htmlFor="category">CATEGORY</label>
                  <div className="relative">
                    <select 
                      className="w-full bg-[#0f0f13] border border-[#3c494c] rounded-md px-md py-sm text-on-surface font-body-base cyber-input appearance-none" 
                      id="category"
                      defaultValue=""
                    >
                      <option disabled value="">Select a category...</option>
                      <option value="billing">Billing & Purchases</option>
                      <option value="technical">Technical Support</option>
                      <option value="ban_appeal">Ban Appeal</option>
                      <option value="report">Report a Player</option>
                      <option value="other">Other</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-outline pointer-events-none">arrow_drop_down</span>
                  </div>
                </div>
                
                {/* Description */}
                <div className="flex flex-col gap-xs flex-grow">
                  <label className="font-label-caps text-label-caps text-outline-variant" htmlFor="description">DESCRIPTION</label>
                  <textarea 
                    className="w-full bg-[#0f0f13] border border-[#3c494c] rounded-md px-md py-sm text-on-surface font-body-base cyber-input placeholder:text-outline-variant resize-none" 
                    id="description" 
                    placeholder="Provide as much detail as possible. Include IGN, server sub-realm, and exact error messages if applicable." 
                    rows="6"
                  ></textarea>
                </div>
                
                {/* Submit */}
                <button 
                  className="mt-md w-full bg-primary-container text-[#000000] font-label-caps text-label-caps py-md rounded-md glow-cyan glow-cyan-hover btn-scale flex items-center justify-center gap-sm transition-colors" 
                  type="button"
                >
                  <span className="material-symbols-outlined">send</span>
                  SUBMIT TICKET
                </button>
              </form>
            </div>
          </div>
          
        </section>
      </main>

      <Footer />
    </div>
  );
}