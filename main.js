
// Xử lý lỗi ảnh (fallback mềm)
const allImages = document.querySelectorAll('.col-media img, .tuition-stack img');
allImages.forEach(img => {
  img.onerror = function() {
    this.style.outline = '1px dashed #ccc';
    this.alt = this.alt || 'Hình ảnh chương trình';
  };
});

// Hiệu ứng fade-up khi scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Đảm bảo nút ĐĂNG KÝ NGAY không có icon thừa (nếu có)
const fixBtn = () => {
  const btns = document.querySelectorAll('.register-btn');
  btns.forEach(btn => {
    if (btn.innerText.includes('📋')) btn.innerText = 'ĐĂNG KÝ NGAY';
  });
};
fixBtn();