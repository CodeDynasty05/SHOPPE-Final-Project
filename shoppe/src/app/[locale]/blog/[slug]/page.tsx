import CommentWithoutStar from "@/components/CommentWIthoutStar";
import PostComment from "@/components/PostComment";
import Comment from "@/components/comment";
import IComment from "@/interfaces/_common/IComment";
import axios from "axios";
import { Metadata } from "next";
import Image from "next/image";

async function fetchProducts(id: string) {
  const { data } = await axios("http://localhost:5000/blogs/" + id);
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await fetchProducts(params.slug);

  return {
    title: `${data.title} | Shoppe`,
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetchProducts(params.slug);
  const { image, title, category, comments, date, desc } = data;
  return (
    <div className="flex flex-col gap-12 py-10">
      <h2 className="text-center text-5xl font-semibold">{title}</h2>
      <p className="text-center">by ANNY JOHNSON - {date}</p>
      <Image
        src={image}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "85%", height: "auto", margin: "auto" }}
      />
      <div className="w-[50%] mx-auto flex flex-col gap-12">
        <p className="text-lg tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis. Nunc sed porta augue. <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis.
        </p>
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", margin: "auto" }}
        />
        <h4 className="text-4xl font-medium">Top trends</h4>
        <p className="text-lg tracking-wide">
          {desc}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero.
        </p>
        <ul className="list-disc list-inside tracking-wide text-lg">
          <li>consectetur adipiscing elit. Aliquam placerat</li>
          <li>Lorem ipsum dolor sit amet consectetur </li>
          <li>sapien tortor faucibus augue</li>
          <li>
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          </li>
        </ul>
        <div className="flex justify-between">
          <div className="text-xl">
            Tags &nbsp;&nbsp;&nbsp; -------&nbsp;&nbsp;&nbsp;{" "}
            <span className="text-slate-500">{category}</span>
          </div>
          <div className="text-xl flex">
            <div>Share &nbsp;&nbsp;&nbsp; -------&nbsp;&nbsp;&nbsp;</div>
            <div className="flex gap-4">
              <button>
                <Image
                  src={"/icons/facebook.png"}
                  width={10}
                  height={10}
                  alt="facebook"
                />
              </button>
              <button>
                <Image
                  src={"/icons/instagram.png"}
                  width={20}
                  height={20}
                  alt="instagram"
                />
              </button>
              <button>
                <Image
                  src={"/icons/twitter.png"}
                  width={20}
                  height={20}
                  alt="twitter"
                />
              </button>
            </div>
          </div>
        </div>
        <hr className="border-1 border-slate-300" />
        <PostComment id={params.slug} comments={comments} />
        <div>
          <h3 className="text-xl font-medium my-6">
            Comments ({comments.length})
          </h3>
          {comments.length
            ? comments.map((comment: IComment) => (
                <CommentWithoutStar {...comment} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
