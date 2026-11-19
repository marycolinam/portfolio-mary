# ✨ Mary Codes · Portfolio

Portafolio personal como desarrolladora frontend, construido con React y Vite. Presenta mis habilidades, una selección de proyectos y un formulario de contacto funcional.

> 🇬🇧 *Personal frontend developer portfolio built with React and Vite. Responsive single-page site with glassmorphism UI, smooth animations, project showcase and a working contact form powered by EmailJS.*

🔗 **[marycodes.vercel.app](https://marycodes.vercel.app)**

---

## Tabla de contenidos

- [Secciones](#secciones)
- [Tecnologías](#tecnologías)
- [Funcionalidades](#funcionalidades)
- [Estructura](#estructura)
- [Cómo ejecutar](#cómo-ejecutar)
- [Variables de entorno](#variables-de-entorno)
- [Deploy](#deploy)

---

## Secciones

- **Inicio:** presentación y accesos directos a proyectos y contacto
- **Sobre mí:** enfoque de trabajo y tecnologías principales, con un marquee animado
- **Proyectos:** proyecto destacado y tarjetas con stack, puntos clave y links a demo y código
- **Contacto:** formulario que envía mensajes reales por correo

## Tecnologías

- React 19
- Vite
- JavaScript (ES6+)
- CSS3 con variables y estilos por componente
- [EmailJS](https://www.emailjs.com/) para el formulario de contacto
- [Lucide React](https://lucide.dev/) para los íconos
- ESLint
- Vercel para el deploy

## Funcionalidades

- Diseño responsive
- Interfaz con efectos de *glassmorphism* y animaciones suaves
- Navegación por anclas entre secciones
- Proyectos definidos como datos, fáciles de actualizar y agregar
- Formulario de contacto funcional sin backend propio

## Estructura

```
portfolio-mary/
├── public/                  # Favicon e íconos
├── src/
│   ├── assets/              # Imágenes y previews de proyectos
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Projects/        # Projects + FeaturedProject
│   │   ├── Contact/         # Formulario con EmailJS
│   │   └── Footer/
│   ├── styles/              # Variables y estilos globales
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

Cada componente tiene su propio archivo `.css`, para mantener los estilos ordenados y aislados.

## Cómo ejecutar

```bash
git clone https://github.com/marycolinam/portfolio-mary.git
cd portfolio-mary
npm install
npm run dev
```

Otros scripts disponibles:

| Script | Uso |
|--------|-----|
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Sirve localmente la versión de producción |
| `npm run lint` | Revisa el código con ESLint |

## Variables de entorno

El formulario de contacto necesita una cuenta de EmailJS. Crea un archivo `.env` en la raíz del proyecto con:

```
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

El archivo `.env` no está incluido en el repositorio por seguridad.

## Deploy

El sitio está publicado en **Vercel**, conectado a la rama `main`. Cada push publica automáticamente una nueva versión. Las variables de entorno de EmailJS se configuran en *Settings → Environment Variables* del proyecto en Vercel.

---

👩‍💻 Desarrollado por **Mariangel Colina** · [GitHub](https://github.com/marycolinam) · [LinkedIn](https://www.linkedin.com/in/marycolinam/) · [Portfolio](https://marycodes.vercel.app)
