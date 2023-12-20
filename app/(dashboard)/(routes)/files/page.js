import { collection, getFirestore } from "firebase/firestore";
import app from "./../../../../firebaseConfig";
import Link from "next/link";

const Files = () => {
  const db = getFirestore(app);

  return (
    <div>
      <div className="m-5 w-1/4 h-1/4 relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
          className="absolute inset-0 h-64 w-64 object-cover"
        />

        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 ">
          <div className="p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-white/90">
              {" "}
              10th Oct 2022{" "}
            </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">
                How to position your furniture for positivity
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
            <Link
              href={`/file-preview/fileid`}
              className="bg-gray-400 text-white px-2 py-1 hover:bg-primary text-sm rounded-md"
            >
              Preivew & Send Email
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Files;
