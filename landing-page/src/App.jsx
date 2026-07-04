import { useEffect } from 'react'
import logoImg from './assets/logo1.png'

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP8vqTdscbh0WI83x9vx0ohLkr4zo_O7-FStNrvpfB14a4ziTxxcRZYP0gclO3xARykbZgHbQq2dEmgc2JXQqhCB09T5RZjsMWSXLXgAf1U6BfRUcgegIlEOESmml8UEmBgshL1BHR72aK8ihCdHKfR0We24_rAMF0mKZpVcF3rZsZsUN_cLgq9yhHaCOrctr7IQZ8ZYw_In_JtYheImURPmNOEaiL22De0tYIDoWk31Q2Fksabtww7L8T4Y9e7G8ci5SyDORuKaFv" 
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
              <p className="text-on-surface-variant text-base md:font-body-md mt-2">Escolha o suporte perfeito para sua lembrança!</p>
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
                <h3 className="font-headline-md text-headline-md text-on-surface">Keychains</h3>
                <p className="text-on-surface-variant text-base md:font-body-md">Sempre com você</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="scroll-reveal group relative bg-white rounded-xl overflow-hidden card-shadow squishy-hover cursor-pointer transition-all">
              <div className="aspect-square overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt="Custom button pins" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyEdOBTo3zQWCQa2wwQSDMp4gVuXouZf9offycanOjYjaaq_6KIhouRZpidaX_gnTmP0yiOVT6vbIQlqxtCDWWRl6LTiFd5jGYe9-zHNSRrs7orGId7oxm5B8joD4KExWr3a5QKW77QHHXmV_k-xnpMvkhJhsokEI8MuNKnS0lpEMUcvDraI6-LeRTfxiYABUXHGIZbRQf2NrA3mw97zQ3P1TGQUdRZvXu7OJgwD23QCLEU8-YoVha4o00YQaOKE3tPyJyXPbKgSAh" 
                />
              </div>
              <div className="p-6 md:p-md text-center">
                <h3 className="font-headline-md text-headline-md text-on-surface">Buttons</h3>
                <p className="text-on-surface-variant text-base md:font-body-md">Estilo e atitude</p>
              </div>
            </div>

            {/* Magnets */}
            <div className="scroll-reveal group relative bg-white rounded-xl overflow-hidden card-shadow squishy-hover cursor-pointer transition-all">
              <div className="aspect-square overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt="Personalized fridge magnets" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOSiWD1FX-89YBXLGrV540qxtyAY1_nvR2HNYvjIv-D6So1Impm4DAI3USdaUSCNw3RdohksrO1JD0Ah1-LArzZS1mS92dPGNh4h1dEjml76SeKD7YO3Lc30UYVeof2GrJ7OfL-ZntWqJf60BcjNBLzbUEB2iyISzkvCfc3PodvfJavhhvgPdMD1-UrIE2w3MGkQPvqmbOLrJUakuXluReQYWA9HxeTVDNVaXEIzZEV_hMro9q9yj4pMo1cEwn_ANl7jsLHKEB67kO" 
                />
              </div>
              <div className="p-6 md:p-md text-center">
                <h3 className="font-headline-md text-headline-md text-on-surface">Fridge Magnets</h3>
                <p className="text-on-surface-variant text-base md:font-body-md">Sua galeria em casa</p>
              </div>
            </div>

            {/* Invitations */}
            <div className="scroll-reveal group relative bg-white rounded-xl overflow-hidden card-shadow squishy-hover cursor-pointer transition-all">
              <div className="aspect-square overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt="Custom invitations" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoGNMHwUqe4loEMRGgK5SF6cB_OSfjhTistl6b08_Rt8NXKFFJ29EKSZ01YeNtyvVUuYqCp0-Crm_w05mqF5QPooKMXJLu_Puc-K_iYQHCS5BDyLaOeeyPqtdmMYKr00Qc05VDLQ9aU5KyxnnM6rXorqQkYoMPaOaEYgSSHJ51rekw1AT5Kh2LrCm-LMMdovpdnSQt0mE3dNQKR5oRCyIRuQtA2EIrNr5jSKsdrjnafy-itg6VY0tyiAc4xLJsPATYiCGgDpXVl_tE" 
                />
              </div>
              <div className="p-6 md:p-md text-center">
                <h3 className="font-headline-md text-headline-md text-on-surface">Invitations</h3>
                <p className="text-on-surface-variant text-base md:font-body-md">Momentos únicos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Galeria de Inspirações */}
        <section className="bg-surface-container-low py-8 md:py-xl">
          <div className="max-w-[1280px] mx-auto px-4 md:px-margin-desktop">
            <div className="text-center mb-8 md:mb-lg">
              <h2 className="scroll-reveal font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Galeria de Inspirações</h2>
              <p className="text-on-surface-variant text-base md:font-body-md max-w-2xl mx-auto mt-2">
                Veja como nossos clientes estão eternizando seus melhores momentos.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 md:grid md:grid-cols-5 md:gap-sm md:h-[600px]">
              {/* Main Large Image */}
              <div className="w-full md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden h-[300px] md:h-full">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Customer holding pet keychain" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzloak764BH0L8QdXYqTFEWzOa54bO_tnObDBkdD55EFqPO2xDhcF9luU9V4pdKfCkPZorOIH4gUxNPXA2En-d3btosS5IfT2KS85tPS-DXCb25bSUsmTS43rEUFgOaR8YUUNJfaQquNvsrP5R2ooX-paF4hU9vVqVxsPZzMQaeEx9RRSLxFeVvZfNCuN1kYAtbXHU2aJZ9nllYSO9ahfN4X1GS7F4CreXsvHfvcAAVvKvDByj_-gbcOgynZM9TZlpXM6aOWzOG8hN" 
                />
              </div>
              
              {/* Secondary Images */}
              <div className="grid grid-cols-2 gap-4 md:contents">
                <div className="rounded-2xl overflow-hidden h-[150px] md:h-full">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Fridge magnets detail" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkKAxRQIcPJwO651vF1ThzD3-IPGA1oeokUXV2RjUVvwhzxLjk_AYyntIcSZVl5R6wl-Mlc8ck1eRWuHFSBbI-s_-Me14KQ8OgN7MyNE-hPD6uzQRNSEZBePcQcFVOs1AFVdkQCpF2NTa8IsyxyxKN5zWViiYxtGmtSDHLe02VERZq2lK3D8heXB9vu0q2TsinQlzZY-OjUZVx2T50xXWDtV3tjj-dNRBhQft-eVqqtqXtZwIVfhoqz-5e8uxNxrMJ2nPw-O0vYE6Q" 
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-[150px] md:h-full">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Buttons on backpack" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqPQSIxsCP0_jTVyP96zKtMv8wR5wqgN3I9Sbga5ooWQ3CmzHPPMCTqpPfVDohrI1A7DBetGQVUjwdoEYIlhJfd5QWFnhikOHbLZTl93bK2On-tcSTTV4ULHVowT2T7FhnoMDtmJZgPZUqskKxbC52vV4yYT9eHk-5TNKJAveXLW_j5Azp5p1H7QdvTyPEmpJTXOWcbswOI9lyfiWTwXb8TjIiAaACotN7a23DlYwhXhtWk3Nex46qIak-_K6egcC0qS6XMUYa2j9a" 
                  />
                </div>
              </div>
              
              <div className="w-full md:col-span-2 rounded-2xl overflow-hidden h-[200px] md:h-full">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Wedding invitation detail" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmx99FsxZ3cYLA_VV046SZ_ZXAO81xkwLg9qX36toQ7pdWTmwt9QbFicM0FwyTHPXogdB0DreTxSCyml_1iDTM65kJei5xkmEqwtUezY0UZDHBSenwVGv5xckbJTk5GnhUm5p9jOZze1dfyiPp3po9ZYE41HEhFR1gDtehuTZgiEXttK5dj9FNq0mHUhS7jX1_7vJKSbY4RX_5S5CrT9XYObMw8067s5BWrwCt_pqCH6hLXA0iPiZ65yZHsYBsNfNDe-QaIfrpwF-U" 
                />
              </div>
              
              <div className="rounded-2xl overflow-hidden h-[150px] md:h-full">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Cityscape keychain" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUrS85W7AiE1PwPwImbLYK_GmQQAq5T1ji2qb1c3-nf2zEOZesZUr8ZYAXU_-DlOMewCmlccyrBkAPPxf06rBSGXpExaU-m3Ha_QzNIn0-qKgfuRUrJsvdxQhWgmx0pIHR01dErfR3XO85qzPQUYgjmS_FRxNVYecp8nWN5mK8GVl5qDDqEou2h5PLz6OadHUy94e-2knXc2rwIYPM6btf7PqOh8XskMbBzttba3s_ttFgL7JHc6E6y-MabYOz9NnpMMVgAO8tETlu" 
                />
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
                    <span class="font-body-md">contato@mlstudio.com.br</span>
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
