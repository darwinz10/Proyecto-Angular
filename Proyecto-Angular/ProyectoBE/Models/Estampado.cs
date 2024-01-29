using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoBE.Models
{
    public class Estampado
    {
        public int EstampadoId { get; set; }
        public string Nombre { get; set; }
        public int Valor  { get; set; }
        public string Color { get; set; }

        public DateTime fechaCreacion { get; set; }
    }
}
