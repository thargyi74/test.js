//Classical inheritance use sperate copy java,C++

let parent = {
  car: "Honda",
  goTrip: function () {
    console.log("I go trip with", this.car);
  },
};

let mgmg = Object.create(parent);
