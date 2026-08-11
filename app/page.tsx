"use client";

import { useEffect, useState } from "react";

const services = [
  ["01", "Electrical Works", "Professional electrical installation and maintenance."],
  ["02", "Block Work & Masonry", "Professional block work and masonry construction."],
  ["03", "Plastering & Painting", "Interior and exterior plastering and painting services."],
  ["04", "False Ceiling", "Gypsum and decorative false ceiling installation."],
  ["05", "2D & 3D Modelling", "Professional architectural 2D drawings and 3D visualization."],
  ["06", "Tiles • Marble • Granite", "Floor and wall finishing using premium materials."],
  ["07", "Architecture & Structural Detailing", "Architectural design and structural detailing solutions."],
  ["08", "MEP Works", "Mechanical, Electrical and Plumbing systems."],
  ["09", "Electromechanical Equipment Installation & Maintenance", "Installation and maintenance of electromechanical equipment."],
];

const quick = ["Block Work & Masonry", "Plastering & Painting", "False Ceiling", "2D & 3D Modelling", "Tiles / Marble / Granite", "Structural Detailing", "MEP Works", "Core Cutting", "Grout Injection", "Electromechanical"];
const projects = ["Steel Frame", "MEP Installation", "Architectural Finish", "Precision Electrical", "Commercial Fit-Out", "Structural Detailing", "Ceiling Works", "Civil Maintenance", "Technical Solutions"];

export default function Home() {
  const [arabic, setArabic] = useState(false);
  const [menu, setMenu] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  useEffect(() => {
    const onScroll = () => document.body.classList.toggle("scrolled", window.scrollY > 32);
    onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <main dir={arabic ? "rtl" : "ltr"} className={arabic ? "arabic" : ""}>
    <nav className="nav"><a href="#home" className="brand"><img src="/logo.png" alt="Island Technical Services"/><span>ISLAND <small>ENGINEERING EXCELLENCE</small></span></a><button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">☰</button><div className={menu ? "links open" : "links"}><a href="#home">{arabic?"الرئيسية":"Home"}</a><a href="#services">{arabic?"الخدمات":"Services"}</a><a href="#projects">{arabic?"المشاريع":"Projects"}</a><a href="#contact">{arabic?"اتصل بنا":"Contact"}</a><button className="language" onClick={()=>setArabic(!arabic)}>EN / العربية</button></div></nav>
    <section id="home" className="hero"><div className="hero-image"/><div className="grid"/><div className="orb orb1"/><div className="orb orb2"/><div className="hero-copy"><p className="eyebrow">{arabic?"خدمات هندسية في الإمارات":"UAE / ENGINEERING & TECHNICAL SERVICES"}</p><h1>{arabic?"خدمات تقنية احترافية في الإمارات":"Professional Technical Services in UAE"}</h1><p className="intro">{arabic?"حلول كهربائية وسباكة وتكييف وصيانة مدنية متكاملة بجودة احترافية وفريق من المهندسين ذوي الخبرة.":"We provide Electrical, Plumbing, HVAC, Civil Maintenance, and Complete Technical Solutions with professional quality and experienced engineers."}</p><div className="actions"><a className="button primary" href="https://wa.me/971541518181">Contact on WhatsApp <b>↗</b></a><a className="button" href="#services">Our Services <b>↓</b></a></div></div><div className="frame" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div><div className="scroll-note">SCROLL TO EXPLORE <span/></div></section>
    <section id="services" className="section services"><div className="section-head"><p className="eyebrow">01 / OUR EXPERTISE</p><h2>Technical mastery.<br/><em>Built to last.</em></h2><p>Comprehensive, exacting services for projects where every dimension matters.</p></div><div className="service-strip">{quick.map((s,i)=><article className="quick-card" key={s}><span>0{i+1}</span><h3>{s}</h3><b>↗</b></article>)}</div></section>
    <section className="values"><p className="eyebrow">02 / WHY ISLAND</p><div className="value-grid">{[["⚡","Professional Team","Skilled specialists for every discipline."],["🛠","Quality Work","Precision materials, rigorous execution."],["⏱","Fast Response","Responsive support when it counts."],["✓","Customer Satisfaction","Delivered with care, safety and clarity."]].map(([icon,title,copy],i)=><article key={title}><span>{icon}</span><b>0{i+1}</b><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="about"><div className="about-visual"><div className="about-lines"/></div><div className="about-copy"><p className="eyebrow">03 / ABOUT THE STUDIO</p><h2>Engineering clarity for the <em>built world.</em></h2><p>Island Technical Services is a UAE-based company specializing in electrical works, plumbing, HVAC, civil maintenance, and complete technical solutions. We are committed to quality, safety, and customer satisfaction.</p><div className="counters"><div><strong>10<span>+</span></strong><small>Years</small></div><div><strong>500<span>+</span></strong><small>Projects</small></div><div><strong>300<span>+</span></strong><small>Clients</small></div></div></div></section>
    <section id="services-detail" className="section detail"><div className="section-head"><p className="eyebrow">04 / CAPABILITIES</p><h2>Every technical<br/><em>detail considered.</em></h2></div><div className="detail-grid">{services.map(([n,title,copy])=><article key={title} className="detail-card"><span>{n}</span><h3>{title}</h3><p>{copy}</p><i>↗</i></article>)}</div></section>
    <section id="projects" className="projects"><div className="project-head"><div><p className="eyebrow">05 / SELECTED PROJECTS</p><h2>Work with a <em>standard.</em></h2></div><p>From the backbone of a structure to its final finish — each project is a signature of precision.</p></div><div className="gallery">{projects.map((name,i)=><button key={name} className={`project project-${i+1}`} onClick={()=>setLightbox(i)} aria-label={`Open ${name} project`}><div><span>2026 / 0{i+1}</span><h3>{name}</h3><b>View project ↗</b></div></button>)}</div></section>
    <section id="contact" className="contact"><div><p className="eyebrow">06 / START A PROJECT</p><h2>Let’s build something <em>exceptional.</em></h2><a className="contact-mail" href="mailto:islandtech.ae@gmail.com">islandtech.ae@gmail.com <b>↗</b></a></div><div className="contact-info"><p><span>WHATSAPP</span><a href="https://wa.me/971541518181">+971 54 151 8181</a></p><p><span>OFFICE</span><a href="tel:+97167655006">+971 6 765 5006</a></p><p><span>LOCATION</span>United Arab Emirates</p></div><div className="map"><iframe title="Island Technical Services location" src="https://www.google.com/maps?q=Dubai,UAE&output=embed" loading="lazy"/></div></section>
    <footer><div className="footer-brand">ISLAND <span>TECHNICAL SERVICES</span></div><p>Engineering Excellence</p><small>© 2026 Island Technical Services. All Rights Reserved.</small></footer>
    <a className="whatsapp" href="https://wa.me/971541518181" aria-label="Chat on WhatsApp"><span>WhatsApp</span></a>
    {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" onClick={()=>setLightbox(null)}><div className={`lightbox-card project-${lightbox+1}`} onClick={e=>e.stopPropagation()}><button onClick={()=>setLightbox(null)}>×</button><p>ISLAND TECHNICAL SERVICES / 2026</p><h2>{projects[lightbox]}</h2><span>Engineering Excellence</span></div></div>}
  </main>;
}
