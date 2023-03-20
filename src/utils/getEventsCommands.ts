import { client } from "..";
import {
    toResponds,
    help,
    info,
    helpGpt,
    ping,
    clear,
    createChannel,
} from "../events/messages";

export function getEventsCommands() {
    client.on("messageCreate", toResponds);
    client.on("messageCreate", help);
    client.on("messageCreate", info);
    client.on("messageCreate", helpGpt);
    client.on("messageCreate", ping);
    client.on("messageCreate", clear);
    client.on("messageCreate", createChannel);
}
