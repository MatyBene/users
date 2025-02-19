# Sistema de Gestión de Usuarios

Este proyecto es una aplicación web completa para la gestión de usuarios, construida con Angular (frontend) y Spring Boot (backend).

## Características

- Listado de usuarios con paginación
- Creación de nuevos usuarios
- Edición de usuarios existentes
- Eliminación de usuarios
- Validación de formularios
- Diseño responsive con Bootstrap

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

### Frontend (users-app)

- Desarrollado con Angular 19
- Utiliza Bootstrap para el diseño
- Incluye componentes para:
  - Listado de usuarios
  - Formulario de usuario
  - Barra de navegación
  - Gestión de estado con servicios

### Backend (users-backend)

- Desarrollado con Spring Boot 3.4
- Base de datos MySQL
- API RESTful con endpoints para:
  - CRUD completo de usuarios
  - Paginación de resultados
  - Validación de datos

## Requisitos Previos

- Node.js y npm
- Java 23
- MySQL
- Angular CLI

## Configuración

### Base de Datos

1. Crear una base de datos MySQL llamada `db_backend_users`
2. Configurar las credenciales en `users-backend/src/main/resources/application.properties`

### Backend

1. Navegar al directorio `users-backend`
2. Ejecutar:
```bash
./mvnw spring-boot:run
```

### Frontend

1. Navegar al directorio `users-app`
2. Instalar dependencias:
```bash
npm install
```
3. Iniciar el servidor de desarrollo:
```bash
ng serve
```

## Uso

Acceder a `http://localhost:4200` para usar la aplicación

La aplicación permite:
- Ver la lista de usuarios
- Crear nuevos usuarios
- Editar usuarios existentes
- Eliminar usuarios
- Navegar entre páginas de usuarios

## Validaciones

El sistema incluye validaciones tanto en el frontend como en el backend:

- Nombre y apellido requeridos
- Email válido y requerido
- Nombre de usuario entre 4 y 12 caracteres
- Contraseña requerida

## Tecnologías Utilizadas

- Angular 19
- Spring Boot 3.4
- MySQL
- Bootstrap
- TypeScript
- Java 23
- Maven
- JPA/Hibernate

## Estructura de Archivos

```
proyecto/
├── users-app/         # Frontend Angular
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── models/
│   │   │   └── services/
│   └── ...
└── users-backend/     # Backend Spring Boot
    ├── src/
    │   └── main/
    │       ├── java/
    │       └── resources/
    └── ...
```
