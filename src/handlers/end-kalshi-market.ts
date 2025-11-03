import { EndKalshiMarketEvent } from "../types";
import { ServerToClientSocketEvents } from "../types/enums";
import { SocketHandler } from "./socket-handler";
import { getBrandById } from "../lib/database/queries";

export class EndKalshiMarketHandler extends SocketHandler {
  async handle({ id, brandId }: EndKalshiMarketEvent) {
    try {
      const brand = await getBrandById(brandId);
      if (!brand) throw new Error("Brand not found");

      console.log("EndKalshiMarketHandler", { id, brandId });

      // Emit the Kalshi market ended event to all clients in the brand's stream
      this.emitToStream(
        brandId,
        ServerToClientSocketEvents.KALSHI_MARKET_ENDED,
        {
          id,
          brandId,
        }
      );
    } catch (e) {
      this.emitToStream(brandId, ServerToClientSocketEvents.ERROR, {
        brandId,
        code: 500,
        message: "Error ending Kalshi market",
      });
    }
  }
}
