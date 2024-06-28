import DisplayComponent from "./displayproductcomponent"

const ProductsComponent = ({products}) =>{
    return(
        <>
            {products.map((product) => (
                <DisplayComponent key={product.productID} shoe={product}/>
            ))}
        </>
    )
}

export default ProductsComponent