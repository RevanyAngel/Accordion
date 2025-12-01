const popup = document.querySelector('.cookies');
const acceptBtn = document.querySelector('.accept-btn');
const consent = localStorage.getItem("cookieConsent");

if (consent === "accepted") {
    popup.classList.add('hide');
}

acceptBtn.addEventListener('click', () => {
    popup.classList.add('hide');
    localStorage.setItem("cookieConsent", "accepted");
});

// KOLOM KOMENTAR
const inputText = document.getElementById('input-text');
const counter = document.getElementById('counter');
const maxChars = 100;

inputText.addEventListener('input', () => {
    const textLength = inputText.value.length;
    
    if (textLength > maxChars) {
        counter.classList.add('limit-hit');
        inputText.classList.add('limit-hit');
        inputText.value = inputText.value.substring(0, maxChars);
        counter.textContent = `${textLength - 1}/${maxChars}`;
    } else {
        counter.classList.remove('limit-hit');
        inputText.classList.remove('limit-hit');
        counter.textContent = `${textLength}/${maxChars}`;
    }
});

// FAQ ACCORDION
const headers = document.querySelectorAll(".isi-faq button");

document.querySelectorAll(".isi-faq p").forEach(p => {
  p.classList.remove("open");           
  p.setAttribute("aria-hidden", "true");
});


headers.forEach(h => h.setAttribute("aria-expanded", "false"));

function openPanelAnimated(panel, header) {
  panel.classList.add("open");
  header.classList.add("active");
  header.setAttribute("aria-expanded", "true");
  panel.setAttribute("aria-hidden", "false");
}

function closePanelAnimated(panel, header) {
  panel.classList.remove("open"); 
  header.classList.remove("active");
  header.setAttribute("aria-expanded", "false");
  panel.setAttribute("aria-hidden", "true");
}

headers.forEach(header => {
  header.addEventListener("click", () => {

    const panel = header.nextElementSibling;

    const openPanel = document.querySelector(".isi-faq p.open");

    if (openPanel && openPanel !== panel) {
      closePanelAnimated(openPanel, openPanel.previousElementSibling);
    }

    if (panel.classList.contains("open")) {
      closePanelAnimated(panel, header);
    } else {
      openPanelAnimated(panel, header);
    }
  });
});


