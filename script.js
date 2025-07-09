
function showSection(sectionId) {
  const sections = ['exercise', 'meals', 'tracker'];
  sections.forEach(id => document.getElementById(id)?.classList.add('hidden'));
  document.getElementById(sectionId)?.classList.remove('hidden');
}

/* Additional script content omitted for brevity */
