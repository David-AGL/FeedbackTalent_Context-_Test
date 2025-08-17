@echo off
echo ========================================
echo    🗄️ INICIANDO MONGODB
echo ========================================
echo.

echo 📍 Buscando MongoDB en ubicaciones comunes...

REM Buscar MongoDB en Program Files
if exist "C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" (
    echo ✅ MongoDB encontrado en Program Files
    echo 🚀 Iniciando MongoDB...
    "C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath="C:\data\db"
    goto :found
)

REM Buscar MongoDB en Program Files (x86)
if exist "C:\Program Files (x86)\MongoDB\Server\7.0\bin\mongod.exe" (
    echo ✅ MongoDB encontrado en Program Files (x86)
    echo 🚀 Iniciando MongoDB...
    "C:\Program Files (x86)\MongoDB\Server\7.0\bin\mongod.exe" --dbpath="C:\data\db"
    goto :found
)

REM Buscar MongoDB en ubicación por defecto
if exist "C:\mongodb\bin\mongod.exe" (
    echo ✅ MongoDB encontrado en C:\mongodb\bin
    echo 🚀 Iniciando MongoDB...
    "C:\mongodb\bin\mongod.exe" --dbpath="C:\data\db"
    goto :found
)

echo ❌ MongoDB no encontrado en ubicaciones comunes
echo.
echo 💡 Opciones:
echo 1. Instalar MongoDB Community Server
echo 2. Usar MongoDB Atlas (cloud gratuito)
echo 3. Verificar la ruta de instalación
echo.
echo 🔗 Descarga: https://www.mongodb.com/try/download/community
pause
exit

:found
echo.
echo ✅ MongoDB iniciado correctamente
echo 📊 Puerto: 27017
echo 🌐 Compass puede conectarse a: mongodb://localhost:27017
echo.
echo 💡 Presiona Ctrl+C para detener MongoDB
pause
