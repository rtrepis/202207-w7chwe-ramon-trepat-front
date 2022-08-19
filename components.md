# Components

- App

  - Recibe: nada
  - Estado: el array de señores
  - Muestra:
    - el título de la app
    - un componente Login
    - un componente Register
    - un componente listado de usuarios
    - un componente editar usuario
  - Acciones del usuario: nada

- Info

  - Recibe: número de usuarios
  - Estado: ninguno
  - Muestra: el número recibido
  - Acciones del usuario: ninguna

- Button

  - Recibe: Texto y acción al clicar
  - Estado: ninguno
  - Muestra: un botón con el texto recibido
  - Acciones del usuario: al clicar, invocar a la acción recibida

- UserList

  - Recibe:
    - un array con los usuarios
  - Estado: nada
  - Muestra:
    - la imagen del usuorio con su texto alternativo
    - el nombre del usuario en un heading
    - muestra un selector si es amigo o enimigo o ninguna de los dos
    - boton de actualizar estado de amigo y enemigos
  - Acciones del usuario:
    - al clicar icono actualizar amistad debe invocar a la acción recibida

- LoginUser:

  - Recibe:
  - Estado:
  - Muestra:
    - formulario campos login y password
    - botton para logear
  - Accion del usuario:
    - al clicar el botton debe logear al usuario debe incovar a la accion recibida

- RegisterUser:

  - Recibe:
  - Estado:
  - Muestra:
    - formulario campos login, password, imagen
    - botton para registrar
  - Accion del usuario:
    - al clicar el botton debe registrar al usuario debe incovar a la accion recibida

- EditUser:
  - Recibe:
  - Estado:
  - Muestra:
    - formulario campos login, password, imagen
    - botton para actualizar
  - Accion del usuario:
    - al clicar el botton debe actualizar al usuario debe incovar a la accion recibida

# Data layer

- Datos: BD en usuarios
- Modificaciones:
  - Mostrar todos los usuarios (GetAll API)
  - Mostrar usuarios amigos (populate amigo)
  - Mostrar usuarion enemigo (populate enimigos)
  - Cambiar estado enmigos/amigos (Patch API)
  - Registrar usuario (post API)
  - Logear usuarios (post API)
