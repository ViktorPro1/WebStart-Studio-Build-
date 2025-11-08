# GitHub Copilot Instructions for WebStart Studio

## Project Context

WebStart Studio is a **static, framework-free web platform** for creating portfolios, resumes, and landing pages. Built with pure HTML5, CSS3, and Vanilla JavaScript.

## Tech Stack

- **NO frameworks** (React, Vue, Angular)
- **NO jQuery**
- Pure Vanilla JavaScript only
- Modular CSS architecture
- PWA support
- WebP images

## Code Style

### JavaScript

```javascript
// ✅ Good
const element = document.getElementById("myElement");
element?.addEventListener("click", handleClick);

// ❌ Bad
$("#myElement").on("click", handleClick); // NO jQuery!
var element = document.getElementById("myElement"); // Use const/let
```

### CSS

```css
/* ✅ Mobile-first */
.card {
  padding: 10px;
}

@media (min-width: 768px) {
  .card {
    padding: 20px;
  }
}

/* ❌ Desktop-first */
.card {
  padding: 20px;
}

@media (max-width: 767px) {
  .card {
    padding: 10px;
  }
}
```

### HTML

```html
<!-- ✅ Semantic + Accessibility -->
<section aria-labelledby="services-heading">
  <h2 id="services-heading">Наші послуги</h2>
  <img src="image.webp" alt="Опис зображення" loading="lazy" />
</section>

<!-- ❌ Non-semantic -->
<div class="section">
  <div class="heading">Наші послуги</div>
  <img src="image.jpg" />
  <!-- No alt, no lazy loading -->
</div>
```

## Key Principles

1. **Always use Vanilla JS** - No libraries
2. **Mobile-first CSS** - Start with small screens
3. **Semantic HTML** - Use proper tags
4. **Accessibility** - WCAG AA compliance
5. **Dark mode** - Support .dark-mode class
6. **Performance** - Lighthouse score > 90

## File Structure

When suggesting new files:

- CSS → `css/sections/` or `css/components/`
- JS → `scripts/`
- HTML → `pages/`
- Images → WebP format only

## Common Patterns

### Dark Mode Toggle

```javascript
const toggle = document.getElementById("darkModeToggle");
toggle?.addEventListener("change", (e) => {
  document.body.classList.toggle("dark-mode", e.target.checked);
  localStorage.setItem("theme", e.target.checked ? "dark" : "light");
});
```

### Lazy Loading

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".lazy").forEach((el) => observer.observe(el));
```

## Don't Suggest

- ❌ npm install anything
- ❌ jQuery syntax
- ❌ Framework-specific code
- ❌ Inline styles (use CSS classes)
- ❌ document.write()
- ❌ eval()

## Always Include

- ✅ Error handling (try/catch)
- ✅ Null checks (optional chaining)
- ✅ Comments for complex logic
- ✅ Responsive design
- ✅ Dark mode support
