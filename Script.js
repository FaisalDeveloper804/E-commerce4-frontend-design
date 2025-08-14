// ===== PRODUCT DESCRIPTION PAGE INTERACTIVITY =====

// ----------- PRODUCT IMAGE GALLERY -----------
const mainImage = document.querySelector('image1');
const thumbnails = document.querySelectorAll('.images');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        thumbnails.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        mainImage.src = thumb.src;
    });
});

// ----------- TAB SWITCHING (Description, Reviews, etc.) -----------
const tabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.dataset.tab;
        tabContents.forEach(content => {
            content.style.display = content.id === target ? 'block' : 'none';
        });
    });
});

// ----------- SAVE FOR LATER BUTTON -----------
const saveBtn = document.querySelector('#save-for-later');
saveBtn?.addEventListener('click', () => {
    saveBtn.classList.toggle('saved');
    saveBtn.innerHTML = saveBtn.classList.contains('saved') ? '💖 Saved' : '🤍 Save for later';
});

// ----------- QUANTITY SELECTOR -----------
const qtyInput = document.querySelector('#quantity');
const plusBtn = document.querySelector('#qty-plus');
const minusBtn = document.querySelector('#qty-minus');

plusBtn?.addEventListener('click', () => {
    qtyInput.value = parseInt(qtyInput.value) + 1;
});
minusBtn?.addEventListener('click', () => {
    if (parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
    }
});

// ----------- RELATED PRODUCTS CAROUSEL -----------
const relatedContainer = document.querySelector('.related-products');
const scrollLeftBtn = document.querySelector('#scroll-left');
const scrollRightBtn = document.querySelector('#scroll-right');

scrollLeftBtn?.addEventListener('click', () => {
    relatedContainer.scrollBy({ left: -200, behavior: 'smooth' });
});
scrollRightBtn?.addEventListener('click', () => {
    relatedContainer.scrollBy({ left: 200, behavior: 'smooth' });
});

// ----------- SEND INQUIRY BUTTON CONFIRMATION -----------
const inquiryBtn = document.querySelector('#send-inquiry');
inquiryBtn?.addEventListener('click', () => {
    alert('Your inquiry has been sent to the seller!');
});