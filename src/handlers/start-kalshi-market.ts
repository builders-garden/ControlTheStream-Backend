import { StartKalshiMarketEvent } from "../types";
import { ServerToClientSocketEvents } from "../types/enums";
import { SocketHandler } from "./socket-handler";
import { getBrandById } from "../lib/database/queries";

export class StartKalshiMarketHandler extends SocketHandler {
  async handle({
    id,
    brandId,
    kalshiUrl,
    kalshiEventId,
    position,
    durationMs,
  }: StartKalshiMarketEvent) {
    try {
      const brand = await getBrandById(brandId);
      if (!brand) throw new Error("Brand not found");

      console.log("StartKalshiMarketHandler", {
        id,
        brandId,
        kalshiUrl,
        kalshiEventId,
        position,
        durationMs,
      });

      // Emit the Kalshi market started event to all clients in the brand's stream
      this.emitToStream(
        brandId,
        ServerToClientSocketEvents.KALSHI_MARKET_STARTED,
        {
          id,
          brandId,
          kalshiUrl,
          kalshiEventId,
          position,
          durationMs,
        }
      );
    } catch (e) {
      this.emitToStream(brandId, ServerToClientSocketEvents.ERROR, {
        brandId,
        code: 500,
        message: "Error starting Kalshi market",
      });
    }
  }
}
