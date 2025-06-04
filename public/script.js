(async () => {
    const searchBox = document.querySelector("input[name='q']");
    if (searchBox) searchBox.style.display = "none";
  
    const res = await fetch("https://YOUR_BACKEND_DOMAIN/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: location.href,
        title: document.title
      })
    });
  
    const messageRes = await fetch("https://YOUR_BACKEND_DOMAIN/message");
    const secretMessage = await messageRes.text();
  
    const el = document.createElement("div");
    el.textContent = secretMessage;
    el.style = `
      position: fixed;
      bottom: 50px;
      right: 50px;
      background: #000;
      color: #fff;
      opacity: 0.1;
      padding: 10px;
      border-radius: 10px;
      transition: opacity 0.3s;
      z-index: 9999;
    `;
    document.body.appendChild(el);
  
    let timer;
    el.addEventListener("mousedown", () => {
      timer = setTimeout(() => { el.style.opacity = "1"; }, 3000);
    });
    el.addEventListener("mouseup", () => {
      clearTimeout(timer);
      el.style.opacity = "0.1";
    });
  })();
  