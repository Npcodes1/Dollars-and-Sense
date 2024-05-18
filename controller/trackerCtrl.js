// Financial Tracker Controller -Read the page
const financialTracker = async (req, res, next) => {
  try {
    await res.status(200).json({
      success: { message: "This is the financial tracker page" },
      statusCode: 200,
    });
  } catch (error) {
    res.status(404).json({
      error: { message: "Financial tracker page can't be found." },
      statusCode: 404,
    });
  }
};

//still need to make model for create Entry!
const createEntry = async (req, res, next) => {
  const {} = req.body;

  // const newEntry = new ({

  // });

  //await newEntry.save() to save the entry.

  //checking to see the message is saved
  try {
    res.status(201).json({
      success: {
        message: "You've successfully created an entry on the page",
      },
      statusCode: 201,
    });
  } catch (error) {
    res.status(404).json({
      error: { message: "There was an error. Please try again." },
      statusCode: 404,
    });
  }
};

const updateEntry = async (req, res, next) => {
  //checking to see if the entry was updated.
  try {
    await res.status(200).json({
      success: {
        message: "You've successfully updated an entry on the page",
      },
      statusCode: 200,
    });
  } catch (error) {
    res.status(404).json({
      error: { message: "There was an error. Please try again." },
      statusCode: 404,
    });
  }
};

const deleteEntry = async (req, res, next) => {
  //code to delete entry

  //checking to see if the entry was deleted.
  try {
    await res.status(200).json({
      success: {
        message: "You've successfully deleted an entry on the page",
      },
      statusCode: 200,
    });
  } catch (error) {
    res.status(404).json({
      error: { message: "There was an error. Please try again." },
      statusCode: 404,
    });
  }
};

module.exports = { financialTracker, createEntry, updateEntry, deleteEntry };
