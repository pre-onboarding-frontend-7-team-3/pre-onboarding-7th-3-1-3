import S from './styles';

const ServiceMenu = () => {
  return (
    <S.Layout>
      <S.Label htmlFor="service-select">서비스</S.Label>
      <S.Select name="service" id="service-select">
        <option value="">매드업</option>
        <option>서비스 추가</option>
      </S.Select>
    </S.Layout>
  );
};

export default ServiceMenu;
