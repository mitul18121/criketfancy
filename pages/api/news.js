// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { newsData } from "../../data/news";

export default function helloAPI(req, res) {
  const httpMethord = req.method;
  const { alt, headline, description } = req.body;

  switch (httpMethord) {
    case "GET":
      res.status(200).json(newsData);
      break;
    case "POST":
      res.status(200).json({
        alt: alt,
        headline: headline,
        description: description,
      });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Methord ${httpMethord} not Allowed`);
  }
}
