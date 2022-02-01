export const isValidURL = (url: string) => {
  if (!url) {
    return false;
  }

  return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(url);
};
