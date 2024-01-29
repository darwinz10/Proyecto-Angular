using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProyectoBE.Models;
using ProyectoBE.Repositories;

namespace ApiProyectoBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstampadoController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                EstampadoRepositorio estampadoRepositorio = new EstampadoRepositorio();
                var listEstampado = await estampadoRepositorio.consultarEstampado();
                return Ok(listEstampado);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //obtener estampado por id
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            try
            {
                EstampadoRepositorio estampadoRepositorio = new EstampadoRepositorio();
                Estampado estampado = estampadoRepositorio.consultarEstampadoID(id);
                return Ok(estampado);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //publicar estampado
        [HttpPost]
        public async Task<ActionResult> Post(Estampado estampado)
        {
            try
            {
                EstampadoRepositorio estampadoRepositorio = new EstampadoRepositorio();
                estampadoRepositorio.agregarEstampado(estampado);
                return CreatedAtAction("Get", new { id = estampado.EstampadoId }, estampado);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //eliminar estampado
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                EstampadoRepositorio estampadoRepositorio = new EstampadoRepositorio();
                estampadoRepositorio.eliminarEstampado(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //editar estampado
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, Estampado estampado)
        {
            try
            {
                if (id != estampado.EstampadoId)
                {
                    return BadRequest();
                }
                EstampadoRepositorio estampadoRepositorio = new EstampadoRepositorio();
                estampadoRepositorio.modificarEstampado(estampado);
                return Ok(estampadoRepositorio);
                //return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
