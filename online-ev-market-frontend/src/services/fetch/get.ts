const get = async (endpoint: string) => {
  const options = {
    method: 'GET',
    credentials: 'include',
    headers: { 'content-type': 'application/json' },
  };

  const res = await fetch(
    process.env.SERVER_ADDRESS + endpoint,
    options as RequestInit,
  );
  return res.json();
};

export default get;
