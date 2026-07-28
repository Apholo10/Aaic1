# 🚀 GUÍA DE DEPLOY A PRODUCCIÓN

## Estado Pre-Deploy

✅ Todos los problemas críticos han sido corregidos  
✅ Código compilable sin errores  
✅ Variables de entorno configuradas  
✅ Meta tags SEO agregados  
✅ Documentación completada  

---

## Paso 1: Preparar el Proyecto Localmente

### Verificar que todo funciona

```bash
# Instalar dependencias
npm install

# Ejecutar linter
npm run lint

# Compilar para producción
npm run build

# Revisar tamaño del build
du -sh dist/

# Preview local
npm run preview
```

**✅ Checklist:**
- [ ] `npm run build` no tiene errores
- [ ] `npm run preview` carga sin problemas
- [ ] No hay warnings en la consola
- [ ] Todos los componentes se cargan
- [ ] Sistema de idiomas funciona
- [ ] Google Reviews API conecta (si hay credenciales)

---

## Paso 2: Configurar Vercel

### Opción A: Desde CLI (Recomendado)

```bash
# Instalar Vercel CLI (si no lo tienes)
npm install -g vercel

# Conectar con tu cuenta de Vercel
vercel login

# Deploy inicial
vercel

# Deploy a producción
vercel --prod
```

### Opción B: Desde Dashboard de Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Click en "Add New" → "Project"
3. Importa tu repositorio de GitHub
4. Click en "Deploy"

---

## Paso 3: Configurar Variables de Entorno en Vercel

1. Ve a tu proyecto en Vercel
2. Click en "Settings" en el tab superior
3. Ve a "Environment Variables"
4. Agrega las siguientes variables:

```
Nombre: GOOGLE_API_KEY
Valor: [Tu API Key de Google]
Ambientes: Production, Preview, Development

Nombre: GOOGLE_PLACE_ID
Valor: [Tu Place ID de Google]
Ambientes: Production, Preview, Development
```

**⚠️ IMPORTANTE:** 
- NO incluyas comillas ni espacios extras
- Las credenciales estarán cifradas por Vercel
- Solo el backend (`api/reviews.js`) puede acceder a ellas

---

## Paso 4: Verificar Deploy

Después de que Vercel termine de compilar:

1. Haz click en el botón "Visit" para ir al sitio
2. Verifica que cargue correctamente
3. Prueba las siguientes funciones:

### Funcionalidades a verificar

- [ ] **Home carga** - No hay errores 404
- [ ] **Idiomas funcionan** - Puedes cambiar entre EN y ES
- [ ] **Google Reviews cargan** - Las reseñas aparecen en la sección de testimonios
- [ ] **Responsive** - Probado en móvil y desktop
- [ ] **Enlace canonical** - Meta tags correctos (F12 → Head)
- [ ] **HTTPS activo** - URL comienza con `https://`
- [ ] **Favicon aparece** - Logo visible en la tab del navegador

### Probar en Navegadores

```
✅ Chrome (Latest)
✅ Firefox (Latest)  
✅ Safari (Latest)
✅ Edge (Latest)
```

---

## Paso 5: Conectar Dominio Custom

### Si tienes dominio en Vercel

1. Settings → Domains
2. Click en "Add"
3. Ingresa tu dominio
4. Sigue las instrucciones

### Si tienes dominio en otro proveedor

**Opción 1: Nameservers de Vercel**
1. Settings → Domains → Add
2. Vercel te dará los nameservers
3. En tu proveedor (GoDaddy, NameCheap, etc.), actualiza nameservers
4. Espera 24-48 horas por propagación DNS

**Opción 2: CNAME Records**
1. Settings → Domains → Add
2. Selecciona "External Domain"
3. Tu proveedor de dominio te dirá cómo agregar el CNAME

---

## Paso 6: Configuración Post-Deploy

### Habilitar Gzip Compression (Automático en Vercel)

Vercel ya comprime automáticamente los assets. ✅

### Configurar Headers de Seguridad

En `vercel.json` (crear si no existe):

```json
{
  "headers": [
    {
      "source": "/:path*",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Configurar Redirects (si necesitas)

En `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/old-url",
      "destination": "/new-url",
      "permanent": true
    }
  ]
}
```

---

## Paso 7: Monitoreo y Mantenimiento

### Ver Logs de Deploy

```bash
vercel logs
```

### Ver Performance

1. Settings → Analytics (en Vercel Dashboard)
2. Revisa Core Web Vitals
3. Verifica que load time sea < 3s

### Actualizar Sitio

```bash
git push origin main
# Vercel se redeploya automáticamente
```

### Ver Historico de Deploys

1. Click en "Deployments" en Vercel Dashboard
2. Puedes rollback a versiones anteriores

---

## Troubleshooting

### Las reseñas de Google no aparecen

```bash
# Verificar logs en Vercel
vercel logs

# Causas posibles:
# 1. GOOGLE_API_KEY no está configurada
# 2. GOOGLE_PLACE_ID es inválido
# 3. API Key no tiene permisos de "Google Places API"
```

**Solución:**
1. Ve a [Google Cloud Console](https://console.cloud.google.com)
2. Verifica que tu API Key tenga permisos de "Places API"
3. Actualiza variables en Vercel
4. Redeploy: `vercel --prod`

### Sitio muy lento

```bash
# Ver tamaño del build
npm run build
du -sh dist/

# Optimizar:
# - Comprimir imágenes
# - Eliminar dependencias innecesarias
# - Usar lazy loading
```

### HTTPS no funciona

Vercel automáticamente genera certificado SSL. Si persiste:
1. Settings → Domains → Verificar certificado
2. Esperar 5-10 minutos
3. Hacer refresh

### Después de deploy, cambios no aparecen

```bash
# Hacer hard refresh en navegador
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)

# O limpiar caché de Vercel
vercel --prod --force
```

---

## Checklist Final

Antes de considerar el deploy completamente exitoso:

- [ ] Sitio carga sin errores en producción
- [ ] HTTPS está activo
- [ ] Meta tags son correctos (inspecionar HTML)
- [ ] Google Reviews API funciona
- [ ] Sistema de idiomas funciona
- [ ] Responsive en móvil y desktop
- [ ] No hay console errors
- [ ] Dominio custom está configurado
- [ ] Email de contacto recibe mensajes
- [ ] Analytics está configurado (optional)

---

## Contacto de Soporte

Si algo sale mal:

1. **Vercel Help:** https://vercel.com/support
2. **Google Cloud:** https://cloud.google.com/support
3. **Documentación del Proyecto:** Ver [README.md](README.md)
4. **Audit Report:** Ver [AUDIT_REPORT.md](AUDIT_REPORT.md)

---

**Fecha de Creación:** 2026-07-24  
**Versión:** 1.0.0  
**Estado:** 🚀 Listo para Producción
