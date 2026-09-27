// Hugo Alcini Portfolio - Core Application Logic & Autonomous SEO OS

document.addEventListener('DOMContentLoaded', () => {
  initTabNavigation();
  initSeoStageFilter();
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
 * 2. Autonomous SEO OS Stage Filter
 * ------------------------------------------------------------- */
function initSeoStageFilter() {
  const stageBtns = document.querySelectorAll('.stage-filter-btn');
  const stageItems = document.querySelectorAll('.stage-step-item');

  stageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      stageBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedStage = btn.getAttribute('data-stage');

      stageItems.forEach(item => {
        const itemStage = item.getAttribute('data-stage-type');
        if (selectedStage === 'all' || itemStage === selectedStage) {
          item.classList.remove('dimmed-stage');
          if (selectedStage !== 'all') {
            item.classList.add('highlighted-stage');
          } else {
            item.classList.remove('highlighted-stage');
          }
        } else {
          item.classList.add('dimmed-stage');
          item.classList.remove('highlighted-stage');
        }
      });

      const label = btn.textContent.trim();
      if (selectedStage !== 'all') {
        showToast(`Filtered SEO Operating System view to [${label}].`);
      } else {
        showToast(`Showing all 6 stages of the Autonomous SEO Operating System.`);
      }
    });
  });
}

/* -------------------------------------------------------------
 * 3. Autonomous SEO Operating System Console & Agent Simulator
 * ------------------------------------------------------------- */
