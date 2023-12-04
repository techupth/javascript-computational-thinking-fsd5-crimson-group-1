let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
  {
    id: 6,
    customerName: "Birdie Shepland",
    productName: "Tomato Paste",
    productPrice: 5845,
    productQuantity: 65,
    creditCardType: "visa-electron",
  },
  {
    id: 7,
    customerName: "Willyt Helks",
    productName: "Asparagus - Green, Fresh",
    productPrice: 89253,
    productQuantity: 26,
    creditCardType: "laser",
  },
  {
    id: 8,
    customerName: "Bill Champion",
    productName: "Wine - Red, Harrow Estates, Cab",
    productPrice: 922100,
    productQuantity: 40,
    creditCardType: "china-unionpay",
  },
  {
    id: 9,
    customerName: "Cris Druce",
    productName: "Bar Mix - Lemon",
    productPrice: 83104,
    productQuantity: 6,
    creditCardType: "jcb",
  },
  {
    id: 10,
    customerName: "Darnell O'Currine",
    productName: "Lime Cordial - Roses",
    productPrice: 99041,
    productQuantity: 75,
    creditCardType: "visa-electron",
  },
];

// Start coding here
// ปัญหา = ให้ใช้ For Loop หาคำสั่งซื้อที่มีมูลค่าสูงที่สุดใน orders และนำมูลค่านี้มาแสดงผลบนหน้าจอพร้อมกับเลข ID ของคำสั่งซื้อนั้น
// วิธีการแก้ไขปัญหา
//  - นำราคาสินค้าและจำนวนสินค้าใน object แต่ละอันมาคูณกัน
//  - นำผลคูณทั้งหมดมาเปรียบเทียบกัน
//  - เก็บค่าสินค้าที่มีราคาแพงกว่าไว้
//  - แสดงผลออกมาเป็นทำดับของ id และผลรวมของราคาสูงสุดออกมาทางหน้าจอ
let totalAmount = 0;
let mostExpensiveOrder = 0;
let mostPurchaseId = 0;

for (let i = 0; i < orders.length; i++) {
  totalAmount = orders[i]["productPrice"] * orders[i]["productQuantity"];
  if (totalAmount > mostExpensiveOrder) {
    mostExpensiveOrder = totalAmount;
    mostPurchaseId = orders[i].id;
  }
}

console.log(
  "The most expensive order is order id " +
    mostPurchaseId +
    " (" +
    mostExpensiveOrder.toLocaleString(mostExpensiveOrder) +
    " Bath)"
);
