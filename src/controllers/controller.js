import ServicoExercicio from "../services/service.js";

export default class ControllerExercicio {
  constructor() {
    this.servico = new ServicoExercicio();
  }

  Somar(req, res) {
    try {
      const num1 = req.body.num1;
      const num2 = req.body.num2;

      const resultado = this.servico.Somar(num1, num2);

      res.status(200).json({ resultado });
    } catch (error) {
      console.error("Erro ao somar:", error);
      res.status(500).json({ message: "Erro ao somar" });
    }
  }

  Subtrair(req, res) {
    try {
      const num1 = req.body.num1;
      const num2 = req.body.num2;

      const resultado = this.servico.Subtrair(num1, num2);

      res.status(200).json({ resultado });
    } catch (error) {
      console.error("Erro ao subtrair:", error);
      res.status(500).json({ message: "Erro ao subtrair" });
    }
  }

  Dividir(req, res) {
    try {
      const num1 = req.body.num1;
      const num2 = req.body.num2;

      const resultado = this.servico.Dividir(num1, num2);

      res.status(200).json({ resultado });
    } catch (error) {
      console.error("Erro ao dividir:", error);
      res.status(500).json({ message: "Erro ao dividir" });
    }
  }

  Multiplicar(req, res) {
    try {
      const num1 = req.body.num1;
      const num2 = req.body.num2;

      const resultado = this.servico.Multiplicar(num1, num2);

      res.status(200).json({ resultado });
    } catch (error) {
      console.error("Erro ao multiplicar:", error);
      res.status(500).json({ message: "Erro ao multiplicar" });
    }
  }
}