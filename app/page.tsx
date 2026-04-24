"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Utensils, GlassWater, Clock, MapPin, Instagram, Facebook } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black-obsidian">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-3/4 w-[500px] h-[500px] bg-burgundy/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-axis-gold/5 rounded-full blur-[100px]"></div>
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-cinzel text-2xl tracking-[0.3em] text-axis-gold">ARUN</div>
          <ul className="hidden md:flex gap-12 font-inter text-[11px] uppercase tracking-[0.2em] text-text-secondary">
            <li><a href="#menu" className="hover:text-axis-gold transition-colors">Menú</a></li>
            <li><a href="#experiencia" className="hover:text-axis-gold transition-colors">Experiencia</a></li>
            <li><a href="#contacto" className="hover:text-axis-gold transition-colors">Contacto</a></li>
          </ul>
          <a href="#" className="font-cinzel text-[11px] px-6 py-2 border border-axis-gold text-axis-gold hover:bg-axis-gold hover:text-black transition-all tracking-[0.2em]">
            RESERVAR
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0">
             <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center brightness-[0.3]"></div>
          </div>
          
          <div className="text-center px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-cinzel text-axis-gold tracking-[0.5em] text-xs uppercase mb-6 block">Salto del Guairá</span>
              <h1 className="font-playfair text-5xl md:text-8xl text-text-primary mb-8 leading-tight">
                El Arte de la <br />
                <span className="italic text-axis-gold">Alta Cocina</span> Asiática
              </h1>
              <div className="w-24 h-[1px] bg-burgundy mx-auto mb-12"></div>
              <p className="font-inter text-text-secondary max-w-lg mx-auto mb-12 text-sm md:text-base leading-loose tracking-wide">
                Fusión de sabores ancestrales y técnicas contemporáneas en un ambiente de lujo silencioso.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <button className="bg-burgundy px-10 py-4 font-cinzel text-xs tracking-[0.3em] hover:bg-burgundy-light transition-all">VER MENÚ</button>
                <button className="border border-axis-gold px-10 py-4 font-cinzel text-xs tracking-[0.3em] text-axis-gold hover:bg-axis-gold hover:text-black transition-all">EXPERIENCIA</button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section id="menu" className="py-32 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Sushi de Autor", desc: "Rolls exclusivos preparados con pesca fresca del día y toques de trufa negra.", icon: Utensils },
              { title: "Cocktails Mixology", desc: "Nuestra barra fusiona sakes premium con botánicos locales.", icon: GlassWater },
              { title: "Omakase Experience", desc: "Deje que nuestro Itamae le guíe a través de una jornada sensorial única.", icon: Clock },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white/5 p-12 border border-white/5 hover:border-axis-gold/30 transition-all"
              >
                <item.icon className="text-axis-gold mb-8 w-8 h-8" />
                <h3 className="font-cinzel text-lg text-text-primary mb-4 tracking-widest">{item.title}</h3>
                <p className="font-inter text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-black py-20 px-8 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="font-cinzel text-3xl tracking-[0.4em] text-axis-gold mb-12">ARUN</div>
          <div className="flex justify-center gap-8 mb-12 text-text-muted">
            <Instagram className="hover:text-axis-gold cursor-pointer transition-colors" />
            <Facebook className="hover:text-axis-gold cursor-pointer transition-colors" />
            <MapPin className="hover:text-axis-gold cursor-pointer transition-colors" />
          </div>
          <p className="text-[10px] text-text-muted uppercase tracking-[0.2em]">© 2026 AXIS - Soluciones Digitales | Arun Asian Bar</p>
        </div>
      </footer>
    </div>
  );
}