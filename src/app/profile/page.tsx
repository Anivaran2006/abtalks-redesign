"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Settings, LogOut, Award, Flame, Star, MapPin, Edit2, Check, X, User as UserIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useAppContext } from "@/context/AppContext";
import { AuthGuard } from "@/components/auth/AuthGuard";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { user, streak, xp, submittedDays, logout, updateUser } = useAppContext();
  const router = useRouter();

  const [isEditing, setIsEditing] = React.useState(false);
  const [editName, setEditName] = React.useState(user?.name || "");
  const [editEmail, setEditEmail] = React.useState(user?.email || "");

  React.useEffect(() => {
    if (user && !isEditing) {
      setEditName(user.name);
      setEditEmail(user.email);
    }
  }, [user, isEditing]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const handleSave = () => {
    if (editName.trim() && editEmail.trim()) {
      updateUser(editName.trim(), editEmail.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditName(user?.name || "");
    setEditEmail(user?.email || "");
    setIsEditing(false);
  };

  return (
    <AuthGuard>
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-32 lg:pb-10 font-[family-name:var(--font-geist-sans)] text-zinc-100 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mt-4">
          <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
          <div className="flex gap-2">
            {!isEditing && (
              <Button onClick={() => setIsEditing(true)} variant="ghost" className="w-10 h-10 p-0 rounded-full border border-white/10 text-zinc-400 hover:text-white">
                <Edit2 className="w-4 h-4" />
              </Button>
            )}
            <Link href="/settings">
              <Button variant="ghost" className="w-10 h-10 p-0 rounded-full border border-white/10 text-zinc-400 hover:text-white">
                <Settings className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="bg-gradient-to-br from-indigo-900/40 to-zinc-900/80 border-white/10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[50px] pointer-events-none rounded-full" />
            <CardContent className="p-6 relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 p-1 mb-4 shadow-lg shadow-indigo-500/20">
                <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center text-3xl font-bold uppercase border-2 border-zinc-900">
                  {user?.name?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase() || "?"}
                </div>
              </div>
              
              {isEditing ? (
                <div className="w-full max-w-sm space-y-3 mb-4">
                  <input
                    value={editName}
                    onChange={e => setEditName(e.target.value)}
                    className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-2 text-center text-white focus:outline-none focus:border-indigo-500"
                    placeholder="Full Name"
                  />
                  <input
                    value={editEmail}
                    onChange={e => setEditEmail(e.target.value)}
                    className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-2 text-center text-zinc-300 text-sm focus:outline-none focus:border-indigo-500"
                    placeholder="Email Address"
                  />
                  <div className="flex justify-center gap-2 mt-4">
                    <Button onClick={handleCancel} variant="ghost" className="h-9 px-4 text-zinc-400 hover:text-white hover:bg-white/10">
                      <X className="w-4 h-4 mr-2" /> Cancel
                    </Button>
                    <Button onClick={handleSave} className="h-9 px-4 bg-indigo-600 hover:bg-indigo-500 text-white">
                      <Check className="w-4 h-4 mr-2" /> Save
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-white mb-1">{user?.name || "Unset Name"}</h2>
                  <p className="text-sm text-zinc-400 mb-4">{user?.email || "No email set"}</p>
                </>
              )}
              
              {!isEditing && (
                <Button onClick={() => setIsEditing(true)} variant="ghost" className="h-7 px-3 text-xs text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 mb-3 rounded-full border border-indigo-500/20">
                  <Edit2 className="w-3 h-3 mr-1.5" /> Complete Profile
                </Button>
              )}

              {!isEditing && (
                <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1 bg-zinc-800/50 rounded-full border border-white/5 text-zinc-300">
                  <MapPin className="w-3 h-3 text-indigo-400" />
                  Earth
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Empty Profile / Incomplete Profile Banner */}
        {!isEditing && (!user?.name || user?.name === "") && (
          <Card className="bg-gradient-to-r from-indigo-900/30 to-violet-900/30 border-indigo-500/30">
            <CardContent className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 shrink-0">
                  <UserIcon className="w-5 h-5" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-sm font-bold text-white">Complete Your Profile</h4>
                  <p className="text-xs text-zinc-400">Set your display name and email to customize your experience.</p>
                </div>
              </div>
              <Button onClick={() => setIsEditing(true)} className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-4 h-9 shrink-0">
                Complete Profile
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="bg-zinc-900/50 border-white/5">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <Flame className="w-6 h-6 text-orange-500 mb-2" />
                <span className="text-2xl font-black">{streak}</span>
                <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Day Streak</span>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="bg-zinc-900/50 border-white/5">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <Star className="w-6 h-6 text-yellow-500 mb-2" />
                <span className="text-2xl font-black">{xp}</span>
                <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Total XP</span>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="col-span-2">
            <Card className="bg-zinc-900/50 border-white/5 relative overflow-hidden">
              {/* Progress background fill */}
              <div 
                className="absolute left-0 top-0 bottom-0 bg-emerald-500/10 pointer-events-none transition-all duration-1000 ease-out" 
                style={{ width: `${(submittedDays.length / 60) * 100}%` }}
              />
              <CardContent className="p-4 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
                    <Award className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">Challenges Completed</span>
                    <span className="text-xs text-zinc-400">Keep up the great work!</span>
                  </div>
                </div>
                <span className="text-xl font-black">{submittedDays.length}/60</span>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Actions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="pt-4">
          <Button onClick={handleLogout} variant="ghost" className="w-full text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 h-14 rounded-xl border border-rose-500/20">
            <LogOut className="w-5 h-5 mr-2" /> Sign Out
          </Button>
        </motion.div>
      </div>
    </AuthGuard>
  );
}
