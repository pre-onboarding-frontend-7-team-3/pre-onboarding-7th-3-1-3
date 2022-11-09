import { rest } from "msw";
import db from "data/db";

// TODO: 룰 끌건지 상의 필요
// eslint-disable-next-line import/prefer-default-export
export const handlers = [
  rest.get("/sick", (req, res, ctx) => {
    const keyword = req.url.searchParams.get("q");

    // TODO: if문 없이 사용하도록 리팩토링 필요
    if (keyword) {
      let response = db.sick.filter((item) => item.sickNm.includes(keyword));
      return res(ctx.status(200), ctx.json(response));
    }
  }),
];
