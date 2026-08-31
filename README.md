# To-Do App

Una aplicación simple de lista de tareas construida con **React** y **Vite**, desplegada en GitHub Pages.

🔗 **Demo en vivo:** [https://alexander404-hz.github.io/To-Do-App/](https://alexander404-hz.github.io/To-Do-App/)

[![Preview de To-Do App](readme.webp)](https://alexander404-hz.github.io/To-Do-App/)

---

## ✨ Características

- ➕ Agregar nuevas tareas
- ✅ Marcar tareas como completadas
- 🗑️ Eliminar tareas
- 🔍 Buscar tareas
- 💾 Persistencia de datos en el navegador (localStorage)

---

## 🛠️ Tecnologías utilizadas

- [React](https://react.dev/) — librería para construir la interfaz
- [Vite](https://vitejs.dev/) — herramienta de build y desarrollo
- CSS plano para los estilos
- [gh-pages](https://www.npmjs.com/package/gh-pages) — despliegue a GitHub Pages

---

## 📁 Estructura del proyecto

```
src/
├── assets/                     # Imágenes e íconos estáticos
│   ├── hero.png
│   ├── react.svg
│   └── vite.svg
├── components/
│   ├── CreateTodoButton/       # Botón para abrir el modal de creación
│   ├── Loading/                # Estado de carga
│   ├── Modal/                  # Modal reutilizable
│   ├── TodoCounter/            # Contador de tareas pendientes
│   ├── TodoFeedback/           # Mensajes de estado (sin tareas, sin resultados, etc.)
│   ├── TodoItem/               # Ítem individual de tarea
│   ├── TodoList/                # Lista de tareas
│   └── TodoSearch/              # Barra de búsqueda
├── context/
│   └── TodoContext/            # Contexto global con la lógica y estado de los todos
├── hooks/
│   ├── useDebounce.js          # Hook para retrasar la búsqueda mientras el usuario escribe
│   └── useLocaleStorage.js     # Hook para persistir los todos en localStorage
├── App.jsx                     # Componente raíz, envuelve la app con el TodoContext
├── AppUI.jsx                   # Composición visual de los componentes
├── main.jsx                    # Punto de entrada de la aplicación
└── index.css                   # Estilos globales
```

Cada componente sigue el patrón de carpeta con su propio `.jsx`, `.css` y un `index.js` que reexporta el componente (útil para hacer imports más limpios, ej. `import { TodoItem } from './components/TodoItem'`).

---

## Instalación y uso local

Clona el repositorio:

```bash
git clone https://github.com/alexander404-hz/To-Do-App.git
cd To-Do-App
```

Instala las dependencias:

```bash
npm install
```

Corre el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Build de producción

Para generar el build optimizado:

```bash
npm run build
```

Para previsualizar el build localmente:

```bash
npm run preview
```

## Despliegue

Este proyecto se despliega en GitHub Pages usando el paquete `gh-pages`:

```bash
npm run deploy
```

Esto compila el proyecto y publica el contenido de `dist/` en la rama `gh-pages` del repositorio.

---

## 👤 Autor

**Alexander Hz**
Portafolio: [alexander404-hz.github.io/Portafolio](https://alexander404-hz.github.io/Portafolio/)

---

## 📄 Licencia

© 2026 Alexander Hz. Todos los derechos reservados.
