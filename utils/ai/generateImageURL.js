require("dotenv").config();
const ImageUpload = `https://api.imgbb.com/1/upload?key=${process.env.BB_KEY}`;
const UploadImageBBGetURL = async (buffer, prompt) => {
  // const blob = new Blob([buffer], { type: "image/png" });
  const formdata = new FormData();
  formdata.append(
    "image",
    new Blob([buffer], { type: "image/jpeg" }),
    `${prompt}.jpg`
  );

  const response = await fetch(ImageUpload, {
    method: "POST",
    body: formdata,
  });
  const data = await response.json();
  return data;
};

module.exports = UploadImageBBGetURL;
