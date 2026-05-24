/**
 * Halaman User Roles
 * Mengelola role pengguna dan permission management.
 */
import React, { useState } from 'react';
import BackgroundAnimation from '../components/ui/BackgroundAnimation';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import {
    Plus,
    Pencil,
    Trash2,
    Users,
    Shield,
    Lock,
    Eye
} from 'lucide-react';

const UserRoles = () => {
    const [roles, setRoles] = useState([
        { id: 1, name: 'Admin', users: 5, permissions: 'Full Access', badge: 'bg-error' },
        { id: 2, name: 'Moderator', users: 12, permissions: 'Moderation + Ban', badge: 'bg-tertiary' },
        { id: 3, name: 'Helper', users: 8, permissions: 'Assist + Warn', badge: 'bg-secondary' },
        { id: 4, name: 'VIP', users: 145, permissions: 'Commands + Shop', badge: 'bg-primary' },
        { id: 5, name: 'Member', users: 3200, permissions: 'Basic Commands', badge: 'bg-on-surface-variant' },
    ]);

    const permissions = {
        'Admin': ['Manage Users', 'Manage Products', 'View Analytics', 'System Config', 'Ban/Kick Users', 'Delete Content'],
        'Moderator': ['Warn Users', 'Ban Users', 'Delete Content', 'View Reports'],
        'Helper': ['Assist Players', 'Warn Users', 'View Reports'],
        'VIP': ['Access Shop', 'Custom Commands', 'Priority Support'],
        'Member': ['Basic Commands', 'Chat', 'View Shop'],
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
                            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">User Roles & Permissions</h1>
                            <p className="font-body-base text-body-base text-on-surface-variant">Kelola role pengguna dan privilege management.</p>
                        </div>

                        {/* Stats Overview */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                            <div className="cyber-card rounded-xl p-lg flex flex-col gap-sm hover:border-primary/50 transition-colors duration-300">
                                <div className="flex justify-between items-start">
                                    <span className="font-label-caps text-label-caps text-on-surface-variant">Total Roles</span>
                                    <Shield size={24} className="text-primary" />
                                </div>
                                <div className="font-headline-lg text-headline-lg text-on-surface mt-auto">{roles.length}</div>
                            </div>

                            <div className="cyber-card rounded-xl p-lg flex flex-col gap-sm hover:border-primary/50 transition-colors duration-300">
                                <div className="flex justify-between items-start">
                                    <span className="font-label-caps text-label-caps text-on-surface-variant">Total Users</span>
                                    <Users size={24} className="text-secondary" />
                                </div>
                                <div className="font-headline-lg text-headline-lg text-on-surface mt-auto">{roles.reduce((sum, role) => sum + role.users, 0)}</div>
                            </div>

                            <div className="cyber-card rounded-xl p-lg flex flex-col gap-sm hover:border-primary/50 transition-colors duration-300">
                                <div className="flex justify-between items-start">
                                    <span className="font-label-caps text-label-caps text-on-surface-variant">Admins</span>
                                    <Lock size={24} className="text-error" />
                                </div>
                                <div className="font-headline-lg text-headline-lg text-on-surface mt-auto">{roles.find(r => r.name === 'Admin')?.users}</div>
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex justify-end">
                            <button className="bg-primary/10 text-primary border border-primary/50 hover:bg-primary hover:text-on-primary hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] px-4 py-2 rounded-lg font-body-bold transition-all flex items-center gap-2">
                                <Plus size={18} /> New Role
                            </button>
                        </div>

                        {/* Roles Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                            {roles.map(role => (
                                <div key={role.id} className="cyber-card rounded-xl p-lg hover:border-primary/50 transition-colors">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-lg ${role.badge} bg-opacity-20 flex items-center justify-center`}>
                                                <Shield size={20} className={role.badge.replace('bg-', 'text-')} />
                                            </div>
                                            <div>
                                                <h3 className="font-body-bold text-body-bold text-on-surface">{role.name}</h3>
                                                <p className="text-sm text-on-surface-variant">{role.users} users</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="p-2 rounded-lg hover:bg-surface-container-highest/50 text-on-surface-variant hover:text-primary transition-colors">
                                                <Pencil size={18} />
                                            </button>
                                            <button className="p-2 rounded-lg hover:bg-surface-container-highest/50 text-on-surface-variant hover:text-error transition-colors">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="text-xs font-label-caps text-on-surface-variant">PERMISSIONS</p>
                                        <div className="flex flex-wrap gap-2">
                                            {permissions[role.name]?.slice(0, 3).map((perm, idx) => (
                                                <span key={idx} className="px-2 py-1 rounded-md bg-surface-container text-xs font-body-base text-on-surface-variant border border-outline-variant/50 flex items-center gap-1">
                                                    <Eye size={12} /> {perm}
                                                </span>
                                            ))}
                                            {permissions[role.name]?.length > 3 && (
                                                <span className="px-2 py-1 rounded-md bg-surface-container text-xs font-body-bold text-primary">
                                                    +{permissions[role.name].length - 3} more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default UserRoles;
