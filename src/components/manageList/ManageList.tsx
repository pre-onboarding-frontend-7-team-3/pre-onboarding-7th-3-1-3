import ManageItem from 'components/manageItem/ManageItem';
import { useAdsValue } from 'hooks/useAdList';

import S from './styles';

const ManageList = () => {
  const list = useAdsValue();
  return (
    <S.List>
      {list.map((item) => (
        <ManageItem key={item.id} {...item} />
      ))}
    </S.List>
  );
};

export default ManageList;
