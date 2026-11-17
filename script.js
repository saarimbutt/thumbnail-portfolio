/**
 * FRAME.LAB — Principal Frontend Interactive Architecture (Vanilla ES6+)
 * Features:
 * 1. Hero Flagship Reel Auto/Manual Switcher
 * 2. 12-Card Filterable Portfolio Grid + Quick-Inspect in YouTube Previewer
 * 3. Touch/Mouse/Keyboard 16:9 Before/After Split Comparison Slider
 * 4. Live YouTube Feed Context Previewer (Dark/Light, Desktop/Mobile, Custom URL)
 * 5. Interactive A/B Test Winner Lab with Animated Conversion Telemetry
 * 6. Pricing-to-Contact Form Package Auto-Selection & Discord Copy Toast
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* ==========================================================================
     1. DATA STORES
     ========================================================================== */

  // Hero Flagship Reel Showcase Items
  const heroReelData = [
    {
      title: 'Survived 50 Hours in Zero Gravity',
      hook: 'ZERO GRAVITY!',
      baseCtr: '5.4%',
      afterCtr: '11.8% (+6.4%)',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
      channel: 'Alex Rivera',
    },
    {
      title: 'I Built an Illegal AI Supercomputer Underwater',
      hook: 'UNDERWATER AI',
      baseCtr: '4.9%',
      afterCtr: '10.6% (+5.7%)',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=85',
      channel: 'Marcus Vance',
    },
    {
      title: 'The Secret Trillion-Dollar Vault Inside Switzerland',
      hook: '$1,000,000,000,000',
      baseCtr: '4.1%',
      afterCtr: '9.4% (+5.3%)',
      img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=85',
      channel: 'Devon Brooks',
    },
  ];

  // 12 Complete Portfolio Items Across 5 Categories
  const portfolioData = [
    {
      id: 'p1',
      category: 'IRL',
      title: 'I Survived 100 Hours Locked Inside an Abandoned Nuclear Bunker',
      creator: 'Alex Rivera',
      subs: '4.2M Subs',
      duration: '24:18',
      ctrBadge: '+5.3% CTR • 4.8M Views',
      hookText: '100 HOURS SEALED',
      hookColor: '#FF0033',
      img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'p2',
      category: 'Gaming',
      title: 'How 1 Pixel Broke the Hardest Speedrun World Record in History',
      creator: 'Kira Lindstrom',
      subs: '600K Subs',
      duration: '19:45',
      ctrBadge: '+4.9% CTR • 1.9M Views',
      hookText: '0.001s GLITCH',
      hookColor: '#6366F1',
      img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'p3',
      category: 'Tech',
      title: 'Why Everyone Is Ditching Their $3,000 MacBook for This $199 Cube',
      creator: 'Marcus Vance',
      subs: '1.1M Subs',
      duration: '14:12',
      ctrBadge: '+4.5% CTR • 2.7M Views',
      hookText: 'RIP MACBOOK?',
      hookColor: '#06B6D4',
      img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'p4',
      category: 'Finance',
      title: 'I Tracked Every Dollar Inside a Laundromat Empire for 30 Days',
      creator: 'Devon Brooks',
      subs: '850K Subs',
      duration: '21:09',
      ctrBadge: '+3.8% CTR • 1.4M Views',
      hookText: '$42,800 / MO?',
      hookColor: '#10B981',
      img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'p5',
      category: 'Vlogs',
      title: 'Solo Crossing Japan on a $50 Broken Scooter (No Map)',
      creator: 'Sora Nomura',
      subs: '1.6M Subs',
      duration: '31:50',
      ctrBadge: '+4.1% CTR • 3.2M Views',
      hookText: '$50 SCOOTER',
      hookColor: '#F59E0B',
      img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'p6',
      category: 'Gaming',
      title: 'We Built a Working Computer Inside Minecraft Without Mods',
      creator: 'BlockLab',
      subs: '2.9M Subs',
      duration: '16:33',
      ctrBadge: '+5.1% CTR • 5.4M Views',
      hookText: 'IT RUNS DOOM!',
      hookColor: '#FF0033',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'p7',
      category: 'IRL',
      title: 'Buying the Cheapest Private Island on Earth Sight Unseen',
      creator: 'JetLag Crew',
      subs: '3.4M Subs',
      duration: '27:14',
      ctrBadge: '+4.4% CTR • 6.1M Views',
      hookText: '$12,000 ISLAND',
      hookColor: '#06B6D4',
      img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'p8',
      category: 'Tech',
      title: 'I Let a Humanoid Robot Run My Entire House for a Week',
      creator: 'Circuit Breaker',
      subs: '940K Subs',
      duration: '18:04',
      ctrBadge: '+3.9% CTR • 1.6M Views',
      hookText: 'BIG MISTAKE',
      hookColor: '#FF0033',
      img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'p9',
      category: 'Finance',
      title: 'Why 92% of Luxury Watch Dealers Are Quietly Going Broke',
      creator: 'Market Ledger',
      subs: '720K Subs',
      duration: '15:52',
      ctrBadge: '+4.6% CTR • 2.1M Views',
      hookText: 'BUBBLE POPPED',
      hookColor: '#FF0033',
      img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'p10',
      category: 'Vlogs',
      title: '24 Hours Living Inside the World’s Most Extreme Cliff Hotel',
      creator: 'Elena Vance',
      subs: '1.3M Subs',
      duration: '20:17',
      ctrBadge: '+3.7% CTR • 2.4M Views',
      hookText: '4,000 FT DROP',
      hookColor: '#6366F1',
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'p11',
      category: 'Gaming',
      title: 'I Hired a Grandmaster Coach to Fix My Ranked Gameplay in 48 Hours',
      creator: 'ApexPulse',
      subs: '510K Subs',
      duration: '22:40',
      ctrBadge: '+4.2% CTR • 980K Views',
      hookText: 'BRONZE → PRO',
      hookColor: '#10B981',
      img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'p12',
      category: 'IRL',
      title: 'Testing Prohibited Military Rations From 12 Countries',
      creator: 'Field Test',
      subs: '1.8M Subs',
      duration: '17:29',
      ctrBadge: '+3.6% CTR • 2.9M Views',
      hookText: '1984 RATION?!',
      hookColor: '#F59E0B',
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    },
  ];

  // Before / After Case Studies Data
  const comparisonCases = [
    {
      tag: 'CASE 01 // IRL CHALLENGE',
      title: 'Underground Bunker Survival',
      hookText: '100 DAYS BURIED',
      beforeImg: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80',
      afterImg: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=85',
      upgrades: [
        { title: 'Subject Separation', desc: 'Added dual-tone crimson/cyan rim light to pop silhouette on mobile dark mode.' },
        { title: 'Gaze & Scale Boost', desc: 'Enlarged facial expression by 28% and brightened sclera for instant eye contact.' },
        { title: '3-Word Hook Hierarchy', desc: 'Replaced 8-word title repeat with high-contrast impact typography in top-left safe zone.' },
      ],
    },
    {
      tag: 'CASE 02 // TECH REVIEW',
      title: 'Next-Gen Silicon Teardown',
      hookText: 'APPLE IS DONE?',
      beforeImg: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=80',
      afterImg: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=85',
      upgrades: [
        { title: 'Clutter Elimination', desc: 'Removed 4 distracting studio cables and blurred background depth by f/1.4 simulation.' },
        { title: 'Chromatic Contrast', desc: 'Shifted ambient desk lighting from flat grey to electric cyan vs. crimson warning badge.' },
        { title: 'Curiosity Focal Vector', desc: 'Added directional red vector arrow linking facial shock directly to the macro chip.' },
      ],
    },
    {
      tag: 'CASE 03 // FINANCE DOCUMENTARY',
      title: 'Offshore Gold Vault Investigation',
      hookText: '$1 TRILLION LIE',
      beforeImg: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1400&q=80',
      afterImg: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1400&q=85',
      upgrades: [
        { title: '3D Depth Relighting', desc: 'Composited volumetric vault light beams in Blender to create cinematic scale.' },
        { title: 'High-Urgency Palette', desc: 'Graded shadows into deep obsidian so gold specular highlights command immediate attention.' },
        { title: 'Mobile Legibility Pass', desc: 'Increased kerning and stroke separation so the hook reads clearly at 120px width.' },
      ],
    },
  ];

  // A/B Split-Test Scenarios Data
  const abScenarios = [
    {
      nicheBadge: 'TECH NICHE • 48,000 IMPRESSIONS SAMPLE',
      videoTitle: '"Why Everyone Is Ditching Their $2,000 Laptop for This"',
      winner: 'B',
      liftDelta: '+3.7% CTR DELTA',
      variantA: {
        img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80',
        hook: 'FULL SPECS & BENCHMARK REVIEW',
        hookBg: '#334155',
        watchTime: '41.2%',
        watchNum: 41.2,
        ctr: '6.1%',
      },
      variantB: {
        img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80',
        hook: 'RIP MACBOOK?',
        hookBg: '#FF0033',
        watchTime: '58.8%',
        watchNum: 58.8,
        ctr: '9.8%',
      },
      psychology: 'Variation B won by 58.8% watch-time share because it replaced technical jargon ("Specs & Benchmark") with a bold loss-aversion question ("RIP MACBOOK?") and simplified the frame to two high-contrast focal points.',
    },
    {
      nicheBadge: 'FINANCE NICHE • 72,500 IMPRESSIONS SAMPLE',
      videoTitle: '"How Car Dealerships Quietly Trap Buyers in 2026"',
      winner: 'A',
      liftDelta: '+4.1% CTR DELTA',
      variantA: {
        img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=900&q=80',
        hook: 'NEVER SIGN THIS',
        hookBg: '#FF0033',
        watchTime: '61.4%',
        watchNum: 61.4,
        ctr: '10.3%',
      },
      variantB: {
        img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
        hook: 'DEALERSHIP LOAN MATH EXPLAINED',
        hookBg: '#06B6D4',
        watchTime: '38.6%',
        watchNum: 38.6,
        ctr: '6.2%',
      },
      psychology: 'Variation A outperformed by +4.1% CTR. Viewers scroll past "math lessons" (Variant B), whereas "NEVER SIGN THIS" triggers immediate self-protection urgency paired with a red warning cue.',
    },
    {
      nicheBadge: 'GAMING NICHE • 110,000 IMPRESSIONS SAMPLE',
      videoTitle: '"I Spent 100 Days Surviving on a 1-Block Sky Island"',
      winner: 'B',
      liftDelta: '+4.8% CTR DELTA',
      variantA: {
        img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',
        hook: 'EPISODE 1: 100 DAYS SKYBLOCK',
        hookBg: '#4F46E5',
        watchTime: '36.9%',
        watchNum: 36.9,
        ctr: '7.0%',
      },
      variantB: {
        img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80',
        hook: 'DAY 1 VS DAY 100',
        hookBg: '#10B981',
        watchTime: '63.1%',
        watchNum: 63.1,
        ctr: '11.8%',
      },
      psychology: 'Variation B crushed Variant A because "Episode 1" signals homework to new viewers, while a split progression ("DAY 1 VS DAY 100") promises an instant visual payoff transformation.',
    },
  ];

  // Competitor Videos for YouTube Feed Simulator
  const competitorFeedVideos = [
    {
      title: 'We Tested Every Budget Studio Microphone So You Don’t Have To',
      channel: 'AudioGear Lab',
      views: '412K views • 10 hours ago',
      duration: '16:08',
      img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Why Commercial Planes Still Don’t Fly Over the Pacific',
      channel: 'Atlas Explained',
      views: '1.8M views • 2 days ago',
      duration: '12:44',
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Building a Minimalist Desk Setup for 12-Hour Coding Sessions',
      channel: 'DevSpace',
      views: '295K views • 1 day ago',
      duration: '11:19',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Inside the $400M Mega-Factory Making Solid State Batteries',
      channel: 'Future Torque',
      views: '870K views • 4 days ago',
      duration: '20:51',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'I Ate Only 1950s Diner Recipes for a Week',
      channel: 'Kitchen Time Machine',
      views: '640K views • 3 days ago',
      duration: '18:15',
      img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    },
  ];

  /* ==========================================================================
     2. TOAST NOTIFICATION & CLIPBOARD HELPER
     ========================================================================== */
  const toastContainer = document.getElementById('toast-container');

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i data-lucide="check-circle-2" class="icon-sm text-emerald"></i><span>${message}</span>`;
    toastContainer.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  }

  function copyTextToClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => showToast(successMsg));
    } else {
      const temp = document.createElement('textarea');
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      temp.remove();
      showToast(successMsg);
    }
  }

  // Bind all Discord Copy Buttons
  document.querySelectorAll('.copy-discord-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const handle = btn.getAttribute('data-discord') || 'framelab.gg';
      copyTextToClipboard(handle, `Copied Discord handle "${handle}" to clipboard!`);
      const label = btn.querySelector('.copy-btn-label');
      if (label) {
        const original = label.textContent;
        label.textContent = 'Copied!';
        setTimeout(() => {
          label.textContent = original;
        }, 2000);
      }
    });
  });

  /* ==========================================================================
     3. MOBILE NAVIGATION DRAWER & CALENDLY MODAL
     ========================================================================== */
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
    });

    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Calendly Modal Logic
  const calendlyModal = document.getElementById('calendly-modal');
  const openCalendlyBtn = document.getElementById('open-calendly-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');

  if (openCalendlyBtn && calendlyModal) {
    openCalendlyBtn.addEventListener('click', () => {
      calendlyModal.classList.add('open');
      calendlyModal.setAttribute('aria-hidden', 'false');
    });

    closeModalBtn.addEventListener('click', () => {
      calendlyModal.classList.remove('open');
      calendlyModal.setAttribute('aria-hidden', 'true');
    });

    calendlyModal.addEventListener('click', (e) => {
      if (e.target === calendlyModal) {
        calendlyModal.classList.remove('open');
        calendlyModal.setAttribute('aria-hidden', 'true');
      }
    });

    document.querySelectorAll('.select-slot-btn').forEach((slotBtn) => {
      slotBtn.addEventListener('click', () => {
        const slot = slotBtn.getAttribute('data-slot');
        calendlyModal.classList.remove('open');
        const detailsInput = document.getElementById('project-details');
        if (detailsInput) {
          detailsInput.value = `[Requested Discovery Call Slot: ${slot}]\n` + detailsInput.value;
          detailsInput.focus();
        }
        showToast(`Selected call slot: ${slot}. Complete brief below!`);
      });
    });
  }

  /* ==========================================================================
     4. HERO FLAGSHIP REEL CAROUSEL
     ========================================================================== */
  let currentReelIndex = 0;
  const reelTitleEl = document.getElementById('hero-reel-title');
  const reelImgEl = document.getElementById('hero-reel-img');
  const reelHookEl = document.getElementById('hero-reel-hook');
  const reelBaseEl = document.getElementById('hero-reel-base');
  const reelAfterEl = document.getElementById('hero-reel-after');
  const reelTestBtn = document.getElementById('reel-test-in-feed-btn');

  function updateHeroReel(index) {
    const item = heroReelData[index];
    reelTitleEl.textContent = item.title;
    reelImgEl.src = item.img;
    reelHookEl.textContent = item.hook;
    reelBaseEl.textContent = item.baseCtr;
    reelAfterEl.textContent = item.afterCtr;
  }

  document.getElementById('reel-prev').addEventListener('click', () => {
    currentReelIndex = (currentReelIndex - 1 + heroReelData.length) % heroReelData.length;
    updateHeroReel(currentReelIndex);
  });

  document.getElementById('reel-next').addEventListener('click', () => {
    currentReelIndex = (currentReelIndex + 1) % heroReelData.length;
    updateHeroReel(currentReelIndex);
  });

  reelTestBtn.addEventListener('click', () => {
    const item = heroReelData[currentReelIndex];
    loadCustomSlotInSimulator({
      title: item.title,
      channel: item.channel,
      img: item.img,
      hookText: item.hook,
    });
    document.getElementById('yt-previewer').scrollIntoView({ behavior: 'smooth' });
    showToast(`Loaded "${item.title}" into Live YouTube Feed Slot #1`);
  });

  /* ==========================================================================
     5. FILTERABLE PORTFOLIO GRID & QUICK-INSPECT
     ========================================================================== */
  const portfolioGrid = document.getElementById('portfolio-grid');
  const filterPills = document.querySelectorAll('.filter-pill');

  // Populate category counts dynamically
  const categories = ['All', 'Gaming', 'IRL', 'Tech', 'Finance', 'Vlogs'];
  categories.forEach((cat) => {
    const countEl = document.getElementById(`count-${cat}`); if (countEl) { const count = cat === 'All' ? portfolioData.length : portfolioData.filter((i) => i.category === cat).length; countEl.textContent = count; } });  function renderPortfolio(filterCategory = 'All') { portfolioGrid.innerHTML = ''; const filtered = filterCategory === 'All' ? portfolioData : portfolioData.filter((item) => item.category === filterCategory);  filtered.forEach((item) => { const card = document.createElement('article'); card.className = 'portfolio-card glass-panel'; card.setAttribute('tabindex', '0'); card.setAttribute('role', 'button'); card.setAttribute('aria-label', `Test ${item.title} in YouTube Feed Simulator`);

      card.innerHTML = `
        <div class="thumb-frame">
          <img src="${item.img}" alt="${item.title}" loading="lazy" />
          <span class="thumb-mock-hook" style="background:${item.hookColor}">${item.hookText}</span>
          <span class="thumb-inspect-chip">⚡ Click to Preview in YT Feed</span>
          <span class="thumb-duration">${item.duration}</span>
        </div>
        <div class="card-body">
          <div class="card-meta-top">
            <span class="card-cat-tag">${item.category}</span>
            <span class="card-perf-badge">${item.ctrBadge}</span>
          </div>
          <h3 class="card-video-title">${item.title}</h3>
          <div class="card-creator-row">
            <strong>${item.creator}</strong>
            <span class="subs-pill">${item.subs}</span>
          </div>
        </div>
      `;

      const triggerPreview = () => {
        loadCustomSlotInSimulator({
          title: item.title,
          channel: item.creator,
          img: item.img,
          hookText: item.hookText,
        });
        document.getElementById('yt-previewer').scrollIntoView({ behavior: 'smooth' });
        showToast(`Loaded "${item.creator}" thumbnail into YouTube Feed Previewer!`);
      };

      card.addEventListener('click', triggerPreview);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerPreview();
        }
      });

      portfolioGrid.appendChild(card);
    });
  }

  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');
      renderPortfolio(pill.getAttribute('data-filter'));
    });
  });

  renderPortfolio('All');

  /* ==========================================================================
     6. INTERACTIVE FEATURE 1: BEFORE / AFTER CONCEPT SLIDER
     ========================================================================== */
  const compStage = document.getElementById('comparison-stage');
  const compBeforeClip = document.getElementById('comp-before-clip');
  const compBeforeInner = document.getElementById('comp-before-inner');
  const compHandle = document.getElementById('comp-handle');
  const caseTabs = document.querySelectorAll('.case-tab');

  let isDraggingSlider = false;

  // Keep inner image width synced with full stage width so it clips instead of squishing
  function syncComparisonDimensions() {
    if (!compStage || !compBeforeInner) return;
    const rect = compStage.getBoundingClientRect();
    compBeforeInner.style.width = `${rect.width}px`;
  }

  function setSliderPercentage(percent) {
    const clamped = Math.max(4, Math.min(96, percent));
    compBeforeClip.style.width = `${clamped}\%`; compHandle.style.left = `${clamped}%`;
    compStage.setAttribute('aria-valuenow', Math.round(clamped));
  }

  function handlePointerMove(clientX) {
    const rect = compStage.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const percent = (offsetX / rect.width) * 100;
    setSliderPercentage(percent);
  }

  compStage.addEventListener('mousedown', (e) => {
    isDraggingSlider = true;
    handlePointerMove(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDraggingSlider) return;
    handlePointerMove(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDraggingSlider = false;
  });

  compStage.addEventListener('touchstart', (e) => {
    isDraggingSlider = true;
    handlePointerMove(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDraggingSlider) return;
    handlePointerMove(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDraggingSlider = false;
  });

  // Keyboard accessibility (ArrowLeft / ArrowRight)
  compStage.addEventListener('keydown', (e) => {
    const current = parseFloat(compStage.getAttribute('aria-valuenow')) || 50;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPercentage(current - 5);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPercentage(current + 5);
    }
  });

  window.addEventListener('resize', syncComparisonDimensions);
  syncComparisonDimensions();

  // Switchable Case Studies
  caseTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      caseTabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const index = parseInt(tab.getAttribute('data-case'), 10);
      const data = comparisonCases[index];

      document.getElementById('comp-before-img').src = data.beforeImg;
      document.getElementById('comp-after-img').src = data.afterImg;
      document.getElementById('comp-hook-text').textContent = data.hookText;
      document.getElementById('comp-case-tag').textContent = data.tag;
      document.getElementById('comp-case-title').textContent = data.title;

      const pillsContainer = document.getElementById('comp-upgrade-pills');
      pillsContainer.innerHTML = data.upgrades
        .map(
          (u, idx) => `
          <div class="upgrade-pill">
            <span class="pill-num mono">0${idx + 1}</span>
            <div>
              <strong>${u.title}</strong>
              <p>${u.desc}</p>
            </div>
          </div>
        `
        )
        .join('');

      setSliderPercentage(50);
      syncComparisonDimensions();
    });
  });

  /* ==========================================================================
     7. INTERACTIVE FEATURE 2: LIVE YOUTUBE FEED CONTEXT PREVIEWER
     ========================================================================== */
  const ytShell = document.getElementById('yt-simulator-shell');
  const ytFeedGrid = document.getElementById('yt-feed-grid');
  const themeDarkBtn = document.getElementById('yt-theme-dark');
  const themeLightBtn = document.getElementById('yt-theme-light');
  const viewDesktopBtn = document.getElementById('yt-view-desktop');
  const viewMobileBtn = document.getElementById('yt-view-mobile');
  const customPreviewForm = document.getElementById('custom-preview-form');
  const resetPreviewBtn = document.getElementById('reset-preview-btn');

  const defaultSlotOne = {
    title: portfolioData[0].title,
    channel: portfolioData[0].creator,
    img: portfolioData[0].img,
    hookText: portfolioData[0].hookText,
  };

  let activeSlotOne = { ...defaultSlotOne };

  function renderYouTubeFeed() {
    ytFeedGrid.innerHTML = '';

    // Combine Slot #1 (Test Slot) + 5 Competitor Videos
    const feedItems = [
      {
        title: activeSlotOne.title,
        channel: activeSlotOne.channel,
        views: '342K views • 3 hours ago',
        duration: '18:24',
        img: activeSlotOne.img,
        hookText: activeSlotOne.hookText || '',
        isTestSlot: true,
      },
      ...competitorFeedVideos,
    ];

    feedItems.forEach((video) => {
      const initials = video.channel
        .split(' ')
        .map((w) => w[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

      const card = document.createElement('div');
      card.className = `yt-feed-card ${video.isTestSlot ? 'active-slot' : ''}`;

      card.innerHTML = `
        <div class="yt-thumb-box">
          <img src="${video.img}" alt="${video.title}" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80'" />
          ${video.hookText ? `<span class="thumb-mock-hook" style="background:#FF0033; font-size:0.85rem;">${video.hookText}</span>` : ''}
          ${video.isTestSlot ? `<span class="yt-slot-badge">SLOT #1 • YOUR TEST</span>` : ''}
          <span class="thumb-duration">${video.duration}</span>
        </div>
        <div class="yt-meta-row">
          <div class="yt-chan-avatar">${initials}</div>
          <div class="yt-meta-text">
            <h4 class="yt-video-title">${video.title}</h4>
            <span class="yt-video-sub">${video.channel} ✓</span>
            <span class="yt-video-sub">${video.views}</span>
          </div>
        </div>
      `;
      ytFeedGrid.appendChild(card);
    });
  }

  function loadCustomSlotInSimulator(slotObj) {
    activeSlotOne = { ...slotObj };
    renderYouTubeFeed();
  }

  // Theme Toggles
  themeDarkBtn.addEventListener('click', () => {
    ytShell.classList.remove('yt-light');
    ytShell.classList.add('yt-dark');
    themeDarkBtn.classList.add('active');
    themeLightBtn.classList.remove('active');
  });

  themeLightBtn.addEventListener('click', () => {
    ytShell.classList.remove('yt-dark');
    ytShell.classList.add('yt-light');
    themeLightBtn.classList.add('active');
    themeDarkBtn.classList.remove('active');
  });

  // Viewport Toggles
  viewDesktopBtn.addEventListener('click', () => {
    ytShell.classList.remove('yt-mobile');
    ytShell.classList.add('yt-desktop');
    viewDesktopBtn.classList.add('active');
    viewMobileBtn.classList.remove('active');
  });

  viewMobileBtn.addEventListener('click', () => {
    ytShell.classList.remove('yt-desktop');
    ytShell.classList.add('yt-mobile');
    viewMobileBtn.classList.add('active');
    viewDesktopBtn.classList.remove('active');
  });

  // Custom URL & Title Form Submission
  customPreviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const urlInput = document.getElementById('custom-thumb-url').value.trim();
    const titleInput = document.getElementById('custom-video-title').value.trim();
    const chanInput = document.getElementById('custom-channel-name').value.trim();

    loadCustomSlotInSimulator({
      img: urlInput || defaultSlotOne.img,
      title: titleInput || 'My Custom Packaged YouTube Upload (Live Feed Test)',
      channel: chanInput || 'Your Channel',
      hookText: urlInput ? '' : 'CUSTOM TEST',
    });

    showToast('Updated Slot #1 in the YouTube Feed Simulator!');
  });

  resetPreviewBtn.addEventListener('click', () => {
    customPreviewForm.reset();
    loadCustomSlotInSimulator(defaultSlotOne);
    showToast('Reset simulator to default portfolio thumbnail.');
  });

  renderYouTubeFeed();

  /* ==========================================================================
     8. INTERACTIVE FEATURE 3: A/B TEST WINNER SHOWCASE
     ========================================================================== */
  const abArena = document.querySelector('.ab-arena');
  const abTabs = document.querySelectorAll('.ab-tab');
  const abCardA = document.getElementById('ab-card-A');
  const abCardB = document.getElementById('ab-card-B');
  const abRevealBtn = document.getElementById('ab-reveal-btn');

  let currentAbIndex = 0;

  function loadAbScenario(index) {
    currentAbIndex = index;
    const data = abScenarios[index];

    abArena.classList.remove('revealed');
    abCardA.classList.remove('is-winner', 'is-loser');
    abCardB.classList.remove('is-winner', 'is-loser');

    document.getElementById('ab-niche-badge').textContent = data.nicheBadge;
    document.getElementById('ab-video-title').textContent = data.videoTitle;
    document.getElementById('ab-user-prompt').innerHTML = `<i data-lucide="mouse-pointer-click" class="icon-xs"></i> Click a thumbnail to vote`;

    document.getElementById('ab-img-A').src = data.variantA.img;
    document.getElementById('ab-img-B').src = data.variantB.img;

    document.getElementById('ab-overlay-A').innerHTML = `<span class="thumb-hook-tag" style="background:${data.variantA.hookBg}; font-size:0.9rem;">${data.variantA.hook}</span>`;
    document.getElementById('ab-overlay-B').innerHTML = `<span class="thumb-hook-tag" style="background:${data.variantB.hookBg}; font-size:0.9rem;">${data.variantB.hook}</span>`;

    document.getElementById('ab-badge-A').textContent = '';
    document.getElementById('ab-badge-A').className = 'winner-pill mono';
    document.getElementById('ab-badge-B').textContent = '';
    document.getElementById('ab-badge-B').className = 'winner-pill mono';

    document.getElementById('ab-wt-A').textContent = data.variantA.watchTime;
    document.getElementById('ab-ctr-A').textContent = data.variantA.ctr;
    document.getElementById('ab-bar-A').style.width = '0%';

    document.getElementById('ab-wt-B').textContent = data.variantB.watchTime;
    document.getElementById('ab-ctr-B').textContent = data.variantB.ctr;
    document.getElementById('ab-bar-B').style.width = '0%';

    document.getElementById('ab-verdict-heading').textContent = 'Psychological Breakdown (Vote to Unlock)';
    document.getElementById('ab-lift-pill').textContent = data.liftDelta;
    document.getElementById('ab-psych-text').textContent = 'Click either Variation A or Variation B above to see which thumbnail won the YouTube Test & Compare split test.';

    if (window.lucide) window.lucide.createIcons();
  }

  function revealAbWinner(userPick = null) {
    const data = abScenarios[currentAbIndex];
    const isWinnerA = data.winner === 'A';

    abArena.classList.add('revealed');

    abCardA.classList.toggle('is-winner', isWinnerA);
    abCardA.classList.toggle('is-loser', !isWinnerA);
    abCardB.classList.toggle('is-winner', !isWinnerA);
    abCardB.classList.toggle('is-loser', isWinnerA);

    const badgeA = document.getElementById('ab-badge-A');
    const badgeB = document.getElementById('ab-badge-B');

    badgeA.textContent = isWinnerA ? '★ TEST WINNER' : 'CONTROL RUNNER-UP';
    badgeA.className = `winner-pill mono ${isWinnerA ? 'win' : 'loss'}`;

    badgeB.textContent = !isWinnerA ? '★ TEST WINNER' : 'CONTROL RUNNER-UP';
    badgeB.className = `winner-pill mono ${!isWinnerA ? 'win' : 'loss'}`;

    document.getElementById('ab-bar-A').style.width = `${data.variantA.watchNum}\%`; document.getElementById('ab-bar-B').style.width = `${data.variantB.watchNum}%`;

    const verdictEl = document.getElementById('ab-verdict-heading');
    if (userPick) {
      const guessedRight = userPick === data.winner;
      verdictEl.textContent = guessedRight
        ? `Spot On! You Picked Variation ${data.winner} (Winner)`
        : `Plot Twist! Variation ${data.winner} Actually Won the Split Test`;
    } else {
      verdictEl.textContent = `Test Results: Variation ${data.winner} Won the Split Test`;
    }

    document.getElementById('ab-psych-text').textContent = data.psychology;
  }

  abCardA.addEventListener('click', () => revealAbWinner('A'));
  abCardB.addEventListener('click', () => revealAbWinner('B'));
  abRevealBtn.addEventListener('click', () => revealAbWinner(null));

  [abCardA, abCardB].forEach((card) => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        revealAbWinner(card.getAttribute('data-variant'));
      }
    });
  });

  abTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      abTabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      loadAbScenario(parseInt(tab.getAttribute('data-ab'), 10));
    });
  });

  loadAbScenario(0);

  /* ==========================================================================
     9. PRICING SELECTION -> AUTO-SELECT IN CONTACT FORM
     ========================================================================== */
  const packageSelect = document.getElementById('package-select');
  document.querySelectorAll('.select-package-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pkg = btn.getAttribute('data-package');
      if (packageSelect && pkg) {
        packageSelect.value = pkg;
      }
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      showToast(`Selected "${pkg}" in the project brief form!`);
    });
  });

  /* ==========================================================================
     10. FAQ ACCORDION
     ========================================================================== */
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const content = trigger.nextElementSibling;

      // Close other open items for clean single-open behavior
      faqTriggers.forEach((other) => {
        if (other !== trigger) {
          other.setAttribute('aria-expanded', 'false');
          other.nextElementSibling.style.maxHeight = null;
        }
      });

      trigger.setAttribute('aria-expanded', String(!isExpanded));
      if (!isExpanded) {
        content.style.maxHeight = `${content.scrollHeight}px`;
      } else {
        content.style.maxHeight = null;
      }
    });
  });

  /* ==========================================================================
     11. PROJECT INQUIRY FORM VALIDATION & PAYLOAD GENERATOR
     ========================================================================== */
  const inquiryForm = document.getElementById('project-inquiry-form');
  const errorMsgEl = document.getElementById('form-error-msg');
  const submissionResult = document.getElementById('submission-result');
  const briefPayloadPreview = document.getElementById('brief-payload-preview');
  const copyBriefBtn = document.getElementById('copy-brief-btn');
  const mailtoBriefLink = document.getElementById('mailto-brief-link');
  const editBriefBtn = document.getElementById('edit-brief-btn');

  let currentFormattedBrief = '';

  inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    errorMsgEl.textContent = '';

    const name = document.getElementById('client-name').value.trim();
    const channel = document.getElementById('channel-url').value.trim();
    const pkg = document.getElementById('package-select').value;
    const freq = document.getElementById('upload-freq').value;
    const details = document.getElementById('project-details').value.trim();

    if (!name || !channel || !details) {
      errorMsgEl.textContent = 'Please complete your Name, Channel URL, and Upcoming Video Concept.';
      return;
    }

    currentFormattedBrief = [
      `=== FRAME.LAB PACKAGING BRIEF ===`,
      `Creator / Handle : ${name}`,
      `Channel URL      : ${channel}`,
      `Package Tier     : ${pkg}`,
      `Upload Cadence   : ${freq}`, `Concept & Notes  : ${details}`,
    ].join('\n');

    briefPayloadPreview.textContent = currentFormattedBrief;
    mailtoBriefLink.href = `mailto:producers@framelab.gg?subject=${encodeURIComponent( `Thumbnail Sprint Brief — ${name}` )}&body=${encodeURIComponent(currentFormattedBrief)}`;

    inquiryForm.hidden = true;
    submissionResult.hidden = false;
    showToast('Project brief generated! Copy for Discord or send via Email.');
  });

  copyBriefBtn.addEventListener('click', () => {
    copyTextToClipboard(currentFormattedBrief, 'Copied formatted project brief for Discord!');
  });

  editBriefBtn.addEventListener('click', () => {
    submissionResult.hidden = true;
    inquiryForm.hidden = false;
  });

  // Dynamic Footer Year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
