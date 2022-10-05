import express from 'express'
import router from "./routers/router.js"


const PORT = 5000;

const app = express();
app.use(express.json());
app.use('/', router);


async function startApp() {
    try {
        app.listen(PORT, () => console.log('SERVER START ON PORT' + PORT));
    } catch (e) {
        console.log(e);
    }
};

startApp();
