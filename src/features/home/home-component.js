import React from "react";
import Slider from "react-slick";
import nft1 from "../../assets/img/nft1.webp";
import nft2 from "../../assets/img/nft2.webp";
import nft3 from "../../assets/img/nft3.webp";
import nft4 from "../../assets/img/nft4.webp";
import client1 from "../../assets/img/client1.webp";
import client2 from "../../assets/img/client2.webp";
import client3 from "../../assets/img/client3.webp";
import ModalBox from "../../components/Modals/ModalBox";
import ProfielForm from "../../components/forms/profile-form";
import Spinner from "../../components/spinner";
const data = [{}];
function HomeComponent({
  handleLogin,
  handleOpenModal,
  handleCloseModal,
  openModal,
  loading,
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  };
  return (
    <div className=" bg-gray-100 ">
      <div className="py-12 px-16">
        <p className="text-center  text-3xl mx-auto max-w-lg  w-full ">
          World’s 1st SaaS NFT Marketplace to{" "}
          <span className="font-bold">
            Create & Authenticate Your Certificates!
          </span>
        </p>
      </div>

      <div className="py-12 md:px-16 px-2 flex items-center justify-between md:mx-auto max-w-screen-lg md:flex-row flex-col">
        <div className="flex flex-col space-y-3 max-w-lg">
          <p className="font-bold text-4xl">Educator Solution</p>
          <p>
            The Turnkey Solution to Authenticate Certificates for your Graduates
            by Creating NFT’s
          </p>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleLogin}
              className=" bg-blue-500 px-4 py-2 rounded-lg text-white font-bold"
            >
              SIGN UP
            </button>
            <p className=" text-xl opacity-40">Learn more</p>
          </div>
        </div>

        <div className="flex flex-col space-y-3 max-w-lg">
          <p className="font-bold text-4xl">Graduate Solution</p>
          <p>
            Create a FREE NFT of your Certificate, get it Authenticated and
            share privately or Publicly
          </p>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleLogin}
              className=" bg-blue-500 px-4 py-2 rounded-lg text-white font-bold"
            >
              SIGN UP
            </button>
            <p className=" text-xl opacity-40">Learn more</p>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <div className="py-12 md:mx-auto max-w-screen-lg">
          <p className="text-center text-5xl font-bold">
            Latest NFT Certificates Minted
          </p>

          <Slider {...settings}>
            <img width={120} src={nft1} alt="cert" />
            <img width={120} src={nft2} alt="cert" />
            <img width={120} src={nft3} alt="cert" />
            <img width={120} src={nft4} alt="cert" />
          </Slider>
        </div>
      </div>

      <div className="bg-white ">
        <div className="bg-white py-12 px-12 md:mx-auto max-w-screen-lg">
          <p className="text-center text-5xl font-bold">Our Clients</p>

          <div className="grid grid-cols-3 gap-2">
            <a target="blank" rel="no-referer" href="https://authentors-collections.web.app/store?collection=CPA+Union+of+Israel&address=tz1ZXvvKgCDkfsjeVjaU5Y2EFFzGz7PXtQwz&limit=2000">
              {" "}
              <img src={client1} alt="cert" />
            </a>
            <a target="blank" rel="no-referer" href="https://authentors-collections.web.app/store?collection=MBA%20Class%20Certificates&address=tz1a395j1eoxjSL81HRW6EbU7YPc57Ve8dFq&limit=2000">
              {" "}
              <img src={client2} alt="cert" />
            </a>
            <a target="blank" rel="no-referer" href="https://authentors-collections.web.app/store?collection=ATHENA+Certificates&address=tz1ZXvvKgCDkfsjeVjaU5Y2EFFzGz7PXtQwz&limit=2000">
              {" "}
              <img src={client3} alt="cert" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="bg-gray-100 mx-12 py-12 md:mx-auto max-w-screen-lg"
        id="why"
      >
        <p className="text-left text-4xl font-bold">Why Authentors?</p>
        <div className="flex flex-col space-y-6 mt-4">
          <p className="">
            Authentors.com is the solution to combat the growing global crisis
            of the billion- dollar fake higher education certificates industry,
            reportedly selling over a million fake diplomas. With a large and
            growing number of fake universities and fake degrees, many people
            are either unaware of the situation, don’t know what a huge problem
            it is, or don’t appreciate how it is affecting them, their
            institution or employer, and society at large.
          </p>
          <p>
            As an example, the number of genuinely awarded PhD degrees in the
            United States is 40,000 to 45,000 each year, while the number of
            fake PhDs bought each year from diploma mills exceeds 50,000. In
            other words, more than half of all people claiming a new PhD from a
            US college, have a fake degree.
          </p>
          <p>
            The impact of fake degrees devalues legitimate degrees that people
            spend several years of their lives and hundreds of thousands of
            dollars earning. More importantly, fake certificates used for those
            who lack the proper skills and expertise to enter professions like
            engineers and health-care workers, can put public lives at risk.
          </p>
          <p>
            Authentors is utilizing the capabilities of Blockchain Technology
            and NFTs to enable authentication of Certificates, for the benefit
            of Graduates, Educators, Employers or anyone to whom authenticity is
            important.
          </p>
        </div>
      </div>

      <div className=" px-12 py-12 md:mx-auto max-w-screen-2xl" id="graduate">
        <div className="grid grid-cols-2 gap-2 items-center">
          <div>
            <img src="/img/hat.webp" alt="d" className="w-full" />
          </div>
          <div className=" bg-gray-200 py-6 px-4 flex flex-col space-y-5">
            <p className="font-bold text-4xl">Graduate Solution</p>
            <p>
              "Why Compete For Jobs With People Who Bought Fake Degrees, When
              You Can Prove Yours Is Legit With Authentors.Com?"
            </p>
            <p>First of all Congratulations for gaining your qualification!</p>
            <p>
              You have not only studied hard to gain your Certificate, but no
              doubt spent a lot of money or even taken a loan to get where you
              are now, and the impact of the billion dollar fake degree industry
              devalues your legitimate qualification.
            </p>
            <p>
              With a large and growing number of fake universities and fake
              degrees, many people are either unaware of the situation, don’t
              know what a huge problem it is, or don’t appreciate how it is
              affecting them, their institution, employer, and society at large.
              One international diploma mill, with offices in Europe and the
              Middle East and mailing addresses in the UK, run by Americans, has
              sold more than 450,000 degrees—bachelors, master’s, doctorates,
              medicine, and law—to clients worldwide, who did nothing more than
              write a check- and buyers of these fake certificates are unfairly
              able to compete with you in the employment market and getting
              accepted to jobs.
            </p>

            <p>
              Authentors.com provides you with the ability to prove that your
              qualification is authentic using NFT Blockchain technology. An NFT
              is not only about creating art like Beeples and Bored Ape Yacht
              Club, but it’s a digital certificate of authenticity, so the
              perfect way to present and prove that your certificate is legit to
              future employers. You can choose to showcase your NFT diplomas on
              your personal page, you can link to them from your CV, or LinkedIn
              page, as a link or as a QR code, and you can even show them to
              your prospective employer, so they know your certificate is
              authentic.
            </p>
            <button className=" bg-blue-600 px-4 py-2 rounded-lg text-white font-bold">
              SIGN UP & GET YOUR FREE NFT HERE
            </button>

            <div>
              <p className=" font-bold text-xl">Authentors Benefits</p>
              <div className=" grid grid-cols-3 gap-3 mt-3">
                <div className="bg-white flex flex-col   px-4 py-10 rounded-tr-md rounded-tl-md rounded-br-md rounded-bl-3xl shadow-sm">
                  <img src="/img/upload.webp" alt="upload" width={50} />
                  <p className=" text-xs">
                    Upload Your Certificate & Create An NFT Digital Version
                  </p>
                </div>
                <div className="bg-white flex flex-col  px-4 py-10 rounded-tr-md rounded-tl-md rounded-br-md rounded-bl-3xl shadow-sm">
                  <img src="/img/auth.webp" alt="upload" width={50} />
                  <p className=" text-xs">Get It Authenticated</p>
                </div>
                <div className="bg-white flex flex-col px-4 py-10 rounded-tr-md rounded-tl-md rounded-br-md rounded-bl-3xl shadow-sm">
                  <img src="/img/servers.webp" alt="upload" width={50} />
                  <p className=" text-xs">
                    Host It On Your Personal Page, Link It To Your CV, Place On
                    LinkedIn, And Send Link To HR Or Employers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-12 py-8 md:mx-auto max-w-screen-2xl" id="learn">
        <div className="grid grid-cols-12 gap-3 items-center">
          <div className=" bg-gray-200 col-span-8 space-y-7 flex flex-col py-5 px-3">
            <p className="text-3xl font-bold">Educator Solution</p>
            <p className="text-sm">
              Authentors.com is the solution to combat the growing global crisis
              of the billion dollar fake higher education certificates industry,
              reportedly selling over a million fake diplomas.
            </p>
            <p className="text-sm">
              There are over 3,000 unregistered universities worldwide, many of
              them completely fake, selling bachelor’s, master’s, doctorates,
              law, and medical degrees to anyone willing to pay the price.
            </p>
            <p className="text-sm">
              Authentors.com implementation of Blockchain technology for
              verifying certificates showcases how NFTs have a real world use
              case for solving existing problems of authentication around the
              world. Over the next few years, it will become the norm for
              academic institutions, professional bodies and training
              organizations to utilize NFT Blockchain technology to issue
              authenticated NFT certificates to graduates – and that graduates
              will convert their certificates to verified NFT’s at
              Authentors.com, and link to their resume or on LinkedIn.
            </p>
            <p className="text-sm">
              We’ve been engaged in discussions with global regulators, academia
              and professional for several years, and with their support the
              time has come to launch our turnkey solution. For request more
              information,{" "}
            </p>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-white font-bold w-3/12">
              CLICK HERE
            </button>
          </div>
          <div className="col-span-4">
            <img src="/img/books.webp" alt="d" className="w-full" />
          </div>
        </div>
      </div>

      <div className="px-12 py-10 md:mx-auto max-w-screen-2xl" id="aboutUs">
        <p className="text-5xl font-bold text-center">About Us</p>
        <div className="grid grid-cols-12 gap-5 mt-6 ">
          <div className=" col-span-8 flex flex-col space-y-6 mt-6">
            <p className="text-sm">
              Authentors.com is lead by Meirav Harel, a globally recognized
              Blockchain expert elected as one of 36 most inspirational women
              Revolutionizing Crypto, twice selected for the “Women in Fintech
              Powerlist” and Director at Excellence Investment House. Meirav
              advises and educates around the world to Regulators, Financial
              Institutions, Academia and Companies on utilizing innovative
              fintech technology, including Web3, Metaverse, Blockchain, Crypto
              and NFTs.
            </p>
            <p className="text-sm">
              Partnering with a team of the best in the field, Authentors was
              created to enable the authentication of certificates and diplomas,
              both for the sake of the graduates that put years of effort into
              receiving a diploma, and for the sake of Certificate issuers that
              want only their true graduates to hold their authentic
              certification.
            </p>
            <p className="text-sm">
              Authentors.com has partnered with Tezos who provide energy
              efficient Clean NFT’s for cutting edge companies such as the
              McLaren and Red Bull Racing Formula 1 teams and leading fashion
              retailer the Gap. The open-source Tezos network is a Proof of
              Stake blockchain that consumes over two million times less energy
              than Proof of Work networks like Bitcoin or Ethereum.{" "}
            </p>
            <p className="text-sm">
              Authentors is enabled by Patent Pending implementation and use of
              proprietary software and Blockchain technology for verifying any
              type of certificate of authenticity and ownership. Authentors
              showcases how NFTs have a real world use case for solving existing
              problems of authentication around the world, for the betterment of
              society and to combat unfair and illegal practices.
            </p>
          </div>

          <div className="col-span-4">
            <img src="/img/woman.webp" alt="d" className="w-full" />
            <p className="mt-4">
              “<span className="font-bold">Meirav Harel</span>, a globally
              recognized Blockchain expert elected as one of 36 most
              inspirational women Revolutionizing Crypto”
            </p>
          </div>
        </div>
      </div>

      <Spinner loading={loading} />
      <ModalBox
        open={openModal}
        content={<ProfielForm handleCloseModal={handleCloseModal} />}
      />
    </div>
  );
}

export default HomeComponent;
