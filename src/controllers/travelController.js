import { Travel } from '../schemas/travelSchema.js';

export const addSingleTravel = async (req, res) => {
  try {
    const travel = await Travel.create(req.body);
    res.status(201).json(travel);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getSingleTravel = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);
    travel
      ? res.status(200).json(travel)
      : res
          .status(404)
          .json({ mgs: `travel with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};

/* 
req {
  method : GET,
  query : "departureCity=40d8f682-8646-11e6-9066-549f350fcb0c&arrivalCity=40d901a5-8646-11e6-9066-549f350fcb0c&route=Berlin-München&rideDate=08.02.2024&adult=1&_locale=de&features[feature.enable_distribusion]=1&features[feature.train_cities_only]=0&features[feature.auto_update_disabled]=0&features[feature.webc_search_station_suggestions_enabled]=0&features[feature.webc_search_limited_product_list]=0&features[feature.darken_page]=1&atb_pdid=3167ff23-3cc1-4109-aa46-883e5ebb6a98&_sp=6a615a99-974f-4e5d-aa91-d6ec361049a6&_spnuid=aee80556-0c66-4100-8362-a4bfc1b6efc3_1707380436617"
  
  
}*/

/* DATUM */



/* FREE SEATS */
/* --------- frag bus_id vie wiele Plätze er hat  */
/* --------- bus_id.seatQuantity - this.travel.customers >= Fahrgäste  */

/* FROM - TO */
/*------------ => Travels die diesen und diesen Haltestelle haben */

export const getFilteredTravels = async (req, res) => {
  try {
    const travels = await Travel.find({
      price: { $lte: req.query.price_max, $gte : req.query.price_min },
    });
    res.status(200).json(travels);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find();
    res.status(200).json(travels);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const updateSingleTravel = async (req, res) => {
  try {
    const travel = await Travel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    travel
      ? res.status(200).json(travel)
      : res
          .status(404)
          .json({ mgs: `travel with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const deleteSingleTravel = async (req, res) => {
  try {
    const travel = await Travel.findByIdAndDelete(req.params.id);
    travel
      ? res.status(200).json(travel)
      : res
          .status(404)
          .json({ mgs: `travel with id ${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};
