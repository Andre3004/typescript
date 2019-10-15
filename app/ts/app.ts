import { SerieController } from "./controllers/SerieController";

const controller = new SerieController();
$('#salvar').click(controller.salvar.bind(controller));