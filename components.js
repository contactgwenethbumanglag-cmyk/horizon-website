// Shared navbar + footer for every page.
// Each page just needs <div id="site-header"></div> and <div id="site-footer"></div>.
// Edit the nav or footer HERE once and all pages update.

const NAV_HTML = `
<header class="bg-white border-b border-fog">
  <div class="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
    <a href="index.html" aria-label="Horizon Mortgage Brokers home">
      <img src="images/logo.png" alt="Horizon Mortgage Brokers" class="h-11 w-auto">
    </a>

    <nav class="hidden md:flex items-center gap-8 font-body font-medium text-[15px]" aria-label="Main">
      <a data-link="index" href="index.html" class="text-horizon pb-1 border-b-2 border-transparent hover:border-sage transition">Home</a>
      <a data-link="first-home-buyers" href="first-home-buyers.html" class="text-horizon pb-1 border-b-2 border-transparent hover:border-sage transition">First Home Buyers</a>
      <a data-link="refinancing" href="refinancing.html" class="text-horizon pb-1 border-b-2 border-transparent hover:border-sage transition">Refinancing</a>
      <a data-link="contact" href="contact.html" class="text-horizon pb-1 border-b-2 border-transparent hover:border-sage transition">Contact</a>
    </nav>

    <a href="contact.html" class="hidden md:inline-flex items-center justify-center h-11 px-6 rounded-[10px] bg-amber text-deep font-medium hover:bg-[#D4912A] transition">Book a free call</a>

    <button id="menu-btn" type="button" class="md:hidden text-horizon p-2" aria-label="Open menu" aria-expanded="false">
      <i data-lucide="menu" class="w-6 h-6"></i>
    </button>
  </div>

  <div id="mobile-menu" class="hidden md:hidden">
    <div class="flex flex-col gap-4 px-6 py-5 border-t border-fog font-body font-medium">
      <a data-link="index" href="index.html" class="text-horizon">Home</a>
      <a data-link="first-home-buyers" href="first-home-buyers.html" class="text-horizon">First Home Buyers</a>
      <a data-link="refinancing" href="refinancing.html" class="text-horizon">Refinancing</a>
      <a data-link="contact" href="contact.html" class="text-horizon">Contact</a>
      <a href="contact.html" class="inline-flex items-center justify-center h-11 px-6 rounded-[10px] bg-amber text-deep font-medium">Book a free call</a>
    </div>
  </div>
</header>
`;

const FOOTER_HTML = `
<footer class="bg-cloud">
  <div class="max-w-[1200px] mx-auto px-6 pt-16 pb-8">
    <div class="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr] pb-12">

      <div>
        <img src="images/logo.png" alt="Horizon Mortgage Brokers" class="h-12 w-auto mb-6">
        <p class="font-heading text-3xl text-horizon leading-snug mb-4">Your home.<br>Our focus.</p>
        <p class="text-ink leading-relaxed max-w-[320px]">We compare loans from a wide panel of lenders to help you buy, refinance and grow with confidence.</p>
      </div>

      <div>
        <h3 class="font-heading text-base text-horizon mb-4">Quick links</h3>
        <ul class="space-y-3 font-medium text-forest">
          <li><a href="index.html" class="hover:underline">Home</a></li>
          <li><a href="first-home-buyers.html" class="hover:underline">First Home Buyers</a></li>
          <li><a href="refinancing.html" class="hover:underline">Refinancing</a></li>
          <li><a href="contact.html" class="hover:underline">Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-heading text-base text-horizon mb-4">Get in touch</h3>
        <ul class="space-y-3 text-ink text-[15px]">
          <li class="flex items-start gap-3"><i data-lucide="phone" class="w-5 h-5 text-forest shrink-0 mt-0.5"></i><span>1300 000 000</span></li>
          <li class="flex items-start gap-3"><i data-lucide="mail" class="w-5 h-5 text-forest shrink-0 mt-0.5"></i><span>hello@horizonmortgagebrokers.com.au</span></li>
          <li class="flex items-start gap-3"><i data-lucide="map-pin" class="w-5 h-5 text-forest shrink-0 mt-0.5"></i><span>Level 5, 100 Example Street, Sydney NSW 2000</span></li>
          <li class="flex items-start gap-3"><i data-lucide="clock" class="w-5 h-5 text-forest shrink-0 mt-0.5"></i><span>Mon-Fri, 9am-5pm</span></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-fog pt-6">
      <p class="text-xs text-slate leading-relaxed max-w-[800px] mb-4">This website contains general information only and does not consider your personal circumstances. Speak to a broker before making a decision. Horizon Mortgage Brokers is a fictional business created for a design exercise.</p>
      <div class="flex flex-wrap justify-between gap-2 text-xs text-slate">
        <span class="font-medium">Australian Credit Licence No. 000000 (fictional)</span>
        <span>&copy; 2026 Horizon Mortgage Brokers</span>
      </div>
    </div>
  </div>
</footer>
`;

function renderComponents() {
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  if (header) header.innerHTML = NAV_HTML;
  if (footer) footer.innerHTML = FOOTER_HTML;

  // Highlight the link for the page you're on
  const current = (location.pathname.split('/').pop() || 'index').replace('.html', '') || 'index';
  document.querySelectorAll('[data-link]').forEach((link) => {
    if (link.dataset.link === current) {
      link.classList.remove('border-transparent');
      link.classList.add('border-horizon');
    }
  });

  // Mobile menu toggle
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('hidden') === false;
      btn.setAttribute('aria-expanded', String(open));
    });
  }

  // Draw the Lucide icons (nav, footer and page)
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', renderComponents);
