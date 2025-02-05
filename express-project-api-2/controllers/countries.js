import Country from "../models/Country.js";

export const getCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await Country.findById(id);

    if (country) {
      return res.json(character);
    }

    res.status(404).json({ message: "Country not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createCountry = async (req, res) => {
  try {
    const character = new Country(req.body);
    await character.save();

    res.status(201).json(country);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateCountry = async (req, res) => {
  try {
    const { id } = req.params

    const character = await Country.findByIdAndUpdate(id, req.body)

    res.status(201).json(country)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export const deleteCountry = async (req, res) => {
  try {
    const { id } = req.params

    const deleted = await Country.findByIdAndDelete(id)

    if (deleted) {
      return res.status(200).send("Country Deleted")
    }

    throw new Error("Country not found.")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}