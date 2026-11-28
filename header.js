// Shared header and navigation — edit appointment text here.
(() => {
 const page = location.pathname.split('/').pop() || 'index.html';
 const pageKey = (page.replace(/\.html$/i, '') || 'index').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
 document.body.classList.add(`page-${pageKey}`);
 const slot = document.getElementById('site-header');
 if (!slot) return;
 slot.outerHTML = `<header class="top-banner shared-banner page-${pageKey}">
  <h1>Hasan Mahmood</h1>
  <div class="banner-layout">
  <div class="academic-roles">
    <div class="academic-role">
      <strong>PhD Candidate in Mathematics</strong>
      <p>Dalhousie University</p>
      <p>2023–Present | Expected Summer 2027</p>
    </div>
    <div class="academic-role">
      <strong>Associate Professor of Mathematics</strong>
      <p>Government College University Lahore</p>
      <p>On Leave Since August 2023</p>
    </div>
    <div class="academic-role">
      <strong>Co-Manager, Nova Scotia Math Circles</strong>
      <p>Dalhousie University</p>
      <p>April 2026–Present</p>
    </div>
    <div class="academic-role">
      <strong>Part-Time University Mathematics Teacher</strong>
      <p>Teaching Assistant &amp; Marker</p>
      <p>Dalhousie University</p>
      <p>September 2023–Present</p>
    </div>
  </div>
  <div class="banner-photo"><img class="site-portrait" src="hasan-mahmood.jpg" alt="Hasan Mahmood"></div>
  </div>
</header>
<nav class="shared-nav" aria-label="Main navigation"><div class="nav-inner">
<a href="index.html">Home</a>
<a href="education.html">Education</a>
<a href="appointments.html">Academic Appointments</a>
<a href="research.html">Research</a>
<a href="teaching.html">Teaching</a>
<a href="mentoring.html">Mentoring</a>
<a href="outreach.html">Outreach</a>
<a href="talks.html">Talks</a>
<a href="cv.html">CV</a>
<a href="contact.html">Contact</a>
</div></nav>`;
 document.querySelectorAll('.shared-nav a').forEach(a => {
  if (a.getAttribute('href') === page) {
   a.classList.add('active');
   a.setAttribute('aria-current', 'page');
  }
 });
})();
