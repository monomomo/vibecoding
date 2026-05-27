import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import About from '@/components/About';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-gray-600 bg-white/50 backdrop-blur-sm">
        <p>© 2024 个人网站 · 使用 Next.js 和 Tailwind CSS 构建</p>
      </footer>
    </div>
  );
}