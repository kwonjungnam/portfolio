document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // 간단한 폼 검증
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      formMsg.textContent = '모든 항목을 입력해주세요.';
      formMsg.style.color = '#c00';
      return;
    }
    // 이메일 형식 확인
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formMsg.textContent = '올바른 이메일을 입력해주세요.';
      formMsg.style.color = '#c00';
      return;
    }
    // 성공: 메시지 출력
    formMsg.textContent = '메시지가 성공적으로 전송되었습니다. 감사합니다!';
    formMsg.style.color = '#176B87';
    form.reset();
  });
});
