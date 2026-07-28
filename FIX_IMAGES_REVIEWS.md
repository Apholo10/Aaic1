# 🔧 Solución: Imagen Quees y Google Reviews No Aparecen

## ✅ Problema 1: Imagen de Quees - RESUELTO

**Causa:** La ruta era `/src/assets/quees.webp` en lugar de `/assets/quees.webp`

**Solución:** 
✅ Ya fue corregida en `src/components/Quees.jsx`

**Próximo paso:** 
Hacer push de los cambios y redeploy automático en Vercel

```bash
git add .
git commit -m "Fix: corregir ruta de imagen en Quees"
git push
```

---

## 🔑 Problema 2: Google Reviews No Cargan

**Causa:** Las variables de entorno `GOOGLE_API_KEY` y `GOOGLE_PLACE_ID` **NO están configuradas en Vercel**

El endpoint `api/reviews.js` necesita esas credenciales para conectar con Google Places API.

### ✅ Solución: Configurar Variables en Vercel Dashboard

#### Paso 1: Ir a Vercel Dashboard
1. Abre https://vercel.com
2. Inicia sesión con tu cuenta
3. Selecciona tu proyecto `AutoInjure` (o `aaic1-i313`)

#### Paso 2: Ir a Settings
Click en la pestaña **"Settings"** en la parte superior del proyecto

#### Paso 3: Abrir Environment Variables
En el menú izquierdo, busca **"Environment Variables"** y haz click

#### Paso 4: Agregar Variables

**Primera Variable:**
- **Name:** `GOOGLE_API_KEY`
- **Value:** `AIzaSyDrXhRquuyARqjTfIGIry-OYjFF6W0sM4Q`
- **Environments:** Selecciona todos (Production, Preview, Development)
- Click en **"Save"**

**Segunda Variable:**
- **Name:** `GOOGLE_PLACE_ID`
- **Value:** `ChIJp8uJAYxtyYcRClxXQmQ7vOM`
- **Environments:** Selecciona todos (Production, Preview, Development)
- Click en **"Save"**

#### Paso 5: Redeploy

Una vez hayas guardado las variables:

**Opción A: Automático**
- Click en **"Deployments"**
- Busca tu último deploy
- Click en los 3 puntos (`...`)
- Click en **"Redeploy"**

**Opción B: Desde terminal**
```bash
vercel redeploy --prod
```

#### Paso 6: Verificar

1. Espera a que Vercel termine de desplegar (2-3 minutos)
2. Abre tu sitio en el navegador
3. Ve a la sección de **Testimonials**
4. Las reseñas de Google deberían aparecer

Si aún no aparecen:
- Abre **DevTools** (F12)
- Ve a la pestaña **"Console"**
- Busca si hay errores rojos
- Screenshot y avísame

---

## 📋 Resumen

```
✅ Imagen Quees: CORREGIDA (ruta de /src/assets → /assets)
⏳ Google Reviews: PENDIENTE (agregar variables en Vercel)
```

**Tiempo estimado:** 5 minutos

---

## ⚠️ Si Algo Sale Mal

### Las variables no aparecen después de guardar
- Refrescar la página (F5)
- Esperar 2-3 minutos

### Reviews aún no carga después de redeploy
1. Abrir Console (F12)
2. Revisar si hay errores
3. Confirmar variables en Vercel Settings

### Error: "Configuración faltante en el servidor"
Significa las variables de entorno NO llegaron a Vercel
- Verificar que están guardadas en Settings
- Revisar que seleccionaste "Production" en Environments
- Hacer redeploy nuevamente

---

**Próximos pasos:**
1. ✅ Hacer `git push` (cambio de imagen)
2. ✅ Agregar variables en Vercel Dashboard
3. ✅ Hacer redeploy
4. ✅ Verificar que todo funciona

¿Ya completaste los pasos? Avísame cuando termines y verifico que todo esté funcionando.
