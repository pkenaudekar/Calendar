// Holiday data is used from this link  https://timesofindia.indiatimes.com/business/india-business/bank-holidays-of-2019/articleshow/67257790.cms
// jsonServer library from https://yarnpkg.com/package/json-server

import axios from 'axios';

// Making http request to JSON Server using axios library
export default axios.create({ baseURL: 'http://localhost:3001' });
