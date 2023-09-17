export const getData = async (url, cbSuccess, cbError) => {
  try {
    const responce = await fetch(url);
    const data = await responce.json();
    cbSuccess(data);
  } catch (err) {
    cbError(err);
  }
};