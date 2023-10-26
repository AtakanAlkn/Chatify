const useParseRoomData = snapshot => {
  return Object.keys(snapshot)
    .map(key => ({
      id: key,
      ...snapshot[key],
    }))
    .sort(function (a, b) {
      return a.date > b.date ? -1 : a.date > b.date ? 1 : 0;
    });
};

export default useParseRoomData;
