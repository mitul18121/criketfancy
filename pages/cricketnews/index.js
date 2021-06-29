// import Logo from "../../images/cricket(1).png";
// import Image from "next/image";
import { baseUrl } from "../../helper/baseUrl";
const News = ({ news }) => {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1 className="text-4xl font-semibold underline uppercase">News</h1>
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        {news.map((item, index) => (
          <div
            key={index}
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-red-500 focus:text-blue-600"
          >
            <div>
              <span className="text-bold text-4xl"> {item.headline} </span>
            </div>
            <div>
              <p className="mt-4 text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/api/news`);
  const data = await res.json();
  return {
    props: {
      news: data,
    },
  };
}

export default News;
