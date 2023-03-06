import AwbServices from './AwbServices';

export const ServiceFactory = (apiClient: any) => {
  return {
    AwbServices: AwbServices(apiClient),
  };
};
