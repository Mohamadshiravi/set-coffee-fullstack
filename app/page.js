import Footer from "@/components/module/footer";
import Header from "@/components/module/header-nav/header";
import AdSectionOne from "@/components/template/ad";
import ArticlesSection from "@/components/template/articles";
import HomeSlider from "@/components/template/homeslider";
import LastestProduct from "@/components/template/lastestproduct";
import productModel from "@/models/product";
import isUserLogedIn from "@/utils/auth-utill/is-user-login";
import UserWish from "@/utils/auth-utill/user-wish";
import ConnectTODb from "@/utils/connecttodb";

export default async function HomePage() {
  const theUser = await isUserLogedIn();

  ConnectTODb();
  const allProduct = await productModel.find({}, "title score price images");
  const userWish = await UserWish(theUser ? theUser._id : false);
  return (
    <>
      <Header
        theUser={JSON.parse(JSON.stringify(theUser))}
        wishLength={JSON.parse(JSON.stringify(userWish.length))}
      />
      <HomeSlider />
      <LastestProduct
        products={JSON.parse(JSON.stringify(allProduct.slice(0, 10)))}
      />
      <AdSectionOne />
      <ArticlesSection />
      <Footer />
    </>
  );
}
