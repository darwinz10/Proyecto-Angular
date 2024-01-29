using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProyectoBE.Models;
using ProyectoBE.Repositories;

namespace ApiProyectoBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        //obtener cliente
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                ClienteRepositorio clienteRepositorio = new ClienteRepositorio();
                var listCliente = await clienteRepositorio.consultarCliente();
                return Ok(listCliente);

            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
        //obtener cliente por id
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            try
            {
                ClienteRepositorio clienteRepositorio = new ClienteRepositorio();
                Cliente cli = clienteRepositorio.consultarClienteID(id);
                return Ok(cli);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post(Cliente cliente)
        {
            try
            {
                ClienteRepositorio clienteRepositorio = new ClienteRepositorio();
                clienteRepositorio.agregarCliente(cliente);
                return CreatedAtAction("Get", new { id = cliente.ClienteId }, cliente);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        //eliminar cliente
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                ClienteRepositorio clienteRepositorio = new ClienteRepositorio();
                clienteRepositorio.eliminarCliente(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //editar Cliente
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, Cliente cliente)
        {
            try
            {
                if (id != cliente.ClienteId)
                {
                    return BadRequest();
                }
                ClienteRepositorio clienteRepositorio = new ClienteRepositorio();
                clienteRepositorio.modificarCliente(cliente);
                return Ok(clienteRepositorio);
                //return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
