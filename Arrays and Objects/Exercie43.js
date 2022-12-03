// Javascript program to Loop through an Object
const vehicule = {
  VehiculeName: "Toyota Camry 2022",
  horsePower: "208 HP",
};
for (let key in vehicule) {
  let value = vehicule[key];
  console.log(`${key}=>`, value);
}
