export const Fetch = () => {
  let a = async () => {
    let res = await fetch(
      "https://v6.exchangerate-api.com/v6/dbad26e548a14258090c365c/latest/USD"
    );
    let data = await res.json();
    console.log(data);
    return data;
  };
  return a();
};
