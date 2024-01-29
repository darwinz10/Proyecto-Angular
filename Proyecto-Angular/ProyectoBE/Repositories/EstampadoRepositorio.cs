using ProyectoBE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoBE.Repositories
{
    public class EstampadoRepositorio
    {
        private readonly EstampadoContext _context = new EstampadoContext();

        public void agregarEstampado(Estampado estampado)
        {
            _context.Estampados.Add(estampado);
            _context.SaveChanges();
        }
        public async Task<List<Estampado>> consultarEstampado()
        {
            return _context.Estampados.ToList();
        }

        public Estampado consultarEstampadoID(int codigo)
        {
            return _context.Estampados.Find(codigo);
        }

        public void modificarEstampado(Estampado estampadoMod)
        {
            _context.Estampados.Update(estampadoMod);
            _context.SaveChanges();
        }
        public void eliminarEstampado(int id)
        {
            Estampado estampado = new Estampado();
            estampado = consultarEstampadoID(id);
            _context.Estampados.Remove(estampado);
            _context.SaveChanges();
        }
    }
}
