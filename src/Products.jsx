import ProductCards from "./ProductCards";
import { Separator } from "@/components/ui/separator";
import Tab from "./Tab";
import { useState } from "react";

function Products() {
  const products = [
    {
      categoryId: "1",
      image: "/assets/products/airpods-max.png",
      _id: "1",
      name: "AirPods Max",
      price: "549.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "3",
      image: "/assets/products/echo-dot.png",
      _id: "2",
      name: "Echo Dot",
      price: "99.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "2",
      image: "/assets/products/pixel-buds.png",
      _id: "3",
      name: "Galaxy Pixel Buds",
      price: "99.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "1",
      image: "/assets/products/quietcomfort.png",
      _id: "4",
      name: "Bose QuietComfort",
      price: "249.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "3",
      image: "/assets/products/soundlink.png",
      _id: "5",
      name: "Bose SoundLink",
      price: "119.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "5",
      image: "/assets/products/apple-watch.png",
      _id: "6",
      name: "Apple Watch 9",
      price: "699.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "4",
      image: "/assets/products/iphone-15.png",
      _id: "7",
      name: "Apple iPhone 15",
      price: "1299.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "4",
      image: "/assets/products/pixel-8.png",
      _id: "8",
      name: "Galaxy Pixel 8",
      price: "549.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
  ];

  const categories = [
    { _id: "ALL", name: "All" },
    { _id: "1", name: "Headphones" },
    { _id: "2", name: "Earbuds" },
    { _id: "3", name: "Speakers" },
    { _id: "4", name: "Mobile Phones" },
    { _id: "5", name: "Smart Watches" },
  ];

  const [selectedCategoryId, setSelectedCategoryId] = useState("ALL");
  const [sortOrder, setSortOrder] = useState("none");

  // Filter products by category
  const filteredProducts =
    selectedCategoryId === "ALL"
      ? products
      : products.filter((product) => product.categoryId === selectedCategoryId);

  // Sort products by price
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "asc") return parseFloat(a.price) - parseFloat(b.price);
    if (sortOrder === "desc") return parseFloat(b.price) - parseFloat(a.price);
    return 0; // No sorting
  });

  const handleTabClick = (_id) => {
    setSelectedCategoryId(_id);
    setSortOrder("none"); // Reset sorting when category changes
  };

  const handleSortClick = (order) => {
    setSortOrder(order);
  };

  return (
    <section className="px-8 py-8">
      <h2 className="text-4xl font-bold">Our Top Products</h2>
      <Separator className="mt-2" />

      {/* Category Tabs */}
      <div className="mt-4 flex items-center gap-4">
        {categories.map((category) => (
          <Tab
            key={category._id}
            _id={category._id}
            selectedCategoryId={selectedCategoryId}
            name={category.name}
            onTabClick={handleTabClick}
          />
        ))}
      </div>

      {/* Sorting Buttons */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={() => handleSortClick("asc")}
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Sort by Price: Ascending
        </button>
        <button
          onClick={() => handleSortClick("desc")}
           className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Sort by Price: Descending
        </button>
      </div>

      {/* Render Product Cards */}
      <ProductCards products={sortedProducts} />
    </section>
  );
}

export default Products;
