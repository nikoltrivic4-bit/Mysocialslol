// Edit this configuration to customize the page.
const CONFIG = {
  username: "@lexynotagainlol",
  bio: "All my socials :)",
  profile: "profile.png",
  links: [
    {label:"My Instagram", url:"https://instagram.com/", icon:"◎"},
    {label:"My TikTok", url:"https://www.tiktok.com/@lexynotagainlol?is_from_webapp=1&sender_device=pc", icon:"♪"},
    {label:"My Discord", url:"https://discord.gg/jXXdbnbNtR", icon:"◉"},
    
  ]
};

document.title = CONFIG.username + " — Links";
document.getElementById("username").textContent = CONFIG.username;
document.getElementById("bio").textContent = CONFIG.bio;
document.getElementById("avatar").src = CONFIG.profile;

const container = document.getElementById("links");
const toast = document.getElementById("toast");

function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),1800);
}

CONFIG.links.forEach((item, index) => {
  const a = document.createElement("a");
  a.className = "link";
  a.href = item.url;
  a.target = item.url.startsWith("http") ? "_blank" : "_self";
  a.rel = "noopener noreferrer";
  a.innerHTML = `<span class="icon">${item.icon}</span><span>${item.label}</span><span class="dots">⋮</span>`;
  a.addEventListener("click", () => {
    // Simple local click tracking. Replace with your analytics provider if desired.
    const key = "link_click_" + index;
    localStorage.setItem(key, String(Number(localStorage.getItem(key)||0)+1));
  });
  container.appendChild(a);
});

document.getElementById("shareBtn").addEventListener("click", async () => {
  const shareData = {title: CONFIG.username, text: CONFIG.bio, url: location.href};
  try {
    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(location.href);
      showToast("Link copied!");
    }
  } catch(e) {}
});