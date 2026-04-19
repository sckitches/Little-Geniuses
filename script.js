// --- MULTI-PROFILE AUTH ---
const profiles = JSON.parse(localStorage.getItem('geniusProfiles') || '[]');
let currentProfile = JSON.parse(localStorage.getItem('currentGeniusProfile'));

const path = window.location.pathname.toLowerCase();
const isAuthPage = path.includes('signup.html') || path.includes('login.html');

if (!currentProfile && !isAuthPage) {
    if (profiles.length > 0) {
        window.location.href = 'login.html'; // Now Switch Profile
    } else {
        window.location.href = 'signup.html'; // Create First Profile
    }
}

// Integrity Check: If current profile was deleted elsewhere
if (currentProfile && !profiles.find(p => p.id === currentProfile.id) && !isAuthPage) {
    localStorage.removeItem('currentGeniusProfile');
    window.location.href = 'login.html';
}

function getAgeGroup() {
    if (!currentProfile) return 'toddler';
    const age = parseInt(currentProfile.childAge || 1);
    if (age <= 2) return 'toddler';
    if (age <= 4) return 'junior';
    return 'big-kid';
}

function updatePersonalization() {
    const parentNameEls = document.querySelectorAll('.parent-name');
    const childNameEls = document.querySelectorAll('.child-name');
    
    if (currentProfile) {
        parentNameEls.forEach(el => el.innerText = currentProfile.parentName);
        childNameEls.forEach(el => el.innerText = currentProfile.childName);
        document.body.classList.add(`age-${getAgeGroup()}`);
    }
}

function selectProfile(index) {
    localStorage.setItem('currentGeniusProfile', JSON.stringify(profiles[index]));
    window.location.href = 'index.html';
}

function logout() {
    localStorage.removeItem('currentGeniusProfile');
    window.location.href = 'login.html';
}

function toggleMenu() {
    const menu = document.getElementById('extendedMenu');
    if (menu) menu.classList.toggle('show');
}

function waveMascot() {
    const mascot = document.querySelector('.mascot-large');
    if (mascot) {
        mascot.style.animation = 'none';
        void mascot.offsetWidth; // trigger reflow
        mascot.style.animation = 'wave 0.5s 3';
    }
}

// Generate Data
function initAlphabets() {
    const grid = document.getElementById('alphabetGrid');
    if (!grid) return;
    
    const words = ["Apple 🍎", "Bear 🐻", "Cat 🐱", "Dog 🐶", "Elephant 🐘", "Frog 🐸", "Giraffe 🦒", "Horse 🐴", "Igloo 🧊", "Jellyfish 🪼", "Kangaroo 🦘", "Lion 🦁", "Monkey 🐵", "Nest 🪹", "Owl 🦉", "Penguin 🐧", "Queen 👑", "Rabbit 🐰", "Sun ☀️", "Tiger 🐯", "Umbrella ☂️", "Violin 🎻", "Whale 🐳", "Xylophone 🎹", "Yak 🐂", "Zebra 🦓"];
    const colors = ["#ff5e5e", "#ff9f43", "#feca57", "#1dd1a1", "#54a0ff", "#5f27cd", "#ff9ff3"];

    for (let i = 0; i < 26; i++) {
        let charCodeUpper = String.fromCharCode(65 + i);
        let charCodeLower = String.fromCharCode(97 + i);
        let color = colors[i % colors.length];

        const card = document.createElement('div');
        card.className = "feature-card scale-hover";
        card.style.borderColor = color;
        card.style.cursor = "pointer";
        card.onclick = function() { createConfetti(this); };

        card.innerHTML = `
            <div class="card-body">
                <h1 style="font-size: 5rem; color:${color};">${charCodeUpper} ${charCodeLower}</h1>
                <p style="font-size: 1.2rem;">${words[i]}</p>
            </div>
        `;
        grid.appendChild(card);
    }
}

function initNumbers() {
    const grid = document.getElementById('numbersGrid');
    if (!grid) return;
    
    const colors = ["#ff5e5e", "#ff9f43", "#feca57", "#1dd1a1", "#01a3a4", "#54a0ff", "#5f27cd", "#ff9ff3"];

    for (let i = 1; i <= 100; i++) {
        let color = colors[i % colors.length];
        
        const card = document.createElement('div');
        card.className = "number-card";
        card.style.borderColor = color;
        card.style.color = color;
        card.onclick = function() { createConfetti(this); };

        card.innerHTML = `
            <h1 style="font-size: 3.5rem;">${i}</h1>
        `;
        grid.appendChild(card);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updatePersonalization();
    refreshHUD();
    // Generate alphabets and numbers if their containers exist on page
    initAlphabets();
    initNumbers();

    const playButtons = document.querySelectorAll('.btn-play');
    playButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.innerHTML = 'Playing... ♪';
            btn.style.background = 'var(--green)';
            btn.style.boxShadow = '0 5px 0 #10ac84';
            setTimeout(() => {
                btn.innerHTML = 'Play Again 🔊';
                btn.style.background = 'var(--purple)';
                btn.style.boxShadow = '0 5px 0 #3c1685';
            }, 1500);
            createConfetti(btn);
        });
    });
});

function createConfetti(element) {
    const colors = ['#ff5e5e', '#ff9f43', '#feca57', '#1dd1a1', '#54a0ff', '#ff9ff3'];
    for(let i=0; i<30; i++) {
        const conf = document.createElement('div');
        conf.style.position = 'absolute';
        conf.style.width = '10px';
        conf.style.height = '10px';
        conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        conf.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        const rect = element.getBoundingClientRect();
        // Adjust for scroll
        conf.style.left = (rect.left + rect.width / 2 + window.scrollX) + 'px';
        conf.style.top = (rect.top + rect.height / 2 + window.scrollY) + 'px';
        conf.style.zIndex = 1000;
        
        document.body.appendChild(conf);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 5 + Math.random() * 15;
        let x = 0, y = 0;
        
        let frames = 0;
        function animate() {
            frames++;
            x += Math.cos(angle) * velocity;
            y += Math.sin(angle) * velocity + (frames * 0.2); // gravity
            conf.style.transform = `translate(${x}px, ${y}px) rotate(${frames*10}deg)`;
            
            if (frames < 50) requestAnimationFrame(animate);
            else conf.remove();
        }
        animate();
    }
}

// --- HERO SYSTEM ---
function getCurrentHero() {
    const defaultHero = { id: 'monkey', name: 'Turbo Monkey', emoji: '🐵' };
    try {
        const saved = localStorage.getItem('selectedGeniusHero');
        return saved ? JSON.parse(saved) : defaultHero;
    } catch(e) { return defaultHero; }
}

function refreshHUD() {
    // Update Avatar across pages
    const hero = getCurrentHero();
    const mascots = document.querySelectorAll('.mascot-large, .os-avatar, #avatarEmoji, .mascot');
    mascots.forEach(m => {
        if (m.tagName === 'IMG') {
             // If it's an image we might want to keep it or replace with emoji text
             // For now we assume mascots are mostly text/emojis in this simplified version
        } else {
            m.innerText = hero.emoji;
        }
    });

    // Update star count if present
    const starEl = document.getElementById('star-count');
    if (starEl) {
        const dna = JSON.parse(localStorage.getItem('geniusDNA') || '{"stars":0}');
        starEl.innerText = (dna.stars || 0).toLocaleString();
    }
}
