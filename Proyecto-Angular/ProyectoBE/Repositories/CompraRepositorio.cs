using ProyectoBE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoBE.Repositories
{
    public class CompraRepositorio
    {
        private readonly EstampadoContext _context = new EstampadoContext();

        public void agregarCompra(Compra compra)
        {
            _context.Compras.Add(compra);
            _context.SaveChanges();
        }
        public async Task<List<Compra>> consultarCompra()
        {
            return _context.Compras.ToList();
        }

        public Compra consultarCompraID(int codigo)
        {
            return _context.Compras.Find(codigo);
        }

        public void modificarCompra(Compra compraMod)
        {
            _context.Compras.Update(compraMod);
            _context.SaveChanges();
        }
        public void eliminarCompra(int id)
        {
            Compra compra = new Compra();
            compra = consultarCompraID(id);
            _context.Compras.Remove(compra);
            _context.SaveChanges();
        }
    }
}
