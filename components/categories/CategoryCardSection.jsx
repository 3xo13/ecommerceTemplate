import CategoryCard from "./CategoryCard"
import { Category } from "@/db/category";

const CategoryCardSection = async () => {
    const sixCategories = await Category.find({}).limit(6);
    // console.log(sixCategories);
    const cards = sixCategories.map(catObgj => <CategoryCard categoryObj={catObgj}/>)
    // console.log(cards[0]);
  return (
    <div className="w-full h-fit row gap-5 justify-center">{cards}</div>
  )
}

export default CategoryCardSection


// const data = [
//     {category: 'women fashion',image: '/assets/images/categories/2.png'},
//     {category: 'men fashion',image: '/assets/images/categories/2.png'},
//     {category: 'footwear',image: '/assets/images/categories/2.png'},
//     {category: 'accessories',image: '/assets/images/categories/2.png'},
//     {category: 'electronics',image: '/assets/images/categories/2.png'},
// ]
// try {
//     data.forEach(async(obj) => {
//         const newCat = new Category(obj)
//         await newCat.save()
//         console.log(obj.category, 'uploaded to db');
//     })
// } catch (error) {
//     console.log(error);
// }