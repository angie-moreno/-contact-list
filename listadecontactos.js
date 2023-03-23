let contactos = [
  {
    id: 1,
    nombre: "Angie Moreno Franco",
    edad: 30,
    telefono: 3152229500,
    email: "aymorenof783230@gmail.com",
    estudios: ["ingenieria agrícola", "idiomas", "desarrollo web"],
  },
  {
    id: 2,
    nombre: "Felipe Vasquez Ocampo",
    edad: 39,
    telefono: 3152226598,
    email: "felipevasquez@gmail.com",
    estudios: [
      "ingenieria de materiales",
      "ingles",
      "negocios internacionales",
    ],
  },
  {
    id: 3,
    nombre: "Yorman Moreno Franco",
    edad: 25,
    telefono: 3165682466,
    email: "yormanm@gmail.com",
    estudios: ["ingenieria en logistica", "ingles"],
  },
];
function nuevoContacto(nuevo) {
  let agregar = contactos.push({ nuevo });
  console.log(contactos);
}
nuevoContacto({
  id: 4,
  nombre: "Carlos",
  edad: 22,
  telefono: 315624987,
  email: "carlos@gmail.com",
  estudios: "ninguno",
});

function eliminarContacto(id) {
  contactos = contactos.filter((contacto) => contacto.id !== id);
  console.log(contactos);
}
eliminarContacto(1);

function contactosPresentes() {
  for (let contacto of contactos) {
    console.log(contacto);
  }
}
contactosPresentes();
