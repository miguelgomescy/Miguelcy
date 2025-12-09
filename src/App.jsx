
import '../src/App.css'

import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { MdEmail, MdLanguage } from 'react-icons/md'
import { FiMonitor } from "react-icons/fi";


const techIcons = [
  { src: '/1.png', alt: 'JavaScript' },  
  { src: '/2.png', alt: 'GMN' },  
  { src: '/3.png', alt: 'Python' },  
  { src: '/4.png', alt: 'React' },  
  { src: '/5.png', alt: 'ReactNative' },  
  { src: '/6.png', alt: 'MongoDB' },  
  { src: '/7.png', alt: 'GoogleADS' },  
  { src: '/8.png', alt: 'Figma' },  
  { src: '/9.png', alt: 'Shopify' },  
  { src: '/10.png', alt: 'NodeJS' },  
  { src: '/11.png', alt: 'MetaADS' },  
  { src: '/12.png', alt: 'C++' },  
  { src: '/13.png', alt: 'PowerBi' },  
  { src: '/14.png', alt: 'Linux' },  
  { src: '/15.png', alt: 'MySQL' },  
]

const links = [
  {
    label: 'Meu Site & Portfólio',
    href: 'https://portifolio-miguel-navy.vercel.app/',
    icon: <FiMonitor /> ,

  },
  {
    label: 'LinkedIn | @miguelgomescy',
    href: 'https://linkedin.com/in/miguelgomescy',
    icon: <FaLinkedin /> ,
  },
  {
    label: 'Instagram | @miguelgomescy',
    href: 'https://instagram.com/miguelgomescy',
    icon: <FaInstagram />,
  },
  {
    label: 'Github | @miguelgomescy',
    href: 'https://github.com/miguelgomescy',
    icon: <FaGithub />,
  },
  {
    label: 'Entrar em contato | WhatsApp',
    href: 'https://wa.me/5511943865242',
    icon: <FaWhatsapp />,
  },
  {
    label: 'miguelcy.dev@gmail.com',
    href: 'mailto:miguelcy.dev@gmail.com',
    icon: <MdEmail />,
  },
]

function App() {
  return (
    <div className="page">
      {/* HERO */}
      <header className="hero">
       
        <div className="hero-image">
          {/* coloca sua foto como background via CSS */}
           <div className="hero-overlay">
            <h1 className="hero-name">
              Miguel  Gomes
            </h1>
            <p className="hero-role">Full-Stack Developer & Ads Manager</p>
          </div> 
        </div>
      

      </header>

      {/* TECH STRIP TOP */}

     <section className="tech-strip">
        <div className="tech-strip-inner">
          {techIcons.concat(techIcons).map((icon, index) => (
            <div key={icon.alt + index} className="tech-pill">
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* LINKS */}
      <main className="links-section">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="link-button"
            target="_blank"
            rel="noreferrer"
          >
            <span className="link-icon">{link.icon}</span>
            <span className="link-label">{link.label}</span>
          </a>
        ))}
      </main>

      {/* TECH STRIP BOTTOM */}
     <section className="tech-strip">
        <div className="tech-strip-inner">
          {techIcons.concat(techIcons).map((icon, index) => (
            <div key={icon.alt + index} className="tech-pill">
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION / SÃO PAULO */}
      <footer className="location">
        <div className="location-image">
          <div className="location-overlay">
            <p className="location-subtitle">Diretamente de:</p>
            <p className="location-title">São Paulo</p>

          <div className="location-flags">
            <img src="/SP.svg" alt="São Paulo" />
            <span className="flag-separator">•</span>

          {/*   <span className="logo-mini">MG</span> {/* ou teu símbolo */} 

           {/*  <span className="flag-separator">•</span> */}
            
            <img src="/Brasil.png" alt="Brasil" />
          </div>



          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
