//khoi tao App va IndexRoute de chay app express
//IndexRoute giong nhu 1 get
//App la trung gian chay app express(nhan 1 get)
import App from "./app";
import { IndexRoute } from "./modules/index";

const routes= [new IndexRoute()];

const app=new App(routes);
app.listen();