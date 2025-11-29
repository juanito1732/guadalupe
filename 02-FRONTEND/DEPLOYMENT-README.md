# 🚀 GUADIS LANDING - Automated Deployment System

## Status: ✅ LIVE & AUTOMATED

**Website**: https://guadis-landing.vercel.app
**Repository**: https://github.com/juanito1732/guadis-landing
**Last Updated**: 2025-11-20

---

## 📋 Quick Start (For Contributors)

### Your Workflow
```bash
# Make changes
git add .
git commit -m "Your message"
git push origin main

# ✨ That's it! Deployment is automatic
```

**Timeline:**
1. You push to GitHub
2. GitHub Actions triggers automatically
3. Build runs (2 minutes)
4. Vercel deploys (2 minutes)
5. Site is live ✅

---

## 🎨 Palette System

### 4 Palettes with 5 Colors Each

#### AZULES (Blue)
- `--color-1`: `#e8f5fd` (Lightest - backgrounds)
- `--color-2`: `#cce1ef` (Light - secondary bg)
- `--color-3`: `#9bc0da` (Medium - cards, borders)
- `--color-4`: `#689ec2` (Dark - buttons, links)
- `--color-5`: `#1b5b7e` (Darkest - text, headers)

#### GRIS (Gray)
- `--color-1`: `#dabeb6` (Lightest)
- `--color-2`: `#eed0c6` (Light)
- `--color-3`: `#e3d4d0` (Medium)
- `--color-4`: `#b2b9bf` (Dark)
- `--color-5`: `#7a8d9b` (Darkest)

#### ROSA (Pink)
- `--color-1`: `#9db8d6` (Lightest)
- `--color-2`: `#d1dce0` (Light)
- `--color-3`: `#eacddb` (Medium)
- `--color-4`: `#f0a6c5` (Dark)
- `--color-5`: `#e963a7` (Darkest)

#### EARTH (Brown)
- `--color-1`: `#e9d2c0` (Lightest)
- `--color-2`: `#c7a48f` (Light)
- `--color-3`: `#c99772` (Medium)
- `--color-4`: `#b57549` (Dark)
- `--color-5`: `#8d4424` (Darkest)

### Usage in Components
```tsx
// Buttons
<button className="bg-c4 hover:bg-c5">...</button>

// Cards
<div className="bg-c1 border-c3 hover:border-c4">...</div>

// Text hierarchy
<h1 className="text-c5">...</h1>
<p className="text-c3">...</p>

// Forms
<input className="border-c3 focus:border-c4" />
```

---

## 🔧 Configuration

### Files Modified
- `src/data/palettes.ts` - Palette definitions
- `src/app/globals.css` - Global styles (150+ lines)
- `tailwind.config.ts` - Color mappings (c1-c5)
- `src/components/ServiceCard.tsx` - Component styles
- `src/components/TestimonialCard.tsx` - Component styles
- `src/components/Contact.tsx` - Component styles

### Automation Files
- `.github/workflows/deploy.yml` - CI/CD pipeline
- `vercel.json` - Vercel configuration
- `GITHUB-SECRETS-CONFIG.md` - Setup guide

---

## ⚙️ How It Works

### GitHub Actions Workflow

```yaml
Push to main
    ↓
GitHub Actions triggers
    ↓
npm install → npm run build → npm test (if added)
    ↓
Build successful?
    ├─ YES → Deploy to Vercel
    └─ NO → Fail & notify
    ↓
Vercel builds and deploys
    ↓
Site updated ✅
```

### Required Environment
Three GitHub Secrets must be set:
- `VERCEL_TOKEN` - API token for Vercel
- `VERCEL_ORG_ID` - Team/Organization ID
- `VERCEL_PROJECT_ID` - Project ID

**Setup**: See `GITHUB-SECRETS-CONFIG.md`

---

## 📊 Verification

### Check Deployment Status
1. **GitHub Actions**: https://github.com/juanito1732/guadis-landing/actions
2. **Vercel Deployments**: https://vercel.com/juanito1732/guadis-landing

### Verify Palette Colors
All components display all 5 colors:
- ✅ Buttons in color-4 with hover to color-5
- ✅ Cards in color-1 with borders in color-3
- ✅ Forms with color-3 borders, color-4 focus
- ✅ Text hierarchy using color-3 and color-5
- ✅ Icons in color-4

---

## 🐛 Troubleshooting

### Build Fails in GitHub Actions
1. Check logs: https://github.com/juanito1732/guadis-landing/actions
2. Common issues:
   - `npm install` failed → Check package.json
   - TypeScript errors → Run `npm run build` locally
   - Missing dependencies → Run `npm install --legacy-peer-deps`

### Site Not Updated on Vercel
1. Verify secrets are configured correctly
2. Check GitHub Actions workflow passed (green ✅)
3. Check Vercel deployment logs
4. Force redeploy from Vercel dashboard if needed

### Palette Colors Not Showing
1. Check CSS file loaded: DevTools → Network → CSS files
2. Verify color variables exist: DevTools → Inspect → Computed styles
3. Check class names are correct in components

---

## 📚 Documentation

- **`GITHUB-SECRETS-CONFIG.md`** - How to set up GitHub Secrets (required)
- **`AUDIT-DEPLOYMENT-2025-11-20.md`** - Technical audit of deployment issues
- **`DEPLOYMENT-FIX-MANUAL.md`** - Manual troubleshooting guide
- **`SETUP-AUTOMATION.sh`** - Script for automated setup (if needed)

---

## 🎯 What's Automated

✅ Build process
✅ Deployment to Vercel
✅ Cache handling
✅ Header configuration
✅ Production builds
✅ Pull request notifications

## 🚫 What's NOT Automated

- Database migrations (if added)
- Email notifications
- Advanced monitoring
- Performance analytics

---

## 💡 Future Improvements

Possible additions:
- [ ] Slack notifications for deployments
- [ ] Lighthouse performance checks
- [ ] Automated security scanning
- [ ] Staging environment deployments
- [ ] E2E tests in GitHub Actions

---

## 📞 Support

### If Something Goes Wrong

1. **Check the logs**: GitHub Actions → workflow → failed step
2. **Local build test**: `npm run build` in your terminal
3. **Vercel status**: https://status.vercel.com
4. **Read the docs**: See Documentation section above

### Common Commands

```bash
# Test build locally
npm run build

# Start development server
npm run dev

# Lint code
npm run lint

# Check what will be deployed
ls -la .next/static/chunks/app/
```

---

## 📈 Performance

- **Build time**: ~2 minutes (local + Vercel)
- **Deployment time**: ~2 minutes total
- **Cache strategy**: Static assets cached 1 year, HTML refreshed per request
- **File size**: JS bundle ~44.3 kB, CSS optimized

---

## ✅ Deployment Checklist

Before each release:
- [ ] Test locally: `npm run build`
- [ ] Check TypeScript: No errors
- [ ] Verify new features work
- [ ] Test palette switching
- [ ] Commit with clear message
- [ ] Push to main
- [ ] Watch GitHub Actions for ✅
- [ ] Verify site updated

---

## 🎓 Learning Resources

- [Vercel Docs](https://vercel.com/docs)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Last Updated**: 2025-11-20
**Version**: 2.1.0
**Status**: ✅ Production Ready
