import { client } from "..";
import {
    clear,
    help,
    helpGpt,
    info,
    ping,
    toResponds,
} from "../events/messages";

export function getEventsCommands() {
    client.on("messageCreate", toResponds);
    client.on("messageCreate", help);
    client.on("messageCreate", info);
    client.on("messageCreate", helpGpt);
    client.on("messageCreate", ping);
    client.on("messageCreate", clear);
}
