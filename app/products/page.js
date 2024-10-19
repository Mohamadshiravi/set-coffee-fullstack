import BreadCrumb from "@/components/module/breadcrumb";
import Header from "@/components/module/header-nav/header";
import productModel from "@/models/product";
import isUserLogedIn from "@/utils/auth-utill/is-user-login";
import UserWish from "@/utils/auth-utill/user-wish";

import Footer from "@/components/module/footer";
import ShopeSection from "@/components/template/shop-section";

export default async function AllProducts() {
  const theUser = await isUserLogedIn();
  const userWish = await UserWish(theUser ? theUser._id : false);

  const allProduct = await productModel.find({}, "title score price images", {
    sort: "-_id",
  });
  return (
    <>
      <Header
        theUser={JSON.parse(JSON.stringify(theUser))}
        wishLength={JSON.parse(JSON.stringify(userWish.length))}
      />
      <BreadCrumb path={"فروشگاه"} />
      <ShopeSection products={JSON.parse(JSON.stringify(allProduct))} />
      <Footer />
    </>
  );
}
