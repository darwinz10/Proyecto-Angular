using ProyectoBE.Models;
using ProyectoBE.Repositories;

EstampadoContext context = new EstampadoContext();

Cliente cliente = new Cliente();
Compra compra = new Compra();
Estampado estampado = new Estampado();

ClienteRepositorio clienteRepositorio = new ClienteRepositorio();
CompraRepositorio compraRepositorio = new CompraRepositorio();
EstampadoRepositorio estampadoRepositorio = new EstampadoRepositorio();

/*cliente.Cedula = "1114777999";
cliente.Nombre = "Johanna";
cliente.Apellido = "Gamboa";
cliente.Ciudad = "GYE";
cliente.fechaCreacion = DateTime.Now;
clienteRepositorio.agregarCliente(cliente);

compra.Usuario = "johgam78";
compra.Direccion = "Samanes";
compra.Cantidad = 4;
compra.Estado = "En transito";
compra.fechaCreacion = DateTime.Now;
compraRepositorio.agregarCompra(compra);

estampado.Nombre = "Blusa";
estampado.Color = "Azul";
estampado.Valor = 10.55;
estampado.fechaCreacion = DateTime.Now;
estampadoRepositorio.agregarEstampado(estampado);*/