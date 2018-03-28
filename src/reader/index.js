import axios from 'axios';
import scan from './scan';
import log from '../log';

const getBroadcast = async () => {
  const options = {
    headers: {
      'x-hq-stk': 'Mg==',
    },
  };
  try {
    const response = await axios.get('https://api-quiz.hype.space/shows/now', options);
    return Promise.resolve(response.data.broadcast.socketUrl);
  } catch (err) {
    return Promise.reject();
  }
};

const init = async () => {
  let socketUrl;
  try {
    socketUrl = await getBroadcast();
  } catch (err) {
    log.error('No HQ Trivia game being broadcast');
  }

  if (socketUrl) scan(socketUrl);
};

export default {
  init,
};
