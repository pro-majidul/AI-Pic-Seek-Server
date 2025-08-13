const postUserComment = (req, res) => {
  const { imageId, prompt, email } = req.body;

  if (!imageId || !prompt || !email) {
    return res.status(400).send({
      status: 400,
      message: "Please provide a valid imageId , Prompt and email address ",
    });
  }

  try {
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = { postUserComment };
