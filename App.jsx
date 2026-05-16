export default function App() {
  return (
    <div style={{
      background:"#0f1115",
      color:"#fff",
      minHeight:"100vh",
      fontFamily:"Montserrat, sans-serif",
      padding:"20px"
    }}>
      <h1>Rodrigues Central Operacional</h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
        gap:"16px",
        marginTop:"20px"
      }}>

        <div style={card}>
          <h2>Pedidos</h2>
          <p>Pedidos em preparação e entrega.</p>
        </div>

        <div style={card}>
          <h2>Torre</h2>
          <p>Despacho operacional de corridas.</p>
        </div>

        <div style={card}>
          <h2>Entregadores</h2>
          <p>Status online e localização.</p>
        </div>

        <div style={card}>
          <h2>Financeiro</h2>
          <p>Repasses, taxas e Pix.</p>
        </div>

      </div>
    </div>
  );
}

const card = {
  background:"#1b1f27",
  borderRadius:"18px",
  padding:"20px",
  border:"1px solid #2a2f3a"
};
