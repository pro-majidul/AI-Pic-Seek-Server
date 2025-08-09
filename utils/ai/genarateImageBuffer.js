require("dotenv").config();

const generateImageBuffer = async (prompt, category) => {
  console.log({ prompt, category });
  const finalPrompt = `imagine a ${category} : ${prompt}`;
  console.log(finalPrompt);
  const myform = new FormData();
  myform.append("prompt", finalPrompt);

  const response = await fetch("https://clipdrop-api.co/text-to-image/v1", {
    method: "POST",
    headers: {
      "x-api-key": process.env.CD_Key,
    },
    body: myform,
  });

  const buffer = await response.arrayBuffer();
  return buffer;
};


module.exports =generateImageBuffer;