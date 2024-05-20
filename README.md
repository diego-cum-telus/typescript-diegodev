# typescript-diegodev
# Proyecto de Ejemplos TypeScript

Este repositorio contiene varios ejemplos de archivos TypeScript (`.ts`) que se compilan a JavaScript (`.js`). A continuación, se describen los archivos incluidos:

## Archivos

### 1. `index.ts`
Este archivo contiene un simple "Hello World" escrito en TypeScript. Es el punto de partida básico para cualquier proyecto en TypeScript.

### 2. `async-eg.ts`
Este archivo contiene una función asíncrona que sirve como ejemplo para mostrar cómo TypeScript compila a diferentes versiones de ECMAScript. Es útil para entender el funcionamiento de `async` y `await` en TypeScript y cómo se traduce a JavaScript.

### 3. `url-eg.ts`
Este archivo define una clase `URL` que sirve como ejemplo para demostrar cómo funciona la configuración de la opción `lib` en el archivo `tsconfig.json`. La clase muestra cómo se pueden utilizar bibliotecas estándar de JavaScript en TypeScript.

### 4. `lodash-eg.ts`
Este archivo contiene un ejemplo de uso de la biblioteca Lodash en TypeScript. Y como tiparlos

### 5. `tsconfig.json`
Este archivo contiene las opciones del compilador TypeScript. Algunas de las configuraciones clave incluyen:
- `target`: Define la versión de ECMAScript a la que se compilará el código.
- `lib`: Especifica las bibliotecas y sus tipos que se incluirán durante la compilación.
- `watch`: Flag para que el compilador entre en modo de observación, lo que significa que se mantiene en ejecución y recompila los archivos automáticamente 

### 6. Otros archivos
- `index.js`: Versión compilada de `index.ts`.
- `init-script.sh`: Un script de inicialización.
- `README.md`: Este archivo, que describe el proyecto y su estructura.

## Instrucciones

Para compilar los archivos TypeScript a JavaScript, asegúrate de tener TypeScript instalado:

```sh
npm install -g typescript
