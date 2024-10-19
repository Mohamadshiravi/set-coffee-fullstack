import Link from "next/link";
import ProductItem from "../module/productitem";
import { IoIosArrowBack } from "react-icons/io";

export default function LastestProduct({ products }) {
  return (
    <section
      data-aos="fade-left"
      className="sm:mt-20 mt-6 md:w-10/12 w-full m-auto"
    >
      <div
        data-aos="fade-left"
        className="p-4 flex sm:flex-row flex-col gap-2 items-center justify-between"
      >
        <div className="flex flex-col items-center gap-1">
          <h2 className="sm:text-4xl text-3xl moraba-bold text-headcolor py-2">
            آخرین محصولات
          </h2>
          <h3 className="sm:text-base text-xs text-zinc-500">
            Lastest Product
          </h3>
        </div>
        <div className="flex items-center gap-2 hover:bg-gray-200 transition-all group rounded-xl p-3">
          <Link href={"/products"} className="moraba-bold sm:text-xl text-sm">
            مشاهده همه محصولات
          </Link>
          <IoIosArrowBack className="text-xl group-hover:-translate-x-2 transition-all" />
        </div>
      </div>
      <div className="w-full md:p-0 p-4 grid gap-4 lg:grid-cols-[2.4fr_2.4fr_2.4fr_2.4fr_2.4fr] md:grid-cols-[3fr_3fr_3fr_3fr] md:grid-cols-[4fr_4fr_4fr]  grid-cols-[6fr_6fr]">
        {products.map((e, i) => (
          <ProductItem
            key={i}
            title={e.title}
            score={e.score}
            price={e.price}
            image={e.images[0]}
            id={e._id}
          />
        ))}
      </div>
      {products.length === 0 && (
        <h3 className="moraba-regular text-4xl w-full mt-16 text-center text-zinc-600">
          {" "}
          هنوز محصولی موجود نمیباشد
        </h3>
      )}
    </section>
  );
}
