const mongoose = require("mongoose");
var mongoDB =
  "mongodb+srv://dbaowner:dbaowner@cluster0-vw0p4.mongodb.net/testdb?retryWrites=true&w=majority";
mongoose.connect(mongoDB);

const Product = require("../models/Product");
const ProductController = require("./ProductController");

describe("ProductController", () => {
  it("should call paginate on index", async () => {
    jest.spyOn(Product, "paginate").mockReturnValue(Promise.resolve([]));

    await ProductController.index({ query: { page: 1 } }, { json: () => {} });

    expect(Product.paginate).toHaveBeenCalled();
  });

  it("should call findById on show", async () => {
    jest.spyOn(Product, "findById").mockReturnValue(Promise.resolve({}));

    await ProductController.show({ params: { id: 1 } }, { json: () => {} });

    expect(Product.findById).toHaveBeenCalled();
  });

  it("should call create on store", async () => {
    jest.spyOn(Product, "create").mockReturnValue(Promise.resolve({}));

    await ProductController.store(
      {
        body: {
          name: "Arthur Hauenstein",
          gender: "Masculino",
          age: "23",
          email: "arthur.hauenstein@gmail.com",
        },
      },
      { json: () => {} }
    );

    expect(Product.create).toHaveBeenCalled();
  });

  it("should call findByIdAndUpdate on update", async () => {
    jest
      .spyOn(Product, "findByIdAndUpdate")
      .mockReturnValue(Promise.resolve({}));

    await ProductController.update({ params: { id: 1 } }, { json: () => {} });

    expect(Product.findByIdAndUpdate).toHaveBeenCalled();
  });

  it("should call findByIdAndRemove on destroy", async () => {
    jest
      .spyOn(Product, "findByIdAndRemove")
      .mockReturnValue(Promise.resolve({}));

    await ProductController.destroy({ params: { id: 1 } }, { send: () => {} });

    expect(Product.findByIdAndRemove).toHaveBeenCalled();
  });
});
