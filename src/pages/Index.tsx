import { Phone, Leaf, Zap, Users, MessageCircle, Star } from "lucide-react";
import { useRef, useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import heroChicken from "@/assets/hero-chicken.jpg";
import heroAsli from "@/assets/hero-asli.png";
import menuAyam from "@/assets/menu-ayam-crispy.jpg";
import menuPaket from "@/assets/menu-paket-hemat.jpg";
import menuNasi from "@/assets/menu-nasi-ayam-teh.jpg";
import logo from "@/assets/logo.png";
import menuNasiAyamTeh from "@/assets/menu-Nasi-DadaAyam-EsTeh.jpeg";
import menuDada from "@/assets/menu-dadacrispy-original.png";
import menuPahaBawahSadas from "@/assets/menu-paha-bawah-celup-nasi.png";
import menuAyamSausKeju from "@/assets/menu-ayam-sauskeju.png";
import menuKulit from "@/assets/menu-kulit-ayam-100gr.png";
import menuUsus from "@/assets/menu-usus-crispy-100gr.png";

const WA_LINK = "https://wa.me/6288227391396";

const menuItems = [
  { img: menuNasiAyamTeh, name: "Paket Nasi Dada Pedas + Es Teh", price: "Rp 21.000", badge: "Best Seller 🔥" },
  { img: menuDada, name: "Dada Krispi ORI (tanpa nasi)", price: "Rp 14.000", badge: "Favorit!" },
  { img: menuPahaBawahSadas, name: "Nasi + Paha Bawah Celup Pedas", price: "Rp 14.000", badge: "Pedas 🌶️" },
  { img: menuAyamSausKeju, name: "Dada Krispi Saus Keju", price: "Rp 15.000", badge: "Cheesy 🧀" },
  { img: menuKulit, name: "Kulit Ayam Krispi 100gr", price: "Rp 18.000", badge: "Kriuk!" },
  { img: menuUsus, name: "Usus Krispi 100gr", price: "Rp 13.000", badge: "Hemat!" },
];

const testimonials = [
  { text: "Enak banget, repeat order terus 🔥", name: "Siti" },
  { text: "Murah tapi kualitas restoran!", name: "Budi" },
];

function MenuCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", dragFree: true });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3 px-1">
          {menuItems.map((item) => (
            <div key={item.name} className="flex-[0_0_65%] min-w-0">
              <div className="card-menu animate-fade-in">
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-32 object-cover"
                    loading="lazy"
                    width={512}
                    height={512}
                  />
                  <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-[8px] font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <div className="p-2.5 text-center">
                  <h3 className="text-xs font-bold text-foreground">{item.name}</h3>
                  <p className="text-accent font-extrabold text-sm mt-0.5">{item.price}</p>
                  <a
                    href={`${WA_LINK}?text=${encodeURIComponent(`Halo kak, saya mau pesan:\n\n🍗 ${item.name}\n💰 ${item.price}\n\nMohon konfirmasi ya, terima kasih!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-order mt-2 inline-block"
                  >
                    Pesan Sekarang &gt;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {menuItems.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === selected ? "bg-primary w-5" : "bg-border"
            }`}
            onClick={() => emblaApi?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body max-w-md mx-auto relative">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2.5 bg-card/95 backdrop-blur-md sticky top-0 z-40 shadow-sm animate-fade-in">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Chicken Kriuk Warzuqnii" className="w-8 h-8 rounded-full" />
          <span className="text-sm font-extrabold text-primary font-heading">Chicken Kriuk Warzuqnii</span>
        </div>
        <a
          href="tel:088227391396"
          className="flex items-center gap-1 bg-primary text-primary-foreground text-[10px] font-semibold px-2.5 py-1 rounded-full"
        >
          <Phone className="w-3 h-3" />
          0882-2739-1396
        </a>
      </header>

      {/* Hero - compact */}
      <section className="relative h-56 overflow-hidden">
        <img
          src={heroAsli}
          alt="Chicken Kriuk"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div
          className="absolute inset-0 flex flex-col items-start justify-end px-5 pb-4"
          style={{ background: "linear-gradient(180deg, hsla(0 0% 0% / 0.1) 0%, hsla(0 0% 0% / 0.7) 100%)" }}
        >
          <h1 className="text-2xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-lg animate-fade-in">
            Chicken <em className="text-secondary not-italic">Kriuk</em>
            <br />
            Warzuqnii
          </h1>
          <p className="text-lg font-bold text-primary-foreground/90 font-heading animate-fade-in">
            Kriuk Sejak Gigitan Pertama!
          </p>
          <p className="text-primary-foreground/60 text-[11px] mt-1 animate-fade-in">
            Order cepat tanpa ribet, langsung dari WhatsApp
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 bg-secondary text-secondary-foreground font-bold py-2 px-5 rounded-full text-xs shadow-lg inline-flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-transform"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Order Sekarang &gt;
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="flex justify-around py-4 px-4 bg-card">
        {[
          { icon: Leaf, label: "Selalu Fresh" },
          { icon: Zap, label: "Order Cepat" },
          { icon: Users, label: "Ratusan Pelanggan" },
        ].map((f) => (
          <div key={f.label} className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:scale-110 transition-transform">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-[10px] font-semibold text-foreground">{f.label}</span>
          </div>
        ))}
      </section>

      {/* Menu - Carousel / Swipe */}
      <section className="py-5 px-4">
        <div className="flex justify-center mb-4">
          <h2 className="section-title">🍽️ Menu Kami</h2>
        </div>
        <MenuCarousel />
      </section>

      {/* Testimonials */}
      <section className="py-5 px-4 bg-card">
        <div className="flex justify-center mb-3">
          <h2 className="section-title">💬 Kata Mereka</h2>
        </div>
        <div className="space-y-2.5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-muted rounded-xl p-3 flex items-start gap-2.5">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="text-base">😊</span>
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {Array(5).fill(null).map((_, j) => (
                    <Star key={j} className="w-2.5 h-2.5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-xs text-foreground italic leading-relaxed">"{t.text}"</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 font-semibold">– {t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="py-5 px-4">
        <div className="flex justify-center mb-3">
          <h2 className="section-title">📍 Temukan Kami</h2>
        </div>
        <div className="card-menu overflow-hidden">
          <iframe
            title="Lokasi Chicken Kriuk Warzuqnii"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.6019404184913!2d110.3147312!3d-7.725785599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af7001f243d31%3A0xcc9627e4b6e96d1b!2sAyam%20Chicken%20Kriuk%20Warzuqnii%20Sayegan!5e0!3m2!1sen!2sid!4v1774964776907!5m2!1sen!2sid"
            className="w-full h-36 border-0"
            loading="lazy"
          />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2">
          Bisa pesan via GoFood, Grab, atau langsung WA!
        </p>
      </section>

      {/* Footer CTA */}
      <footer className="bg-accent text-accent-foreground py-3 px-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-xs">Lagi Lapar?</p>
            <p className="text-[10px] opacity-90">Klik Sekarang, Order Langsung!</p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-primary text-primary-foreground font-bold text-[10px] px-3 py-2 rounded-full hover:scale-105 active:scale-95 transition-transform"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Chat WhatsApp
          </a>
        </div>
      </footer>

      {/* Floating WA */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float hover:scale-110 active:scale-95 transition-transform"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
};

export default Index;
