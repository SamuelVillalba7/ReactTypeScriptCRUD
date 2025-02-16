# React TypeScript CRUD con Spring Boot

Este es un proyecto de CRUD desarrollado en React con TypeScript, que se conecta a una base de datos gestionada con Spring Boot. Está diseñado para un eCommerce y permite la gestión de productos, clientes y pedidos.

## Tecnologías utilizadas

### Frontend:

- React
- TypeScript
- Vite
- React Router

### Backend:

- Spring Boot
- Spring Data JPA
- Base de datos relacional (SQL Server)

## Repositorios

- **Frontend:** [React TypeScript CRUD](https://github.com/SamuelVillalba7/ReactTypeScriptCRUD)
- **Backend:** [Ecommerce Spring Boot](https://github.com/SamuelVillalba7/Eccomerce-SpringBoot)

## Instalación y ejecución

### Backend (Spring Boot)

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/SamuelVillalba7/Eccomerce-SpringBoot.git
   ```
2. Configurar la base de datos en `application.properties` o `application.yml`.
3. Ejecutar el proyecto con:
   ```bash
   mvn spring-boot:run
   ```

### Frontend (React TypeScript)

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/SamuelVillalba7/ReactTypeScriptCRUD.git
   ```
2. Instalar dependencias:
   ```bash
   cd ReactTypeScriptCRUD
   npm install
   ```
3. Configurar la URL de la API en los servicios de Axios.
4. Iniciar la aplicación:
   ```bash
   npm run dev
   ```

## Características principales

- Listado de productos
- Creación, actualización y eliminación de productos
- Manejo de clientes y pedidos (según backend)
- Autenticación y autorización (si se implementa con Spring Security)

## Contribución

Si deseas contribuir, puedes hacer un fork del repositorio y crear un pull request con tus cambios.

## Autor

Desarrollado por [Samuel Villalba](https://github.com/SamuelVillalba7).


