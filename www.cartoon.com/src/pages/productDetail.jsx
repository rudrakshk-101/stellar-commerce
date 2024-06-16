import React,{useEffect, useState} from 'react';
import '../styles/productDetail.css';
import Gallery from "./productDetailComponents/Gallery";
import Description from "./productDetailComponents/Description";
import MobileGallery from "./productDetailComponents/MobileGallery";
import {useParams} from 'react-router-dom';

function ProductDetail({setLoader}) {
    const [quant, setQuant] = useState(0);
    const {productId} = useParams();
  
    const [array,setArray] = useState({});

    let xyz = async() => {
      setLoader(true);
      console.log(productId);
      const response = await fetch('http://localhost:4500/api/product/findByProductId',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({productId})
      });
      const data = await response.json();
      console.log(data);
      setArray(data);
      setLoader(false);
    }

    useEffect(() => {
      xyz();
    },[])

    const addQuant = () => {
      console.log('Increased');
      setQuant(quant + 1);
    };
  
    const removeQuant = () => {
      console.log('Decreased');
      setQuant(quant - 1);
    };



    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);


    return (
      <main className="App">
        <div className="backgroundUltra flex justify-center items-center h-[10vw]">
                <div className="circle1">

                </div>
                <div className="circle2">
                    
                </div>

            </div>
          {/* <Navbar onOrderedQuant={orderedQuant} onReset={resetQuant} /> */}
          <section className="core">
            <Gallery image={array.image} />
            <MobileGallery image={array.image} />
            <Description
              quant={quant}
              setQuant={setQuant}
              onAdd={addQuant}
              onRemove={removeQuant}
              title={array.title}
              productId={array.productId}
              setLoader={setLoader}
              brand={array.brand}
              description={array.description} 
              price={array.price}
              discount={array.discount}
            />
          </section>
      </main>
    );
  }
  
  export default ProductDetail;