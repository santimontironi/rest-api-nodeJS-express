
# 📦 Products API

API REST simple para gestión de productos, construida con **Node.js** y **Express.js**. Permite operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una colección de productos en memoria.

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- Morgan (logger)
- JSON (para requests/responses)

---

## ▶️ Inicio del servidor

```bash
node index.js
```

Por defecto, se ejecuta en:

```
http://localhost:3000
```

---

## 📌 Endpoints disponibles

### 📄 Obtener todos los productos

- **Método:** `GET`
- **Ruta:** `/products`

#### ✅ Respuesta exitosa
```json
[
  {
    "id": 1,
    "name": "laptop",
    "price": 3000
  }
]
```

---

### 🔍 Obtener producto por ID

- **Método:** `GET`
- **Ruta:** `/products/:id`

#### 🔁 Parámetros de URL
- `id` (número): ID del producto a buscar.

#### ✅ Respuesta exitosa
```json
{
  "id": 1,
  "name": "laptop",
  "price": 3000
}
```

#### ❌ Respuesta si no se encuentra
```
Product not found.
```

---

### ➕ Crear nuevo producto

- **Método:** `POST`
- **Ruta:** `/products`
- **Encabezados:** `Content-Type: application/json`

#### 📦 Body (JSON)
```json
{
  "name": "monitor",
  "price": 500
}
```

#### ✅ Respuesta exitosa
```json
{
  "name": "monitor",
  "price": 500,
  "id": 2
}
```

---

### ✏️ Actualizar un producto

- **Método:** `PUT`
- **Ruta:** `/products/:id`
- **Encabezados:** `Content-Type: application/json`

#### 📦 Body (JSON)
```json
{
  "price": 3500
}
```

#### ✅ Respuesta exitosa
```json
{
  "message": "Product edited correctly",
  "productsNew": [
    {
      "id": 1,
      "name": "laptop",
      "price": 3500
    },
    ...
  ]
}
```

#### ❌ Respuesta si no se encuentra
```
Product not found
```

---

### ❌ Eliminar un producto

- **Método:** `DELETE`
- **Ruta:** `/products/:id`

#### ✅ Respuesta exitosa
```json
{
  "message": "Producto deleted correctly",
  "productsNew": [
    {
      "id": 1,
      "name": "laptop",
      "price": 3000
    }
  ]
}
```

#### ❌ Respuesta si no se encuentra
```
Product not found
```

---

## 📝 Notas

- Todos los productos se almacenan en memoria (array local), por lo que se reinician al reiniciar el servidor.
- `Morgan` está configurado en modo `dev` para loguear las peticiones en consola.
