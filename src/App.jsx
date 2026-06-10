import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Phone,
  MessageCircle,
  Mail,
  BarChart3,
  Wrench,
  ShieldCheck,
  Zap,
  MousePointerClick,
  Star,
  Menu,
  X,
} from "lucide-react";

const PHONE_NUMBER = "330778564900"; // Remplace par ton numéro WhatsApp au format international, ex : 33612345678
const EMAIL = "alexandrezibapro@gmail.com"; // Remplace par ton mail pro
const CALENDLY_LINK = "https://calendly.com/alexandreziba245/30min"; 

const services = [
  {
    icon: MousePointerClick,
    title: "Parcours client plus direct",
    text: "Boutons appel, WhatsApp et formulaire bien visibles pour réduire les visiteurs perdus.",
  },
  {
    icon: Wrench,
    title: "Page claire et mobile-first",
    text: "Une landing page rapide, propre et pensée pour convertir les visiteurs en demandes de devis.",
  },
  {
    icon: BarChart3,
    title: "Suivi des demandes",
    text: "Tracking simple des clics, formulaires et contacts pour savoir ce qui fonctionne vraiment.",
  },
  {
    icon: Zap,
    title: "Optimisation continue",
    text: "Amélioration du texte, des CTA et du parcours client pour augmenter les contacts dans le temps.",
  },
];

