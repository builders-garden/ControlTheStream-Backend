// client to server
export enum ClientToServerSocketEvents {
  TIP_SENT = "tip_sent",
  TOKEN_TRADED = "token_traded",
  VOTE_CASTED = "vote_casted",
  JOIN_STREAM = "stream_joined",
  START_SENTIMENT_POLL = "start_sentiment_poll",
  END_SENTIMENT_POLL = "end_sentiment_poll",
  UPDATE_SENTIMENT_POLL = "update_sentiment_poll",
  START_KALSHI_MARKET = "start_kalshi_market",
  END_KALSHI_MARKET = "end_kalshi_market",
}

// server to client
export enum ServerToClientSocketEvents {
  TIP_RECEIVED = "tip_received",
  VOTE_RECEIVED = "vote_received",
  TOKEN_TRADED = "token_traded",
  STREAM_JOINED = "stream_joined",
  START_SENTIMENT_POLL = "start_sentiment_poll",
  END_SENTIMENT_POLL = "end_sentiment_poll",
  UPDATE_SENTIMENT_POLL = "update_sentiment_poll",
  KALSHI_MARKET_STARTED = "kalshi_market_started",
  KALSHI_MARKET_ENDED = "kalshi_market_ended",
  ERROR = "error",
}

// Popup Positions
export enum PopupPositions {
  TOP_LEFT = "top-left",
  TOP_RIGHT = "top-right",
  BOTTOM_LEFT = "bottom-left",
  BOTTOM_RIGHT = "bottom-right",
  TOP_CENTER = "top-center",
  BOTTOM_CENTER = "bottom-center",
}
