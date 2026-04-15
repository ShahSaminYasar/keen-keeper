import {
  InstagramLogoIcon,
  FacebookLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-content/60 font-normal px-3 pt-20 pb-10">
      <div className="container flex flex-col gap-5 items-center justify-center pb-10 border-b border-white/10">
        <img
          src="/assets/logo-xl.png"
          alt="Keen Keeper logo"
          className="w-80"
        />

        <p className="text-center">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div>
          <label className="text-lg font-medium block text-center mb-3 text-primary-content">
            Social Links
          </label>

          <div className="flex flex-row flex-nowrap gap-3 items-center">
            <a
              href="https://www.instagram.com/shah_samin_yasar"
              target="_blank"
              className="bg-white hover:bg-pink-600 text-black hover:text-white transition-all duration-150 w-9 aspect-square grid place-content-center rounded-full"
            >
              <InstagramLogoIcon className="size-4.5" weight={"fill"} />
            </a>
            <a
              href="https://www.facebook.com/shahsaminyasar"
              target="_blank"
              className="bg-white hover:bg-blue-600 text-black hover:text-white transition-all duration-150 w-9 aspect-square grid place-content-center rounded-full"
            >
              <FacebookLogoIcon className="size-4.5" weight={"fill"} />
            </a>
            <a
              href="#"
              className="bg-white hover:bg-black text-black hover:text-white transition-all duration-150 w-9 aspect-square grid place-content-center rounded-full"
            >
              <XLogoIcon className="size-4.5" weight={"fill"} />
            </a>
          </div>
        </div>
      </div>

      <div className="container pt-10 flex flex-col gap-3 md:flex-row items-center justify-center md:justify-between font-light">
        <span>&copy; 2026 KeenKeeper. All rights reserved.</span>

        <div className="flex items-center gap-4 md:gap-8">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
