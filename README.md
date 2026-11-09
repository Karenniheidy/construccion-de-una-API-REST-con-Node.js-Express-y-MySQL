# API REST con Node.js, Express y MySQL - Comercializadora de tecnología

Aplicación backend desarrollada como parte de la formación en **Análisis y Desarrollo de Software (ADSO)** del SENA. Consiste en una API REST construida con **Node.js** y **Express**, aplicando programación orientada a objetos (POO) mediante clases para los controladores, separación de rutas con Express Router y una conexión centralizada a una base de datos relacional **MySQL** para la administración eficiente de usuarios y productos.

## Características principales

* **Arquitectura modular:** Separación estricta de responsabilidades en carpetas dedicadas (`controllers`, `routes`, `conexion`).
* **Programación orientada a Objetos (POO):** Clases estructuradas para el manejo de controladores de prueba, usuarios y inventario.
* **Seguridad en base de datos:** Uso de consultas SQL parametrizadas con marcadores de posición (`?`) para prevenir inyecciones SQL (*SQL Injection*).
* **Operaciones CRUD completas:** Endpoints robustos para registro, consulta general, búsqueda por ID, actualización y eliminación.
* **Filtros especializados:** Consultas optimizadas para la gestión de productos agotados y con bajo stock.
* **Mapeo JSON y CORS:** Middleware integrado para procesar cuerpos JSON y permitir peticiones desde múltiples orígenes.

## Tecnologías y dependencias

* **Node.js** - Entorno de ejecución para JavaScript en el servidor.
* **Express** - Framework web minimalista para la gestión de rutas y servidor HTTP.
* **MySQL2** - Conector optimizado para la interacción con bases de datos relacionales.
* **CORS** - Middleware para habilitar recursos de origen cruzado.
* **Nodemon** - Utilidad de desarrollo para la recarga automática del servidor.
* **Postman** - Herramienta para la prueba y validación de endpoints HTTP.

---

## Clonación y configuración del proyecto

Si deseas clonar y ejecutar este proyecto en tu entorno local de manera libre y abierta, sigue las instrucciones a continuación:

### 1. Clonar el repositorio
Abre tu terminal (Git Bash o consola de comandos) y ejecuta el siguiente comando:

\`\`\`bash
git clone https://github.com/Karenniheidy/construccion-de-una-API-REST-con-Node.js-Express-y-MySQL.git
\`\`\`

### 2. Ingresar al directorio del proyecto
\`\`\`bash
cd construccion-de-una-API-REST-con-Node.js-Express-y-MySQL
\`\`\`

### 3. Instalar las dependencias
\`\`\`bash
npm install
\`\`\`

### 4. Configurar la base de datos
1. Ejecuta tu gestor de base de datos MySQL (como MySQL Workbench).
2. Crea la base de datos y las tablas ejecutando el script SQL provisto en el taller (`comercializadora_tecnologia_backend`).
3. Verifica las credenciales de conexión en el archivo `conexion/bd.js` (host, usuario, contraseña y puerto).

### 5. Ejecutar el servidor en entorno de desarrollo
\`\`\`bash
npm run dev
\`\`\`

El servidor se iniciará automáticamente en el puerto `3000` mediante Nodemon.