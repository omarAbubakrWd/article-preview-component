# 📄 Frontend Mentor - Article Preview Component

![Design preview for the Article preview component coding challenge](./design/desktop-preview.jpg)

## 👋 Welcome!

This is my solution to the [Article Preview Component Challenge](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT) on **Frontend Mentor**.  
Frontend Mentor challenges help developers improve their coding skills by building realistic projects.

---

## 🎯 The Challenge

The goal of this challenge was to **build out an article preview component** and get it looking as close to the design as possible.

### ✅ Users should be able to:
- 📱 View the optimal layout for the component depending on their device's screen size  
- 🔗 See the social media share links when they click the share icon  

---

## 🛠 **Built With**
- Semantic **HTML5** markup  
- **CSS Custom Properties**  
- **Flexbox & CSS Grid** for layout  
- **JavaScript** for interactive share panel  
- **Mobile-first workflow**

---

## 🚀 **Live Demo**
👉 [**View the Live Site here**](https://omarAbubakrWd.github.io/article-preview-component) *(add this link after deploying to GitHub Pages)*  

---

## 📸 **Screenshots**

### Desktop Design
![Desktop Design](./design/desktop-preview.jpg)

### Mobile Design
![Mobile Design](./design/mobile-design.jpg)

---

## 💡 **What I Learned**
While working on this challenge I learned:
- How to toggle a share panel with **JavaScript event listeners**  
- Better understanding of **positioning elements** with Flexbox and Grid  
- How to make a component fully **responsive** from mobile up to desktop  

```js
// Example: toggling the share panel
const shareBtn = document.querySelector('.share-btn');
const sharePanel = document.querySelector('.share-panel');

shareBtn.addEventListener('click', () => {
  sharePanel.classList.toggle('active');
});
