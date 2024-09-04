function status(request, response) {
  response
    .status(200)
    .json({ chave: "Será que os acentos funcionam? Sim? Não?" });
}

export default status;
