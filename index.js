const btnCart = document.querySelector('.container-icon');
const containerCartProducts = document.querySelector('.container-cart-products'); // Asegúrate de tener esta línea

btnCart.addEventListener('click', () => {
   containerCartProducts.classList.toggle('hidden-cart');
});

