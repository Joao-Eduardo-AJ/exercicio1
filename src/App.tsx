const data = [
  {
    client: 'Luana',
    age: 27,
    shopping: [
      { name: 'Notebook', price: 2500 },
      { name: 'Geladeira', price: 3000 },
      { name: 'Smartphone', price: 1500 },
    ],
    active: true,
  },
  {
    client: 'Mario',
    age: 31,
    shopping: [
      { name: 'Notebook', price: 2500 },
      { name: 'Geladeira', price: 3000 },
      { name: 'Smartphone', price: 1500 },
      { name: 'Guitarra', price: 3500 },
    ],
    active: false,
  },
];

interface TableHeaderPros {
  clientName: string;
  age: number;
}

const TableHeader = ({ ...props }: TableHeaderPros) => (
  <tr>
    <td align="center">
      <h3>
        <strong>cliente:</strong> {props.clientName}
      </h3>
    </td>
    <td align="center">
      <h3>
        <strong>Idade:</strong> {props.age}
      </h3>
    </td>
  </tr>
);

export default function App() {
  let totalPrice = 0;
  return (
    <>
      <h1>Tabela de compras por cliente</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {data.map((clientData, index) => (
          <>
            <table key={index} width={300} border={1}>
              <TableHeader
                clientName={clientData.client}
                age={clientData.age}
              />
              <tr>
                <td align="center">
                  <strong>Item</strong>
                </td>
                <td align="center">
                  <strong>Preço</strong>
                </td>
              </tr>
              {clientData.shopping.map((item, index) => {
                totalPrice += item.price;
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>R$ {item.price}</td>
                  </tr>
                );
              })}
              <tr>
                <td>
                  <strong>situação</strong>
                </td>
                <td>
                  <strong
                    style={
                      clientData.active ? { color: 'green' } : { color: 'red' }
                    }
                  >
                    {clientData.active ? 'ativo' : 'inativo'}
                  </strong>
                </td>
              </tr>
            </table>
            <p>{totalPrice > 10000 && 'A compra excedeu R$ 10.000,00'}</p>
          </>
        ))}
      </div>
    </>
  );
}
