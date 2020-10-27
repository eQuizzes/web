const validation = {
  dateMinToDay(value: string) {
    return new Date(value).valueOf() < Date.now();
  },
};

export default validation;
