import { baseUrl } from "../settings/api.js";

export function getHero(json) {

    const container = document.querySelector(".hero");

    container.style = `background-image: url('${baseUrl}${json.hero_banner.formats.large.url}');`
}