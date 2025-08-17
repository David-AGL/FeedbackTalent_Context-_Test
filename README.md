# 🚀 Prueba de Concepto - Stack Tecnológico

## 📋 Descripción

Prueba de concepto simple que demuestra la integración de:
- **Backend**: Node.js + Express
- **Frontend**: React
- **Base de Datos**: MongoDB Atlas (cloud)

## 🎯 Objetivo

Estabilizar el ambiente de desarrollo y lograr el "Hello World" de todas las tecnologías.

## 🗄️ **Configuración de MongoDB Atlas**

### **1. Crear cuenta en MongoDB Atlas**
- Ve a [MongoDB Atlas](https://cloud.mongodb.com)
- Crea cuenta gratuita
- Crea cluster gratuito (M0)

### **2. Configurar acceso**
- **Database Access**: Crea usuario y contraseña
- **Network Access**: Agrega `0.0.0.0/0` (acceso global)

### **3. Obtener string de conexión**
- Haz clic en "Connect" en tu cluster
- Selecciona "Connect your application"
- Copia el string de conexión

### **4. Actualizar configuración**
- Abre `config.js`
- Reemplaza la URI con tu string real
- Ver instrucciones detalladas en `ATLAS-SETUP.md`

## 🚀 Ejecución Rápida

### 1. Instalar dependencias
```bash
npm install
cd frontend && npm install && cd ..
```

### 2. Configurar MongoDB Atlas
- Sigue las instrucciones en `ATLAS-SETUP.md`
- Actualiza `config.js` con tu string de conexión

### 3. Ejecutar proyecto
```bash
npm run dev-full
```

## 🌐 URLs
- **Backend**: http://localhost:5000
- **Frontend**: http://localhost:3000

## 📝 Funcionalidades
- ✅ Conexión a MongoDB Atlas
- ✅ API REST básica
- ✅ Formulario de feedback
- ✅ Lista de feedbacks
- ✅ Integración frontend-backend

## 🔧 Scripts
- `npm run dev` - Solo backend
- `npm run frontend` - Solo frontend  
- `npm run dev-full` - Ambos servicios

## 📚 Documentación
- `ATLAS-SETUP.md` - Configuración detallada de MongoDB Atlas
- `SUSTENTACION.md` - Resumen para sustentación

---

**¡Listo para la sustentación!** 🎉
