let CONFIG_FILE_PATH = 'config.json';
let WEBSITE_LINK = 'https://www.luisarojas.com';

let IMGS_DIR_PATH = 'assets/img/';
let ICONS_DIR_PATH = `${IMGS_DIR_PATH}icons/`;
let PDFS_DIR_PATH = 'assets/pdf/';

let ADMIN_EMAIL = 'hello@luisarojas.com';

$(function () {

    if (window.innerWidth <= 991) {
        $('codersrank-widget').attr('layout', 'vertical');
    } else {
        $('codersrank-widget').attr('layout', 'horizontal');
    }

    // Menu listener
    $('nav.navbar .nav-item a').on('click', function() {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    $('nav.navbar div.navbar-collapse li').on('click', function() {
        $(this).parent().parent().removeClass('show');
	});
	
	// Update copyright year
	let todaysDate = new Date();
	let currentYear = todaysDate.getFullYear();
	$('div#copyright div#year').html(currentYear);

});

$(window).resize(function() {

    if (window.innerWidth <= 991) {
        $('codersrank-widget').attr('layout', 'vertical');
    } else {
        $('codersrank-widget').attr('layout', 'horizontal');
    }
});

// Add progress indicator for loading
const loadingProgress = document.createElement('div');
loadingProgress.className = 'loading-progress';
document.body.appendChild(loadingProgress);

let loadedSections = 0;
const totalSections = document.querySelectorAll('.section').length;

function updateProgress() {
  loadedSections++;
  const progress = (loadedSections / totalSections) * 100;
  loadingProgress.style.width = `${progress}%`;
  
  if (loadedSections === totalSections) {
    setTimeout(() => {
      loadingProgress.style.opacity = '0';
      setTimeout(() => loadingProgress.remove(), 300);
    }, 500);
  }
}


// Add mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.vertical-nav');
    
    // Create mobile toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'navbar-toggle d-md-none';
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.appendChild(toggleBtn);

    // Toggle menu on click
    toggleBtn.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !toggleBtn.contains(e.target)) {
            nav.classList.remove('show');
        }
    });

    // Close menu when clicking a nav link on mobile
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('show');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all sections that we want to track
    const sections = document.querySelectorAll('section, div[id]');
    const navDots = document.querySelectorAll('.nav-dot');
    
    // Function to update active state
    function updateActiveSection() {
        const scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 100; // Offset for better trigger point
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Remove active class from all dots
                navDots.forEach(dot => dot.classList.remove('active'));
                // Add active class to current dot
                navDots[index].classList.add('active');
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', updateActiveSection);
    
    // Initialize active state
    updateActiveSection();

    // Add click handlers for smooth scrolling
    navDots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = dot.getAttribute('data-scroll');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add random slight rotations to elements
document.querySelectorAll('.welcome-text span').forEach(span => {
    const randomRotation = (Math.random() - 0.5) * 1; // Random value between -0.5 and 0.5 degrees
    span.style.setProperty('--random-rotation', `${randomRotation}deg`);
});

document.addEventListener('DOMContentLoaded', () => {
    // Wait for initial animations to complete
    setTimeout(() => {
        // Create notation elements
        const highlight = RoughNotation.annotate(
            document.querySelector('.notation-highlight'), 
            { type: 'highlight', color: 'rgba(100, 255, 218, 0.2)', iterations: 1 }
        );

        const underline = RoughNotation.annotate(
            document.querySelector('.notation-underline'), 
            { type: 'underline', color: '#7f7fd5', padding: 2, iterations: 2 }
        );
        const underline2 = RoughNotation.annotate(
            document.querySelector('.notation-underline2'), 
            { type: 'underline', color: '#7f7fd5', padding: 2, iterations: 2 }
        );

        const underline3 = RoughNotation.annotate(
            document.querySelector('.notation-underline3'), 
            { type: 'underline', color: '#7f7fd5', padding: 2, iterations: 2 }
        );

        // const box = RoughNotation.annotate(
        //     document.querySelector('.notation-box'), 
        //     { type: 'box', color: 'rgba(255, 255, 255, 0.5)', padding: 5, iterations: 2 }
        // );

        // const bracket = RoughNotation.annotate(
        //     document.querySelector('.notation-bracket'), 
        //     { type: 'bracket', color: '#64ffda', padding: 8, brackets: ['left', 'right'] }
        // );

        const circle = RoughNotation.annotate(
            document.querySelector('.notation-circle'), 
            { type: 'circle', color: '#7f7fd5', padding: 8, iterations: 2 }
        );



        const highlight2 = RoughNotation.annotate(
            document.querySelector('.notation-highlight-2'), 
            { type: 'highlight', color: '#2e1003', iterations: 1 }
        );

        // Create annotation group
        const ag = RoughNotation.annotationGroup([
            highlight, underline, underline2, underline3, circle, highlight2
        ]);

        // Show annotations in sequence
        ag.show();
    }, 1000); // Wait for 1 second after page load
});

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add hover effect for interactive elements
    document.querySelectorAll('a, button, .btn, .nav-link').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });

    // Add click animation
    document.addEventListener('click', () => {
        cursor.classList.add('expand');
        setTimeout(() => {
            cursor.classList.remove('expand');
        }, 500);
    });
});

