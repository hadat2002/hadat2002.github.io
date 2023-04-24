const btnAddToCart = document.querySelector(".btn-addToCart");

const start = () => {
  getCourses();
  renderCart();
  handleSumPrice();
};

async function getCourses(callback) {
  console.log("hehe");
  try {
    await fetch("https://633e7c0a83f50e9ba3b19a73.mockapi.io/list")
      .then((response) => {
        return response.json();
      })
      .then((callback) => {
        const dataProduct = callback.find((item) => item.id == id);
        mainData = dataProduct;
        // console.log(16, callback);
        return dataProduct;
      })
      .then(callback);
  } catch {}
}

const handleGetCart = () => {
  var dataLocal = [];
  dataLocal = localStorage.getItem("listCart");
  dataLocal = JSON.parse(dataLocal);
  return dataLocal;
};

const handleAddToCart = (id) => {
  const dataProduct = mainData.find((item) => item.id == id);
  //   console.log(mainData);
  dataProduct.quantity = 1;
  let dataLocal = handleGetCart();
  if (dataLocal === null) {
    dataLocal = [dataProduct];
  } else {
    // dataLocal.push(dataProduct);
    let checkPrd = false;
    console.log(dataLocal);
    for (let i = 0; i < dataLocal.length; i++) {
      if (parseInt(dataLocal[i].id) === id) {
        dataLocal[i].quantity += parseInt(dataProduct.quantity);
        checkPrd = true;
        break;
      }
    }

    if (!checkPrd) {
      dataLocal.push(dataProduct);
    }
  }
  localStorage.setItem("listCart", JSON.stringify(dataLocal));
  // console.log(dataProduct);
  handleSumPrice();
};

const handleRemovePrdCart = (id) => {
  dataLocal = handleGetCart();
  // console.log(typeof dataLocal[0].id);
  // console.log(typeof id);
  newDataLocal = dataLocal.filter((item) => parseInt(item.id) != id);
  console.log(newDataLocal);
  localStorage.setItem("listCart", JSON.stringify(newDataLocal));
  renderCart();
  handleSumPrice();
};

const handleSumPrice = () => {
  dataLocal = handleGetCart();
  const totalPrice = document.querySelector(".total-cart");
  let ValueTotal = 0;
  for (let i = 0; i < dataLocal.length; i++) {
    ValueTotal +=
      parseInt(dataLocal[i].price) * parseInt(dataLocal[i].quantity);
  }
  if (ValueTotal != undefined) {
    totalPrice.innerHTML = ValueTotal.toLocaleString() + "đ";
  } else {
    totalPrice.innerHTML = "0 đ";
  }
};

const renderCart = () => {
  const listProductCart = document.querySelector(".cart tbody");
  let dataLocal = handleGetCart();
  listProductCart.innerHTML = dataLocal
    .map((currentValue) => {
      // console.log(parseInt(currentValue.price).toLocaleString());
      return `
    <tr id="list-product-cart" >
        <td> ${currentValue.name}</td>
        <td><img src="${currentValue.img}" alt="${
        currentValue.name
      }" style="height:90px;"></td>   
        <td>${parseInt(currentValue.price).toLocaleString()}đ</td>
        <td>${currentValue.quantity}</td>
        <td>${(
          parseInt(currentValue.price) * currentValue.quantity
        ).toLocaleString()}</td>
        <td><button onClick="handleRemovePrdCart(${
          currentValue.id
        })">delete</button></td>
    </tr>
    `;
    })
    .join("");
};
start();
