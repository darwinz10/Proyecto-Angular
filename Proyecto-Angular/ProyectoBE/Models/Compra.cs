using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoBE.Models
{
    public class Compra
    {
        public int CompraId { get; set; }
        public string Usuario { get; set; }
        public int Cantidad { get; set; }
        public string Estado { get; set; }
        public string Direccion { get; set; }

        public DateTime fechaCreacion { get; set; }
    }
}
