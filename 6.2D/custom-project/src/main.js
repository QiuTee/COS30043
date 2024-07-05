import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";
import router from "./router";
import store from "./store";
const app = createApp(App);

app.component("base-dialog", BaseDialog);
app.component("base-button", BaseButton);
app.component("base-card", BaseCard);

app.use(router);
app.use(store);
app.mount("#app");
