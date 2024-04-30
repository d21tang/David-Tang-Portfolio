document.addEventListener('DOMContentLoaded', function() {
    var toggleLinks = document.querySelectorAll('.toggle-link');
  
    toggleLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default anchor behavior
        var content = this.nextElementSibling;  // Assumes content div immediately follows the link
        if (content.style.display === 'none') {
          // Show the content if it is not visible
          content.style.display = 'block';
        } else {
          // Hide the content if it is visible
          content.style.display = 'none';
        }
      });
    });
  
    // Optionally, you can add a listener to each content to close when clicked inside
    var contents = document.querySelectorAll('.toggleable-content');
    contents.forEach(function(content) {
      content.addEventListener('click', function() {
        this.style.display = 'none';  // Hide on click
      });
    });
  });
  