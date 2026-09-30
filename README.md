# Sitio web para iglesias — plantilla basada en José C. Paz Sur

Este repositorio contiene la página de la **Iglesia Adventista del Séptimo Día de José C. Paz Sur**. También está pensado como **punto de partida para otras iglesias**: pueden copiar el proyecto, reemplazar los datos de esta congregación y publicar su propia página.

La [versión publicada](https://adventistasjosecpaz.web.app/) muestra el resultado con el contenido de José C. Paz Sur.

## ¿Qué incluye?

- Presentación de la iglesia y su historia.
- Días y horarios de reuniones, servicios y actividades.
- Dirección, enlace a Google Maps y listado de iglesias cercanas.
- Enlaces a WhatsApp y redes sociales.
- Diseño adaptable a computadoras y celulares.

No requiere una base de datos ni un panel de administración: el contenido se edita directamente en los archivos del proyecto.

## Usar esta página para tu iglesia

1. Copiá el repositorio con **Use this template** (si esa opción está habilitada), hacé un *fork* o clonalo.
2. Instalá [Node.js 22.13 o superior](https://nodejs.org/) y, dentro del proyecto, ejecutá:

   ```bash
   npm install
   npm run dev
   ```

3. Abrí la dirección local que muestra la terminal y reemplazá el contenido de ejemplo:

   | Archivo | Qué cambiar |
   | --- | --- |
   | `app/page.tsx` | Nombre de la iglesia, historia, horarios, actividades, dirección, mapa, WhatsApp, redes sociales y lista de iglesias cercanas. |
   | `app/layout.tsx` | Nombre, descripción, URL del sitio y datos que se muestran al compartir la página. |
   | `public/` y `public/img/` | Logos, imágenes, ícono, imagen para compartir y archivos descargables. |
   | `app/globals.css` | Colores y estilos, si querés personalizar el diseño. |

4. Revisá todos los enlaces y textos antes de publicar. En particular, el número de WhatsApp, las direcciones, los horarios y las redes actuales corresponden a **José C. Paz Sur**.
5. Ejecutá `npm run build` para comprobar que el sitio se genera correctamente.

### Imagen de cabecera

La imagen de cabecera (`public/img/background.png`) es una **representación de la iglesia de José C. Paz Sur, Buenos Aires**. Al adaptar la plantilla, cada iglesia debería reemplazarla por una imagen de su propio templo o por cualquier otra imagen que tenga permiso de usar. La cabecera carga ese archivo desde `app/globals.css`.

## Publicación

El proyecto incluye una configuración de ejemplo para **Firebase Hosting** en `firebase.json` y un comando de compilación estática:

```bash
npm run build:firebase
```

Ese comando prepara los archivos en `dist/firebase`. Para publicarlos en tu propio proyecto de Firebase, configurá Firebase Hosting con tu cuenta y usá `firebase deploy --only hosting --project TU_PROJECT_ID`.

El comando `npm run deploy:firebase` de este repositorio usa credenciales locales y un ID de proyecto específicos de José C. Paz Sur; **no sirve directamente para otra iglesia**. También podés publicar la página en otro servicio compatible con este proyecto.

### Despliegue automático de José C. Paz Sur

Cada push a `main` en `CristSoft/jcpsur-landing-page` ejecuta `.github/workflows/deploy-firebase.yml`: instala dependencias, genera el sitio estático y publica únicamente Firebase Hosting en el proyecto `adventistasjosecpaz`. Los pull requests y forks no tienen acceso al despliegue.

GitHub Actions se autentica mediante Workload Identity Federation, sin una sesión personal de Firebase ni una llave privada guardada en GitHub. La variable del repositorio `GCP_WORKLOAD_IDENTITY_PROVIDER` debe contener el nombre completo del proveedor de identidad de Google Cloud. Ese proveedor debe aceptar solo tokens del repositorio y la rama `main`; la cuenta `firebase-hosting-deployer@adventistasjosecpaz.iam.gserviceaccount.com` debe permitir suplantación únicamente desde esa identidad y tener los roles `Firebase Hosting Admin` y `API Keys Viewer` para el proyecto. La primera ejecución del flujo verifica que esa vinculación funcione.

## Licencia y recursos gráficos

El código y la documentación de este proyecto se comparten bajo la [licencia MIT](LICENSE). Podés usarlos, modificarlos y publicarlos conservando el aviso de licencia y autoría.

Los archivos de `public/` —incluidos logos, imágenes, íconos y documentos— **no están incluidos en la licencia MIT**. Se muestran como contenido de ejemplo de José C. Paz Sur. Antes de publicar una adaptación, reemplazalos por materiales que tu iglesia tenga permiso de usar y revisá también los enlaces y datos de contacto.

**Objetivo del proyecto:** facilitar que más iglesias tengan una presencia web clara y útil, partiendo de un ejemplo real que puedan adaptar a su comunidad.
