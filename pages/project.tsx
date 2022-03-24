import * as React from "react";
import {
  Contact,
  Copyrights,
  Footer,
  Header,
  MobileFooter,
} from "../src/containers";
import Image from "next/image";

const Project: React.FC = () => {
  return (
    <>
      <Header
        variant="horizontal"
        title="Frota Academy"
        image="/images/frota/header.png"
      />

      {/* Brief */}
      <section className="max-w-default m-auto mb-28 flex w-4/5 justify-between">
        <div className="w-3/5">
          <Image
            width={590}
            height={365}
            src="/images/frota/1.png"
            alt="Frota project"
            quality="100"
          />
        </div>

        <div className="flex w-2/5 flex-col justify-center">
          <h1 className="text-xl">The brief</h1>
          <div className="font-inter text-description text-md font-normal">
            A Frota Academy, martial arts gym was looking for optimization ideas
            for their website so they could get more clients to sign up. The
            website needed to improve the Ux experience and website load time.
            There were numerous on-page SEO errors that needed to be corrected.
            We were able to help Frota Academy by offering a new website design
            and fixing errors that were
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="max-w-default relative m-auto mb-28 w-4/5">
        <h1 className="mb-12 text-xl">Roadmap</h1>

        <Image
          src="/images/roadmap.png"
          width={1440}
          height={670}
          alt=""
          layout="responsive"
          objectFit="cover"
        />
      </section>

      {/* Website Redesign & Maintenance. */}
      <section className="max-w-default m-auto mb-28 flex w-4/5 justify-between">
        <div className="flex w-2/5 flex-col justify-center">
          <h1 className="text-xl">Website Redesign & Maintenance</h1>
          <div className="font-inter text-description text-md font-normal">
            A Frota Academy, martial arts gym was looking for optimization ideas
            for their website so they could get more clients to sign up. The
            website needed to improve the Ux experience and website load time.
            There were numerous on-page SEO errors that needed to be corrected.
            We were able to help Frota Academy by offering a new website design
            and fixing errors that were inhibiting their searchability, load
            time and expanding the capabilities of their website.
          </div>
        </div>

        <div className="w-2/5">
          <Image
            width={585}
            height={637}
            src="/images/frota/2.png"
            alt="Frota project"
          />
        </div>
      </section>

      {/* Project Lifecycle */}
      <section className="group relative mb-28 flex h-[660px] bg-cover lg:h-[450px]">
        <div className="max-w-default m-auto flex w-4/5">
          <div className="hidden md:block">
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/banner.png"
              alt="HDM Marketing services"
              quality="100"
            />
          </div>

          <div className="md:hidden">
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/mobile/banner.png"
              alt="HDM Marketing services"
              quality="100"
            />
          </div>

          {/* Mobile Cubes */}
          <div className="absolute right-0 -top-12 lg:hidden">
            <Image
              width="107"
              height="106"
              src="/svg/right_cube.svg"
              alt="Right cube"
            />
          </div>

          <div className="absolute left-0 -bottom-20 lg:hidden">
            <Image
              width="107"
              height="106"
              src="/svg/left_cube.svg"
              alt="left cube"
            />
          </div>

          <div className="absolute -bottom-16 right-28 hidden lg:block">
            <Image
              width="172"
              height="150"
              src="/svg/left_cube.svg"
              className="transition-transform duration-1000 ease-in-out group-hover:-rotate-180"
              alt="Right cube"
            />
          </div>

          <div className="absolute left-52 -top-12 hidden lg:block">
            <Image
              width="107"
              height="106"
              src="/svg/left_cube.svg"
              className="transition-transform duration-1000 ease-in-out group-hover:-rotate-180"
              alt="left cube"
            />
          </div>
          <div className="max-w-default z-50 mx-auto flex">
            <div className="">
              <div className="mb-8">
                <Image
                  width="107"
                  height="106"
                  src="/svg/step1.svg"
                  alt="step 1"
                />
                <Image
                  width="107"
                  height="106"
                  src="/svg/line.svg"
                  alt="arrow"
                />
              </div>

              <p className="font-inter text-lg font-light text-white">
                Wireframing
              </p>
            </div>

            <div className="">
              <div className="mb-8">
                <Image
                  width="107"
                  height="106"
                  src="/svg/step2.svg"
                  alt="step 2"
                />
                <Image
                  width="107"
                  height="106"
                  src="/svg/line.svg"
                  alt="arrow"
                />
              </div>

              <p className="font-inter text-lg font-light text-white">
                UI/UX design
              </p>
            </div>

            <div className="">
              <div className="mb-8">
                <Image
                  width="107"
                  height="106"
                  src="/svg/step3.svg"
                  alt="step 3"
                />
                <Image
                  width="107"
                  height="106"
                  src="/svg/line.svg"
                  alt="arrow"
                />
              </div>

              <p className="font-inter text-lg font-light text-white">
                Front-end
              </p>
            </div>

            <div className="">
              <div className="mb-8">
                <Image
                  width="107"
                  height="106"
                  src="/svg/step4.svg"
                  alt="step 4"
                />
                <Image
                  width="107"
                  height="106"
                  src="/svg/line.svg"
                  alt="arrow"
                />
              </div>

              <p className="font-inter text-lg font-light text-white">
                Back-end
              </p>
            </div>

            <div className="">
              <div className="mb-8">
                <Image
                  width="107"
                  height="106"
                  src="/svg/step5.svg"
                  alt="step 5"
                />
                <Image
                  width="107"
                  height="106"
                  src="/svg/line.svg"
                  alt="arrow"
                />
              </div>

              <p className="font-inter text-lg font-light text-white">
                Testing
              </p>
            </div>

            <div className="">
              <div className="mb-8">
                <Image
                  width="107"
                  height="106"
                  src="/svg/step6.svg"
                  alt="step 6"
                />
              </div>

              <p className="font-inter text-lg font-light text-white">
                Maintenance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing services. */}
      <section className="max-w-default m-auto mb-20 flex w-4/5 justify-between">
        <div className="w-3/5">
          <Image
            width={585}
            height={558}
            src="/images/frota/3.png"
            alt="Frota project"
          />
        </div>

        <div className="flex w-2/5 flex-col justify-center">
          <h1 className="text-xl">Digital Marketing services.</h1>
          <div className="font-inter text-description text-md font-normal">
            We were trusted by Frota Academy to help grow their digital
            marketing campaigns with a focus on increasing lead volume, while
            reducing cost-per lead. Working closely with the business owner, we
            developed custom, on-brand landing pages and social media ads that
            resulted in a dramatic increase in their monthly lead volume.
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="group relative flex h-[660px] bg-cover lg:h-[610px]">
        <div className="max-w-default m-auto flex w-4/5 flex-col justify-center">
          <h1 className="z-50 mb-16 text-center text-2xl font-bold text-white">
            Stages
          </h1>

          <div className="hidden md:block">
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/banner.png"
              alt="HDM Marketing services"
              quality="100"
            />
          </div>

          <div className="md:hidden">
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/mobile/banner.png"
              alt="HDM Marketing services"
              quality="100"
            />
          </div>

          {/* Mobile Cubes */}
          <div className="absolute right-0 -top-12 lg:hidden">
            <Image
              width="107"
              height="106"
              src="/svg/right_cube.svg"
              alt="Right cube"
            />
          </div>

          <div className="absolute left-0 -bottom-20 lg:hidden">
            <Image
              width="107"
              height="106"
              src="/svg/left_cube.svg"
              alt="left cube"
            />
          </div>

          <div className="absolute -bottom-16 right-28 hidden lg:block">
            <Image
              width="172"
              height="150"
              src="/svg/left_cube.svg"
              className="transition-transform duration-1000 ease-in-out group-hover:-rotate-180"
              alt="Right cube"
            />
          </div>

          <div className="absolute left-52 -top-12 hidden lg:block">
            <Image
              width="107"
              height="106"
              src="/svg/left_cube.svg"
              className="transition-transform duration-1000 ease-in-out group-hover:-rotate-180"
              alt="left cube"
            />
          </div>
          <div className="max-w-default z-50 mx-auto flex">
            <div className="mr-4 w-1/4">
              <div className="mb-8">
                <Image
                  width="107"
                  height="106"
                  src="/svg/stage1.svg"
                  alt="left cube"
                />
              </div>

              <p className="font-inter text-lg font-light text-white">
                Take all available historical data and make the best use of it
              </p>
            </div>

            <div className="mr-4 w-1/4">
              <div className="mb-8">
                <Image
                  width="107"
                  height="106"
                  src="/svg/stage2.svg"
                  alt="left cube"
                />
              </div>

              <p className="font-inter text-lg font-light text-white">
                Build a way to store historical data in a more efficient way
              </p>
            </div>

            <div className="mr-4 w-1/4">
              <div className="mb-8">
                <Image
                  width="107"
                  height="106"
                  src="/svg/stage3.svg"
                  alt="left cube"
                />
              </div>

              <p className="font-inter text-lg font-light text-white">
                Provide an API for internal and external use with an interface
                according to business needs
              </p>
            </div>

            <div className="w-1/4">
              <div className="mb-8">
                <Image
                  width="107"
                  height="106"
                  src="/svg/stage4.svg"
                  alt="left cube"
                />
              </div>

              <p className="font-inter text-lg font-light text-white">
                Build an application whether it is a desktop, web app or a
                mobile one
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative -z-10 bg-[url('/images/background_portfolio2.png')] bg-cover pt-20">
        <div>
          <div className="max-w-default m-auto w-4/5">
            <div>
              <Image
                className="-z-10"
                layout="fill"
                src="/images/background_portfolio.png"
                alt="HDM portfolio background"
              />
            </div>

            <h1 className="mb-12 text-xl">The Results</h1>
            <Image
              className="-z-10"
              // layout="fill"
              width={1200}
              height={1200}
              src="/images/frota/4.png"
              alt="HDM portfolio background"
            />
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <MobileFooter />
      <Copyrights />
    </>
  );
};

export default Project;
