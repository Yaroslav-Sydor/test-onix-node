const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

class RatesService {
    async getRate(currency){
        const response = await fetch(`https://api.coincap.io/v2/rates/${currency}`);
        return await response.json();
    }
}


export default new RatesService();