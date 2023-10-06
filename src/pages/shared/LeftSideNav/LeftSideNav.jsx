import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="px-4 py-2">
      <h2 className="font-bold text-2xl mb-8">All Category</h2>
      {categories.map((category) => (
        <NavLink
          className="block font-medium text-xl text-gray-400 px-10 py-4"
          to={`/category/${category.id}`}
          key={category.id}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideNav;
