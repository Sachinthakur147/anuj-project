"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import axios from "axios";
// import { addProduct, removeOneProduct, removeProduct } from "@/redux/userSlice";
import {
  addItemByOne,
  clearAllItem,
  clearOneItem,
  // removeItemByOne,
} from "@/redux/productSlice";

export default function Home() {
  const [products, setProducts] = useState([]);

  // ROUTER INSTANCE
  const router = useRouter();

  // DISPATCH INSTANCE
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const fetchProducts = async () => {
    const products = await axios.get(
      "https://fakestoreapi.com/products?limit=15"
    );
    const data = await products.data;
    setProducts(data);
    console.log(data);
    return data;
  };

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    console.log(product);
    dispatch(addItemByOne(product));
  };

  const removeFromCart = (id) => {
    console.log(id);
    dispatch(clearOneItem(id));
  };

  return (
    <main className="flex h-full w-full flex-col items-center justify-between p-24">
      <div className="min-h-screen w-full">
        <span>You are authenticated</span>

        <ul className="flex flex-wrap gap-3">
          {products &&
            products?.map((product) => (
              <li key={product.id} className="w-52 min-h-72 border-2">
                <h1>{product.title}</h1>
                <Image
                  src={product.image}
                  alt="prod-img"
                  width={150}
                  height={150}
                />

                <button
                  className="bg-blue-500 px-3 py-2 rounded-md text-white"
                  onClick={() => addToCart(product)}
                >
                  +
                </button>
                <button
                  className="bg-blue-500 px-3 py-2 rounded-md text-white"
                  onClick={() => removeFromCart(product.id)}
                >
                  -
                </button>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}
