import CategoryCardSection from "@/components/categories/CategoryCardSection"
import SpecialOffers from "@/components/offers/specialOffers"

export default function Home() {
    return (
        <main className=" min-h-screen col items-center justify-between p-24">
            <section className="hero w-screen h-[75vh] flex-row-center">
                <div className="w-5/12 h-full p-10 flex items-center justify-end">
                    <img
                        src="/assets/images/home/ecommerce.svg"
                        alt=""
                        className="w-[70%] h-[70%] object-contain object-top"/>
                </div>
                <div className="w-7/12 h-full p-10 ">
                    <div
                        className="w-full h-4/6 p-10 col  items-end justify-center gap-5">
                        <div className="w-full ">
                            <h1 className="text-4xl text-end">K-commerce</h1>
                            <h2 className="text-2xl text-end">choose from a wide range of high-quality products</h2>
                        </div>
                        <div className="w-full flex flex-row items-center justify-end gap-5 mt-10">
                          <input type="text" name="search" id="search-home" className="w-72 h-8 rounded-xl bg-white/80 focus:outline-0 px-5 border-2 drop-shadow-lg" />
                          <button>
                          <img src="/assets/icons/general/search.svg" alt="icon" className="w-8 h-6 drop-shadow-lg"/>
                          </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="categories-section w-full h-[60vh] col ">
              <div className="w-full h-2/6  flex-center">
                <h2 className="text-3xl">Categories</h2>
              </div>
              <div className=" flex-row-center w-full h-4/6 ">
                <CategoryCardSection />
              </div>
            </section>
            <section className="screen ">
              <div className="w-2/6 h-full"> 
                <SpecialOffers />
              </div>
              <div className="w-4/6 h-full"></div>
            </section>
        </main>
    )
}
