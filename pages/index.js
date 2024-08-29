function Home() {
  const img1 = <img src="/img-1.jpg" height="400px"></img>;
  const img2 = <img src="/img-2.jpg" height="400px"></img>;
  const img3 = <img src="/img-3.jpg" height="400px"></img>;
  const msg = (
    <h1 style={{ textAlign: "center" }}>Você é o amor da minha vida 💞</h1>
  );
  const mountMessage = (
    <div>
      {msg}
      <div style={{ textAlign: "center" }}>
        {img1}
        {img2}
        {img3}
      </div>
    </div>
  );
  return mountMessage;
}

export default Home;
