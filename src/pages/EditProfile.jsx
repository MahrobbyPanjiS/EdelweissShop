import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Minecraft3DViewer from '../components/ui/Minecraft3DViewer';

/**
 * Halaman Editor Profil (Edit Profile Page)
 * Menyediakan antarmuka form bagi pemain untuk mengubah informasi dasar, 
 * pengaturan keamanan, serta preferensi notifikasi.
 */
export default function EditProfile() {
  // State untuk mengontrol toggle preferensi notifikasi
  const [discordAlerts, setDiscordAlerts] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);

  return (
    <div className="bg-background text-on-surface font-body-base min-h-screen flex flex-col">
      <Navbar />

      <main className="max-w-[1024px] w-full mx-auto px-gutter py-section-gap flex-grow">
        <header className="mb-xl">
          <h1 className="font-headline-lg text-headline-lg text-primary mb-xs">Profile Editor</h1>
          <p className="text-on-surface-variant font-body-base">Manage your Minecraft identity and security settings.</p>
        </header>

        <form className="space-y-lg" onSubmit={(e) => e.preventDefault()}>
          
          {/* Section 1: Profile Overview */}
          <section className="bg-gradient-to-br from-[#131317] to-[#1b1b1f] border border-[#3d3d3d] rounded-xl p-lg flex flex-col md:flex-row items-center gap-lg shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <div className="relative group">
              <div className="w-32 h-32 rounded-lg bg-surface-container overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors flex items-center justify-center">
                {/* Menggunakan 3D Viewer sebagai ganti gambar statis */}
                <Minecraft3DViewer username="SteveExplorer_99" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-on-primary p-xs rounded-full shadow-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">SteveExplorer_99</h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-md text-on-surface-variant font-label-caps tracking-widest uppercase">
                <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">calendar_today</span> Joined March 2024</span>
                <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">military_tech</span> MVP+ Rank</span>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {/* Section 2: Personal Information */}
            <section className="bg-gradient-to-br from-[#131317] to-[#1b1b1f] border border-[#3d3d3d] rounded-xl p-lg flex flex-col gap-md">
              <div className="flex items-center gap-sm mb-base">
                <span className="material-symbols-outlined text-primary">person</span>
                <h3 className="font-body-bold text-on-surface">Personal Information</h3>
              </div>
              
              <div className="space-y-sm focus-within:scale-[1.01] transition-transform duration-300">
                <label className="font-label-caps text-on-surface-variant">Nickname</label>
                <input 
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-md text-on-surface focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300" 
                  placeholder="e.g. Steve the Bold" 
                  type="text" 
                />
              </div>
              
              <div className="space-y-sm focus-within:scale-[1.01] transition-transform duration-300">
                <label className="font-label-caps text-on-surface-variant">City of Origin (Asal Kota)</label>
                <input 
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-md text-on-surface focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300" 
                  placeholder="Jakarta, Indonesia" 
                  type="text" 
                />
              </div>
              
              <div className="space-y-sm focus-within:scale-[1.01] transition-transform duration-300">
                <label className="font-label-caps text-on-surface-variant">Avatar Skin URL (Nick Premium)</label>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-md pr-12 text-on-surface focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300" 
                    type="text" 
                    defaultValue="SteveExplorer_99" 
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant">link</span>
                </div>
              </div>
            </section>

            {/* Section 3: Security */}
            <section className="bg-gradient-to-br from-[#131317] to-[#1b1b1f] border border-[#3d3d3d] rounded-xl p-lg flex flex-col gap-md">
              <div className="flex items-center gap-sm mb-base">
                <span className="material-symbols-outlined text-primary">security</span>
                <h3 className="font-body-bold text-on-surface">Security</h3>
              </div>
              
              <div className="space-y-sm focus-within:scale-[1.01] transition-transform duration-300">
                <label className="font-label-caps text-on-surface-variant">Current Password</label>
                <input 
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-md text-on-surface focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300" 
                  placeholder="••••••••" 
                  type="password" 
                />
              </div>
              
              <div className="space-y-sm focus-within:scale-[1.01] transition-transform duration-300">
                <label className="font-label-caps text-on-surface-variant">New Password</label>
                <input 
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-md text-on-surface focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300" 
                  placeholder="Min. 8 characters" 
                  type="password" 
                />
              </div>
              
              <div className="space-y-sm focus-within:scale-[1.01] transition-transform duration-300">
                <label className="font-label-caps text-on-surface-variant">Confirm New Password</label>
                <input 
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-md text-on-surface focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300" 
                  placeholder="Repeat new password" 
                  type="password" 
                />
              </div>
            </section>
          </div>

          {/* Section 4: Preferences */}
          <section className="bg-gradient-to-br from-[#131317] to-[#1b1b1f] border border-[#3d3d3d] rounded-xl p-lg">
            <div className="flex items-center gap-sm mb-md">
              <span className="material-symbols-outlined text-primary">settings</span>
              <h3 className="font-body-bold text-on-surface">Preferences</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <label className={`flex items-center justify-between p-md rounded-lg cursor-pointer group transition-colors ${discordAlerts ? 'bg-surface-container shadow-[0_0_15px_rgba(34,211,238,0.2)] border border-primary/20' : 'bg-surface-container-low hover:bg-surface-container border border-transparent'}`}>
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-[#5865F2]">hub</span>
                  <div className="flex flex-col">
                    <span className="font-body-bold text-on-surface">Discord Notifications</span>
                    <span className="text-[12px] text-on-surface-variant">Alerts for store purchases</span>
                  </div>
                </div>
                <div className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={discordAlerts}
                    onChange={(e) => setDiscordAlerts(e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </div>
              </label>

              <label className={`flex items-center justify-between p-md rounded-lg cursor-pointer group transition-colors ${emailUpdates ? 'bg-surface-container shadow-[0_0_15px_rgba(34,211,238,0.2)] border border-primary/20' : 'bg-surface-container-low hover:bg-surface-container border border-transparent'}`}>
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-tertiary">mail</span>
                  <div className="flex flex-col">
                    <span className="font-body-bold text-on-surface">Email Updates</span>
                    <span className="text-[12px] text-on-surface-variant">Monthly news & server events</span>
                  </div>
                </div>
                <div className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={emailUpdates}
                    onChange={(e) => setEmailUpdates(e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </div>
              </label>
            </div>
          </section>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-md pt-lg">
            <button className="w-full sm:w-auto px-xl py-md font-body-bold text-on-surface-variant hover:text-on-surface transition-all active:scale-95" type="reset">
              Reset
            </button>
            <button className="w-full sm:w-auto px-xl py-md font-body-bold text-on-surface bg-surface-container border border-[#3d3d3d] hover:bg-surface-container-high transition-all active:scale-95 rounded-lg" type="button">
              Cancel
            </button>
            <button className="w-full sm:w-auto px-xl py-md font-body-bold text-on-primary bg-primary rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:brightness-110 transition-all active:scale-95" type="submit">
              Save Changes
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}