// Add canvas drawing functionality
const canvas = document.createElement('canvas');
canvas.id = 'drawingCanvas';
canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 999;
`;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Add color variables
let hue = 0;
const saturation = 100;
const lightness = 50;

// Drawing functions
function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [e.clientX, e.clientY];
    clearTimeout(fadeOutTimeout);
    clearInterval(fadeInterval);
    canvas.style.opacity = 1;
    hue = Math.random() * 360; // Start with random color
}

function draw(e) {
    if (!isDrawing) return;
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.clientX, e.clientY);
    
    // Create rainbow effect
    hue = (hue + 1) % 360;
    ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.3)`;
    
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.stroke();
    
    [lastX, lastY] = [e.clientX, e.clientY];

    // Start fade out timer
    startFadeOut();
}

function stopDrawing() {
    isDrawing = false;
}

// Add event listeners for drawing
document.addEventListener('mousedown', startDrawing);
document.addEventListener('mousemove', draw);
document.addEventListener('mouseup', stopDrawing);
document.addEventListener('mouseout', stopDrawing);

// Modify existing cursor behavior to work with drawing
document.addEventListener('mousedown', () => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.transform = 'scale(0.5)';
});

document.addEventListener('mouseup', () => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.transform = 'scale(1)';
});

// Add fade out functionality
let fadeOutTimeout;
let fadeInterval;

function startFadeOut() {
    // Clear any existing timeouts
    clearTimeout(fadeOutTimeout);
    clearInterval(fadeInterval);
    
    // Start new fade out after 2 seconds
    fadeOutTimeout = setTimeout(() => {
        let opacity = 1;
        fadeInterval = setInterval(() => {
            opacity -= 0.1;
            if (opacity <= 0) {
                clearInterval(fadeInterval);
                clearCanvas();
            } else {
                canvas.style.opacity = opacity;
            }
        }, 50); // Fade duration = 500ms (50ms * 10 steps)
    }, 2000); // Wait 2 seconds before starting fade
}

// Update clear canvas function
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.opacity = 1; // Reset opacity
}

// Add clear canvas on escape key (optional)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        clearCanvas();
    }
});

// Add indicator fade out after 5 seconds
document.addEventListener('DOMContentLoaded', () => {
    const indicator = document.querySelector('.draw-indicator');
    setTimeout(() => {
        indicator.style.opacity = '0';
        setTimeout(() => {
            indicator.style.display = 'none';
        }, 1000);
    }, 5000);
});

// Update tooltip position with cursor
document.addEventListener('DOMContentLoaded', () => {
    const indicator = document.querySelector('.draw-indicator');
    
    // Show tooltip initially
    setTimeout(() => {
        indicator.classList.add('visible');
    }, 1000);

    // Update tooltip position
    document.addEventListener('mousemove', (e) => {
        indicator.style.left = `${e.clientX}px`;
        indicator.style.top = `${e.clientY}px`;
    });

    // Hide tooltip when drawing starts
    document.addEventListener('mousedown', () => {
        indicator.classList.remove('visible');
    });

    // Show tooltip again when not drawing for 3 seconds
    let tooltipTimeout;
    document.addEventListener('mouseup', () => {
        clearTimeout(tooltipTimeout);
        tooltipTimeout = setTimeout(() => {
            indicator.classList.add('visible');
        }, 3000);
    });
});

