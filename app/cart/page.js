import BreadCrumb from "@/components/module/breadcrumb";
import Header from "@/components/module/header-nav/header";
import isUserLogedIn from "@/utils/auth-utill/is-user-login";
import UserWish from "@/utils/auth-utill/user-wish";
import Footer from "@/components/module/footer";
import CartSection from "@/components/template/cart-section";

export default async function CartPage() {
  const theUser = await isUserLogedIn();
  const userWish = await UserWish(theUser ? theUser._id : false);

  return (
    <>
      <Header
        theUser={JSON.parse(JSON.stringify(theUser))}
        wishLength={JSON.parse(JSON.stringify(userWish.length))}
      />
      <BreadCrumb path={"سبد خرید"} />
      <main className="xl:px-10 sm:px-10 px-4 flex xl:flex-row flex-col gap-10 sm:my-10 my-4 moraba-regular">
        <CartSection />
      </main>
      <Footer />
    </>
  );
}
