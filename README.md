
# Gonzalo Gil — Portfolio

Portfolio personal de Gonzalo Gil, Full Stack Developer.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules**
- **Google Fonts** — Outfit + JetBrains Mono

## Correr localmente

### 1. Instalar dependencias

```bash
npm install
```

### 2. Iniciar servidor de desarrollo

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el browser.

### 3. Build para producción

```bash
npm run build
npm start
```

---

## Desplegar en Vercel (recomendado)

1. Subí el proyecto a un repositorio en **GitHub**
2. Entrá a [vercel.com](https://vercel.com) y hacé login con GitHub
3. Click en **"Add New Project"** → seleccioná el repo
4. Vercel detecta Next.js automáticamente → click **"Deploy"**
5. ¡Listo! Tu sitio queda online en `https://gonzalo-portfolio.vercel.app`

> Para usar un dominio propio (ej: `gonzalogil.dev`), configuralo desde el panel de Vercel en Settings → Domains.

---

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx        # Layout raíz, fuentes y metadata
│   ├── page.tsx          # Página principal
│   └── globals.css       # Estilos globales y tokens CSS
├── components/
│   ├── Navbar.tsx        # Nav + hamburguesa + selector de idioma
│   ├── Hero.tsx          # Sección principal con stats
│   ├── Skills.tsx        # Stack técnico por categorías
│   ├── Experience.tsx    # Experiencia laboral
│   ├── Projects.tsx      # Proyectos destacados
│   ├── Contact.tsx       # Contacto + disponibilidad
│   └── Footer.tsx        # Footer
└── lib/
    ├── translations.ts   # Todos los textos EN / ES
    ├── data.ts           # Skills, experiencia, proyectos + getYearsExp()
    └── LangContext.tsx   # Context de idioma (React)
```

## Personalización

- **Textos**: editá `src/lib/translations.ts`
- **Datos**: editá `src/lib/data.ts`
- **Colores**: editá las variables en `src/app/globals.css`
=======
# portfolio
Personal portfolio built with Next.js 14, TypeScript and CSS Modules. Features a bilingual interface (ES/EN), responsive design with mobile hamburger menu, and sections for skills, work experience, and featured projects. Deployed on Vercel.
>>>>>>> 74a48f1b3c6dbbe419435cd6d800d4e43b645900
