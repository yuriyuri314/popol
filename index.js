const projects = {
  p1: {
    title: 'Netflix "INTO THE STORY" 몰입형 전시',
    subtitle: '2026 · 디지털인문예술 · 전시 기획',
    tags: ['전시 기획', '인터랙티브 경험', '공간 디자인'],
    overview: 'Netflix 오리지널 콘텐츠의 세계관을 오프라인 공간으로 확장하는 몰입형 체험 전시 콘셉트. 관람객이 이야기 속 주인공이 되는 경험을 설계했습니다.',
    img: 'p1.png',
    color: '#8B1E0F',
    link: 'https://docs.google.com/presentation/d/1thoET1xeuR-SoqGBWBOTnIJ8EmuZWKzDOhuniCkLwU/edit?usp=sharing',
    linkText: '발표 PPT 보기 ↗',
    points: [
      '10개 슬라이드, 10분 발표 형식으로 기획안 완성',
      '전시 포스터 디자인 — 여러 차례 이터레이션 진행',
      'Tate Modern, Cooper Hewitt 방문 경험을 레퍼런스로 활용',
      '공간 동선 설계 및 인터랙션 시나리오 작성',
      '발표 스크립트 한국어로 완성'
    ]
  },
  p2: {
    title: '403 BYPASS — 공연 예술 접근성 앱',
    subtitle: '2026 · 디지털인문예술 · 접근성 · 7인 팀 프로젝트',
    tags: ['UX 기획', '접근성', '모바일 웹'],
    overview: '"누구에게나 열려있는 무대를 위한 앱"<br>공연 예술 공간에서 장애인, 고령자, 외국인 등 다양한 접근성 필요를 가진 관람객을 위한 모바일 웹 애플리케이션.',
    img: 'p2.png',
    color: '#11c2ef',
    link: 'https://403bypass-26.vercel.app',
    linkText: '서비스 바로가기 ↗',
    techStack: 'HTML/CSS/JS, Google AI Studio, GitHub, Vercel, S-MAP API',
    points: [
      '① 3D 공연장 안내지도(S-MAP 연동)',
      '② AR 길안내(배리어프리 경로)',
      '③ 또타지하철 교통 연동',
      '④ 실시간 혼잡도 확인',
      '⑤ 360도 VR 좌석 미리보기',
      '⑥ 접근성 매니저 매칭',
      '⑦ AR 자막안경 연동(충무아트센터 연계)',
      '⑧ 맞춤형 공연 추천(AI)'
    ]
  },
  p3: {
    title: 'ONE: 3 Moments, 1 Completion',
    subtitle: '2026 · 디지털인문예술 · 브랜드 기획',
    tags: ['디지털인문예술', '브랜드 기획'],
    overview: '바쁜 20~30대를 위한 하루 3끼 모듈형 뉴트리션 시스템 브랜드 기획. Morning(Energy·800kcal) / Noon(Balance·950kcal) / Night(Recovery·650kcal) 루틴 중심 설계.',
    img: 'p3.jpg',
    color: '#A75C4C',
    links: [
      { url: 'https://one-brand-project.vercel.app', text: '브랜드 사이트 보기 ↗' },
      { url: 'https://docs.google.com/presentation/d/1yvmL_FArPdFwLSxhlEYWuoprnsOKLwjlBV_ikB9YX1k/edit?usp=sharing', text: '기획 PPT 보기 ↗' }
    ],
    techStack: 'ChatGPT, Antigravity, GitHub, Vercel',
    points: [
      '핵심 차별점: 단순 식사 대체가 아닌 하루 루틴 중심, 직관적 모듈 시스템, AI 추천·구독·건강 데이터 확장 가능성',
      '도구: ChatGPT(컨셉·코드 생성), Antigravity(코드 수정), GitHub(버전 관리), Vercel(배포)'
    ]
  },
  p4: {
    title: '지역사회 통합 돌봄 — 노인복지 서비스 연구',
    subtitle: '2026 · 노인복지학 · 학술 연구',
    tags: ['노인복지학', '학술 연구'],
    overview: '고령화 사회에서 지역사회 기반 노인 돌봄 서비스의 현황과 과제를 분석한 연구 논문. 통계청 2023 장래인구추계, 보건복지부 2023 노인실태조사, 2024 지역사회 통합 돌봄 지원법을 근거로 작성되었습니다.',
    img: 'p4.png',
    color: '#D8C3A5',
    link: 'https://docs.google.com/document/d/1Obv12UPQItmRnqRchwwwwhRGtsDYrSB4Gb8CDnBshJo/edit?usp=sharing',
    linkText: '연구 계획서 문서 보기 ↗',
    points: [
      '통계청 2023 장래인구추계 활용 — 고령화 현황 수치 근거 확보',
      '보건복지부 2023 노인실태조사 인용 — 서비스 이용 실태 분석',
      '2024 지역사회 통합 돌봄 지원법 분석',
      '지역사회 통합 돌봄(커뮤니티 케어) 개념과 국내 적용 맥락 정리',
      '서론 섹션 완성 — 연구 배경, 필요성, 연구 질문 포함'
    ]
  }
};

