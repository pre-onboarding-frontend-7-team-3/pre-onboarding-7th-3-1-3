import { AdService } from 'models/interface';
import { createContext, useMemo, useContext } from 'react';

const AdServiceContext = createContext<AdService | null>(null);
export const useAds = () => useContext(AdServiceContext);

export const AdServiceProvider = ({
  children,
  adService,
}: {
  children: React.ReactNode;
  adService: AdService;
}) => {
  const getAdList = adService.getAdList.bind(adService);
  const getTrend = adService.getTrend.bind(adService);
  const value = useMemo(() => {
    return { getAdList, getTrend };
  }, [getAdList, getTrend]);
  return (
    <AdServiceContext.Provider value={value}>
      {children}
    </AdServiceContext.Provider>
  );
};
