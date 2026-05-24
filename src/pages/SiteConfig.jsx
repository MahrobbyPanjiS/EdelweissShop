/**
 * Halaman Site Config
 * Pengaturan sistem dan konfigurasi server.
 */
import React, { useState } from 'react';
import BackgroundAnimation from '../components/ui/BackgroundAnimation';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import {
    Settings,
    Server,
    AlertCircle,
    Check,
    ToggleLeft,
    Save,
    RotateCcw
} from 'lucide-react';

const SiteConfig = () => {
    const [config, setConfig] = useState({
        maintenanceMode: false,
        autoBackup: true,
        debugMode: false,
        serverStatus: 'online',
        maxPlayers: 100,
        serverName: 'Edelweiss Craft',
        serverVersion: '1.20.x',
        motd: 'Welcome to Edelweiss Craft Server!',
    });

    const [saved, setSaved] = useState(false);

    const handleToggle = (key) => {
        setConfig({ ...config, [key]: !config[key] });
        setSaved(false);
    };

    const handleInputChange = (key, value) => {
        setConfig({ ...config, [key]: value });
        setSaved(false);
    };

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    const handleReset = () => {
        setConfig({
            maintenanceMode: false,
            autoBackup: true,
            debugMode: false,
            serverStatus: 'online',
            maxPlayers: 100,
            serverName: 'Edelweiss Craft',
            serverVersion: '1.20.x',
            motd: 'Welcome to Edelweiss Craft Server!',
        });
        setSaved(false);
    };

    return (
        <div className="bg-background text-on-background font-body-base h-screen overflow-hidden flex flex-col relative z-0">
            {/* Animated Background */}
            <BackgroundAnimation />

            {/* Top Navigation */}
            <Navbar />

            {/* Main Layout Container */}
            <div className="flex flex-1 overflow-hidden w-full max-w-[1280px] mx-auto">
                {/* Left Sidebar Navigation */}
                <Sidebar />

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto bg-transparent relative z-10">
                    <div className="p-gutter md:p-section-gap space-y-xl max-w-5xl mx-auto">
                        
                        {/* Page Header */}
                        <div>
                            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Site Configuration</h1>
                            <p className="font-body-base text-body-base text-on-surface-variant">Atur konfigurasi sistem dan pengaturan server.</p>
                        </div>

                        {/* Server Status Card */}
                        <div className="cyber-card rounded-xl p-lg flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${config.serverStatus === 'online' ? 'bg-[#10b981]/10 text-[#10b981]' : 'bg-error/10 text-error'}`}>
                                    <Server size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-on-surface-variant mb-1">Server Status</p>
                                    <h3 className="font-headline-lg text-headline-lg text-on-surface capitalize">{config.serverStatus}</h3>
                                </div>
                            </div>
                            <div className={`px-4 py-2 rounded-lg font-body-bold text-sm ${
                                config.serverStatus === 'online'
                                    ? 'bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30'
                                    : 'bg-error/10 text-error border border-error/30'
                            }`}>
                                {config.serverStatus === 'online' ? '● Online' : '● Offline'}
                            </div>
                        </div>

                        {/* General Settings */}
                        <div className="cyber-card rounded-xl p-lg flex flex-col gap-lg">
                            <h2 className="font-body-bold text-body-bold text-on-surface flex items-center gap-2">
                                <Settings size={20} className="text-primary" /> General Settings
                            </h2>

                            <div className="space-y-4">
                                {/* Server Name */}
                                <div>
                                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Server Name</label>
                                    <input
                                        type="text"
                                        value={config.serverName}
                                        onChange={(e) => handleInputChange('serverName', e.target.value)}
                                        className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-2 font-body-base text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>

                                {/* Server Version */}
                                <div>
                                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Server Version</label>
                                    <select
                                        value={config.serverVersion}
                                        onChange={(e) => handleInputChange('serverVersion', e.target.value)}
                                        className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-2 font-body-base text-on-surface focus:outline-none focus:border-primary transition-colors"
                                    >
                                        <option>1.20.x</option>
                                        <option>1.19.x</option>
                                        <option>1.18.x</option>
                                    </select>
                                </div>

                                {/* Max Players */}
                                <div>
                                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Max Players</label>
                                    <input
                                        type="number"
                                        value={config.maxPlayers}
                                        onChange={(e) => handleInputChange('maxPlayers', parseInt(e.target.value))}
                                        className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-2 font-body-base text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>

                                {/* MOTD */}
                                <div>
                                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Message of the Day (MOTD)</label>
                                    <textarea
                                        value={config.motd}
                                        onChange={(e) => handleInputChange('motd', e.target.value)}
                                        className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-2 font-body-base text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors resize-none h-24"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Feature Toggles */}
                        <div className="cyber-card rounded-xl p-lg flex flex-col gap-lg">
                            <h2 className="font-body-bold text-body-bold text-on-surface flex items-center gap-2">
                                <ToggleLeft size={20} className="text-secondary" /> Feature Toggles
                            </h2>

                            <div className="space-y-4">
                                {/* Maintenance Mode */}
                                <div className="flex items-center justify-between p-4 bg-surface-container-highest/30 rounded-lg border border-outline-variant/50">
                                    <div className="flex items-center gap-3">
                                        <AlertCircle size={20} className="text-tertiary" />
                                        <div>
                                            <p className="font-body-bold text-on-surface">Maintenance Mode</p>
                                            <p className="text-sm text-on-surface-variant">Server tidak bisa diakses oleh pemain</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleToggle('maintenanceMode')}
                                        className={`px-4 py-2 rounded-lg font-body-bold transition-all ${
                                            config.maintenanceMode
                                                ? 'bg-error text-on-error'
                                                : 'bg-on-surface-variant/20 text-on-surface-variant'
                                        }`}
                                    >
                                        {config.maintenanceMode ? 'ON' : 'OFF'}
                                    </button>
                                </div>

                                {/* Auto Backup */}
                                <div className="flex items-center justify-between p-4 bg-surface-container-highest/30 rounded-lg border border-outline-variant/50">
                                    <div className="flex items-center gap-3">
                                        <Check size={20} className="text-[#10b981]" />
                                        <div>
                                            <p className="font-body-bold text-on-surface">Automatic Backup</p>
                                            <p className="text-sm text-on-surface-variant">Backup otomatis setiap jam</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleToggle('autoBackup')}
                                        className={`px-4 py-2 rounded-lg font-body-bold transition-all ${
                                            config.autoBackup
                                                ? 'bg-[#10b981] text-black'
                                                : 'bg-on-surface-variant/20 text-on-surface-variant'
                                        }`}
                                    >
                                        {config.autoBackup ? 'ON' : 'OFF'}
                                    </button>
                                </div>

                                {/* Debug Mode */}
                                <div className="flex items-center justify-between p-4 bg-surface-container-highest/30 rounded-lg border border-outline-variant/50">
                                    <div className="flex items-center gap-3">
                                        <Settings size={20} className="text-primary" />
                                        <div>
                                            <p className="font-body-bold text-on-surface">Debug Mode</p>
                                            <p className="text-sm text-on-surface-variant">Tampilkan log debug di console</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleToggle('debugMode')}
                                        className={`px-4 py-2 rounded-lg font-body-bold transition-all ${
                                            config.debugMode
                                                ? 'bg-primary text-on-primary'
                                                : 'bg-on-surface-variant/20 text-on-surface-variant'
                                        }`}
                                    >
                                        {config.debugMode ? 'ON' : 'OFF'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-md justify-end">
                            <button
                                onClick={handleReset}
                                className="bg-surface-container border border-outline-variant text-on-surface hover:bg-surface-container-highest hover:border-on-surface-variant/50 px-6 py-3 rounded-lg font-body-bold transition-all flex items-center gap-2"
                            >
                                <RotateCcw size={18} /> Reset to Default
                            </button>
                            <button
                                onClick={handleSave}
                                className="bg-primary/10 text-primary border border-primary/50 hover:bg-primary hover:text-on-primary hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] px-6 py-3 rounded-lg font-body-bold transition-all flex items-center gap-2"
                            >
                                <Save size={18} /> {saved ? 'Saved!' : 'Save Changes'}
                            </button>
                        </div>

                        {/* Info Alert */}
                        {saved && (
                            <div className="cyber-card rounded-xl p-lg bg-[#10b981]/10 border-[#10b981]/30 flex items-center gap-3">
                                <Check size={24} className="text-[#10b981] shrink-0" />
                                <p className="font-body-base text-[#10b981]">Konfigurasi berhasil disimpan. Perubahan akan berlaku segera.</p>
                            </div>
                        )}

                    </div>
                </main>
            </div>
        </div>
    );
};

export default SiteConfig;
