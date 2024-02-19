Este proyecto de Angular, llamado "Blog", se centra en la creación de un sistema de gestión de contenido (CMS) básico para publicaciones (posts). El proyecto incluye operaciones CRUD (Crear, Leer, Actualizar, Borrar) para gestionar estas publicaciones.
Añadir Bootstrap v5
Para agregar Bootstrap v5 a este proyecto, se utiliza su CDN global. Esto garantiza que Bootstrap esté disponible en todo el proyecto sin necesidad de instalarlo localmente.

Estructura de carpetas y archivos
El proyecto sigue una estructura de carpetas organizada. Aquí hay una vista general de la estructura de archivos:

post/: Carpeta que contiene todos los componentes relacionados con las operaciones CRUD de las publicaciones.
listado-post/: Componente para mostrar un listado de todas las publicaciones.
vista-individual/: Componente para mostrar una publicación específica.
creacion/: Componente para crear una nueva publicación.
actualizacion/: Componente para actualizar una publicación existente.
post.ts: Interfaz que define la estructura de datos para las publicaciones.
post.service.ts: Servicio para realizar operaciones CRUD en las publicaciones, utilizando la API de https://jsonplaceholder.typicode.com como proveedor de datos.
Configuración de rutas
Las rutas del proyecto se configuran en el archivo app.routes.ts. Aquí se definen las rutas para cada componente relacionado con las operaciones CRUD de las publicaciones.

Uso del formulario reactivo
Para la creación y actualización de publicaciones, se utiliza un formulario reactivo para recopilar y validar los datos. Se emplean las clases ReactiveFormsModule, FormGroup, FormControl y Validators de Angular.

Desarrollo de componentes
Los componentes relacionados con las operaciones CRUD de las publicaciones (listado-post, vista-individual, creacion y actualizacion) están diseñados para ser funcionales e intuitivos. Cada componente tiene su lógica correspondiente para interactuar con el servicio post.service.ts y mostrar la información adecuada en la interfaz de usuario.

Contribuir
Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

Realiza un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y commitéalos (git commit -am 'Añadir nueva funcionalidad').
Sube tus cambios al repositorio (git push origin feature/nueva-funcionalidad).
Realiza un pull request.
