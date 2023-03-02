import AwbService from './AwbServices';

export const ServiceFactory = (apiClient: any) => {
  return {
    AwbService: AwbService(apiClient),
  };
};
