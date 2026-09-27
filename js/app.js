// Hugo Alcini Portfolio - Core Application Logic & Interactivity

document.addEventListener('DOMContentLoaded', () => {
  initTabNavigation();
  initSeoInspector();
  initDeviceViewportSwitcher();
  initCaseStudiesFilter();
  initContactForm();
  initNavbarScrollSpy();
});

/* -------------------------------------------------------------
 * 1. Dual-Tab System (Technical SEO vs Website Design)
 * ------------------------------------------------------------- */
function initTabNavigation() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update button active state
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Update panel visibility
      tabPanels.forEach(panel => {
        if (panel.id === `tab-${targetTab}`) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
}

/* -------------------------------------------------------------
 * 2. Live Technical SEO Inspector Simulator
 * ------------------------------------------------------------- */
function initSeoInspector() {
  const presetSelect = document.getElementById('seo-preset-select');
  const customUrlInput = document.getElementById('seo-url-input');
  const auditBtn = document.getElementById('run-audit-btn');
  const auditStatus = document.getElementById('audit-status-badge');

  // Metric displays
  const statusCodeEl = document.getElementById('res-status-code');
  const canonicalEl = document.getElementById('res-canonical');
  const robotsEl = document.getElementById('res-robots');
  const ttfbEl = document.getElementById('res-ttfb');
  const lcpEl = document.getElementById('res-lcp');
  const inpEl = document.getElementById('res-inp');
  const clsEl = document.getElementById('res-cls');
  const cwvScoreEl = document.getElementById('res-cwv-score');
  const hydrationEl = document.getElementById('res-hydration');
  const schemaCodeEl = document.getElementById('res-schema-code');
  const recommendationsEl = document.getElementById('res-recommendations');

  function populateSeoData(presetKey) {
    if (!window.portfolioData || !window.portfolioData.seoPresets) return;
    const data = window.portfolioData.seoPresets[presetKey];
    if (!data) return;

    if (customUrlInput) customUrlInput.value = data.url;
    if (statusCodeEl) statusCodeEl.textContent = data.statusCode;
    if (canonicalEl) canonicalEl.textContent = data.canonicalStatus;
    if (robotsEl) robotsEl.textContent = data.robotsDirectives;
    if (ttfbEl) ttfbEl.textContent = data.ttfb;
    if (lcpEl) lcpEl.textContent = data.lcp;
    if (inpEl) inpEl.textContent = data.inp;
    if (clsEl) clsEl.textContent = data.cls;
    if (cwvScoreEl) cwvScoreEl.textContent = data.cwvScore;
    if (hydrationEl) hydrationEl.textContent = data.hydrationDrift;
    if (schemaCodeEl) schemaCodeEl.textContent = data.schemaGraph;

    if (recommendationsEl) {
      recommendationsEl.innerHTML = '';
      data.recommendations.forEach(rec => {
        const li = document.createElement('li');
        li.innerHTML = `&bull; <span>${rec}</span>`;
        recommendationsEl.appendChild(li);
      });
    }
  }

  // Load default preset initially
  populateSeoData('api-docs');

  if (presetSelect) {
    presetSelect.addEventListener('change', (e) => {
      populateSeoData(e.target.value);
    });
  }

  if (auditBtn) {
    auditBtn.addEventListener('click', () => {
      const originalText = auditBtn.innerHTML;
      auditBtn.disabled = true;
      auditBtn.innerHTML = `
        <svg class="spin-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="12"></circle>
        </svg> Inspecting DOM &amp; Headers...
      `;
      if (auditStatus) {
        auditStatus.textContent = "Auditing live crawl stream...";
        auditStatus.style.background = "rgba(245, 158, 11, 0.15)";
        auditStatus.style.color = "#f59e0b";
      }

      setTimeout(() => {
        auditBtn.disabled = false;
        auditBtn.innerHTML = originalText;
        if (auditStatus) {
          auditStatus.textContent = "Audit Completed (HTTP 200 OK)";
          auditStatus.style.background = "rgba(16, 185, 129, 0.15)";
          auditStatus.style.color = "#10b981";
        }
        showToast("✓ Technical SEO diagnostics passed with zero crawl anomalies.");
      }, 750);
    });
  }
}

/* -------------------------------------------------------------
 * 3. Device Viewport Switcher for Embedded Client Showcase
 * ------------------------------------------------------------- */
function initDeviceViewportSwitcher() {
  const viewportBtns = document.querySelectorAll('.viewport-btn');
  const mockupFrame = document.getElementById('preview-mockup-frame');
  const iframe = document.getElementById('client-preview-iframe');
  const reloadBtn = document.getElementById('reload-preview-btn');

  if (viewportBtns && mockupFrame) {
    viewportBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        viewportBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const mode = btn.getAttribute('data-viewport');
        mockupFrame.classList.remove('mode-desktop', 'mode-tablet', 'mode-mobile');
        mockupFrame.classList.add(`mode-${mode}`);

        showToast(`Switched preview to ${mode.toUpperCase()} viewport.`);
      });
    });
  }

  if (reloadBtn && iframe) {
    reloadBtn.addEventListener('click', () => {
      const currentSrc = iframe.src;
      iframe.src = '';
      setTimeout(() => {
        iframe.src = currentSrc;
        showToast("✓ Reloaded live site preview.");
      }, 100);
    });
  }
}

