const DetailsComp = ({product,onClick}) => {
  return (
    <>
       <div class="container mt-5">
  <div class="row">
    <div class="col-md-6">
      <img src={product.images} alt="Product Image" class="w-100"/>
    </div>
    <div class="col-md-6">
      <h2 class="mb-3">{product.title}</h2>
      <p class="mb-3">{product.description}</p>
      <p class="font-weight-bold mb-3">Price: $19.99</p>
      <p class="mb-3">{product.stocks}</p>
      <p class="mb-3">Rating: {product.rating} </p>
      <button class="btn btn-primary" onClick={onClick}>Add to Cart</button>
    </div>
  </div>
</div>
    </>
  )
}

export default DetailsComp
