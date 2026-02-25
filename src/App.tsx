import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { useState, ReactNode } from 'react';

const FadeIn = ({ children, delay = 0, key }: { children: ReactNode, delay?: number, key?: number | string }) => (
  <motion.div
    key={key}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappLink = "https://wa.me/5519996528207?text=Ol%C3%A1%20Claudia%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20clareza.";

  return (
    <div className="min-h-screen bg-[var(--color-sand)] text-[var(--color-charcoal)] selection:bg-[var(--color-moss)] selection:text-[var(--color-sand)]">
      {/* BLOCO 1: HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/claudia-hero/1920/1080?blur=2"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-sand)]/80 via-[var(--color-sand)]/95 to-[var(--color-sand)]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[var(--color-moss)] mb-6 leading-tight">
              Você não está exausta apenas pelo excesso de trabalho.<br />
              <span className="italic text-[var(--color-terracotta)]">Você está cansada de se abandonar.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-[var(--color-charcoal)]/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              Para a mulher profissional que conquistou tudo, mas se perdeu no caminho. Recupere sua identidade, sua voz e sua autoridade interna através de um processo terapêutico profundo e estruturado.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <button
              onClick={() => scrollTo('identificacao')}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-sm md:text-base font-medium tracking-widest text-white uppercase bg-[var(--color-moss)] rounded-full overflow-hidden transition-all hover:bg-[var(--color-moss)]/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--color-moss)] focus:ring-offset-2 focus:ring-offset-[var(--color-sand)]"
            >
              <span className="relative z-10">Quero voltar para mim mesma</span>
            </button>
          </FadeIn>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-[var(--color-moss)]/50 hover:text-[var(--color-moss)]"
          onClick={() => scrollTo('identificacao')}
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </motion.div>
      </section>

      {/* BLOCO 2: IDENTIFICAÇÃO */}
      <section id="identificacao" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl text-[var(--color-moss)] mb-8 text-center">Quem é você quando não está performando?</h2>
            <p className="text-lg md:text-xl text-[var(--color-charcoal)]/80 text-center mb-16 leading-relaxed">
              Você se tornou a mulher funcional. A que resolve, a que entrega, a que sustenta o mundo dos outros em silêncio. Por fora, o sucesso e a competência. Por dentro, um vazio que nenhuma promoção ou elogio consegue preencher.
              <br /><br />
              <span className="font-medium text-[var(--color-terracotta)]">Você se identifica com isso?</span>
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "A exaustão que o sono não cura",
                desc: "Você acorda cansada porque o peso que carrega não é físico, é o peso de personagens que não te pertencem."
              },
              {
                title: "O medo de decepcionar",
                desc: "Você prefere se anular a correr o risco de não ser a \"boa menina\" ou a \"profissional impecável\"."
              },
              {
                title: "A perda do desejo",
                desc: "Você já não sabe mais o que quer, apenas o que precisa fazer."
              },
              {
                title: "O silêncio ensurdecedor",
                desc: "Sua fé e sua história foram usadas como desculpa para você não ter voz."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-[var(--color-sand)]/50 border border-[var(--color-moss)]/10 h-full transition-colors hover:bg-[var(--color-sand)]">
                  <h3 className="text-xl font-serif text-[var(--color-moss)] mb-3">{item.title}</h3>
                  <p className="text-[var(--color-charcoal)]/70 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-16 text-center">
            <FadeIn>
              <button
                onClick={() => scrollTo('video')}
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-widest text-[var(--color-moss)] uppercase border border-[var(--color-moss)] rounded-full transition-all hover:bg-[var(--color-moss)] hover:text-white"
              >
                Continuar lendo
              </button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* BLOCO 3: VÍDEO */}
      <section id="video" className="py-24 px-6 bg-[var(--color-moss)] text-[var(--color-sand)]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif text-center mb-12 leading-tight">
              Dê o play e descubra como <br className="hidden md:block" />
              <span className="italic text-[var(--color-terracotta)]">parar de se abandonar.</span>
            </h2>
            <div className="aspect-[9/16] max-w-[400px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-[var(--color-sand)]/20 bg-[var(--color-charcoal)]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/0IaS_CW6H-U?rel=0"
                title="Apresentação Claudia Consentino"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </FadeIn>
          <div className="mt-12 text-center">
            <FadeIn>
              <button
                onClick={() => scrollTo('confronto')}
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-widest text-[var(--color-sand)] uppercase border border-[var(--color-sand)]/30 rounded-full transition-all hover:bg-[var(--color-sand)] hover:text-[var(--color-moss)]"
              >
                Avançar
              </button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* BLOCO 4: O CONFRONTO */}
      <section id="confronto" className="py-24 px-6 bg-[var(--color-sand)]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl text-[var(--color-moss)] mb-8">O Burnout Existencial não é sobre gestão de tempo.</h2>
            <div className="w-16 h-px bg-[var(--color-terracotta)] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-[var(--color-charcoal)]/80 leading-relaxed mb-8">
              É sobre o custo invisível de tentar ser tudo para todos. O tratamento real começa quando você entende que submissão excessiva não é virtude, é prisão.
            </p>
            <p className="text-lg md:text-xl text-[var(--color-charcoal)]/80 leading-relaxed font-medium">
              Minha abordagem integra a Terapia Cognitiva Comportamental, a Filosofia Existencial e uma Fé Real (sem alienação) para devolver a você o território que você cedeu ao mundo.
            </p>
          </FadeIn>
          <div className="mt-16 text-center">
            <FadeIn>
              <button
                onClick={() => scrollTo('sobre')}
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-widest text-[var(--color-moss)] uppercase border border-[var(--color-moss)] rounded-full transition-all hover:bg-[var(--color-moss)] hover:text-white"
              >
                Conheça a Claudia
              </button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* BLOCO 5: SOBRE CLAUDIA */}
      <section id="sobre" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://picsum.photos/seed/claudia-portrait/800/1066"
                alt="Claudia Consentino"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-black/5 rounded-2xl"></div>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-5xl text-[var(--color-moss)] mb-8">Olá, eu sou a Claudia Consentino</h2>
              <div className="space-y-6 text-lg text-[var(--color-charcoal)]/80 leading-relaxed">
                <p>
                  Eu vivi anos sendo a mulher "de oração", silenciosa e obediente, acreditando que meu valor dependia da minha utilidade para os outros. Construí e abandonei caminhos tentando me encaixar em moldes que me sufocavam.
                </p>
                <p className="font-medium text-[var(--color-terracotta)]">
                  O meu rompimento veio com uma única consciência: Eu tenho que voltar a ser eu mesma.
                </p>
                <p>
                  Hoje, como terapeuta especializada em Burnout Feminino e Identidade, eu não romantizo sua dor. Eu te escuto profundamente, mas te devolvo a responsabilidade. Eu te acolho, mas te confronto para que você pare de se esconder.
                </p>
              </div>
            </FadeIn>
            <div className="mt-12">
              <FadeIn delay={0.4}>
                <button
                  onClick={() => scrollTo('metodo')}
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-widest text-[var(--color-moss)] uppercase border border-[var(--color-moss)] rounded-full transition-all hover:bg-[var(--color-moss)] hover:text-white"
                >
                  Como funciona o método
                </button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 6: O MÉTODO */}
      <section id="metodo" className="py-24 px-6 bg-[var(--color-moss)] text-[var(--color-sand)] overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <span className="block text-center text-sm font-medium tracking-[0.3em] uppercase text-[var(--color-terracotta)] mb-4">O Caminho</span>
            <h2 className="text-3xl md:text-5xl text-center mb-20 font-serif">Um processo estruturado para <br className="hidden md:block" /> seu retorno à vida.</h2>
          </FadeIn>

          <div className="relative">
            {/* Linha Central (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-terracotta)]/50 via-white/10 to-transparent -translate-x-1/2"></div>

            {/* Linha Lateral (Mobile) */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-terracotta)]/50 to-transparent"></div>

            <div className="space-y-12 md:space-y-32">
              {[
                {
                  title: "Consciência",
                  desc: "Mergulhamos na sua história para nomear os padrões de autoabandono e submissão excessiva que se tornaram sua prisão invisível.",
                  tag: "Fase 01"
                },
                {
                  title: "Responsabilidade",
                  desc: "Você deixa o papel de vítima das circunstâncias para assumir o protagonismo das suas escolhas, desejos e limites.",
                  tag: "Fase 02"
                },
                {
                  title: "Identidade",
                  desc: "Reconstruímos quem você é por baixo de todos os títulos, expectativas alheias e funções que você exerce para o mundo.",
                  tag: "Fase 03"
                },
                {
                  title: "Presença",
                  desc: "A consolidação da sua nova autoridade interna. Você aprende a ocupar seu espaço e ter voz sem culpa ou medo.",
                  tag: "Fase 04"
                }
              ].map((step, i) => (
                <div key={i} className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-terracotta)] shadow-[0_0_20px_rgba(179,93,61,0.8)] z-10"></div>

                  {/* Card Content */}
                  <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:pr-16 pl-12 md:pl-0 md:text-right' : 'md:pl-16 pl-12 md:text-left'}`}>
                    <FadeIn delay={i * 0.1}>
                      <div className="group relative">
                        {/* Decorative Background Number */}
                        <span className="absolute -top-10 left-0 md:left-auto md:right-0 text-7xl md:text-9xl font-serif text-white/5 pointer-events-none transition-all duration-700 group-hover:text-white/10">
                          {i + 1}
                        </span>

                        <div className="relative pt-4">
                          <span className="inline-block px-3 py-1 text-[10px] font-semibold tracking-widest text-[var(--color-terracotta)] uppercase border border-[var(--color-terracotta)]/30 rounded-full mb-4">
                            {step.tag}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 group-hover:text-[var(--color-sand)] transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-lg text-[var(--color-sand)]/70 leading-relaxed font-light italic">
                            "{step.desc}"
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 text-center">
            <FadeIn>
              <button
                onClick={() => scrollTo('faq')}
                className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-widest text-[var(--color-sand)] uppercase bg-white/5 border border-white/20 rounded-full transition-all hover:bg-white/10 hover:border-white/40"
              >
                <span>Dúvidas Frequentes</span>
                <ChevronDown size={14} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* BLOCO 7: FAQ */}
      <section id="faq" className="py-24 px-6 bg-[var(--color-sand)]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl text-[var(--color-moss)] mb-12 text-center">Perguntas que você pode estar se fazendo agora:</h2>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                q: "Vou parecer egoísta ao priorizar minha terapia?",
                a: "O maior risco que você corre não é parecer egoísta; é desaparecer completamente de si mesma enquanto tenta salvar os outros."
              },
              {
                q: "A terapia vai contra a minha fé?",
                a: "Pelo contrário. Uma fé saudável exige uma identidade integrada. Deus não te chamou para ser um robô funcional, mas para ser uma mulher consciente e presente."
              },
              {
                q: "Preciso estar em crise total para começar?",
                a: "Não espere o colapso físico para decidir existir. A prevenção do burnout começa na primeira percepção de vazio."
              },
              {
                q: "Como são as sessões?",
                a: "100% online, por vídeo, em um ambiente de total privacidade e sigilo."
              }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} delay={i * 0.1} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <FadeIn>
              <button
                onClick={() => scrollTo('cta')}
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-widest text-[var(--color-moss)] uppercase border border-[var(--color-moss)] rounded-full transition-all hover:bg-[var(--color-moss)] hover:text-white"
              >
                Próximo Passo
              </button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* BLOCO 8: CTA FINAL */}
      <section id="cta" className="py-32 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-moss)] mb-8">Existe uma vida que é sua esperando para ser vivida.</h2>
            <p className="text-lg md:text-xl text-[var(--color-charcoal)]/80 mb-12 leading-relaxed">
              Minha agenda é restrita porque prezo pela profundidade de cada processo. Se você está pronta para abandonar o personagem e reconstruir sua autoridade interna, agende sua sessão de clareza abaixo.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-sm md:text-base font-medium tracking-widest text-white uppercase bg-[var(--color-terracotta)] rounded-full overflow-hidden transition-all hover:bg-[var(--color-terracotta)]/90 hover:scale-105 shadow-xl shadow-[var(--color-terracotta)]/20"
            >
              <span className="relative z-10">Agendar minha sessão de clareza</span>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-[var(--color-charcoal)]/50 bg-[var(--color-sand)]">
        <p>© {new Date().getFullYear()} Claudia Consentino. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

function FAQItem({ question, answer, delay, key }: { question: string, answer: string, delay: number, key?: number | string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeIn delay={delay} key={key}>
      <div className="border-b border-[var(--color-moss)]/20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
        >
          <span className="text-lg font-serif text-[var(--color-moss)] group-hover:text-[var(--color-terracotta)] transition-colors pr-4">{question}</span>
          <span className="flex-shrink-0 text-[var(--color-moss)]/50 group-hover:text-[var(--color-terracotta)] transition-colors">
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
          </span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pb-6 text-[var(--color-charcoal)]/70 leading-relaxed">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}
