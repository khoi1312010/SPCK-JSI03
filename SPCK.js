let productList = [];

const getProductList = () => {
  fetch("https://mockapi.io/projects/652177f2a4199548356d3fa7").then((res) => {
    return res.json()
  }).then((res) => {
    productList = res;
  })
}

