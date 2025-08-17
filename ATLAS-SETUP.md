# 🗄️ Configuración MongoDB Atlas - Paso a Paso

## 📋 **Paso 1: Acceder a tu cuenta de Atlas**

1. Ve a [MongoDB Atlas](https://cloud.mongodb.com)
2. Inicia sesión con tu cuenta

## 🏗️ **Paso 2: Crear/Verificar Cluster**

1. En el dashboard, verifica que tengas un cluster activo
2. Si no tienes uno, haz clic en "Build a Database"
3. Selecciona plan "FREE" (M0)
4. Elige región cercana (ej: US East)
5. Haz clic en "Create"

## 👤 **Paso 3: Configurar Usuario de Base de Datos**

1. En el menú izquierdo, haz clic en "Database Access"
2. Haz clic en "Add New Database User"
3. **Authentication Method**: Username and Password
4. **Username**: Crea un usuario (ej: `davidg`)
5. **Password**: Crea una contraseña segura
6. **Database User Privileges**: Atlas admin
7. Haz clic en "Add User"

## 🌐 **Paso 4: Configurar Acceso de Red**

1. En el menú izquierdo, haz clic en "Network Access"
2. Haz clic en "Add IP Address"
3. **IP Address**: `0.0.0.0/0` (acceso global)
4. **Comment**: "Desarrollo local"
5. Haz clic en "Confirm"

## 🔗 **Paso 5: Obtener String de Conexión**

1. En el dashboard, haz clic en "Connect" en tu cluster
2. Selecciona "Connect your application"
3. **Driver**: Node.js
4. **Version**: 5.0 or later
5. **Copy** el string de conexión

## ⚙️ **Paso 6: Actualizar Configuración**

1. Abre el archivo `config.js`
2. Reemplaza la línea de `uri` con tu string real
3. **IMPORTANTE**: Cambia `feedbackDB` por el nombre de tu base de datos

## 📝 **Ejemplo de String de Conexión**

```javascript
// ANTES (reemplazar esto):
uri: 'mongodb+srv://USUARIO:CONTRASEÑA@CLUSTER.mongodb.net/feedbackDB?retryWrites=true&w=majority'

// DESPUÉS (con tus datos reales):
uri: 'mongodb+srv://davidg:miContraseña123@cluster0.abc123.mongodb.net/feedbackDB?retryWrites=true&w=majority'
```

## 🧪 **Paso 7: Probar Conexión**

1. Ejecuta: `npm run dev`
2. Verifica en la consola que aparezca:
   ```
   ✅ Conectado a MongoDB
   📊 Base de datos: mongodb+srv://...
   ```

## 🔍 **Paso 8: Verificar en Atlas**

1. Ve a tu cluster en Atlas
2. Haz clic en "Browse Collections"
3. Deberías ver la base de datos `feedbackDB`
4. Y la colección `feedbacks` cuando envíes datos

---

## 🚨 **Problemas Comunes**

### **Error: "Authentication failed"**
- Verifica usuario y contraseña en "Database Access"

### **Error: "Connection timeout"**
- Verifica que agregaste `0.0.0.0/0` en "Network Access"

### **Error: "Database not found"**
- El nombre de la base de datos se crea automáticamente

---

**¿Necesitas ayuda con algún paso específico?** 🤔
