import api from '../services/api';
import storage from '../utils/storage';

const configApi = (notAuthorization: () => void) => {
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      if (401 === error.response.status) {
        notAuthorization();
      } else {
        return Promise.reject(error);
      }
    }
  );

  api.interceptors.request.use(
    (config) => {
      if (storage.hasValuesJTW()) {
        const userTokenExpiration = storage.getDateExpirationJTW();
        const today = new Date();
        if (today > userTokenExpiration) {
          notAuthorization();
        }
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export default configApi;