function getTagClass(tag) {
  const welfareTags = ['노인복지학', '사회보장', '정책 분석', '지역사회복지', '노인돌봄', '정책 연구', '학술 연구'];
  const digitalTags = ['디지털인문예술', '전시 기획', '인터랙티브 경험', '공간 디자인', 'UX 기획', '접근성', '모바일 웹', '브랜드 기획'];
  if (welfareTags.includes(tag)) return 'welfare';
  if (digitalTags.includes(tag)) return 'digital';
  return 'team';
}

// Dynamic rendering of Chronicle List-to-Card component
function renderProjects() {
  const projectsList = document.getElementById('projects-list');
  if (!projectsList) return;

  projectsList.innerHTML = Object.entries(projects).map(([id, p], index) => {
    const num = String(index + 1).padStart(3, '0');
    const primaryTag = p.tags[0] || '프로젝트';
    const secondaryTag = p.tags[1] || '';
    const year = p.subtitle.split(' · ')[0].trim();

    return `
      <div class="project-row-wrapper fade-up">
        <div class="project-item" onclick="toggleProjectPreview('${id}', this)">
          <span class="project-num">${num}</span>
          <div class="project-color-block" style="background-color: ${p.color}"></div>
          <div class="project-main">
            <div class="project-tags">
              <span class="project-tag ${getTagClass(primaryTag)}">${primaryTag}</span>
              ${secondaryTag ? `<span class="project-tag ${getTagClass(secondaryTag)}">${secondaryTag}</span>` : ''}
            </div>
            <h3 class="project-title">${p.title}</h3>
          </div>
          <div class="project-right">
            <span class="project-year">${year}</span>
            <span class="project-arrow">↓</span>
          </div>
        </div>
        <div class="project-preview-drawer" id="drawer-${id}">
          <div class="drawer-content">
            <div class="drawer-left">
              <div>
                <h4 class="drawer-title-full">${p.title}</h4>
                <p class="drawer-overview">${p.overview}</p>
              </div>
              ${p.techStack ? `<div class="drawer-tech">Tools: ${p.techStack}</div>` : ''}
            </div>
            <div class="drawer-right">
              ${p.img ? `
                <div class="drawer-img-wrap" id="img-wrap-${id}">
                  <img src="${p.img}" alt="${p.title}" class="drawer-img" onerror="document.getElementById('img-wrap-${id}').style.display='none';">
                </div>
              ` : ''}
              <div class="drawer-tags">
                ${p.tags.map(t => `<span class="drawer-tag">${t}</span>`).join('')}
              </div>
              <button class="drawer-btn" onclick="event.stopPropagation(); openOverlay('${id}')">
                상세보기 ↗
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Toggle project drawer preview smoothly
function toggleProjectPreview(id, itemEl) {
  const drawer = document.getElementById(`drawer-${id}`);
  if (!drawer) return;

  const isOpen = itemEl.classList.contains('active-preview');

  // Close all drawers
  document.querySelectorAll('.project-item').forEach(item => {
    item.classList.remove('active-preview');
  });
  document.querySelectorAll('.project-preview-drawer').forEach(d => {
    d.style.maxHeight = '0px';
  });

  // If it wasn't open, open it
  if (!isOpen) {
    itemEl.classList.add('active-preview');
    drawer.style.maxHeight = drawer.scrollHeight + 'px';
  }
}

function openOverlay(id) {
  const p = projects[id];
  const header = document.getElementById('overlay-header');
  const body = document.getElementById('overlay-body');

  header.innerHTML = `
    <div class="project-tags" style="margin-bottom:1rem">
      ${p.tags.map(t => `<span class="project-tag ${getTagClass(t)}">${t}</span>`).join('')}
    </div>
    <h2 class="overlay-title">${p.title}</h2>
    <p class="overlay-subtitle">${p.subtitle}</p>
  `;

  let bodyContent = '';

  if (p.img) {
    bodyContent += `
      <div class="overlay-img-wrap" id="overlay-img-wrap-${id}">
        <img src="${p.img}" alt="${p.title}" class="overlay-img" onerror="document.getElementById('overlay-img-wrap-${id}').style.display='none';">
      </div>
    `;
  }

  bodyContent += `
    <p class="overlay-section-label">개요</p>
    <p style="font-size:0.95rem; line-height:1.7; opacity:0.8">${p.overview}</p>
  `;

  if (p.techStack) {
    bodyContent += `
      <p class="overlay-section-label">기술 스택 / 도구</p>
      <div class="overlay-tech-stack">${p.techStack}</div>
    `;
  }

  bodyContent += `
    <p class="overlay-section-label">주요 내용</p>
    <ul class="feature-list">
      ${p.points.map(pt => `<li>${pt}</li>`).join('')}
    </ul>
  `;

  if (p.links && p.links.length > 0) {
    bodyContent += `
      <div style="margin-top: 2.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
        ${p.links.map(lnk => `
          <a href="${lnk.url}" target="_blank" class="overlay-link-btn">
            ${lnk.text || '바로가기 ↗'}
          </a>
        `).join('')}
      </div>
    `;
  } else if (p.link) {
    bodyContent += `
      <div style="margin-top: 2.5rem;">
        <a href="${p.link}" target="_blank" class="overlay-link-btn">
          ${p.linkText || '바로가기 ↗'}
        </a>
      </div>
    `;
  }

  body.innerHTML = bodyContent;

  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeOverlay(e) {
  if (e && e.target !== document.getElementById('overlay') && !e.target.classList.contains('overlay-close')) return;
  document.getElementById('overlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Intersection observer for fade-up animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

// ── THEME SWITCHER LOGIC ──
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  // Update button active state
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.classList.contains(theme)) {
      btn.classList.add('active');
    }
  });
}

// ── SCROLL PROGRESS & SCROLLSPY ──
const scrollBar = document.getElementById('scroll-bar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link-item');

window.addEventListener('scroll', () => {
  // 1. Progress Bar Update
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  if (scrollBar) {
    scrollBar.style.width = scrolled + '%';
  }

  // 2. Scrollspy Update
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= (sectionTop - 150)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ── INTERACTIVE MOUSE GLOW ──
const glowSpot = document.getElementById('glow-spot');
const heroSection = document.getElementById('hero');

if (glowSpot && heroSection) {
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowSpot.style.left = `${x}px`;
    glowSpot.style.top = `${y}px`;
    glowSpot.style.opacity = '1';
  });

  heroSection.addEventListener('mouseleave', () => {
    glowSpot.style.opacity = '0';
  });
}

// ── CONTACT FORM SUBMISSION ──
function handleContactSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('form-name').value.trim();
  const email = document.getElementById('form-email').value.trim();
  const message = document.getElementById('form-message').value.trim();

  if (!name || !email || !message) {
    showToast('모든 필수 항목(*)을 입력해 주세요.', true);
    return;
  }

  // Show success message
  showToast(`감사합니다, ${name}님! 메시지가 성공적으로 전송되었습니다.`);

  // Reset form
  document.getElementById('contact-form').reset();
}

function showToast(text, isError = false) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  const toastIcon = toast.querySelector('.toast-icon');

  toastText.textContent = text;

  if (isError) {
    toastIcon.textContent = '✕';
    toastIcon.style.color = 'var(--rust)';
  } else {
    toastIcon.textContent = '✓';
    toastIcon.style.color = 'var(--accent-sage)';
  }

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
  // 1. Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'cream';
  setTheme(savedTheme);

  // 2. Render dynamic project list
  renderProjects();

  // 3. Set up fade-up transitions
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // 4. Set up skill bars scroll animation
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.skill-bar-fill');
        fills.forEach(fill => {
          const targetWidth = fill.getAttribute('data-level');
          if (targetWidth) {
            fill.style.width = targetWidth;
          }
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const skillsGrid = document.querySelector('.skills-grid');
  if (skillsGrid) {
    skillObserver.observe(skillsGrid);
  }

  // 5. Reveal hero with micro-delay
  setTimeout(() => {
    document.querySelectorAll('#hero .fade-up').forEach(el => el.classList.add('visible'));
  }, 100);
});