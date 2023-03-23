let contactos = [
  {
    id: 1,
    nombres: "Angie Yordana",
    apellidos: "Moreno Franco",
    edad: 30,
    telefono: 3152229500,
    email: "aymorenof783230@gmail.com",
    ubicacion: {
      ciudad: "Medellin",
      dirección: "Cra 58#56-15",
    },
  },
  {
    id: 2,
    nombres: "Juan Felipe",
    apellidos: "vasquez Ocampo",
    edad: 39,
    telefono: 3152226598,
    email: "felipevasquez@gmail.com",
    ubicacion: {
      ciudad: "Medellin",
      direccion: "clle 57#55-06",
    },
  },
  {
    id: 3,
    nombres: "Yorman",
    apellidos: "Moreno Franco",
    edad: 25,
    telefono: 3165682466,
    email: "yormanm@gmail.com",
    ubicacion: {
      ciudad: "Medellin",
      direccion: "clle 5f#18-06",
    },
  },
];
function nuevoContacto(
  id,
  nombres,
  apellidos,
  edad,
  telefono,
  email,
  ciudad,
  direccion
) {
  let persona = {
    id,
    nombres,
    apellidos,
    edad,
    telefono,
    email,
    ubicacion: {
      ciudad,
      direccion,
    },
  };
  contactos.push(persona);
}
nuevoContacto(
  4,
  "Yan Carlos",
  "Moreno Muñeton",
  22,
  3125689478,
  "yan@gmail.com",
  "Cali",
  "clle 5f"
);
console.log(contactos);

function eliminarContacto(id) {
  for (let i = 0; i < contactos.length; i++) {
    if (contactos[i].id === id) {
      contactos.splice(i, 1);
    }
  }
}
eliminarContacto(1);
console.log(contactos);