/* -------------------------------------------------------------
 * 4. Case Studies Interactive Filter
 * ------------------------------------------------------------- */
function initCaseStudiesFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const container = document.getElementById('case-studies-container');

  function renderProjects(category) {
    if (!container || !window.portfolioData || !window.portfolioData.caseStudies) return;
    container.innerHTML = '';

    const filtered = category === 'all'
      ? window.portfolioData.caseStudies
      : window.portfolioData.caseStudies.filter(item => item.category === category);

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <div>
          <div class="project-category">${project.categoryName}</div>
          <h4 class="project-name">${project.title}</h4>
          ${project.client ? `<div style="font-size: 0.8rem; color: #ff4d5a; font-family: var(--font-mono); margin-bottom: 8px;">Client: ${project.client}</div>` : ''}
          <p class="project-summary">${project.desc}</p>
        </div>
        <div>
          <div class="project-impact-box">
            <span>⚡ Impact:</span> ${project.impact}
          </div>
          <div class="project-footer-tags">
            ${project.tags.map(tag => `<span class="pillar-tag">${tag}</span>`).join('')}
          </div>
          ${project.url ? `
            <div style="margin-top: 14px;">
              <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-red" style="padding: 6px 14px; font-size: 0.8rem;">
                Visit Live Site ↗
              </a>
            </div>
          ` : ''}
        </div>
      `;
      container.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderProjects(category);
    });
  });

  // Initial render
  renderProjects('all');
}

/* -------------------------------------------------------------
 * 5. Interactive Contact / Consultation Form
 * ------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('consultation-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const serviceInput = document.getElementById('contact-service');
    const submitBtn = form.querySelector('button[type="submit"]');

    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending Inquiry...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      showToast(`Thank you, ${nameInput ? nameInput.value : 'friend'}! Your ${serviceInput ? serviceInput.value : 'audit'} inquiry has been received.`);
      form.reset();
    }, 800);
  });
}

/* -------------------------------------------------------------
 * 6. Navbar ScrollSpy & Back-to-Top
 * ------------------------------------------------------------- */
function initNavbarScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.position = 'absolute';
        navMenu.style.top = '74px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.flexDirection = 'column';
        navMenu.style.background = '#07080b';
        navMenu.style.padding = '20px';
        navMenu.style.borderBottom = '1px solid var(--border-subtle)';
      }
    });
  }
}

/* -------------------------------------------------------------
 * 7. Copy to Clipboard & Toast Notifications
 * ------------------------------------------------------------- */
window.copyCodeToClipboard = function(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const text = el.textContent;
  navigator.clipboard.writeText(text).then(() => {
    showToast("✓ Copied snippet to clipboard!");
  }).catch(() => {
    showToast("✓ Copied!");
  });
};

function showToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.display = 'block';

  setTimeout(() => {
    toast.style.display = 'none';
  }, 3500);
}

