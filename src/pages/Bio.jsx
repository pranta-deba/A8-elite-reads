import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Bio = () => {
  return (
    <div>
      <div className="text-center py-20 bg-green-50 rounded-lg mb-5 space-y-4">
        <h1 className="text-5xl font-bold">
          About <span className="text-green-400">EliteReads</span>
        </h1>
        <p>
          Elevate Your Reading Experience with EliteReads. Where Knowledge Meets
          Luxury.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 space-y-5">
          <h1 className="text-5xl font-bold playfair">
            Story <span className="text-green-400 playfair">Of</span> EliteReads
          </h1>
          <p className="text-justify">
            At EliteReads, we believe that reading is not just a pastime but a
            transformative experience. Our journey began with a simple yet
            profound vision - to curate a space where literature meets luxury,
            where the pursuit of knowledge intertwines with the indulgence of
            fine craftsmanship. Driven by our passion for literature and a
            commitment to excellence, EliteReads was founded by a team of avid
            readers and literary enthusiasts who sought to redefine the way
            books are experienced. Inspired by the idea that every book should
            be treated as a treasure, we embarked on a mission to create a haven
            for bibliophiles, a sanctuary where every page turned feels like a
            journey into the extraordinary.
          </p>
          <div className="flex text-2xl gap-5">
            <FaFacebook className="cursor-pointer text-green-700" />
            <FaTwitter className="cursor-pointer text-green-700" />
            <FaInstagramSquare className="cursor-pointer text-green-700" />
          </div>
        </div>
        <figure className="flex-1">
          <img src="/bio.png" alt="" />
        </figure>
      </div>
      <div className="mt-20">
        <h1 className="text-center text-5xl font-bold my-12">AWARDS</h1>
        <div className="flex flex-col md:flex-row justify-center gap-5">
          <div className="text-center">
            <figure className="flex justify-center">
              <img src="/award1.png" alt="" />
            </figure>
            <div>
              <h2 className="text-2xl font-bold playfair">
              Readers Choice Award
              </h2>
              <p className="text-justify">
              EliteReads is honored to have received the prestigious Readers Choice Award for Excellence in Literary Curation. This award celebrates our commitment to delivering exceptional reading experiences and our dedication to enriching the lives of bibliophiles around the world. It serves as a testament to the trust and appreciation of our valued readers who have embraced our vision of blending knowledge with luxury.
              </p>
            </div>
          </div>
          <div className="text-center">
            <figure className="flex justify-center">
              <img src="/award2.png" alt="" />
            </figure>
            <div>
              <h2 className="text-2xl font-bold playfair">
              Best Book Collection Award
              </h2>
              <p className="text-justify">
              Recognized for our unparalleled selection of books, EliteReads has been bestowed with the esteemed Best Book Collection Award. This accolade acknowledges our curated library, spanning genres and eras, meticulously chosen to captivate the minds and imaginations of our diverse audience. From timeless classics to contemporary gems, our collection stands as a testament to our relentless pursuit of literary excellence.
              </p>
            </div>
          </div>
          <div className="text-center">
            <figure className="flex justify-center">
              <img src="/award3.png" alt="" />
            </figure>
            <div>
              <h2 className="text-2xl font-bold playfair">
              Innovation in Book Design Award
              </h2>
              <p className="text-justify">
              EliteReads is proud to be the recipient of the Innovation in Book Design Award, celebrating our commitment to marrying aesthetics with substance. This award acknowledges our dedication to the artistry of bookmaking, from exquisite bindings to meticulously crafted illustrations. Each edition in our collection is a masterpiece in its own right, designed to delight the senses and elevate the reading experience to new heights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
