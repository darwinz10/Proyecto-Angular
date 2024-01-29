using ProyectoBE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoBE.Repositories
{
    public class ClienteRepositorio
    {
        private readonly EstampadoContext _context = new EstampadoContext();

        public void agregarCliente(Cliente cliente)
        {
            _context.Clientes.Add(cliente);
            _context.SaveChanges();
        }
        public async Task<List<Cliente>> consultarCliente()
        {
            return _context.Clientes.ToList();
        }

        public Cliente consultarClienteID(int codigo)
        {
            return _context.Clientes.Find(codigo);
        }

        public void modificarCliente(Cliente clienteMod)
        {
            _context.Clientes.Update(clienteMod);
            _context.SaveChanges();
        }
        public void eliminarCliente(int id)
        {
            Cliente cliente = new Cliente();
            cliente = consultarClienteID(id);
            _context.Clientes.Remove(cliente);
            _context.SaveChanges();
        }
    }
}
