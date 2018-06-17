var project = document.getElementById('projects');
var me = document.getElementById('me');

// Projects mouseover
project.addEventListener('mouseover', function() {
	project.firstChild.textContent = '[ MY PROJECTS ]';
});

project.addEventListener('mouseleave', function() {
	project.firstChild.textContent = 'MY PROJECTS';
});

// Me mouseover
me.addEventListener('mouseover', function() {
	me.firstChild.textContent = '[ ME ]';
});

me.addEventListener('mouseleave', function() {
	me.firstChild.textContent = 'ME';
});
