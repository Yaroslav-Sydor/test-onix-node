import ratesService from "../services/ratesService.js";

class RatesController {

    async getRates(req, res) {
        const rate = await ratesService.getRate(req.query.currency)
        console.log(rate)
        if(!rate.data){
            res.status(404).json({message: 'Something went wrong!'})
            return;
        }
        res.json( {"usd": rate.data.rateUsd})
    }

}

export default new RatesController();