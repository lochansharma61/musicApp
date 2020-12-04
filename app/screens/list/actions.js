import { users } from '../../api/api';

  export function list(text) {
    return {
      type: "MUSIC_LIST",
      payload: users.list(text)
    }
  }