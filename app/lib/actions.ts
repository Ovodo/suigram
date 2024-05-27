async function getSaltFromMystenAPI(jwtEncoded: string) {
  const url: string = "https://salt.api.mystenlabs.com/get_salt";

  const response = await fetch(url!, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ token: jwtEncoded }),
  });

  try {
    const responseJson = await response.json();
    return responseJson.salt;
  } catch (error: any) {
    // console.log(error);
    return { ok: false };
  }
}
