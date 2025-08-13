const GenerateAIReply = require("../../utils/ai/GenerateAIReply");
const { commentCollection } = require("../../utils/ConnectDB");

const postUserComment = async (req, res) => {
  const { imageId, prompt, email, comment } = req.body;

  if (!imageId || !prompt || !email || !comment) {
    return res.status(400).send({
      status: 400,
      message:
        "Please provide a valid imageId , Prompt , comment and email address ",
    });
  }

  try {
    const reply = await GenerateAIReply(prompt, comment);

    console.log(reply);

    const documents = {
      imageId,
      prompt,
      email,
      comment,
      reply,
      createdAt: new Date().toLocaleString(),
    };

    const result = await commentCollection.insertOne(documents);
    res.send({ ...result, reply });

    console.log(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = { postUserComment };
