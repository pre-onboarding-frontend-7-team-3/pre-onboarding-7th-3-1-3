import { SuggestionData } from "types/suggestionData";

interface Props {
  data: SuggestionData[] | null;
}

function Suggestion({ data }: Props) {
  return (
    <>
      <h3>🔍추천 검색어</h3>
      <div>
        {data?.length ? (
          data.map((item) => <div>{item.sickNm}</div>)
        ) : (
          <span>추천 검색어가 없습니다.</span>
        )}
      </div>
    </>
  );
}

export default Suggestion;
