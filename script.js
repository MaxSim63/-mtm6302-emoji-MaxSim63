const emojis = [
    {emoji: "&#x1F600;", code:"1F600"}, // 😀
    {emoji: "&#x1F601;", code:"1F601"}, // 😁
    {emoji: "&#x1F602;", code:"1F602"}, // 😂
    {emoji: "&#x1F605;", code:"1F605"}, // 😅
    {emoji: "&#x1F606;", code:"1F606"}, // 😆
    {emoji: "&#x1F609;", code:"1F609"}, // 😉
    {emoji: "&#x1F60A;", code:"1F60A"}, // 😊
    {emoji: "&#x1F60D;", code:"1F60D"}, // 😍
    {emoji: "&#x1F60E;", code:"1F60E"}, // 😎
    {emoji: "&#x1F618;", code:"1F618"}, // 😘
    {emoji: "&#x1F61A;", code:"1F61A"}, // 😚
    {emoji: "&#x1F61C;", code:"1F61C"}, // 😜
];

const gallery = document.getElementById("emoji-gallery");

emojis.forEach(emoji => {
    const div = document.createElement("div");
    div.classList.add("emoji-container");
    div.innerHTML = `
      <span class="emoji">${emoji.emoji}</span><br>
      <span class="code">${emoji.code}</span>
    `;
    gallery.appendChild(div);
  });