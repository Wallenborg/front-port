import "./Name.css";

function Name() {
  return (
    <div className="box-name">
      <div className="box-name--name">
        <h2 className="name primary">NIKLAS</h2>
        <h2 className="name accent">WALLENBORG</h2>
      </div>
      <div className="box-name--name">
        <h2 className="name primary">WALLENBORG</h2>
        <h2 className="name accent"> NIKLAS</h2>
      </div>
    </div>
  );
}

export default Name;
