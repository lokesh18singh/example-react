export const fakeAuth = {
  isAuthenticated: false,
  signIn(cb) {
    setTimeout(cb, 1000);
  },
  signOut(cb) {
    setTimeout(cb, 1000);
  },
};

export const FakeCookie = {
  set(key, val) {
    sessionStorage.setItem(key, val);
  },
  get(key) {
    return sessionStorage.getItem(key);
  },
  remove(key) {
    sessionStorage.removeItem(key);
  },
};

export const transformResponse = (response) => {
  if (!response.data && response.status !== 200) {
    return null;
  }
  return response.data;
};
