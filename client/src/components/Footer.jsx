import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className=" mb-3">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg">
                Yuvraj's
              </span>
              Blog
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="ABOUT" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://yuvraj1206.github.io/Portfolio/"
                  target="_blank"
                  rel="noopener noreffer"
                >
                  Portfolio
                </Footer.Link>

                <Footer.Link href="#" target="_blank" rel="noopener noreffer">
                  Yuvraj's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="FOLLOW US" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Yuvraj1206"
                  target="_blank"
                  rel="noopener noreffer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/yuvraj-saha/"
                  target="_blank"
                  rel="noopener noreffer"
                >
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="LEGAL" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />

        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Yuvraj's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://github.com/Yuvraj1206"
              icon={BsGithub}
              target="_blank"
              rel="noopener noreffer"
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/yuvraj-saha/"
              icon={BsLinkedin}
              target="_blank"
              rel="noopener noreffer"
            />
            <Footer.Icon
              href="https://www.instagram.com/yuvrajsaha_?igsh=c2xkNDhjOGJ5azdn"
              icon={BsInstagram}
              target="_blank"
              rel="noopener noreffer"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
