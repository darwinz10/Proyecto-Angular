using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProyectoBE.Models;
using ProyectoBE.Repositories;

namespace ApiProyectoBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompraController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                CompraRepositorio compraRepositorio = new CompraRepositorio();
                var listCompra = await compraRepositorio.consultarCompra();
                return Ok(listCompra);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //obtener compra por id
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            try
            {
                CompraRepositorio compraRepositorio = new CompraRepositorio();
                Compra compra = compraRepositorio.consultarCompraID(id);
                return Ok(compra);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //publicar Compra
        [HttpPost]
        public async Task<ActionResult> Post(Compra compra)
        {
            try
            {
                CompraRepositorio compraRepositorio = new CompraRepositorio();
                compraRepositorio.agregarCompra(compra);
                return CreatedAtAction("Get", new { id = compra.CompraId }, compra);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //eliminar compra
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                CompraRepositorio compraRepositorio = new CompraRepositorio();
                compraRepositorio.eliminarCompra(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //editar compra
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, Compra compra)
        {
            try
            {
                if (id != compra.CompraId)
                {
                    return BadRequest();
                }
                CompraRepositorio compraRepositorio = new CompraRepositorio();
                compraRepositorio.modificarCompra(compra);
                return Ok(compraRepositorio);
                //return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
