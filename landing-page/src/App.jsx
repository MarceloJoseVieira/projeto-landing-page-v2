import { useEffect, useRef, useState } from 'react'
import logoImg from './assets/logo1.png'
import imgGaleria1 from './assets/img-galeria-1.jpeg'
import imgGaleria2 from './assets/img-galeria-2.jpeg'
import imgGaleria3 from './assets/img-galeria-3.jpeg'
import imgGaleria4 from './assets/img-galeria-4.jpeg'
import imgGaleria5 from './assets/img-galeria-5.jpeg'
import imgGaleria6 from './assets/img-galeria-6.jpeg'
import imgGaleria7 from './assets/img-galeria-7.jpeg'
import imgGaleria8 from './assets/img-galeria-8.jpeg'
import imgGaleria9 from './assets/img-galeria-9.jpeg'
import imgGaleria10 from './assets/img-galeria-10.jpeg'


function App() {

    // 1. Referências e Estados para o Carrossel
    const carouselRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const itemsCount = 6

    // Intersection Observer for scroll animations
    useEffect (() => { 
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-4')
          }
        })
      }, { threshold: 0.1 })

      const targets = document.querySelectorAll('.scroll-reveal')
      targets.forEach(target => {
        target.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-4')
        observer.observe(target)
      })

      return () => {
        targets.forEach(target => {
          observer.unobserve(target)
        })
      }
    }, [])

  // 3. Funções do Carrossel
  const scrollToIndex = (index) => {
    let newIndex = index
    if (newIndex < 0) newIndex = itemsCount - 1
    if (newIndex >= itemsCount) newIndex = 0
    
    if (carouselRef.current && carouselRef.current.children.length > 0) {
      const container = carouselRef.current
      const item = container.children[newIndex]
      if (item) {
        container.scrollTo({
          left: item.offsetLeft - (window.innerWidth >= 768 ? 40 : 16),
          behavior: 'smooth'
        })
      }
    }
    setActiveIndex(newIndex)
  }

  // Sincroniza a bolinha ativa quando arrasta com o dedo
  const handleScroll = () => {
    if (!carouselRef.current || !carouselRef.current.children[0]) return
    const container = carouselRef.current
    const itemWidth = container.children[0].offsetWidth + (window.innerWidth >= 768 ? 24 : 16)
    const newIndex = Math.round(container.scrollLeft / itemWidth)
    
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < itemsCount) {
      setActiveIndex(newIndex)
    }
  }

  // Autoplay do Carrossel
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      scrollToIndex(activeIndex + 1)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [activeIndex, isPaused])

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col w-full">
      {/* TopNavBar */}
      <div className="flex items-center h-32 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full justify-center">
        <div className="font-headline-md text-headline-md font-extrabold text-primary flex items-center">
          <div className="flex items-center gap-4">
            <img 
              src={logoImg}
              alt="ML Studio Logo" 
              className="h-[84px] md:h-[96px] w-auto object-contain" 
            />
            <div className="flex flex-col items-start gap-0">
              <span className="text-on-surface-variant leading-none text-[36px]">ML STUDIO</span>
              <span 
                className="text-on-surface-variant text-label-md font-label-md opacity-90 -mt-1 text-[21px] leading-relaxed" 
                style={{ letterSpacing: '0.56em', width: '100%', display: 'block' }}
              >
                de impressões
              </span>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-surface-container-lowest py-8 md:py-xl">
          <div className="max-w-[1280px] mx-auto px-4 md:px-margin-desktop flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-xl items-center">
            <div className="order-2 md:order-1 space-y-4 md:space-y-md text-center md:text-left">
              <span className="inline-block px-4 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md rounded-full">Personalização com Amor</span>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
                Presentes que <span className="text-primary">Contam Histórias</span>
              </h1>
              <p className="text-base md:text-body-lg font-body-lg text-on-surface-variant max-w-lg mx-auto md:mx-0">
                Transforme momentos especiais em memórias táteis. Criamos itens personalizados que celebram conexões reais, desde chaveiros exclusivos a convites inesquecíveis.
              </p>
            </div>
            
            <div className="order-1 md:order-2 relative w-full">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  className="w-full h-[300px] md:h-[500px] object-cover" 
                  alt="Assortment of personalized gift items" 
                  src={imgGaleria1} 
                />
              </div>
              {/* Decor elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 md:w-40 md:h-40 bg-secondary-container rounded-full mix-blend-multiply filter blur-xl md:blur-2xl opacity-30 animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 md:w-64 md:h-64 bg-primary-container rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-20"></div>
            </div>
          </div>
        </section>

        {/* Categorias em Destaque */}
        <section className="py-8 md:py-xl max-w-[1280px] mx-auto px-4 md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-lg gap-4">
            <div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Categorias em Destaque</h2>
              <p className="text-on-surface-variant text-base md:font-body-md mt-2">Escolha o produto perfeito para sua lembrança!</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-gutter">
            {/* Chaveiros */}
            <div className="scroll-reveal group relative bg-white rounded-xl overflow-hidden card-shadow squishy-hover cursor-pointer transition-all">
              <div className="aspect-square overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt="Personalized keychains" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo-I9sgFZnWuKkM6j-maWw6FwAZvMPTL7294KB6NDXvnjpSuaZQEVIGjtBmy27Rk6Jeo7vYOA5QhhXgSpiKUx5vndjBUjrb9w6_rrE32DR0emgiYv3At5oWDpVUyS0O_DZZHECzfN8ZsYIUhsPX5VRfNZ8RSO5Uyh6q0AJf4JfugqIzqPM7RD7cUQaEWG9e03NeK5APUGYzoH9g-0LFunPYO9cjUdSfn7glKnPGWbmRK2SuelF9QIZu_PB0OU4uY2cR68uqBwcAP_8" 
                />
              </div>
              <div className="p-6 md:p-md text-center">
                <h3 className="font-headline-md text-headline-md text-on-surface">Chaveiros</h3>
                <p className="text-on-surface-variant text-base md:font-body-md">Sempre com você</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="scroll-reveal group relative bg-white rounded-xl overflow-hidden card-shadow squishy-hover cursor-pointer transition-all">
              <div className="aspect-square overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt="Custom button pins" 
                  src={imgGaleria3} 
                />
              </div>
              <div className="p-6 md:p-md text-center">
                <h3 className="font-headline-md text-headline-md text-on-surface">Bottons</h3>
                <p className="text-on-surface-variant text-base md:font-body-md">Estilo e atitude</p>
              </div>
            </div>

            {/* Magnets */}
            <div className="scroll-reveal group relative bg-white rounded-xl overflow-hidden card-shadow squishy-hover cursor-pointer transition-all">
              <div className="aspect-square overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt="Personalized fridge magnets" 
                  src={imgGaleria2}
                />
              </div>
              <div className="p-6 md:p-md text-center">
                <h3 className="font-headline-md text-headline-md text-on-surface">Lembrancinhas</h3>
                <p className="text-on-surface-variant text-base md:font-body-md">Para um momento especial</p>
              </div>
            </div>

            {/* Invitations */}
            <div className="scroll-reveal group relative bg-white rounded-xl overflow-hidden card-shadow squishy-hover cursor-pointer transition-all">
              <div className="aspect-square overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt="Custom invitations" 
                  src={imgGaleria4} 
                />
              </div>
              <div className="p-6 md:p-md text-center">
                <h3 className="font-headline-md text-headline-md text-on-surface">Convites</h3>
                <p className="text-on-surface-variant text-base md:font-body-md">Momentos únicos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Galeria de Inspirações */}
        <section class="bg-surface-container-low py-8 md:py-xl overflow-hidden">
          <div class="max-w-[1280px] mx-auto px-4 md:px-margin-desktop">
    
            <div class="text-center mb-8 md:mb-lg">
              <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                Galeria de Inspirações
              </h2>
              <p class="text-on-surface-variant text-base md:font-body-md max-w-2xl mx-auto mt-2">
                Veja como nossos clientes estão eternizando seus melhores momentos.
              </p>
            </div>
    
            <div class="relative group" id="gallery-carousel">
    
              {/* Botões de Navegação com Eventos React */}
              <button 
                onClick={() => scrollToIndex(activeIndex - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button 
                onClick={() => scrollToIndex(activeIndex + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
    
              {/* Container com Referência e Eventos React */}
              <div 
                ref={carouselRef}
                onScroll={handleScroll}
                onMouseEnter={() => setIsPaused(true)}
                onTouchStart={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchEnd={() => setIsPaused(false)}
                className="carousel-container flex gap-4 md:gap-gutter overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-4 -mx-4 px-4 md:mx-0 md:px-0"
              >
                <div className="carousel-item flex-shrink-0 w-[80vw] md:w-[400px] h-[300px] md:h-[450px] relative rounded-2xl overflow-hidden group/item">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" alt="Customer holding pet keychain" src={imgGaleria5} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-label-md">Topo de bolo</span>
                  </div>
                </div>
    
                <div className="carousel-item flex-shrink-0 w-[80vw] md:w-[400px] h-[300px] md:h-[450px] relative rounded-2xl overflow-hidden group/item">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" alt="Fridge magnets detail" src={imgGaleria6} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-label-md">Bottons personalizados</span>
                  </div>
                </div>
    
                <div className="carousel-item flex-shrink-0 w-[80vw] md:w-[400px] h-[300px] md:h-[450px] relative rounded-2xl overflow-hidden group/item">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" alt="Buttons on backpack" src={imgGaleria7} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-label-md">Itens decorativos</span>
                  </div>
                </div>
    
                <div className="carousel-item flex-shrink-0 w-[80vw] md:w-[400px] h-[300px] md:h-[450px] relative rounded-2xl overflow-hidden group/item">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" alt="Wedding invitation detail" src={imgGaleria8} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-label-md">Itens decorativos</span>
                  </div>
                </div>
    
                <div className="carousel-item flex-shrink-0 w-[80vw] md:w-[400px] h-[300px] md:h-[450px] relative rounded-2xl overflow-hidden group/item">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" alt="Cityscape keychain" src={imgGaleria9} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-label-md">Embalagens personalizadas</span>
                  </div>
                </div>

                <div className="carousel-item flex-shrink-0 w-[80vw] md:w-[400px] h-[300px] md:h-[450px] relative rounded-2xl overflow-hidden group/item">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" alt="Cityscape keychain" src={imgGaleria10} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-label-md">Impressões com sua marca</span>
                  </div>
                </div>

              </div>
    
              {/* Pontinhos Gerados Dinamicamente pelo React */}
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(itemsCount)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToIndex(i)}
                    className={`rounded-full transition-all duration-300 ${
                      activeIndex === i 
                        ? 'bg-primary w-2.5 h-2.5' 
                        : 'bg-outline-variant w-2 h-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        

        {/* CTA Section */}
        <section className="py-8 md:py-xl">
          <div className="max-w-[1280px] mx-auto px-4 md:px-margin-desktop">
            <div className="bg-primary rounded-[24px] md:rounded-[40px] p-6 md:p-xl relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-xl">
              {/* Abstract Background Pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
                  <pattern height="10" id="dotPattern" patternUnits="userSpaceOnUse" width="10" x="0" y="0">
                    <circle cx="2" cy="2" fill="white" r="1.5"></circle>
                  </pattern>
                  <rect fill="url(#dotPattern)" height="100%" width="100%"></rect>
                </svg>
              </div>
              
              <div className="relative z-10 flex-1 text-center md:text-left">
                <h2 className="scroll-reveal font-headline-lg-mobile md:font-headline-lg text-on-primary mb-4 md:mb-md">Tem um projeto especial em mente?</h2>
                <p className="text-on-primary opacity-90 text-base md:text-body-lg font-body-lg mb-8 md:mb-lg">
                  Seja para brindes corporativos, festas ou um presente único, nossa equipe está pronta para transformar sua ideia em realidade.
                </p>
                <div class="flex flex-col gap-2 text-on-primary">
                  <div class="flex items-center justify-center md:justify-start gap-2">
                    <span class="material-symbols-outlined text-base">mail</span>
                    <span class="font-body-md">marialeticiaglira@gmail.com</span>
                  </div>
                  <div class="flex items-center justify-center md:justify-start gap-2">
                    <span class="material-symbols-outlined text-base">call</span>
                    <span class="font-body-md">(84) 98701-2293</span>
                  </div>
                  <a 
                    href="https://instagram.com/ml.studiodeimpressoes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="flex items-center justify-center md:justify-start gap-2 hover:opacity-70 transition-opacity duration-200 cursor-pointer"
                  >
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                    <span class="font-body-md">@ml.studiodeimpressoes</span>
                  </a>
                </div>
              </div>

              
              <div className="relative z-10 flex-1 hidden md:block">
                <div className="glass-effect p-md rounded-3xl border border-white/20 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-fixed-dim"></div>
                    <div className="h-4 w-32 bg-on-surface/10 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-on-surface/5 rounded-full"></div>
                    <div className="h-2 w-5/6 bg-on-surface/5 rounded-full"></div>
                    <div className="h-2 w-4/6 bg-on-surface/5 rounded-full"></div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <div className="h-10 w-24 bg-primary rounded-lg opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low mt-8 md:mt-xl">
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        aria-label="Chat on WhatsApp" 
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 animate-pulse group" 
        href="https://whatsa.me/5584987012293" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
        </svg>
      </a>
    </div>
  )
}

export default App
