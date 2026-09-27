'use client';
import Link from 'next/link';
import {Shield, ArrowLeft, Users, Video, Flag, Settings} from 'lucide-react';

export default function AdminPage(){
  return <main className="min-h-screen bg-[#050505] text-white p-5 md:p-10">
    <div className="max-w-6xl mx-auto">
      <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8"><ArrowLeft size={18}/> Back to AK Social</Link>
      <div className="flex items-center gap-4 mb-8"><div className="h-14 w-14 rounded-2xl bg-white text-black grid place-items-center"><Shield/></div><div><h1 className="text-3xl font-black">Admin Dashboard</h1><p className="text-white/50">Moderation and platform controls</p></div></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[[Users,'Users','Manage accounts and roles'],[Video,'Videos','Review uploaded videos'],[Flag,'Reports','Moderation queue'],[Settings,'Settings','Platform configuration']].map(([Icon,title,desc]:any)=><div key={title} className="glass rounded-2xl p-5"><Icon size={24}/><h2 className="font-bold mt-5">{title}</h2><p className="text-sm text-white/45 mt-1">{desc}</p></div>)}
      </div>
      <div className="glass rounded-2xl p-6 mt-6"><h2 className="text-xl font-bold">Production moderation panel</h2><p className="text-white/55 mt-2">The database already includes role/security foundations. Connect these cards to your moderation queries and reporting workflow when deploying.</p></div>
    </div>
  </main>
}
