import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetails from './productDetails';
import { fetchProducts } from '../../servces/products';
import './style.scss'
import Rate from './rate';

export default function Products() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.data);
    console.log(products);
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);

    const [currentProduct, setCurrentProduct] = useState(0);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!products || products.length === 0 || currentProduct >= products.length) {
        return <div>No products available</div>;
    }

    return (
        <div className='container' >
            <div className='currentproduct'>
                <ProductDetails prod={products[currentProduct]} />
            </div>
            <h4>Similar Products</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, expedita sint. Sint </p>
            <div className='d-flex w-100 justify-content-center row '>
                {
                    products.map((prod, i) => {
                        return (
                            <div onClick={() => { setCurrentProduct(i) }} class="card col-2 m-2   " style={{ width: "18rem;" }}>
                                <div style={{ height: "200px", overflow: "hidden" }}>
                                    <img src={prod.image} class="card-img-top" alt="..." />
                                </div>
                                <div class="card-body">
                                    <div style={{ height: "100px", overflow: "hidden" }}>
                                        <p class="card-text">{prod.title}</p>
                                    </div>
                                    <Rate />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    );
}
