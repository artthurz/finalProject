const mongoose = require("mongoose");
var mongoDB =
  "mongodb+srv://dbaowner:dbaowner@cluster0-vw0p4.mongodb.net/testdb?retryWrites=true&w=majority";
mongoose.connect(mongoDB);

const People = require("../models/People");
const PeopleController = require("./PeopleController");

describe("PeopleController", () => {
  it("should call paginate on index", async () => {
    jest.spyOn(People, "paginate").mockReturnValue(Promise.resolve([]));

    await PeopleController.index({ query: { page: 1 } }, { json: () => {} });

    expect(People.paginate).toHaveBeenCalled();
  });

  it("should call findById on show", async () => {
    jest.spyOn(People, "findById").mockReturnValue(Promise.resolve({}));

    await PeopleController.show({ params: { id: 1 } }, { json: () => {} });

    expect(People.findById).toHaveBeenCalled();
  });

  it("should call create on store", async () => {
    jest.spyOn(People, "create").mockReturnValue(Promise.resolve({}));

    await PeopleController.store(
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

    expect(People.create).toHaveBeenCalled();
  });

  it("should call findByIdAndUpdate on update", async () => {
    jest
      .spyOn(People, "findByIdAndUpdate")
      .mockReturnValue(Promise.resolve({}));

    await PeopleController.update({ params: { id: 1 } }, { json: () => {} });

    expect(People.findByIdAndUpdate).toHaveBeenCalled();
  });

  it("should call findByIdAndRemove on destroy", async () => {
    jest
      .spyOn(People, "findByIdAndRemove")
      .mockReturnValue(Promise.resolve({}));

    await PeopleController.destroy({ params: { id: 1 } }, { send: () => {} });

    expect(People.findByIdAndRemove).toHaveBeenCalled();
  });
});
