export default async function TabelaDados() {
  let username = 'Ronald The Trucker';
  let password = '123456';
  let auth = btoa(`${username}:${password}`);

  const response = await fetch("http://localhost:8080/WebSMApi/api/produto", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Basic ${auth}`
    },
  });
  const queijos = await response.json();

  return (
    <div>
      <h1>Lista dos Queijos</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Peso</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {queijos.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.preco}</td>
                <td>{item.peso}</td>
                <td>{item.tipo}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5">Total de Queijos: {queijos.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