const offers = [
  {
    name: "Installation simple",
    price: "à partir de 390 €",
    description: "Pour avoir une page propre et recevoir des demandes rapidement.",
    features: [
      "Landing page responsive",
      "Bouton appel + WhatsApp",
      "Formulaire de demande de devis",
      "Mise en ligne",
    ],
    highlighted: false,
  },
  {
    name: "Système d'acquisition",
    price: "à partir de 790 €",
    description: "L'offre recommandée pour transformer ta présence en ligne en demandes concrètes.",
    features: [
      "Tout ce qui est inclus dans l'installation simple",
      "Texte optimisé pour convaincre",
      "Tracking des appels, clics et formulaires",
      "Tableau de suivi des demandes",
      "Mini audit de votre présence actuelle",
    ],
    highlighted: true,
  },
  {
    name: "Suivi mensuel",
    price: "à partir de 149 €/mois",
    description: "Pour garder un système propre, suivi et amélioré chaque mois.",
    features: [
      "Maintenance technique",
      "Petites modifications mensuelles",
      "Rapport simple des demandes",
      "Optimisations du parcours client",
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Est-ce que je dois refaire tout mon site ?",
    answer:
      "Pas forcément. L'objectif est d'abord d'ajouter un parcours clair qui pousse les visiteurs à appeler, envoyer un WhatsApp ou demander un devis.",
  },
  {
    question: "C'est adapté à quel type d'artisan ?",
    answer:
      "Plombiers, électriciens, peintres, serruriers, chauffagistes, couvreurs, menuisiers, entreprises locales et services de proximité.",
  },
  {
    question: "Est-ce que vous garantissez plus de clients ?",
    answer:
      "Je ne promets pas un nombre magique de clients. Je construis un système plus clair pour augmenter les chances de transformer vos visiteurs en demandes concrètes.",
  },
];

function Button({ children, href = "#", variant = "primary", className = "" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-white/40";

  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-zinc-200 shadow-[0_0_35px_rgba(255,255,255,0.18)]"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg">{text}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-[130px]" />
        <div className="absolute right-0 top-[30%] h-[320px] w-[320px] rounded-full bg-zinc-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3" aria-label="Accueil">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/15 bg-white text-sm font-black text-black">
              AZ
            </div>
            <div>
              <p className="text-sm font-semibold leading-none">Alexandre Ziba</p>
              <p className="mt-1 text-xs text-zinc-500">Acquisition locale</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            <a href="#solution" className="hover:text-white">Solution</a>
            <a href="#offres" className="hover:text-white">Offres</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          <div className="hidden md:block">
            <Button href={`https://wa.me/${PHONE_NUMBER}`}>
              Audit gratuit <ArrowRight size={16} />
            </Button>
          </div>

          <button
            className="rounded-xl border border-white/10 p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-zinc-300">
              <a href="#solution" onClick={() => setMenuOpen(false)}>Solution</a>
              <a href="#offres" onClick={() => setMenuOpen(false)}>Offres</a>
              <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative z-10 mx-auto grid min-h-[92vh] max-w-7xl items-center gap-14 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
            <ShieldCheck size={16} /> Pour artisans et entreprises locales
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
            Transformez vos visiteurs en demandes de devis.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
            J'aide les artisans à recevoir plus d'appels, de messages WhatsApp et de formulaires grâce à une page claire, un parcours client direct et un suivi simple des demandes.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={`https://wa.me/${PHONE_NUMBER}?text=Bonjour%2C%20je%20veux%20un%20audit%20gratuit%20de%20ma%20pr%C3%A9sence%20en%20ligne.`}>
              Demander un audit gratuit <ArrowRight size={17} />
            </Button>
            <Button href="#solution" variant="secondary">
              Voir la solution
            </Button>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-semibold">24h</p>
              <p className="mt-1 text-xs text-zinc-500">pour lancer une première version</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">3 CTA</p>
              <p className="mt-1 text-xs text-zinc-500">appel, WhatsApp, formulaire</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">100%</p>
              <p className="mt-1 text-xs text-zinc-500">pensé mobile et local</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-white/10 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-zinc-950/80 p-4 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-black p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm font-semibold">Tableau des demandes</p>
                  <p className="mt-1 text-xs text-zinc-500">Exemple de suivi client</p>
                </div>
                <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Actif
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {[
                  ["Appel", "Devis plomberie", "Aujourd'hui", Phone],
                  ["WhatsApp", "Urgence chauffage", "Hier", MessageCircle],
                  ["Formulaire", "Rénovation salle de bain", "Il y a 2 jours", Mail],
                ].map(([type, title, time, Icon], index) => (
                  <div key={index} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-black">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{title}</p>
                        <p className="mt-1 text-xs text-zinc-500">{type}</p>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-500">{time}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium">Contacts reçus</p>
                  <p className="text-xs text-zinc-500">+32%</p>
                </div>
                <div className="flex h-28 items-end gap-2">
                  {[35, 50, 42, 70, 58, 88, 76, 96].map((height, index) => (
                    <div key={index} className="flex-1 rounded-t-lg bg-white/80" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.03] px-5 py-8">
        <div className="mx-auto grid max-w-7xl gap-4 text-center text-sm text-zinc-400 md:grid-cols-3">
          <p>✓ Page rapide et responsive</p>
          <p>✓ Parcours client orienté contact</p>
          <p>✓ Suivi simple des demandes</p>
        </div>
      </section>

      <section id="solution" className="relative z-10 mx-auto max-w-7xl px-5 py-24">
        <SectionTitle
          eyebrow="Solution"
          title="Un système simple pour arrêter de perdre des contacts."
          text="La plupart des sites locaux sont jolis, mais ils ne guident pas assez le client. Ici, chaque section pousse vers une action claire."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-white text-black">
                <item.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24">
        <div className="grid gap-5 rounded-[2rem] border border-white/10 bg-zinc-950/70 p-6 md:grid-cols-3 md:p-10">
          {[
            ["01", "Audit rapide", "On repère où les visiteurs se perdent : site, fiche Google, boutons, formulaire, message."],
            ["02", "Installation", "On crée une page claire avec appel, WhatsApp, formulaire et un message adapté à votre métier."],
            ["03", "Suivi", "Vous voyez les demandes reçues et on améliore le système avec le temps."],
          ].map(([number, title, text]) => (
            <div key={number} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-zinc-500">{number}</p>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="offres" className="relative z-10 mx-auto max-w-7xl px-5 py-24">
        <SectionTitle
          eyebrow="Offres"
          title="Commencez petit, puis améliorez le système."
          text="Des offres simples pour lancer une présence plus crédible, puis suivre les demandes dans le temps."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.name}
              className={`relative rounded-[2rem] border p-7 ${
                offer.highlighted
                  ? "border-white bg-white text-black shadow-[0_0_60px_rgba(255,255,255,0.18)]"
                  : "border-white/10 bg-white/[0.03] text-white"
              }`}
            >
              {offer.highlighted && (
                <div className="absolute right-5 top-5 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                  Recommandé
                </div>
              )}
              <h3 className="text-2xl font-semibold">{offer.name}</h3>
              <p className={`mt-3 text-sm leading-6 ${offer.highlighted ? "text-zinc-700" : "text-zinc-400"}`}>
                {offer.description}
              </p>
              <p className="mt-6 text-3xl font-semibold">{offer.price}</p>
              <ul className="mt-7 space-y-3">
                {offer.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm">
                    <Check size={18} className="mt-0.5 shrink-0" />
                    <span className={offer.highlighted ? "text-zinc-800" : "text-zinc-300"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${PHONE_NUMBER}?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20l'offre%20${encodeURIComponent(offer.name)}.`}
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  offer.highlighted
                    ? "bg-black text-white hover:bg-zinc-800"
                    : "bg-white text-black hover:bg-zinc-200"
                }`}
              >
                Demander cette offre <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div>
            <div className="mb-5 flex gap-1 text-white">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={18} fill="currentColor" />
              ))}
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Une présence en ligne doit rassurer et faire passer à l'action.
            </h2>
          </div>
          <div className="text-base leading-8 text-zinc-300 md:text-lg">
            <p>
              Beaucoup d'artisans ont déjà un site ou une fiche Google, mais le client doit chercher le numéro, comprendre l'offre, hésiter, puis abandonner. Mon travail est de simplifier le chemin : comprendre vite, cliquer vite, demander vite.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-2xl font-semibold text-white">+ clair</p>
                <p className="mt-1 text-xs text-zinc-500">message direct</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-2xl font-semibold text-white">+ rapide</p>
                <p className="mt-1 text-xs text-zinc-500">contact en 1 clic</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-2xl font-semibold text-white">+ suivi</p>
                <p className="mt-1 text-xs text-zinc-500">demandes visibles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative z-10 mx-auto max-w-4xl px-5 py-24">
        <SectionTitle
          eyebrow="FAQ"
          title="Questions fréquentes"
          text="Des réponses simples avant de demander un audit."
        />

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <summary className="cursor-pointer list-none text-lg font-semibold">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-5 pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-white p-8 text-black md:p-14">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">Audit gratuit</p>
              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Je vous montre où vous perdez des demandes.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
                Envoyez-moi votre site, fiche Google ou Instagram. Je vous réponds avec 2 ou 3 améliorations concrètes pour recevoir plus d'appels, messages ou devis.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-black/10 bg-zinc-50 p-5">
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${PHONE_NUMBER}?text=Bonjour%2C%20je%20veux%20un%20audit%20gratuit.%20Voici%20mon%20site%20%3A%20`}
                  className="flex items-center justify-between rounded-2xl bg-black px-5 py-4 font-semibold text-white transition hover:bg-zinc-800"
                >
                  WhatsApp <MessageCircle size={20} />
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=Demande%20d'audit%20gratuit&body=Bonjour%2C%0A%0AJe%20veux%20un%20audit%20gratuit%20de%20ma%20pr%C3%A9sence%20en%20ligne.%0A%0AMon%20site%20%2F%20Instagram%20%2F%20fiche%20Google%20%3A%20%0A%0AMerci.`}
                  className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-5 py-4 font-semibold text-black transition hover:bg-zinc-100"
                >
                  Email <Mail size={20} />
                </a>
                <a
                  href={CALENDLY_LINK}
                  className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-5 py-4 font-semibold text-black transition hover:bg-zinc-100"
                >
                  Réserver un appel <Phone size={20} />
                </a>
              </div>

              <p className="mt-5 text-xs leading-6 text-zinc-500">
                Conseil : remplace le numéro WhatsApp, l'adresse email et le lien de réservation en haut du fichier.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} Alexandre Ziba. Tous droits réservés.</p>
          <div className="flex gap-5">
            <a href={`mailto:${EMAIL}`} className="hover:text-white">Email</a>
            <a href={`https://wa.me/${PHONE_NUMBER}`} className="hover:text-white">WhatsApp</a>
            <a href="#top" className="hover:text-white">Retour en haut</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
