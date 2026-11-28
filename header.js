// Shared header and navigation — edit appointment text here.
(() => {
 const slot = document.getElementById('site-header');
 if (!slot) return;
 slot.outerHTML = "<header class=\"top-banner shared-banner\">\n  <h1>Hasan Mahmood</h1>\n  <div class=\"banner-layout\">\n  <div class=\"academic-roles\">\n    <div class=\"academic-role\">\n      <strong>PhD Candidate in Mathematics</strong>\n      <p>Dalhousie University</p>\n      <p>2023–Present | Expected Summer 2027</p>\n    </div>\n    <div class=\"academic-role\">\n      <strong>Associate Professor of Mathematics</strong>\n      <p>Government College University Lahore</p>\n      <p>On Leave Since August 2023</p>\n    </div>\n    <div class=\"academic-role\">\n      <strong>Co-Manager, Nova Scotia Math Circles</strong>\n      <p>Dalhousie University</p>\n      <p>April 2026–Present</p>\n    </div>\n    <div class=\"academic-role\">\n      <strong>Part-Time University Mathematics Teacher</strong>\n      <p>Teaching Assistant &amp; Marker</p>\n      <p>Dalhousie University</p>\n      <p>September 2023–Present</p>\n    </div>\n  </div>\n  <div class=\"banner-photo\"><img class=\"site-portrait\" src=\"hasan-mahmood.jpg\" alt=\"Hasan Mahmood\"></div>\n  </div>\n</header>\n<nav class=\"shared-nav\" aria-label=\"Main navigation\"><div class=\"nav-inner\">\n<a href=\"index.html\">Home</a>\n<a href=\"education.html\">Education</a>\n<a href=\"appointments.html\">Academic Appointments</a>\n<a href=\"research.html\">Research</a>\n<a href=\"teaching.html\">Teaching</a>\n<a href=\"mentoring.html\">Mentoring</a>\n<a href=\"outreach.html\">Outreach</a>\n<a href=\"talks.html\">Talks</a>\n<a href=\"cv.html\">CV</a>\n<a href=\"contact.html\">Contact</a>\n</div></nav>";
 const page = location.pathname.split('/').pop() || 'index.html';
 document.querySelectorAll('.shared-nav a').forEach(a => {
  if (a.getAttribute('href') === page) {
   a.classList.add('active'); a.setAttribute('aria-current','page');
  }
 });
})();