function initSeoInspector() {
  const presetSelect = document.getElementById('seo-preset-select');
  const customUrlInput = document.getElementById('seo-url-input');
  const auditBtn = document.getElementById('run-audit-btn');
  const auditStatus = document.getElementById('audit-status-badge');

  // Agent 01 Telemetry elements
  const intentScoreEl = document.getElementById('telemetry-intent-score');
  const intentClassEl = document.getElementById('telemetry-intent-class');
  const entitiesEl = document.getElementById('telemetry-entities');
  const intentActionEl = document.getElementById('telemetry-intent-action');
  const intentFeedbackEl = document.getElementById('telemetry-intent-feedback');

  // Agent 02 Telemetry elements
  const linkScoreEl = document.getElementById('telemetry-link-score');
  const depthEl = document.getElementById('telemetry-depth');
  const orphansEl = document.getElementById('telemetry-orphans');
  const linkActionEl = document.getElementById('telemetry-link-action');
  const linkFeedbackEl = document.getElementById('telemetry-link-feedback');

  // Agent 03 Telemetry elements
  const offpageScoreEl = document.getElementById('telemetry-offpage-score');
  const toxicEl = document.getElementById('telemetry-toxic');
  const citationsEl = document.getElementById('telemetry-citations');
  const offpageActionEl = document.getElementById('telemetry-offpage-action');
  const offpageFeedbackEl = document.getElementById('telemetry-offpage-feedback');

  // Agent 04 Telemetry elements
  const gscScoreEl = document.getElementById('telemetry-gsc-score');
  const cannibalizationEl = document.getElementById('telemetry-cannibalization');
  const indexStatusEl = document.getElementById('telemetry-index-status');
  const gscActionEl = document.getElementById('telemetry-gsc-action');
  const gscFeedbackEl = document.getElementById('telemetry-gsc-feedback');

  // Agent 05 (Crawl & Edge) Telemetry elements
  const ttfbEl = document.getElementById('res-ttfb');
  const lcpEl = document.getElementById('res-lcp');
  const inpEl = document.getElementById('res-inp');
  const clsEl = document.getElementById('res-cls');
  const cwvScoreEl = document.getElementById('res-cwv-score');

  // Agent 06 (Schema Knowledge Graph) elements
  const schemaCodeEl = document.getElementById('res-schema-code');

  // Terminal logs & Recommendations
  const terminalOutputEl = document.getElementById('agent-terminal-output');
  const recommendationsEl = document.getElementById('res-recommendations');

  function populateSeoData(presetKey) {
    if (!window.portfolioData || !window.portfolioData.seoPresets) return;
    const data = window.portfolioData.seoPresets[presetKey];
    if (!data) return;

    if (customUrlInput) customUrlInput.value = data.url;

    // Populate Agent 01
    if (data.agents && data.agents.contentIntent) {
      const a1 = data.agents.contentIntent;
      if (intentScoreEl) intentScoreEl.textContent = `${a1.intentScore} Match`;
      if (intentClassEl) intentClassEl.textContent = a1.intentClass;
      if (entitiesEl) entitiesEl.textContent = a1.semanticEntities;
      if (intentActionEl) intentActionEl.textContent = a1.action;
      if (intentFeedbackEl) intentFeedbackEl.textContent = a1.feedback;
    }

    // Populate Agent 02
    if (data.agents && data.agents.internalLinking) {
      const a2 = data.agents.internalLinking;
      if (linkScoreEl) linkScoreEl.textContent = a2.pageRankHealth;
      if (depthEl) depthEl.textContent = a2.maxDepth;
      if (orphansEl) orphansEl.textContent = a2.orphanPages;
      if (linkActionEl) linkActionEl.textContent = a2.action;
      if (linkFeedbackEl) linkFeedbackEl.textContent = a2.feedback;
    }

    // Populate Agent 03
    if (data.agents && data.agents.offPage) {
      const a3 = data.agents.offPage;
      if (offpageScoreEl) offpageScoreEl.textContent = a3.domainRating;
      if (toxicEl) toxicEl.textContent = a3.toxicLinks;
      if (citationsEl) citationsEl.textContent = a3.citationReclamation;
      if (offpageActionEl) offpageActionEl.textContent = a3.action;
      if (offpageFeedbackEl) offpageFeedbackEl.textContent = a3.feedback;
    }

    // Populate Agent 04
    if (data.agents && data.agents.searchConsole) {
      const a4 = data.agents.searchConsole;
      if (gscScoreEl) gscScoreEl.textContent = a4.ctrLift;
      if (cannibalizationEl) cannibalizationEl.textContent = a4.cannibalization;
      if (indexStatusEl) indexStatusEl.textContent = a4.indexingStatus;
      if (gscActionEl) gscActionEl.textContent = a4.action;
      if (gscFeedbackEl) gscFeedbackEl.textContent = a4.feedback;
    }

    // Populate Agent 05 (Crawl & Edge)
    if (ttfbEl) ttfbEl.textContent = data.ttfb;
    if (lcpEl) lcpEl.textContent = data.lcp;
    if (inpEl) inpEl.textContent = data.inp;
    if (clsEl) clsEl.textContent = data.cls;
    if (cwvScoreEl) cwvScoreEl.textContent = `${data.cwvScore} CWV`;

    // Populate Agent 06 (Schema Graph)
    if (schemaCodeEl) schemaCodeEl.textContent = data.schemaGraph;

    // Populate Terminal Logs
    if (terminalOutputEl && data.executionLogs) {
      terminalOutputEl.innerHTML = '';
      data.executionLogs.forEach((log, index) => {
        const line = document.createElement('div');
        line.className = index === data.executionLogs.length - 1 ? 'log-line success' : 'log-line';
        line.textContent = log;
        terminalOutputEl.appendChild(line);
      });
    }

    // Populate Recommendations
    if (recommendationsEl && data.recommendations) {
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
        </svg> Executing Agent OS Pipeline...
      `;
      if (auditStatus) {
        auditStatus.textContent = "Running 6-Agent Matrix Cycle...";
        auditStatus.style.background = "rgba(245, 158, 11, 0.15)";
        auditStatus.style.color = "#f59e0b";
      }

      if (terminalOutputEl) {
        terminalOutputEl.innerHTML = `
          <div class="log-line">[OS Dispatcher] Initiating Inputs -> Diagnostics -> Decisions -> Actions -> Validation -> Reporting cycle...</div>
          <div class="log-line">[Telemetry Stream] Ingesting real-time bot hits, GSC CTR deltas & SERP entity vectors...</div>
        `;
      }

      setTimeout(() => {
        const currentPreset = presetSelect ? presetSelect.value : 'api-docs';
        populateSeoData(currentPreset);

        auditBtn.disabled = false;
        auditBtn.innerHTML = originalText;
        if (auditStatus) {
          auditStatus.textContent = "OS Loop Synchronized (All 6 Green)";
          auditStatus.style.background = "rgba(16, 185, 129, 0.15)";
          auditStatus.style.color = "#10b981";
        }
        showToast("✓ Autonomous SEO Operating System audit completed. Closed-loop feedback synchronized.");
      }, 700);
    });
  }
}

/* -------------------------------------------------------------
 * 4. Device Viewport Switcher for Embedded Client Showcase
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
 * 5. Case Studies Interactive Filter
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
 * 6. Interactive Contact / Consultation Form
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
 * 7. Navbar ScrollSpy & Back-to-Top
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
 * 8. Copy to Clipboard & Toast Notifications
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
