const mongoose = require("mongoose");

const IntegracaoA = mongoose.model("IntegracaoA");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const integracoes = await IntegracaoA.paginate({}, { page, limit: 10 });

    return res.json(integracoes);
  },

  async show(req, res) {
    const integracaoA = await IntegracaoA.findById(req.params.id);

    return res.json(integracaoA);
  },

  async store(req, res) {
    const integracaoA = await IntegracaoA.create(req.body);

    return res.json(integracaoA);
  },

  async update(req, res) {
    const integracaoA = await People.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    return res.json(people);
  },

  async destroy(req, res) {
    await People.findByIdAndRemove(req.params.id);

    return res.send();
  },
};
